const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/api/rss") {
    handleRssRequest(url, res);
    return;
  }

  if (url.pathname === "/api/comment") {
    handleCommentRequest(req, res);
    return;
  }

  serveStatic(url.pathname, res);
});

server.listen(PORT, () => {
  console.log(`Naver comment assistant: http://localhost:${PORT}/hanfight.html`);
});

function handleRssRequest(url, res) {
  const blogId = sanitizeBlogId(url.searchParams.get("blogId") || "");
  if (!blogId) {
    sendJson(res, 400, { error: "블로그 ID가 필요합니다." });
    return;
  }

  const rssUrl = `https://rss.blog.naver.com/${encodeURIComponent(blogId)}.xml`;
  https
    .get(
      rssUrl,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 Naver RSS Reader",
          Accept: "application/rss+xml, application/xml, text/xml, */*"
        }
      },
      (rssRes) => {
        let body = "";
        rssRes.setEncoding("utf8");
        rssRes.on("data", (chunk) => {
          body += chunk;
        });
        rssRes.on("end", () => {
          if (rssRes.statusCode < 200 || rssRes.statusCode >= 300) {
            sendJson(res, 502, {
              error: `RSS 요청 실패: HTTP ${rssRes.statusCode}`,
              rssUrl
            });
            return;
          }

          sendJson(res, 200, { xml: body, rssUrl });
        });
      }
    )
    .on("error", (error) => {
      sendJson(res, 502, { error: error.message, rssUrl });
    });
}

function serveStatic(requestPath, res) {
  const pathname = decodeURIComponent(requestPath === "/" ? "/hanfight.html" : requestPath);
  const filePath = path.resolve(ROOT, `.${pathname}`);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = ext === ".html" ? "text/html; charset=utf-8" : "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
}

function handleCommentRequest(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "POST 요청만 사용할 수 있습니다." });
    return;
  }

  readJsonBody(req)
    .then((body) => {
      const apiKey = process.env.OPENAI_API_KEY || String(body.apiKey || "").trim();
      if (!apiKey) {
        throw Object.assign(new Error("설정창에서 GPT API 키를 입력해주세요."), { statusCode: 400 });
      }

      return createOpenAIComment(apiKey, body);
    })
    .then((comment) => {
      sendJson(res, 200, { comment });
    })
    .catch((error) => {
      sendJson(res, error.statusCode || 500, { error: error.message || "댓글 생성에 실패했습니다." });
    });
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20000) {
        reject(Object.assign(new Error("요청 내용이 너무 깁니다."), { statusCode: 413 }));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (error) {
        reject(Object.assign(new Error("JSON 요청을 읽지 못했습니다."), { statusCode: 400 }));
      }
    });
    req.on("error", reject);
  });
}

function createOpenAIComment(apiKey, body) {
  const title = String(body.title || "").trim().slice(0, 180);
  const keyword = String(body.keyword || "").trim().slice(0, 80);
  const content = String(body.content || "").trim().slice(0, 1800);
  const model = process.env.OPENAI_MODEL || "gpt-5.2";

  if (!title && !content) {
    return Promise.reject(Object.assign(new Error("댓글을 만들 글 내용이 없습니다."), { statusCode: 400 }));
  }

  const prompt = [
    "아래 네이버 블로그 글 정보를 읽고, 사용자가 직접 검토 후 남길 자연스러운 한국어 댓글 초안을 1개만 작성하세요.",
    "",
    "규칙:",
    "- 45~90자 정도로 짧게 작성",
    "- 광고, 홍보, 방문 유도, 서이추, 과한 칭찬 금지",
    "- 글을 실제로 읽은 듯하되, 경험하지 않은 일을 한 척하지 말 것",
    "- 블로그 제목 전체를 반복하지 말고 핵심 키워드만 자연스럽게 언급",
    "- 이모지, 해시태그, 따옴표, 번호, 설명 문장 없이 댓글 본문만 출력",
    "",
    `핵심 키워드: ${keyword || "없음"}`,
    `제목: ${title || "없음"}`,
    `글 내용/요약: ${content || "없음"}`
  ].join("\n");

  const payload = JSON.stringify({
    model,
    input: prompt,
    max_output_tokens: 140,
    store: false
  });

  return new Promise((resolve, reject) => {
    const request = https.request(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "Content-Length": Buffer.byteLength(payload)
        }
      },
      (apiRes) => {
        let responseBody = "";
        apiRes.setEncoding("utf8");
        apiRes.on("data", (chunk) => {
          responseBody += chunk;
        });
        apiRes.on("end", () => {
          try {
            const data = JSON.parse(responseBody || "{}");
            if (apiRes.statusCode < 200 || apiRes.statusCode >= 300) {
              reject(Object.assign(new Error(data.error?.message || `OpenAI 요청 실패: HTTP ${apiRes.statusCode}`), {
                statusCode: apiRes.statusCode
              }));
              return;
            }

            const comment = cleanGeneratedComment(extractOpenAIText(data));
            if (!comment) {
              reject(new Error("OpenAI 응답에서 댓글 문안을 찾지 못했습니다."));
              return;
            }

            resolve(comment);
          } catch (error) {
            reject(new Error("OpenAI 응답을 읽지 못했습니다."));
          }
        });
      }
    );

    request.on("error", reject);
    request.write(payload);
    request.end();
  });
}

function extractOpenAIText(data) {
  if (typeof data.output_text === "string") return data.output_text;

  return (data.output || [])
    .flatMap((item) => item.content || [])
    .filter((content) => content.type === "output_text" || content.type === "text")
    .map((content) => content.text || "")
    .join("\n");
}

function cleanGeneratedComment(value) {
  return String(value || "")
    .replace(/^["'“”‘’]+|["'“”‘’]+$/g, "")
    .replace(/^\d+[.)]\s*/, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
}

function sanitizeBlogId(value) {
  return value.trim().replace(/^@/, "").replace(/[^a-zA-Z0-9_-]/g, "");
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  });
  res.end(JSON.stringify(data));
}
