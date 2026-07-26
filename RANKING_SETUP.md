# HAN-FIGHT Ranking Setup

The game remains hosted on GitHub Pages. Supabase stores and validates ranking runs.

## Supabase deployment

1. Open the Supabase project `wfuamjbivcwzjxsptytv`.
2. Run `supabase/migrations/20260726000000_hanfight_leaderboard.sql` in the SQL Editor.
3. Deploy `supabase/functions/hanfight-ranking/index.ts` as an Edge Function named `hanfight-ranking`.
4. Disable JWT verification for this function. The repository's `supabase/config.toml` already sets `verify_jwt = false` for CLI deployments.
5. Keep the built-in `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` only in the Edge Function environment.

Optional production secrets:

- `HANFIGHT_RANKING_SEASON=2026-S1`
- `HANFIGHT_GAME_VERSION=20260726-01`
- `HANFIGHT_IP_SALT=<random private value>`

Never put `SUPABASE_SERVICE_ROLE_KEY`, the database password, or a Supabase access token in `game.js`.

## Version and season changes

- Change `HANFIGHT_GAME_VERSION` and the matching client value when ranking-affecting game rules change.
- Change `HANFIGHT_RANKING_SEASON` when starting a fresh leaderboard season.
- Keep old rows to preserve previous seasons.
