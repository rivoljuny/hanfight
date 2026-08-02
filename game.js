const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");
const hpFill=document.getElementById("hpFill");
const xpFill=document.getElementById("xpFill");
const bottomXpFill=document.getElementById("bottomXpFill");
const spFill=document.getElementById("spFill");
const levelText=document.getElementById("levelText");
const killText=document.getElementById("killText");
const timeText=document.getElementById("timeText");
const stageHudText=document.getElementById("stageHudText");
const mapHudText=document.getElementById("mapHudText");
const skillHud=document.getElementById("skillHud");
const startOverlay=document.getElementById("startOverlay");
const gameOverTitle=document.getElementById("gameOverTitle");
const levelOverlay=document.getElementById("levelOverlay");
const pauseOverlay=document.getElementById("pauseOverlay");
const choicesEl=document.getElementById("choices");
const toast=document.getElementById("toast");
const mobileControls=document.getElementById("mobileControls");
const mobileStick=document.getElementById("mobileStick");
const mobileStickKnob=document.getElementById("mobileStickKnob");
const mobileUltimateBtn=document.getElementById("mobileUltimateBtn");
const mobilePauseBtn=document.getElementById("mobilePauseBtn");
const testTools=document.querySelector(".test-tools");
const testModeBtn=document.getElementById("testModeBtn");
const invincibleTestBtn=document.getElementById("invincibleTestBtn");
const basicLv5TestBtn=document.getElementById("basicLv5TestBtn");
const forceLevelUpTestBtn=document.getElementById("forceLevelUpTestBtn");
const clearTestBtn=document.getElementById("clearTestBtn");
const stage1TestBtn=document.getElementById("stage1TestBtn");
const waveTestBtn=document.getElementById("waveTestBtn");
const bossTestBtn=document.getElementById("bossTestBtn");
const stage2TestBtn=document.getElementById("stage2TestBtn");
const wave2TestBtn=document.getElementById("wave2TestBtn");
const boss2TestBtn=document.getElementById("boss2TestBtn");
const stage3TestBtn=document.getElementById("stage3TestBtn");
const wave3TestBtn=document.getElementById("wave3TestBtn");
const boss3TestBtn=document.getElementById("boss3TestBtn");
const stage4TestBtn=document.getElementById("stage4TestBtn");
const boss4TestBtn=document.getElementById("boss4TestBtn");
const stage5TestBtn=document.getElementById("stage5TestBtn");
const boss5TestBtn=document.getElementById("boss5TestBtn");
const ultimateBtn=document.getElementById("ultimateBtn");
const resumeBtn=document.getElementById("resumeBtn");
const homeBtn=document.getElementById("homeBtn");
const soundToggleBtn=document.getElementById("soundToggleBtn");
const bgmVolumeBtn=document.getElementById("bgmVolumeBtn");
const bgmVolumeValue=document.getElementById("bgmVolumeValue");
const sfxVolumeBtn=document.getElementById("sfxVolumeBtn");
const sfxVolumeValue=document.getElementById("sfxVolumeValue");
const pauseTestModeBtn=document.getElementById("pauseTestModeBtn");
const pauseLevelUpBtn=document.getElementById("pauseLevelUpBtn");
const pauseInvincibleBtn=document.getElementById("pauseInvincibleBtn");
const testSelectOverlay=document.getElementById("testSelectOverlay");
const testSelectChoices=document.getElementById("testSelectChoices");
const testSelectCloseBtn=document.getElementById("testSelectCloseBtn");
const characterCarousel=document.getElementById("characterCarousel");
const characterCardsEl=document.getElementById("characterCards");
const characterPrevBtn=document.getElementById("characterPrev");
const characterNextBtn=document.getElementById("characterNext");
const sprite=new Image();
sprite.src="assets/geontaek_run4_office.png";
const idleSprite=new Image();
idleSprite.src="assets/geontaek_idle4.png";
const clearSprite=new Image();
clearSprite.src="assets/geontaek_clear_sigh.png";
const sangilSprite=new Image();
sangilSprite.src="assets/sangil_trekking_stick.png";
const sangilAttackSprite=new Image();
sangilAttackSprite.src="assets/sangil_attack.png";
const sangilWhirlwindSprite=new Image();
sangilWhirlwindSprite.src="assets/sangil_whirlwind.png";
const sangilSlashEffectSprite=new Image();
sangilSlashEffectSprite.src="assets/sangil_slash_effect.png";
const sangilWhirlwindSlashSprite=new Image();
sangilWhirlwindSlashSprite.src="assets/sangil_whirlwind_slash.png";
const sangilClearSprite=new Image();
sangilClearSprite.src="assets/sangil_clear_roar.png";
const seunggwanSprite=new Image();
seunggwanSprite.src="assets/seunggwan_walk.png";
const seunggwanThrowSprite=new Image();
seunggwanThrowSprite.src="assets/seunggwan_throw.png";
const seunggwanClearSprite=new Image();
seunggwanClearSprite.src="assets/seunggwan_clear.png";
const seunggwanUltimateSprite=new Image();
seunggwanUltimateSprite.src="assets/seunggwan_ultimate_kick.png";
const seunggwanSonsUltimateSprite=new Image();
seunggwanSonsUltimateSprite.src="assets/seunggwan_sons_ultimate.png";
const seunggwanIronBallSprite=new Image();
seunggwanIronBallSprite.src="assets/seunggwan_iron_ball.png";
const jiinSprite=new Image();
jiinSprite.src="assets/jiin_love_walk_aligned.png";
const hominSprite=new Image();
hominSprite.src="assets/homin_walk.png";
const hominClearSprite=new Image();
hominClearSprite.src="assets/homin_clear.png";
const seoyulSprite=new Image();
seoyulSprite.src="assets/seoyul_companion.png";
const ultimateSprite=new Image();
ultimateSprite.src="assets/geontaek_ultimate_golf_swing.png";
const ultimateBallSprite=new Image();
ultimateBallSprite.src="assets/ultimate_golf_ball_tornado.png";
const geontaekUltimateVortexSprite=new Image();
geontaekUltimateVortexSprite.src="assets/geontaek_ultimate_vortex.png";
const golfClubSprite=new Image();
golfClubSprite.src="assets/golf_club_throw_sheet.png";
const laserBotSprite=new Image();
laserBotSprite.src="assets/laserbot_4dir.png";
const laserBotEvolvedSprite=new Image();
laserBotEvolvedSprite.src="assets/laserbot_evolved_4dir.png";
const babyDragonSprite=new Image();
babyDragonSprite.src="assets/baby_dragon_basic_4dir.png";
const adultDragonSprite=new Image();
adultDragonSprite.src="assets/adult_dragon_4dir.png";
const adultDragonRightSprite=new Image();
adultDragonRightSprite.src="assets/adult_dragon_right_4frame.png";
const dragonFireballSprite=new Image();
dragonFireballSprite.src="assets/dragon_fireball.png";
const dragonFireballSplashSprite=new Image();
dragonFireballSplashSprite.src="assets/dragon_fireball_splash_norm.png";
const dragonMeteorSprite=new Image();
dragonMeteorSprite.src="assets/dragon_meteor.png";
const dragonExplosionSprite=new Image();
dragonExplosionSprite.src="assets/dragon_explosion.png";
const iceBirdSprite=new Image();
iceBirdSprite.src="assets/ice_bird_4dir.png";
const iceBirdEvolvedSprite=new Image();
iceBirdEvolvedSprite.src="assets/ice_bird_evolved_4dir.png";
const iceBallProjectileSprite=new Image();
iceBallProjectileSprite.src="assets/ice_ball_projectile.png";
const iceBallImpactSprite=new Image();
iceBallImpactSprite.src="assets/ice_ball_impact.png";
const orbitShieldSprite=new Image();
orbitShieldSprite.src="assets/orbit_shield_sheet.png";
const orbitShieldEvolvedSprite=new Image();
orbitShieldEvolvedSprite.src="assets/orbit_shield_evolved_sheet.png";
const satelliteWarningSprite=new Image();
satelliteWarningSprite.src="assets/satellite_warning_sheet.png";
const satelliteImpactSprite=new Image();
satelliteImpactSprite.src="assets/satellite_impact_sheet.png";
const golfClubSpinSprite=new Image();
golfClubSpinSprite.src="assets/golf_club_spin_sheet.png";
const bgTile=new Image();
bgTile.src="assets/office_floor_tile_life.png";
const estechTile=new Image();
estechTile.src="assets/estech_factory_tile.png";
const bikeRoadTile=new Image();
bikeRoadTile.src="assets/bike_road_tile.png";
const factoryTapeTile=new Image();
factoryTapeTile.src="assets/factory_tape_tile_simple.png";
const logisticsTile=new Image();
logisticsTile.src="assets/logistics_tile_simple_v2.png";
const gymTile=new Image();
gymTile.src="assets/gym_crossfit_center_tile_v2.png";
const sojuHealSprite=new Image();
sojuHealSprite.src="assets/item_soju_heal.png";
const powerPickupSprite=new Image();
powerPickupSprite.src="assets/pickup_power_items.png";
const waveBanner=new Image();
waveBanner.src="assets/wave_time_banner.png";
const bossVsBanner=new Image();
bossVsBanner.src="assets/vs_banner_pixel.png";
const cryingFemaleSprite=new Image();
cryingFemaleSprite.src="assets/enemy_crying_female_employee.png";
const cryingMaleSprite=new Image();
cryingMaleSprite.src="assets/enemy_crying_male_employee.png";
const mzResignationSprite=new Image();
mzResignationSprite.src="assets/enemy_mz_resignation_employee.png";
const roadCyclistSprite=new Image();
roadCyclistSprite.src="assets/enemy_road_cyclist.png";
const fixieShooterSprite=new Image();
fixieShooterSprite.src="assets/enemy_fixie_shooter.png";
const fishermanUncleSprite=new Image();
fishermanUncleSprite.src="assets/enemy_fisherman_uncle.png";
const lazyFactoryWorkerSprite=new Image();
lazyFactoryWorkerSprite.src="assets/enemy_lazy_factory_worker.png";
const tapeThrowerSprite=new Image();
tapeThrowerSprite.src="assets/enemy_tape_thrower.png";
const juCousinWorkerSprite=new Image();
juCousinWorkerSprite.src="assets/enemy_ju_cousin_worker.png";
const logisticsOfficeLadySprite=new Image();
logisticsOfficeLadySprite.src="assets/enemy_logistics_office_lady.png";
const boxThrowerSprite=new Image();
boxThrowerSprite.src="assets/enemy_box_thrower.png";
const forkliftDriverSprite=new Image();
forkliftDriverSprite.src="assets/enemy_forklift_driver.png";
const cultMinionSprite=new Image();
cultMinionSprite.src="assets/enemy_cult_minion.png";
const gymTattooPigSprite=new Image();
gymTattooPigSprite.src="assets/enemy_gym_tattoo_pig.png";
const gymLeggingsSprite=new Image();
gymLeggingsSprite.src="assets/enemy_gym_leggings_member.png";
const gymBodybuilderSprite=new Image();
gymBodybuilderSprite.src="assets/enemy_gym_bodybuilder.png";
const doubleScooterStudentsSprite=new Image();
doubleScooterStudentsSprite.src="assets/enemy_double_scooter_students.png";
const pigeonFlockSprite=new Image();
pigeonFlockSprite.src="assets/enemy_pigeon_flock.png";
const gymFartCloudSprite=new Image();
gymFartCloudSprite.src="assets/gym_fart_cloud.png";
const gymDumbbellSprite=new Image();
gymDumbbellSprite.src="assets/gym_dumbbell_projectile.png";
const enemySprites={cryingFemale:cryingFemaleSprite,cryingMale:cryingMaleSprite,mzResignation:mzResignationSprite,roadCyclist:roadCyclistSprite,fixieShooter:fixieShooterSprite,fishermanUncle:fishermanUncleSprite,lazyFactoryWorker:lazyFactoryWorkerSprite,tapeThrower:tapeThrowerSprite,juCousinWorker:juCousinWorkerSprite,logisticsOfficeLady:logisticsOfficeLadySprite,boxThrower:boxThrowerSprite,forkliftDriver:forkliftDriverSprite,cultMinion:cultMinionSprite,gymTattooPig:gymTattooPigSprite,gymLeggings:gymLeggingsSprite,gymBodybuilder:gymBodybuilderSprite,doubleScooterStudents:doubleScooterStudentsSprite,pigeonFlock:pigeonFlockSprite};
const juDaeriSprite=new Image();
juDaeriSprite.src="assets/boss_ju_daeri.png";
const juDaeriNagSprite=new Image();
juDaeriNagSprite.src="assets/boss_ju_daeri_nag_cast.png";
const juDaeriKickSprite=new Image();
juDaeriKickSprite.src="assets/boss_ju_daeri_kick_cast.png";
const juDaeriDeathSprite=new Image();
juDaeriDeathSprite.src="assets/boss_ju_daeri_death.png";
const cheonSangmuSprite=new Image();
cheonSangmuSprite.src="assets/boss_cheonsangmu.png";
const cheonSangmuIntroSprite=new Image();
cheonSangmuIntroSprite.src="assets/boss_cheonsangmu_intro.png";
const cheonSangmuHeatSprite=new Image();
cheonSangmuHeatSprite.src="assets/boss_cheonsangmu_heat_cast.png";
const cheonSangmuHeatBurstSprite=new Image();
cheonSangmuHeatBurstSprite.src="assets/boss_cheonsangmu_heat_burst.png";
const bossHeatCloudSprite=new Image();
bossHeatCloudSprite.src="assets/boss_heat_smoke_arc.png";
const cheonSangmuBellySprite=new Image();
cheonSangmuBellySprite.src="assets/boss_cheonsangmu_belly_flop.png";
const cheonSangmuDeathSprite=new Image();
cheonSangmuDeathSprite.src="assets/boss_cheonsangmu_death.png";
const bossNagEffectSprite=new Image();
bossNagEffectSprite.src="assets/boss_nag_cone_effect.png";
const bossStampSprite=new Image();
bossStampSprite.src="assets/boss_stamp_projectile.png";
const bossNabulSprite=new Image();
bossNabulSprite.src="assets/boss_nabul_projectile.png";
const bossCouponSprite=new Image();
bossCouponSprite.src="assets/boss_coupon_projectile.png";
const enemyTapeWhipSprite=new Image();
enemyTapeWhipSprite.src="assets/enemy_tape_whip_swing.png";
const enemyGeodeureokSprite=new Image();
enemyGeodeureokSprite.src="assets/enemy_geodeureok_missile.png";
const enemyBoxProjectileSprite=new Image();
enemyBoxProjectileSprite.src="assets/enemy_box_projectile.png";
const pigeonDroppingSprite=new Image();
pigeonDroppingSprite.src="assets/enemy_pigeon_dropping.png";
const cultFanaticSprite=new Image();
cultFanaticSprite.src="assets/boss_cult_fanatic.png";
const cultFanaticIntroSprite=new Image();
cultFanaticIntroSprite.src="assets/boss_cult_fanatic_intro.png";
const cultFanaticChantSprite=new Image();
cultFanaticChantSprite.src="assets/boss_cult_chant.png";
const cultFanaticDeathSprite=new Image();
cultFanaticDeathSprite.src="assets/boss_cult_fanatic_death.png";
const cultTalismanSprite=new Image();
cultTalismanSprite.src="assets/boss_cult_talisman.png";
const cultTotemSprite=new Image();
cultTotemSprite.src="assets/boss_cult_totem.png";
const cultHandsZoneSprite=new Image();
cultHandsZoneSprite.src="assets/boss_cult_hands_zone.png";
const cultCoffinSprite=new Image();
cultCoffinSprite.src="assets/boss_cult_coffin.png";
const gossipShortSprite=new Image();
gossipShortSprite.src="assets/boss_gossip_short.png";
const gossipLongSprite=new Image();
gossipLongSprite.src="assets/boss_gossip_long.png";
const gossipMaleSprite=new Image();
gossipMaleSprite.src="assets/boss_gossip_male.png";
const gossipProjectileSprite=new Image();
gossipProjectileSprite.src="assets/boss_gossip_projectile.png";
const emotionCeoSprite=new Image();
emotionCeoSprite.src="assets/boss_emotion_trash_ceo_sheet.png";
const emotionCeoSkillSprite=new Image();
emotionCeoSkillSprite.src="assets/boss_emotion_ceo_skill.png";
const emotionTearSprite=new Image();
emotionTearSprite.src="assets/boss_emotion_tear_projectile.png";
const emotionCognacSprite=new Image();
emotionCognacSprite.src="assets/boss_cognac_bottle.png";
const emotionSlamImpactSprite=new Image();
emotionSlamImpactSprite.src="assets/boss_emotion_slam_impact.png";
const emotionRoarWaveSprite=new Image();
emotionRoarWaveSprite.src="assets/boss_emotion_roar_wave.png";
const estechEnemyAtlas=new Image();
estechEnemyAtlas.src="assets/enemy_estech_atlas.png";
const parkSejunFamilySprite=new Image();
parkSejunFamilySprite.src="assets/boss_park_sejun_family.png";
const parkSejunPhase2Sprite=new Image();
parkSejunPhase2Sprite.src="assets/boss_park_sejun_phase2.png";
const seoroSpinSprite=new Image();
seoroSpinSprite.src="assets/boss_seoro_spin_return.png";
const parkSejunElectricFxSprite=new Image();
parkSejunElectricFxSprite.src="assets/boss_park_sejun_electric_fx.png";
const BOSS_NAG_SKILL={range:320,arc:Math.PI*.42,imgX:16,imgY:-120,imgW:330,imgH:240};
const BOSS_KICK_SKILL={castT:.62,len:620,wide:74,dashT:.62,dashSpeed:920};
const BOSS_STAMP_WAVE_DELAY=.28;
const BOSS_STAMP_SHOT_DELAY=.035;
const CHEON_HEAT_SKILL={castT:.55,count:18,waves:2,waveDelay:.34,spd:410,dmg:8,ringRadius:230,slowAt:142,holdT:1.2};
const CHEON_BELLY_SKILL={castT:.82,jumpT:.46,radius:92,dmg:24,range:430,chainTotal:3};
const CULT_SKILL={chantT:.92,totemHp:260,coffinHp:280,coffinHeal:.026};
const EMOTION_CEO_SKILL={pullCastT:2.65,pullRadius:285,pullDamageRadius:205,pullForce:70,pullBurst:92,pushCastT:2.1,pushSafe:178,pushOuter:390,pushForce:145,dotGap:.28};
const EMOTION_CEO_FRAMES={
  move:[
    [{x:243,y:0,w:180,h:180},{x:516,y:0,w:180,h:180},{x:788,y:0,w:180,h:180},{x:1058,y:0,w:180,h:180}],
    [{x:243,y:180,w:180,h:150},{x:511,y:180,w:180,h:150},{x:790,y:180,w:180,h:150},{x:1061,y:180,w:180,h:150}],
    [{x:250,y:330,w:180,h:140},{x:518,y:330,w:180,h:140},{x:799,y:330,w:180,h:140},{x:1067,y:330,w:180,h:140}],
    [{x:240,y:485,w:180,h:120},{x:512,y:485,w:180,h:120},{x:791,y:485,w:180,h:120},{x:1058,y:485,w:180,h:120}]
  ],
  intro:[{x:210,y:612,w:240,h:191},{x:497,y:612,w:240,h:191},{x:773,y:612,w:240,h:191},{x:1049,y:612,w:240,h:191}],
  death:[{x:136,y:803,w:330,h:221},{x:436,y:803,w:330,h:221},{x:728,y:803,w:330,h:221},{x:1022,y:803,w:330,h:221}]
};
const OUTDOOR_BLEND_SPEED=.36;
const bossNagFrames=[
  {x:46,y:279,w:316,h:177},
  {x:0,y:234,w:362,h:256},
  {x:0,y:201,w:362,h:328},
  {x:0,y:146,w:362,h:413},
  {x:0,y:88,w:362,h:539},
  {x:0,y:45,w:330,h:634}
];

let W=innerWidth,H=innerHeight,dpr=1,last=0,paused=true,gameOver=false,loopStarted=false,testMode=false;
let testInvincible=false;
let pauseMenuOpen=false,pauseMenuIndex=0,soundOn=localStorage.getItem("hanFightSoundOff")!=="1";
let bgmVolumeLevel=Number(localStorage.getItem("hanFightBgmVolume")??"3");
let sfxVolumeLevel=Number(localStorage.getItem("hanFightSfxVolume")??"8");
bgmVolumeLevel=Number.isFinite(bgmVolumeLevel)?Math.max(0,Math.min(10,Math.round(bgmVolumeLevel))):3;
sfxVolumeLevel=Number.isFinite(sfxVolumeLevel)?Math.max(0,Math.min(10,Math.round(sfxVolumeLevel))):8;
let audioCtx=null,masterGain=null;
let selectBgmTimer=null,selectBgmStep=0,gameBgmTimer=null,gameBgmStep=0,gameBgmTheme="office";
let officeBgmAudio=null,officeBgmKey="";
const BGM_VOLUME=.18;
const stageBgmSources={
  office:{normal:"assets/bgm/office_normal.mp3",boss:"assets/bgm/office_boss.mp3"},
  factory:{normal:"assets/bgm/tape_factory_normal.mp3",boss:"assets/bgm/tape_factory_boss.mp3"},
  bike:{normal:"assets/bgm/cycle_normal.mp3",boss:"assets/bgm/cycle_boss.mp3"},
  logistics:{normal:"assets/bgm/box_factory_normal.mp3",boss:"assets/bgm/box_factory_boss.mp3"},
  gym:{normal:"assets/bgm/cross_gym_normal.mp3",boss:"assets/bgm/cross_gym_boss.mp3"},
  estech:{normal:"assets/bgm/stech_normal.mp3",boss:"assets/bgm/stech_boss.mp3"}
};
const sfxLast={};
let keys={},mouse={x:0,y:0};
let mobileInput={active:false,pointerId:null,x:0,y:0,baseX:0,baseY:0};
let enemies=[],shots=[],bossShots=[],effects=[],gems=[],floaters=[];
let spawnTimer=0,elapsed=0,kills=0,shake=0;
let hitStop=0,hitStopReadyAt=0,impactFxBudget=0;
let playerDamagePulse=0,playerDamageAngle=0,lastDamageVibrationAt=0;
let stageClearMode=false,stageClearBanner={t:0,maxT:0,text:""};
let stageClearTimer=0,postBossPower=0,currentStage=1,stageBanner={t:0,maxT:0,stage:1};
let stage2Start=0,stage3Start=0;
let outdoorBlend=0,factoryBlend=0,logisticsBlend=0,gymBlend=0,estechBlend=0;
let currentThemeId="office",stageThemeIds={},stageThemeBag=[];
let bossVsCutscene={active:false,t:0,maxT:0,bossId:"juDaeri",stage:1};
let pendingBossVs=false;
let levelChoices=[],selectedChoice=0;
let testLevelAllChoices=false;
const wave1={maleAt:28,triggerAt:60,duration:20,started:false,active:false,done:false,start:0,banner:0};
const wave2={triggerAt:55,fishermanAt:25,duration:28,started:false,active:false,done:false,start:0,banner:0};
const wave3={triggerAt:55,duration:30,started:false,active:false,done:false,start:0,banner:0};
const stageThemes=[
  {id:"office",nativeStage:1,name:"사무실",bossId:"cheonSangmu"},
  {id:"factory",nativeStage:2,name:"테이프 공장",bossId:"juDaeri"},
  {id:"bike",nativeStage:3,name:"자전거도로",bossId:"cultFanatic"},
  {id:"logistics",nativeStage:4,name:"물류센터",bossId:"gossipGroup"},
  {id:"gym",nativeStage:5,name:"강호 크로스핏 센터",bossId:"emotionCeo"},
  {id:"estech",nativeStage:6,name:"에스테크",bossId:"parkSejunFamily"}
];
let boss1Spawned=false;
let boss2Spawned=false;
let bossStageSpawned={};
let arenaFence=null;
const world={w:6400,h:4200};
function levelXpRequirement(level){
  const lv=Math.max(1,level|0);
  if(lv<=5)return 8+lv*4;
  if(lv<=15){
    const x=lv-5;
    return Math.round(28+x*7+Math.pow(x,1.35)*1.8);
  }
  const x=lv-15;
  return Math.round(138+x*11+Math.pow(x,1.3)*2.4);
}
function experienceGainMultiplier(){
  const lv=Math.max(1,player.level||1);
  const early=lv<=3?1.42:lv<=8?1.22:lv<=15?1.08:1;
  return 1.1*early*(1+skillLevel("xpGain")*.12);
}
const player={x:1400,y:1000,r:18,hp:80,maxHp:80,speed:215,level:1,xp:0,next:levelXpRequirement(1),frame:0,face:1,dir:"down",moving:false,vx:0,vy:0,inv:0,action:null,actionTimer:0,actionDuration:0,ultimateTimer:0,ultimateCd:0,ultimateCdMax:15,ultimateFired:false,ultimateDir:{x:0,y:1},skillBarrier:0,skillBarrierMax:0,barrierRegenT:0};
const playerUltimateQuote="노~~오력이 부족해 !!!!";
const playableCharacters=[
  {id:"geontaek",name:"건택",trait:"회전 골프채를 던지는 표준형",portrait:"assets/character_portraits_small/geontaek.png",top:"#f8f8f0",hair:"#17191f",skin:"#f0c8bc",playable:true,ultimateQuote:"노~~오력이 부족해 !!!!"},
  {id:"sangil",name:"상일",trait:"등산스틱 근접 난타와 빠른 필살기",portrait:"assets/character_portraits_small/sangil.png",top:"#d5b77a",hair:"#15171d",skin:"#f0c8bc",playable:true,ultimateQuote:"가고 싶은대로 간다~!!"},
  {id:"jiin",name:"지인",trait:"빠른 이동과 유도 하트 연발",portrait:"assets/character_portraits_small/jiin.png",top:"#f5ead8",hair:"#1f2024",skin:"#f2c9bf",playable:true,ultimateQuote:"서율이가~ 있잖아요~!!"},
  {id:"seunggwan",name:"승관",trait:"철공 포환 스플래시 한방형",portrait:"assets/character_portraits_small/seunggwan.png",top:"#22242a",hair:"#191b20",skin:"#f3c6bd",playable:true,ultimateQuote:"정훈, 재훈! 가즈아~~~!!"},
  {id:"homin",name:"호민",trait:"소울 버블 폭발과 연쇄 버블",portrait:"assets/character_portraits_small/homin.png",top:"#3a2d2a",hair:"#14161b",skin:"#f0c8bc",playable:true,ultimateQuote:"소울은 멈추지 않아!"},
  {id:"seungjun",name:"승준",trait:"아직 준비 중인 플레이어블",portrait:"assets/character_portraits_small/seungjun.png",top:"#20242b",hair:"#16181e",skin:"#f0c8bc",playable:false,ultimateQuote:"자존심으로 버틴다!"}
];
const characterSelectList=[...playableCharacters].sort((a,b)=>Number(b.playable)-Number(a.playable));
let selectedCharacterIndex=0,selectedCharacter=characterSelectList[selectedCharacterIndex];
let carouselMoveDir=0,carouselMotionTimer=null;
const characterPortraits={};
for(const ch of playableCharacters){
  const img=new Image();
  img.src=ch.portrait;
  img.onload=()=>renderCharacterCarousel();
  characterPortraits[ch.id]=img;
}

const skills=[
  {id:"golf",icon:"╱",name:"회전 골프채",level:1,max:5,desc:"가까운 적 방향으로 고정 거리만큼 던집니다. 마스터 시 8방향 풀스윙으로 진화합니다.",cd:.92,t:.1},
  {id:"paper",icon:"▱",name:"문서 분쇄",level:0,max:5,desc:"회전하는 문서 칼날을 던집니다. 마스터 시 분쇄 폭풍.",cd:1.8,t:1.8},
  {id:"calendar",icon:"▦",name:"일정 폭탄",level:0,max:5,desc:"바닥에 마감 구역을 표시해 폭발시킵니다. 마스터 시 연쇄 마감.",cd:3.4,t:3.4},
  {id:"meeting",icon:"◌",name:"침묵 회의",level:0,max:5,desc:"주변 적을 느리게 만드는 회의장을 펼칩니다. 마스터 시 순간 정지.",cd:5.8,t:5.8},
  {id:"coffee",icon:"▴",name:"카페인 프로토콜",level:0,max:5,desc:"이동 속도와 회피가 증가합니다. 마스터 시 돌진 충격파.",cd:4.8,t:4.8},
  {id:"chart",icon:"◇",name:"방화벽 차트",level:0,max:5,desc:"회전 방패가 몸을 보호합니다. 마스터 시 반격 차트.",cd:0,t:0}
];

skills.splice(0,skills.length,
  {id:"golf",type:"basic",icon:"╱",name:"회전 골프채",level:1,max:5,desc:"캐릭터 고유 기본 공격입니다.",cd:1.12,t:.1},
  {id:"droneBot",type:"active",icon:"D",name:"드론봇",level:0,max:5,desc:"플레이어를 따라다니며 가까운 적에게 탄을 쏩니다.",cd:2.2,t:1.2},
  {id:"orbitShield",type:"active",icon:"O",name:"회전 쉴드",level:0,max:5,desc:"주변을 회전하며 원거리 공격을 막고 적에게 피해를 줍니다.",cd:0,t:0},
  {id:"barrier",type:"active",icon:"B",name:"보호막",level:0,max:5,desc:"일정 피해를 대신 버티고, 깨지면 잠시 뒤 재생됩니다.",cd:0,t:0},
  {id:"littleDragon",type:"active",icon:"F",name:"화염용",level:0,max:5,desc:"작은 화염구가 레벨에 따라 커지고 폭발 범위가 넓어집니다. 적을 화상 상태로 만들며 진화하면 부채꼴로 퍼지는 메테오볼 3발과 연쇄 폭발을 발사합니다.",cd:2.6,t:1.6},
  {id:"freezerBird",type:"active",icon:"I",name:"얼음 새",level:0,max:5,desc:"적에게 얼음볼을 발사합니다. 레벨이 오르면 크기와 빙결 스플래시 범위가 증가하고, 진화 시 3발을 발사합니다.",cd:3.3,t:2.2},
  {id:"satelliteBeam",type:"active",icon:"S",name:"위성 광선포",level:0,max:5,desc:"맵 어딘가에 강력한 광선 폭격을 떨어뜨립니다.",cd:6.2,t:3.2},
  {id:"damageAura",type:"active",icon:"A",name:"오오라",level:0,max:5,desc:"캐릭터 주변 오오라에 닿은 적에게 지속 피해를 줍니다.",cd:0,t:0},
  {id:"moveSpeed",type:"passive",icon:">",name:"이동속도 증가",level:0,max:5,desc:"이동속도가 증가합니다."},
  {id:"xpGain",type:"passive",icon:"+",name:"경험치 획득량 증가",level:0,max:5,desc:"경험치 구슬의 획득량이 증가합니다."},
  {id:"maxHealth",type:"passive",icon:"H",name:"최대 체력 증가",level:0,max:5,desc:"최대 체력이 증가하고 일부 체력을 회복합니다."},
  {id:"cooldownDown",type:"passive",icon:"C",name:"스킬 쿨타임 감소",level:0,max:5,desc:"액티브 스킬의 쿨타임이 감소합니다."},
  {id:"attackSpeed",type:"passive",icon:"R",name:"공격속도 증가",level:0,max:5,desc:"기본 공격 주기가 빨라집니다."},
  {id:"defenseUp",type:"passive",icon:"V",name:"방어력 증가",level:0,max:5,desc:"받는 피해가 줄어듭니다."},
  {id:"basicDamage",type:"passive",icon:"P",name:"기본공격 데미지 증가",level:0,max:5,desc:"캐릭터 고유 기본 공격의 피해가 증가합니다."},
  {id:"ultimateDodge",type:"passive",icon:"U",name:"필살기 회피율 증가",level:0,max:5,desc:"필살기 사용 중 회피율이 증가합니다. 마스터 시 필살기 중 무적입니다."},
  {id:"magnetRange",type:"passive",icon:"M",name:"자석 범위 증가",level:0,max:5,desc:"경험치와 아이템을 더 먼 거리에서도 획득합니다."}
);

const enemyTypes=[
  {id:"cryingFemale",name:"울고있는 여자사원",hp:14,spd:108,dmg:7,xp:2,color:"#d8c8b7",tie:"#68d7ff",size:17,drawSize:56},
  {id:"cryingMale",name:"울고있는 남자사원",hp:18,spd:98,dmg:8,xp:3,color:"#f2f1e9",tie:"#68d7ff",size:18,drawSize:58},
  {id:"mzResignation",name:"당당한 MZ 여사원",hp:22,spd:118,dmg:8,xp:5,color:"#f3eef8",tie:"#ff5c91",size:18,drawSize:66,ranged:true,range:360,shootCd:2.45,projectileDmg:8,projectileSpeed:430,attackKind:"resignationEnvelope"},
  {id:"roadCyclist",name:"도로 전세 동호회인",hp:11,spd:196,dmg:8,xp:3,color:"#ff4b8d",tie:"#111",size:19,drawSize:74,sourceRow:1,flipByFacing:true},
  {id:"fixieShooter",name:"BB탄 픽시 꼬맹이",hp:16,spd:126,dmg:6,xp:5,color:"#2b2f3a",tie:"#ffce3a",size:18,drawSize:72,spriteRows:4,sourceRow:0,attackSourceRow:2,flipByFacing:true,ranged:true,range:390,shootCd:2.65,projectileDmg:6,projectileSpeed:430},
  {id:"fishermanUncle",name:"배불뚝이 낚시꾼",hp:62,spd:74,dmg:13,xp:16,color:"#b88a45",tie:"#26354a",size:24,drawSize:78},
  {id:"lazyFactoryWorker",name:"칼퇴 뺀질이 작업자",hp:28,spd:112,dmg:10,xp:6,color:"#5d7388",tie:"#111",size:19,drawSize:64},
  {id:"tapeThrower",name:"테이프 채찍 작업자",hp:24,spd:96,dmg:8,xp:8,color:"#243448",tie:"#d98b22",size:19,drawSize:66,ranged:true,range:340,shootCd:2.25,projectileDmg:8,projectileSpeed:540,attackKind:"tapeWhip"},
  {id:"juCousinWorker",name:"주대리 친척동생",hp:42,spd:104,dmg:11,xp:10,color:"#1f2f4a",tie:"#b84d36",size:20,drawSize:68,ranged:true,range:420,shootCd:2.85,projectileDmg:10,projectileSpeed:380,attackKind:"geodeureok"},
  {id:"logisticsOfficeLady",name:"차트 든 물류 사무직",hp:30,spd:118,dmg:10,xp:7,color:"#f2eef0",tie:"#d49b57",size:19,drawSize:66},
  {id:"boxThrower",name:"박스 투척 작업자",hp:28,spd:94,dmg:9,xp:8,color:"#2f4b68",tie:"#d3a15a",size:20,drawSize:70,ranged:true,range:370,shootCd:2.35,projectileDmg:9,projectileSpeed:390,attackKind:"boxThrow"},
  {id:"forkliftDriver",name:"지게차 안전조끼 작업자",hp:72,spd:132,dmg:16,xp:14,color:"#f0b23a",tie:"#ff7b22",size:27,drawSize:92},
  {id:"gymTattooPig",name:"문신 돼지남",hp:44,spd:116,dmg:12,xp:8,color:"#17191f",tie:"#111",size:23,drawSize:76},
  {id:"gymLeggings",name:"레깅스 여성회원",hp:30,spd:122,dmg:8,xp:9,color:"#282d38",tie:"#ff8ac0",size:20,drawSize:70,ranged:true,range:220,shootCd:3.15,projectileDmg:3,attackKind:"fartCloud"},
  {id:"gymBodybuilder",name:"덤벨 헬창",hp:68,spd:92,dmg:13,xp:13,color:"#1f2024",tie:"#c84c4c",size:25,drawSize:86,ranged:true,range:410,shootCd:2.55,projectileDmg:11,projectileSpeed:430,attackKind:"dumbbellBoomerang"},
  {id:"doubleScooterStudents",name:"네임드: 노헬멧 2인승 킥보드",hp:220,spd:250,dmg:18,xp:28,color:"#243a63",tie:"#d74b4b",size:28,drawSize:112,spriteRows:4,namedEnemy:true},
  {id:"pigeonFlock",name:"도심 비둘기",hp:8,spd:185,dmg:6,xp:1,color:"#8e98a8",tie:"#55b99a",size:14,drawSize:54,spriteRows:4,hideHp:true},
  {id:"cultMinion",name:"좀비 광신도",hp:20,spd:118,dmg:8,xp:3,color:"#8a6d86",tie:"#d5b34d",size:22,drawSize:76},
  {id:"wireWorker",name:"전선 둘둘 작업자",hp:46,spd:118,dmg:11,xp:8,size:21,drawSize:78,estechAtlasRow:0},
  {id:"powerStripOctopus",name:"멀티탭 문어",hp:40,spd:92,dmg:8,xp:10,size:22,drawSize:80,estechAtlasRow:1,ranged:true,range:390,shootCd:2.25,projectileDmg:9,projectileSpeed:420,attackKind:"electricPlug"},
  {id:"breakerShield",name:"차단기 딸깍맨",hp:92,spd:72,dmg:15,xp:15,size:26,drawSize:88,estechAtlasRow:2,ranged:true,range:310,shootCd:3.1,projectileDmg:12,projectileSpeed:350,attackKind:"breakerBolt"},
  {id:"wiringRookie",name:"배선도 거꾸로 본 신입",hp:34,spd:158,dmg:9,xp:9,size:20,drawSize:76,estechAtlasRow:3,zigzag:true},
  {id:"liveWireMan",name:"절연장갑 안 낀 활선맨",hp:52,spd:134,dmg:13,xp:12,size:22,drawSize:82,estechAtlasRow:4,volatile:true}
];
function basePlayerMaxHp(){
  if(player.characterId==="sangil")return 82;
  if(player.characterId==="seunggwan")return 68;
  if(player.characterId==="jiin")return 58;
  return 54;
}

function resize(){
  dpr=Math.min(devicePixelRatio||1,mobileControlsAvailable()?1.5:2);
  const isMobile=mobileControlsAvailable();
  const appRect=isMobile?canvas.parentElement?.getBoundingClientRect():null;
  const fixedW=isMobile?(appRect?.width||innerWidth):Math.min(innerWidth,1600);
  const fixedH=isMobile?(appRect?.height||innerHeight):Math.min(innerHeight,900);
  const nextW=Math.max(1,Math.floor(fixedW));
  const nextH=Math.max(1,Math.floor(fixedH));
  const nextCanvasW=Math.floor(nextW*dpr);
  const nextCanvasH=Math.floor(nextH*dpr);
  const sizeChanged=W!==nextW||H!==nextH||canvas.width!==nextCanvasW||canvas.height!==nextCanvasH;
  W=nextW;H=nextH;
  const gameLeft=isMobile?0:Math.floor((innerWidth-W)/2);
  const gameTop=isMobile?0:Math.floor((innerHeight-H)/2);
  document.documentElement.style.setProperty("--game-left",gameLeft+"px");
  document.documentElement.style.setProperty("--game-top",gameTop+"px");
  document.documentElement.style.setProperty("--game-w",W+"px");
  document.documentElement.style.setProperty("--game-h",H+"px");
  canvas.style.width=W+"px";canvas.style.height=H+"px";
  if(!sizeChanged){
    if(startOverlay)updateStartPrompt(gameOver?"restart":"start");
    return;
  }
  canvas.width=nextCanvasW;canvas.height=nextCanvasH;
  if(isMobile){
    canvas.style.position="static";
    canvas.style.left="";
    canvas.style.top="";
    canvas.style.transform="";
  }else{
    canvas.style.position="absolute";
    canvas.style.left="50%";
    canvas.style.top="50%";
    canvas.style.transform="translate(-50%,-50%)";
  }
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.imageSmoothingEnabled=false;
  if(startOverlay)updateStartPrompt(gameOver?"restart":"start");
}
let resizeFrame=0;
function queueResize(){
  if(resizeFrame)return;
  resizeFrame=requestAnimationFrame(()=>{resizeFrame=0;resize()});
}
addEventListener("resize",queueResize,{passive:true});resize();
addEventListener("keydown",e=>{
  keys[e.key.toLowerCase()]=true;
  if(e.key==="Escape"&&overlayVisible(testSelectOverlay)){e.preventDefault();closeTestSelect();return}
  if(e.key==="Escape"&&!overlayVisible(startOverlay)&&!overlayVisible(levelOverlay)&&!gameOver){e.preventDefault();pauseMenuOpen?closePauseMenu():openPauseMenu();return}
  if(handleMenuKey(e))return;
  try{unlockAudio()}catch(err){}
  if(e.code==="Space"){e.preventDefault();useUltimate()}
  if(gameOver&&e.key==="Enter")restart()
});
addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false);
addEventListener("pointerdown",unlockAudio);
addEventListener("pointermove",e=>{mouse.x=e.clientX;mouse.y=e.clientY});
addEventListener("load",()=>attemptAudioAutoplay());
document.addEventListener("visibilitychange",()=>{if(!document.hidden)attemptAudioAutoplay()});
setupMobileControls();
document.getElementById("startBtn").onclick=()=>startGame();
if(characterPrevBtn)characterPrevBtn.onclick=()=>moveCharacterSelection(-1);
if(characterNextBtn)characterNextBtn.onclick=()=>moveCharacterSelection(1);
if(testModeBtn)testModeBtn.onclick=()=>{
  setTestMode(!testMode);
  show(testModeBtn.textContent);
};
if(invincibleTestBtn)invincibleTestBtn.onclick=()=>{
  if(!testMode)return;
  testInvincible=!testInvincible;
  applyTestModeUi();
  show(testInvincible?"테스트 무적 ON":"테스트 무적 OFF");
};
if(basicLv5TestBtn)basicLv5TestBtn.onclick=()=>{
  if(!testMode)return;
  const s=active("golf");
  s.level=s.max;
  s.t=0;
  renderSkillHud();
  show(player.characterId==="sangil"?"등산스틱 난타 Lv.5":"평타 Lv.5");
};
if(forceLevelUpTestBtn)forceLevelUpTestBtn.onclick=()=>{
  if(!testMode||paused||overlayVisible(levelOverlay))return;
  testLevelAllChoices=true;
  player.xp=player.next;
  levelUp();
};
if(stage1TestBtn)stage1TestBtn.onclick=()=>enterStage1Test();
if(waveTestBtn)waveTestBtn.onclick=()=>enterWaveTest();
if(bossTestBtn)bossTestBtn.onclick=()=>enterBossTest();
if(stage2TestBtn)stage2TestBtn.onclick=()=>enterStage2Test();
if(wave2TestBtn)wave2TestBtn.onclick=()=>enterWave2Test();
if(boss2TestBtn)boss2TestBtn.onclick=()=>enterBoss2Test();
if(stage3TestBtn)stage3TestBtn.onclick=()=>enterStage3Test();
if(wave3TestBtn)wave3TestBtn.onclick=()=>enterWave3Test();
if(boss3TestBtn)boss3TestBtn.onclick=()=>enterBoss3Test();
if(stage4TestBtn)stage4TestBtn.onclick=()=>enterStage4Test();
if(boss4TestBtn)boss4TestBtn.onclick=()=>enterBoss4Test();
if(stage5TestBtn)stage5TestBtn.onclick=()=>enterStage5Test();
if(boss5TestBtn)boss5TestBtn.onclick=()=>enterBoss5Test();
if(clearTestBtn)clearTestBtn.onclick=()=>{
  if(gameOver)return;
  if(paused){
    startOverlay.classList.add("hidden");
    levelOverlay.classList.add("hidden");
    pauseOverlay.classList.add("hidden");
    pauseMenuOpen=false;
    paused=false;
    last=performance.now();
    if(!loopStarted){loopStarted=true;requestAnimationFrame(loop)}
  }
  triggerStageClearPose();
};
if(ultimateBtn)ultimateBtn.onclick=()=>useUltimate();
if(mobileUltimateBtn)mobileUltimateBtn.addEventListener("pointerdown",e=>{e.preventDefault();unlockAudio();useUltimate()});
if(mobilePauseBtn)mobilePauseBtn.addEventListener("pointerdown",e=>{e.preventDefault();unlockAudio();pauseMenuOpen?closePauseMenu():openPauseMenu()});
if(resumeBtn)resumeBtn.onclick=()=>closePauseMenu();
if(homeBtn)homeBtn.onclick=()=>restart();
if(soundToggleBtn)soundToggleBtn.onclick=()=>setSoundOn(!soundOn);
if(bgmVolumeBtn)bgmVolumeBtn.onclick=e=>setBgmVolumeLevel(bgmVolumeLevel+(Number(e.target?.dataset?.dir)||1));
if(sfxVolumeBtn)sfxVolumeBtn.onclick=e=>setSfxVolumeLevel(sfxVolumeLevel+(Number(e.target?.dataset?.dir)||1));
if(pauseTestModeBtn)pauseTestModeBtn.onclick=()=>openTestSelect();
if(pauseLevelUpBtn)pauseLevelUpBtn.onclick=()=>openTestLevelUp();
if(pauseInvincibleBtn)pauseInvincibleBtn.onclick=()=>{
  setTestMode(true);
  testInvincible=!testInvincible;
  applyTestModeUi();
};
if(testSelectCloseBtn)testSelectCloseBtn.onclick=()=>closeTestSelect();
if(testSelectChoices)testSelectChoices.onclick=e=>{
  const button=e.target.closest("button[data-test-stage]");
  if(!button)return;
  enterTestDestination(Number(button.dataset.testStage),button.dataset.testBoss==="1");
};
renderCharacterCarousel();
updateStartPrompt("start");
applyTestModeUi();
applySoundUi();
updateUltimateButton();
updateMobileControlsUi();

function setTestMode(on){
  testMode=!!on;
  if(testMode)window.hanFightRanking?.markIneligible();
  if(!testMode)testInvincible=false;
  localStorage.removeItem("hanFightTestMode");
  applyTestModeUi();
}
function applyTestModeUi(){
  if(testTools)testTools.classList.toggle("on",testMode);
  if(testModeBtn){testModeBtn.classList.toggle("on",testMode);testModeBtn.textContent=testMode?"테스트 ON":"테스트 OFF";}
  if(invincibleTestBtn){
    invincibleTestBtn.classList.toggle("on",testInvincible);
    invincibleTestBtn.textContent=testInvincible?"무적 ON":"무적 OFF";
  }
  if(pauseTestModeBtn)pauseTestModeBtn.textContent="테스트 선택";
  if(pauseInvincibleBtn){pauseInvincibleBtn.classList.toggle("on",testInvincible);pauseInvincibleBtn.textContent=testInvincible?"무적 ON":"무적 OFF";}
}
function bgmVolume(){
  return soundOn?BGM_VOLUME*(bgmVolumeLevel/10):0;
}
function sfxVolume(){
  return soundOn?.08+sfxVolumeLevel*.055:0;
}
function renderVolumeBars(el,level){
  if(!el)return;
  let html="";
  for(let i=1;i<=10;i++)html+=`<i class="${i<=level?"on":""}"></i>`;
  el.innerHTML=html;
}
function applySoundUi(){
  if(masterGain)masterGain.gain.value=sfxVolume();
  if(officeBgmAudio)officeBgmAudio.volume=bgmVolume();
  if(soundToggleBtn)soundToggleBtn.textContent=soundOn?"소리 ON":"소리 OFF";
  renderVolumeBars(bgmVolumeValue,bgmVolumeLevel);
  renderVolumeBars(sfxVolumeValue,sfxVolumeLevel);
}
function setSoundOn(on){
  soundOn=!!on;
  localStorage.setItem("hanFightSoundOff",soundOn?"0":"1");
  applySoundUi();
}
function setBgmVolumeLevel(level){
  bgmVolumeLevel=Math.max(0,Math.min(10,Math.round(level)));
  localStorage.setItem("hanFightBgmVolume",String(bgmVolumeLevel));
  applySoundUi();
}
function setSfxVolumeLevel(level){
  sfxVolumeLevel=Math.max(0,Math.min(10,Math.round(level)));
  localStorage.setItem("hanFightSfxVolume",String(sfxVolumeLevel));
  applySoundUi();
}
function adjustPauseVolume(delta){
  const selected=pauseMenuButtons()[pauseMenuIndex];
  if(selected===bgmVolumeBtn){setBgmVolumeLevel(bgmVolumeLevel+delta);return true}
  if(selected===sfxVolumeBtn){setSfxVolumeLevel(sfxVolumeLevel+delta);return true}
  return false;
}
function openPauseMenu(){
  if(gameOver||overlayVisible(startOverlay)||overlayVisible(levelOverlay))return;
  pauseMenuOpen=true;
  pauseMenuIndex=0;
  paused=true;
  pauseOverlay.classList.remove("hidden");
  applyTestModeUi();
  applySoundUi();
  updatePauseMenuSelection();
}
function closePauseMenu(){
  if(!pauseMenuOpen)return;
  pauseMenuOpen=false;
  pauseOverlay.classList.add("hidden");
  paused=false;
  last=performance.now();
  startGameBgm();
}
function pauseMenuButtons(){
  return [resumeBtn,homeBtn,soundToggleBtn,bgmVolumeBtn,sfxVolumeBtn,pauseTestModeBtn,pauseLevelUpBtn,pauseInvincibleBtn].filter(Boolean);
}
function updatePauseMenuSelection(){
  const buttons=pauseMenuButtons();
  buttons.forEach((btn,i)=>btn.classList.toggle("is-selected",i===pauseMenuIndex));
  if(buttons[pauseMenuIndex])buttons[pauseMenuIndex].focus({preventScroll:true});
}
function movePauseMenu(delta){
  const buttons=pauseMenuButtons();
  if(!buttons.length)return;
  pauseMenuIndex=(pauseMenuIndex+delta+buttons.length)%buttons.length;
  updatePauseMenuSelection();
}
function activatePauseMenu(){
  const buttons=pauseMenuButtons();
  if(buttons[pauseMenuIndex])buttons[pauseMenuIndex].click();
}

function renderTestDestinations(){
  if(!testSelectChoices)return;
  testSelectChoices.innerHTML=stageThemes.map((theme,index)=>{
    const stage=index+1;
    return `<article class="test-destination">
      <small>${stage} STAGE</small>
      <div><strong>${theme.name}</strong><span>스테이지 시작 또는 ${theme.bossId?"보스전 직행":"스테이지 테스트"}</span></div>
      <div class="test-destination-actions">
        <button type="button" data-test-stage="${stage}">스테이지</button>
        <button type="button" data-test-stage="${stage}" data-test-boss="1"${theme.bossId?"":" disabled"}>보스</button>
      </div>
    </article>`;
  }).join("");
}

function openTestSelect(){
  if(gameOver||mobileControlsAvailable())return;
  setTestMode(true);
  renderTestDestinations();
  pauseMenuOpen=false;
  pauseOverlay.classList.add("hidden");
  testSelectOverlay.classList.remove("hidden");
  paused=true;
}

function closeTestSelect(){
  if(!overlayVisible(testSelectOverlay))return;
  testSelectOverlay.classList.add("hidden");
  openPauseMenu();
}

function openTestLevelUp(){
  if(gameOver||mobileControlsAvailable())return;
  setTestMode(true);
  pauseMenuOpen=false;
  pauseOverlay.classList.add("hidden");
  testLevelAllChoices=true;
  player.xp=player.next;
  levelUp();
}

function enterTestDestination(stage,boss=false){
  const theme=stageThemes[stage-1];
  if(!theme)return;
  setTestMode(true);
  startFromTest();
  if(testSelectOverlay)testSelectOverlay.classList.add("hidden");
  enemies.length=0;shots.length=0;bossShots.length=0;effects.length=0;floaters.length=0;gems.length=0;
  stageClearMode=false;stageClearTimer=0;stageClearBanner={t:0,maxT:0,text:""};pendingBossVs=false;arenaFence=null;
  currentStage=stage;stageThemeIds[stage]=theme.id;currentThemeId=theme.id;
  elapsed=stage===1?0:1000+stage*120;stage2Start=stage===2?elapsed:elapsed-180;stage3Start=stage>=3?elapsed:0;
  wave1.started=stage>1||boss;wave1.active=false;wave1.done=stage>1||boss;wave1.start=0;wave1.banner=0;
  wave2.started=stage>2||boss;wave2.active=false;wave2.done=stage>2||boss;wave2.start=0;wave2.banner=0;
  wave3.started=boss;wave3.active=false;wave3.done=boss;wave3.start=0;wave3.banner=0;
  bossStageSpawned={};boss1Spawned=false;boss2Spawned=false;postBossPower=stage>1?1:0;spawnTimer=boss?9999:0;
  showStageBanner(stage);syncThemeBlend(true);player.inv=Math.max(player.inv,1);
  if(boss){createArenaFence();bossVsCutscene={active:false,t:0,maxT:0,bossId:theme.bossId,stage};pendingBossVs=true}
  show(`테스트: ${stage} STAGE ${theme.name}${boss?" 보스":""} 진입`);
}

function setupMobileControls(){
  if(!mobileControls||!mobileStick||!mobileStickKnob||!canvas)return;
  const max=30;
  const placeControls=(clientX,clientY)=>{
    const rect=mobileControls.getBoundingClientRect();
    const stickRadius=50,buttonRadius=28,gap=15,edge=8;
    const localX=clamp(clientX-rect.left,stickRadius+edge,rect.width-stickRadius-edge);
    const localY=clamp(clientY-rect.top,stickRadius+edge,rect.height-stickRadius-edge);
    const sideOffset=stickRadius+gap+buttonRadius;
    let ultimateX=localX+sideOffset;
    if(ultimateX+buttonRadius+edge>rect.width)ultimateX=localX-sideOffset;
    ultimateX=clamp(ultimateX,buttonRadius+edge,rect.width-buttonRadius-edge);
    const ultimateY=clamp(localY,buttonRadius+edge,rect.height-buttonRadius-edge);
    mobileStick.style.left=`${Math.round(localX)}px`;
    mobileStick.style.top=`${Math.round(localY)}px`;
    if(mobileUltimateBtn){
      mobileUltimateBtn.style.left=`${Math.round(ultimateX)}px`;
      mobileUltimateBtn.style.top=`${Math.round(ultimateY)}px`;
    }
    mobileControls.classList.add("has-pad");
    mobileControls.classList.remove("is-idle");
    mobileInput.baseX=rect.left+localX;
    mobileInput.baseY=rect.top+localY;
  };
  const setStick=(clientX,clientY)=>{
    const dx=clientX-mobileInput.baseX;
    const dy=clientY-mobileInput.baseY;
    const len=Math.hypot(dx,dy);
    const pull=Math.min(max,len);
    const nx=len>0?dx/len:0;
    const ny=len>0?dy/len:0;
    mobileInput.x=nx*(pull/max);
    mobileInput.y=ny*(pull/max);
    mobileStickKnob.style.transform=`translate(${Math.round(nx*pull)}px,${Math.round(ny*pull)}px)`;
  };
  const resetStick=()=>{
    mobileInput.active=false;
    mobileInput.pointerId=null;
    mobileInput.x=0;
    mobileInput.y=0;
    mobileStickKnob.style.transform="translate(0,0)";
    mobileControls.classList.add("is-idle");
  };
  canvas.addEventListener("pointerdown",e=>{
    if(!mobileControlsAvailable()||mobileControls.classList.contains("is-hidden")||mobileInput.active)return;
    if(e.button!==undefined&&e.button!==0)return;
    e.preventDefault();
    unlockAudio();
    placeControls(e.clientX,e.clientY);
    mobileInput.active=true;
    mobileInput.pointerId=e.pointerId;
    canvas.setPointerCapture(e.pointerId);
    setStick(e.clientX,e.clientY);
  });
  canvas.addEventListener("pointermove",e=>{
    if(!mobileInput.active||e.pointerId!==mobileInput.pointerId)return;
    e.preventDefault();
    setStick(e.clientX,e.clientY);
  });
  ["pointerup","pointercancel","lostpointercapture"].forEach(type=>{
    canvas.addEventListener(type,e=>{
      if(mobileInput.pointerId!==null&&e.pointerId!==mobileInput.pointerId)return;
      resetStick();
    });
  });
}

function mobileControlsAvailable(){
  return !!(matchMedia("(pointer: coarse)").matches||innerWidth<=760);
}
function trimMobileTransientLoad(){
  if(!mobileControlsAvailable())return;
  const trimPreferred=(list,max,predicate,hardLimit=true)=>{
    if(list.length<=max)return;
    for(let i=0;i<list.length&&list.length>max;){
      if(predicate(list[i]))list.splice(i,1);
      else i++;
    }
    if(hardLimit&&list.length>max)list.splice(0,list.length-max);
  };
  trimPreferred(shots,170,p=>p.kind==="hominBubbleShard"||p.kind==="jiinHeart"||p.kind==="chart");
  trimPreferred(effects,170,e=>e.kind==="hitSpark"||e.kind==="pop"||e.kind==="hominBubbleBurst"||e.kind==="dragonFireballSplash"||e.kind==="iceBallBurst"||e.kind==="seunggwanIronImpact",false);
  if(bossShots.length>120)bossShots.splice(0,bossShots.length-120);
  if(floaters.length>80)floaters.splice(0,floaters.length-80);
}

function updateMobileControlsUi(){
  if(!mobileControls)return;
  const visible=mobileControlsAvailable()&&!overlayVisible(startOverlay)&&!overlayVisible(levelOverlay)&&!pauseMenuOpen&&!gameOver;
  mobileControls.classList.toggle("is-hidden",!visible);
  mobileControls.setAttribute("aria-hidden",visible?"false":"true");
  if(!visible&&mobileInput.active){
    mobileInput.active=false;
    mobileInput.pointerId=null;
    mobileInput.x=0;
    mobileInput.y=0;
    if(mobileStickKnob)mobileStickKnob.style.transform="translate(0,0)";
    mobileControls.classList.add("is-idle");
  }
}

function restart(){location.reload()}
function startGame(){
  try{unlockAudio()}catch(err){}
  if(!selectedCharacter.playable){show(`${selectedCharacter.name}은 아직 준비 중`);return}
  player.characterId=selectedCharacter.id;
  applyCharacterStats();
  window.hanFightRanking?.startRun({characterId:player.characterId});
  playSfx("selectConfirm");
  stopSelectBgm();
  startOverlay.classList.add("hidden");
  pauseOverlay.classList.add("hidden");
  pauseMenuOpen=false;
  paused=false;
  currentStage=1;
  resetStageThemes();
  showStageBanner(1);
  syncThemeBlend(true);
  last=performance.now();
  if(!loopStarted){loopStarted=true;requestAnimationFrame(loop)}
  startGameBgm();
  show(`${selectedCharacter.name} 선택 완료. 업무 시작.`);
}
function applyCharacterStats(){
  const sangil=player.characterId==="sangil";
  const seunggwan=player.characterId==="seunggwan";
  const jiin=player.characterId==="jiin";
  const homin=player.characterId==="homin";
  player.x=world.w/2;
  player.y=world.h/2;
  player.level=1;
  player.xp=0;
  player.next=levelXpRequirement(1);
  for(const s of skills){
    s.level=s.id==="golf"?1:0;
    s.evolved=false;
    s.t=s.id==="golf"?.2:(s.cd||0);
    s.shields=undefined;
    s.shieldMaxSeen=undefined;
    s.regenT=0;
  }
  player.maxHp=basePlayerMaxHp();
  player.hp=player.maxHp;
  player.speed=jiin?206:sangil?178:seunggwan?176:homin?178:184;
  player.r=sangil?20:seunggwan?19:18;
  player.skillBarrier=0;
  player.skillBarrierMax=0;
  player.barrierRegenT=0;
  player.ultimateTimer=0;
  player.ultimateCd=0;
  player.ultimateCdMax=getUltimateCooldown();
  player.ultimateFired=false;
  player.skillsMastered=false;
  player.hurtT=0;player.hurtFlash=0;player.hurtDx=0;player.hurtDy=0;
  hitStop=0;hitStopReadyAt=0;playerDamagePulse=0;
}
function startFromTest(){
  try{unlockAudio()}catch(err){}
  window.hanFightRanking?.markIneligible();
  if(!selectedCharacter.playable){
    selectedCharacterIndex=characterSelectList.findIndex(ch=>ch.playable);
    selectedCharacter=characterSelectList[selectedCharacterIndex];
    renderCharacterCarousel();
  }
  player.characterId=selectedCharacter.id;
  applyCharacterStats();
  stopSelectBgm();
  startOverlay.classList.add("hidden");
  levelOverlay.classList.add("hidden");
  pauseOverlay.classList.add("hidden");
  pauseMenuOpen=false;
  paused=false;
  gameOver=false;
  resetStageThemes();
  last=performance.now();
  if(!loopStarted){loopStarted=true;requestAnimationFrame(loop)}
  startGameBgm();
}
function showStageBanner(stage){
  currentStage=stage;
  currentThemeId=themeForStage(stage).id;
  stageBanner={t:2.15,maxT:2.15,stage};
  restartGameBgmForTheme();
}
function resetStageThemes(){
  stageThemeIds={};
  stageThemeBag=shuffledThemeBag();
  for(let stage=1;stage<=5;stage++){
    if(!stageThemeBag.length)stageThemeBag=shuffledThemeBag(stageThemeIds[stage-1],stage>6);
    stageThemeIds[stage]=stageThemeBag.shift();
  }
  stageThemeIds[6]="estech";
  currentThemeId=stageThemeIds[1]||"office";
}
function shuffledThemeBag(avoidFirst=null,includeEstech=false){
  const bag=stageThemes.filter(t=>includeEstech||t.id!=="estech").map(t=>t.id);
  for(let i=bag.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [bag[i],bag[j]]=[bag[j],bag[i]];
  }
  if(avoidFirst&&bag[0]===avoidFirst&&bag.length>1){
    const swap=1+Math.floor(Math.random()*(bag.length-1));
    [bag[0],bag[swap]]=[bag[swap],bag[0]];
  }
  return bag;
}
function themeForStage(stage=currentStage){
  stage=Math.max(1,stage||1);
  if(stage===6)stageThemeIds[stage]="estech";
  if(!stageThemeIds[stage]){
    if(!stageThemeBag.length)stageThemeBag=shuffledThemeBag(stageThemeIds[stage-1],stage>6);
    stageThemeIds[stage]=stageThemeBag.shift();
  }
  return stageThemes.find(t=>t.id===stageThemeIds[stage])||stageThemes[0];
}
function activeTheme(){
  return stageThemes.find(t=>t.id===currentThemeId)||themeForStage(currentStage);
}
function themeProgressionScale(stage=currentStage,theme=activeTheme()){
  const delta=clamp((stage||1)-(theme.nativeStage||stage||1),-5,5);
  return {
    hp:clamp(Math.pow(1.16,delta),.55,1.82),
    dmg:clamp(Math.pow(1.08,delta),.73,1.38),
    xp:clamp(Math.pow(1.1,delta),.68,1.5)
  };
}
function waveForStage(stage=currentStage){
  if(stage<=1)return wave1;
  if(stage===2)return wave2;
  return wave3;
}
function stageAge(stage=currentStage){
  if(stage<=1)return elapsed;
  if(stage===2)return Math.max(0,elapsed-stage2Start);
  return Math.max(0,elapsed-stage3Start);
}
function themeBlendTarget(theme=activeTheme()){
  if(theme.id==="estech")return {outdoor:0,factory:0,logistics:0,gym:0,estech:1};
  if(theme.id==="bike")return {outdoor:1,factory:0,logistics:0,gym:0,estech:0};
  if(theme.id==="factory")return {outdoor:0,factory:1,logistics:0,gym:0,estech:0};
  if(theme.id==="logistics")return {outdoor:0,factory:0,logistics:1,gym:0,estech:0};
  if(theme.id==="gym")return {outdoor:0,factory:0,logistics:0,gym:1,estech:0};
  return {outdoor:0,factory:0,logistics:0,gym:0,estech:0};
}
function syncThemeBlend(instant=false){
  const target=themeBlendTarget();
  if(instant){outdoorBlend=target.outdoor;factoryBlend=target.factory;logisticsBlend=target.logistics;gymBlend=target.gym;estechBlend=target.estech}
}
function approach(value,target,step){
  if(value<target)return Math.min(target,value+step);
  if(value>target)return Math.max(target,value-step);
  return value;
}
function enterStage1Test(){
  if(!testMode)return;
  startFromTest();
  enemies.length=0;shots.length=0;bossShots.length=0;effects.length=0;floaters.length=0;gems.length=0;
  stageClearMode=false;
  stageClearTimer=0;
  stageClearBanner={t:0,maxT:0,text:""};
  postBossPower=0;
  currentStage=1;
  showStageBanner(1);
  syncThemeBlend(true);
  elapsed=0;
  stage2Start=0;
  stage3Start=0;
  wave1.started=false;wave1.active=false;wave1.done=false;wave1.start=0;wave1.banner=0;
  wave2.started=false;wave2.active=false;wave2.done=false;wave2.start=0;wave2.banner=0;
  wave3.started=true;wave3.active=false;wave3.done=true;wave3.start=0;wave3.banner=0;
  arenaFence=null;
  bossStageSpawned={};
  pendingBossVs=false;
  spawnTimer=0;
  player.inv=Math.max(player.inv,.8);
  show("테스트: 1 STAGE 진입");
}
function enterWaveTest(){
  if(!testMode)return;
  startFromTest();
  elapsed=Math.max(elapsed,wave1.triggerAt);
  wave1.started=false;wave1.active=false;wave1.done=false;wave1.start=0;wave1.banner=0;
  wave2.started=false;wave2.active=false;wave2.done=false;wave2.start=0;wave2.banner=0;
  wave3.started=false;wave3.active=false;wave3.done=false;wave3.start=0;wave3.banner=0;
  postBossPower=0;
  currentStage=1;
  showStageBanner(1);
  stage2Start=0;
  stage3Start=0;
  syncThemeBlend(true);
  spawnTimer=0;
  show("테스트: 1 WAVE 즉시 진입");
}
function enterBossTest(){
  if(!testMode)return;
  startFromTest();
  enemies.length=0;shots.length=0;bossShots.length=0;effects.length=0;floaters.length=0;
  postBossPower=0;
  stage2Start=0;
  stage3Start=0;
  elapsed=Math.max(elapsed,wave1.triggerAt+wave1.duration+1);
  wave1.started=true;wave1.active=false;wave1.done=true;wave1.banner=0;
  wave2.started=false;wave2.active=false;wave2.done=false;wave2.start=0;wave2.banner=0;
  wave3.started=false;wave3.active=false;wave3.done=false;wave3.start=0;wave3.banner=0;
  arenaFence=null;
  createArenaFence();
  boss1Spawned=false;
  boss2Spawned=false;
  bossStageSpawned={};
  currentStage=1;
  showStageBanner(1);
  syncThemeBlend(true);
  bossVsCutscene={active:false,t:0,maxT:0,bossId:pickStageBossId(1),stage:1};
  pendingBossVs=true;
  show("테스트: 1 BOSS 즉시 진입");
}
function setupStage2TestBase(){
  startFromTest();
  enemies.length=0;shots.length=0;bossShots.length=0;effects.length=0;floaters.length=0;gems.length=0;
  stageClearMode=false;
  stageClearTimer=0;
  stageClearBanner={t:0,maxT:0,text:""};
  postBossPower=1;
  currentStage=2;
  showStageBanner(2);
  syncThemeBlend(true);
  elapsed=Math.max(elapsed,wave1.triggerAt+wave1.duration+6);
  stage2Start=elapsed;
  wave1.started=true;wave1.active=false;wave1.done=true;wave1.banner=0;
  wave2.started=false;wave2.active=false;wave2.done=false;wave2.start=0;wave2.banner=0;
  wave3.started=false;wave3.active=false;wave3.done=false;wave3.start=0;wave3.banner=0;
  arenaFence=null;
  boss1Spawned=true;
  boss2Spawned=false;
  bossStageSpawned={1:true};
  bossVsCutscene={active:false,t:0,maxT:0,bossId:"cheonSangmu",stage:2};
  pendingBossVs=false;
  spawnTimer=0;
  player.inv=Math.max(player.inv,.8);
}
function enterStage2Test(){
  if(!testMode)return;
  setupStage2TestBase();
  show("테스트: 2 STAGE 진입");
}
function enterWave2Test(){
  if(!testMode)return;
  setupStage2TestBase();
  wave2.started=true;
  wave2.active=true;
  wave2.done=false;
  wave2.start=elapsed;
  wave2.banner=2.4;
  spawnTimer=0;
  shake=12;
  show("테스트: 2 WAVE 즉시 진입");
}
function enterBoss2Test(){
  if(!testMode)return;
  setupStage2TestBase();
  wave2.started=true;
  wave2.active=false;
  wave2.done=true;
  spawnTimer=9999;
  createArenaFence();
  pendingBossVs=true;
  show("테스트: 2 BOSS 구역 생성");
}
function enterStage3Test(){
  if(!testMode)return;
  startFromTest();
  enemies.length=0;shots.length=0;bossShots.length=0;effects.length=0;floaters.length=0;gems.length=0;
  stageClearMode=false;
  stageClearTimer=0;
  stageClearBanner={t:0,maxT:0,text:""};
  postBossPower=1;
  currentStage=3;
  showStageBanner(3);
  syncThemeBlend(true);
  elapsed=Math.max(elapsed,wave1.triggerAt+wave1.duration+wave2.triggerAt+wave2.duration+10);
  stage2Start=elapsed-120;
  stage3Start=elapsed;
  wave1.started=true;wave1.active=false;wave1.done=true;wave1.banner=0;
  wave2.started=true;wave2.active=false;wave2.done=true;wave2.banner=0;
  wave3.started=false;wave3.active=false;wave3.done=false;wave3.start=0;wave3.banner=0;
  arenaFence=null;
  bossStageSpawned={1:true,2:true};
  pendingBossVs=false;
  spawnTimer=0;
  player.inv=Math.max(player.inv,.8);
  show("테스트: 3 STAGE 진입");
}
function enterWave3Test(){
  if(!testMode)return;
  enterStage3Test();
  wave3.started=true;
  wave3.active=true;
  wave3.done=false;
  wave3.start=elapsed;
  wave3.banner=2.4;
  spawnTimer=0;
  shake=12;
  show("테스트: 3 WAVE 즉시 진입");
}
function enterBoss3Test(){
  if(!testMode)return;
  enterStage3Test();
  wave3.started=true;
  wave3.active=false;
  wave3.done=true;
  spawnTimer=9999;
  createArenaFence();
  bossVsCutscene={active:false,t:0,maxT:0,bossId:"cultFanatic",stage:3};
  pendingBossVs=true;
  show("테스트: 3 BOSS 구역 생성");
}
function enterStage4Test(){
  if(!testMode)return;
  startFromTest();
  enemies.length=0;shots.length=0;bossShots.length=0;effects.length=0;floaters.length=0;gems.length=0;
  stageClearMode=false;
  stageClearTimer=0;
  stageClearBanner={t:0,maxT:0,text:""};
  postBossPower=2;
  currentStage=4;
  showStageBanner(4);
  syncThemeBlend(true);
  elapsed=Math.max(elapsed,wave1.triggerAt+wave1.duration+wave2.triggerAt+wave2.duration+wave3.triggerAt+wave3.duration+16);
  stage2Start=elapsed-180;
  stage3Start=elapsed;
  wave1.started=true;wave1.active=false;wave1.done=true;wave1.banner=0;
  wave2.started=true;wave2.active=false;wave2.done=true;wave2.banner=0;
  wave3.started=false;wave3.active=false;wave3.done=false;wave3.start=0;wave3.banner=0;
  arenaFence=null;
  bossStageSpawned={1:true,2:true,3:true};
  pendingBossVs=false;
  spawnTimer=0;
  player.inv=Math.max(player.inv,.8);
  show(`???: 4 STAGE ${themeForStage(4).name} ??`);
}
function enterBoss4Test(){
  if(!testMode)return;
  enterStage4Test();
  wave3.started=true;
  wave3.active=false;
  wave3.done=true;
  spawnTimer=9999;
  createArenaFence();
  bossVsCutscene={active:false,t:0,maxT:0,bossId:pickStageBossId(4),stage:4};
  pendingBossVs=true;
  show(`???: 4 BOSS ${themeForStage(4).name} ?? ??`);
}
function enterStage5Test(){
  if(!testMode)return;
  startFromTest();
  enemies.length=0;shots.length=0;bossShots.length=0;effects.length=0;floaters.length=0;gems.length=0;
  stageClearMode=false;
  stageClearTimer=0;
  stageClearBanner={t:0,maxT:0,text:""};
  postBossPower=2;
  currentStage=5;
  stageThemeIds[5]="gym";
  currentThemeId="gym";
  showStageBanner(5);
  syncThemeBlend(true);
  elapsed=Math.max(elapsed,wave1.triggerAt+wave1.duration+wave2.triggerAt+wave2.duration+wave3.triggerAt+wave3.duration+28);
  stage2Start=elapsed-220;
  stage3Start=elapsed;
  wave1.started=true;wave1.active=false;wave1.done=true;wave1.banner=0;
  wave2.started=true;wave2.active=false;wave2.done=true;wave2.banner=0;
  wave3.started=false;wave3.active=false;wave3.done=false;wave3.start=0;wave3.banner=0;
  arenaFence=null;
  bossStageSpawned={1:true,2:true,3:true,4:true};
  pendingBossVs=false;
  spawnTimer=0;
  player.inv=Math.max(player.inv,.8);
  show(`테스트: 5 STAGE ${themeForStage(5).name} 진입`);
}
function enterBoss5Test(){
  if(!testMode)return;
  enterStage5Test();
  wave3.started=true;
  wave3.active=false;
  wave3.done=true;
  spawnTimer=9999;
  createArenaFence();
  bossVsCutscene={active:false,t:0,maxT:0,bossId:pickStageBossId(5),stage:5};
  pendingBossVs=true;
  show(`테스트: 5 BOSS ${themeForStage(5).name} 구역 생성`);
}
function moveCharacterSelection(delta){
  carouselMoveDir=Math.sign(delta);
  selectedCharacterIndex=(selectedCharacterIndex+delta+characterSelectList.length)%characterSelectList.length;
  selectedCharacter=characterSelectList[selectedCharacterIndex];
  playSfx("selectMove");
  renderCharacterCarousel();
}
function renderCharacterCarousel(){
  if(!characterCardsEl)return;
  if(!characterCardsEl.children.length){
    characterCardsEl.innerHTML=characterSelectList.map((ch,i)=>`
      <article class="select-card" data-index="${i}" aria-label="${ch.name} 선택 카드">
        <canvas width="264" height="274"></canvas>
        <div class="select-info">
          <div><b>이름</b><span>${ch.name}</span></div>
          <div><b>특징</b><span>${ch.trait}</span></div>
        </div>
      </article>`).join("");
    characterCardsEl.querySelectorAll(".select-card").forEach(card=>{
      card.onclick=()=>{
        const next=Number(card.dataset.index);
        carouselMoveDir=next>selectedCharacterIndex?1:-1;
        selectedCharacterIndex=next;
        selectedCharacter=characterSelectList[selectedCharacterIndex];
        renderCharacterCarousel();
        if(selectedCharacter.playable)startGame();
      };
      drawCharacterCardArt(card.querySelector("canvas"),characterSelectList[Number(card.dataset.index)]);
    });
  }
  if(characterCarousel&&carouselMoveDir){
    characterCarousel.style.setProperty("--kick",`${carouselMoveDir*-3}deg`);
    characterCarousel.classList.remove("is-moving");
    void characterCarousel.offsetWidth;
    characterCarousel.classList.add("is-moving");
    clearTimeout(carouselMotionTimer);
    carouselMotionTimer=setTimeout(()=>characterCarousel.classList.remove("is-moving"),460);
  }
  characterCardsEl.querySelectorAll(".select-card").forEach(card=>{
    const i=Number(card.dataset.index);
    drawCharacterCardArt(card.querySelector("canvas"),characterSelectList[i]);
    let offset=i-selectedCharacterIndex;
    if(offset>characterSelectList.length/2)offset-=characterSelectList.length;
    if(offset<-characterSelectList.length/2)offset+=characterSelectList.length;
    const cls=offset===0?"is-center":offset===-1?"is-left-1":offset===1?"is-right-1":offset===-2?"is-left-2":offset===2?"is-right-2":"";
    card.className=`select-card ${cls}${characterSelectList[i].playable?"":" is-locked"}`;
    card.setAttribute("aria-disabled",characterSelectList[i].playable?"false":"true");
  });
}
function drawCharacterCardArt(canvas,ch){
  const c=canvas.getContext("2d");
  c.imageSmoothingEnabled=false;
  c.clearRect(0,0,canvas.width,canvas.height);
  const px=(color,x,y,w,h)=>{c.fillStyle=color;c.fillRect(x,y,w,h)};
  px("#d7eef5",0,0,264,274);
  px("#ffffff",26,18,212,196);
  px("#c0e8ef",0,214,264,60);
  for(let x=16;x<250;x+=24)px("#d9f5fa",x,244,12,12);
  const portrait=characterPortraits[ch.id];
  if(portrait&&portrait.complete&&portrait.naturalWidth){
    c.imageSmoothingEnabled=true;
    c.drawImage(portrait,0,0,portrait.naturalWidth,portrait.naturalHeight,18,8,228,228);
    c.imageSmoothingEnabled=false;
  }else{
    px("#111318",94,72,76,100);
    px(ch.skin,104,88,56,58);
    px(ch.hair,96,64,72,30);
    px(ch.top,96,154,72,62);
  }
  if(!ch.playable){
    c.fillStyle="rgba(10,12,16,.42)";
    c.fillRect(0,0,264,274);
    c.fillStyle="#fff8d6";
    c.strokeStyle="#090c10";
    c.lineWidth=7;
    c.font='900 32px "Malgun Gothic",sans-serif';
    c.textAlign="center";
    c.strokeText("잠김",132,136);
    c.fillText("잠김",132,136);
  }
}
function overlayVisible(el){return !!el&&!el.classList.contains("hidden")}
function handleMenuKey(e){
  const k=e.key.toLowerCase();
  if(pauseMenuOpen){
    if(["arrowup","w"].includes(k)){e.preventDefault();movePauseMenu(-1);return true}
    if(["arrowdown","s"].includes(k)){e.preventDefault();movePauseMenu(1);return true}
    if(["arrowleft","a"].includes(k)){e.preventDefault();if(adjustPauseVolume(-1))return true;return true}
    if(["arrowright","d"].includes(k)){e.preventDefault();if(adjustPauseVolume(1))return true;return true}
    if(e.code==="Space"||k==="enter"){e.preventDefault();activatePauseMenu();return true}
    return false;
  }
  if(overlayVisible(levelOverlay)){
    if(["arrowleft","a","arrowup","w"].includes(k)){e.preventDefault();moveLevelSelection(-1);return true}
    if(["arrowright","d","arrowdown","s"].includes(k)){e.preventDefault();moveLevelSelection(1);return true}
    if(e.code==="Space"||k==="enter"){e.preventDefault();confirmLevelChoice();return true}
    return false;
  }
  if(overlayVisible(startOverlay)&&!gameOver){
    if(["arrowleft","a"].includes(k)){e.preventDefault();moveCharacterSelection(-1);return true}
    if(["arrowright","d"].includes(k)){e.preventDefault();moveCharacterSelection(1);return true}
    if(e.code==="Space"||k==="enter"){e.preventDefault();startGame();return true}
  }
  if(e.code==="Space"){
    if(gameOver){e.preventDefault();restart();return true}
  }
  if(k==="enter"&&gameOver){e.preventDefault();restart();return true}
  return false;
}
function show(msg){
  if(!toast)return;
  toast.textContent="";
  toast.classList.remove("on");
}
function active(id){
  const legacy={paper:"droneBot",calendar:"satelliteBeam",meeting:"freezerBird",coffee:"moveSpeed",chart:"orbitShield"};
  return skills.find(s=>s.id===id)||skills.find(s=>s.id===legacy[id])||{id,level:0,max:5,cd:999,t:999,type:"legacy",desc:""};
}
function skillLevel(id){const s=active(id);return s?s.level||0:0}
function ownedActiveSkills(){return skills.filter(s=>s.type==="active"&&s.level>0)}
function cooldownMul(){return Math.max(.55,1-skillLevel("cooldownDown")*.07)}
function attackSpeedMul(){return Math.max(.55,1-skillLevel("attackSpeed")*.075)}
function basicDamageMul(){return 1+skillLevel("basicDamage")*.14}
function playerMoveBonus(){return skillLevel("moveSpeed")*14}
function applyPlayerDamageMitigation(amount){
  return Math.max(1,Math.round(amount*(1-skillLevel("defenseUp")*.055)));
}
function passiveUltimateDodgeActive(){
  const lv=skillLevel("ultimateDodge");
  if(lv<=0||player.ultimateTimer<=0)return false;
  if(lv>=5)return true;
  return Math.random()<lv*.13;
}
function gameplayScale(){
  if(!mobileControlsAvailable())return .86;
  const short=Math.min(W,H);
  if(short<=430)return .62;
  if(short<=760)return .68;
  if(short<=980)return .76;
  return .84;
}
function viewW(){return W/gameplayScale()}
function viewH(){return H/gameplayScale()}
function cam(){
  const vw=viewW(),vh=viewH();
  return {x:Math.max(0,Math.min(world.w-vw,player.x-vw/2)),y:Math.max(0,Math.min(world.h-vh,player.y-vh/2))}
}
function isVisibleWorld(x,y,pad=0){
  const c=cam(),vw=viewW(),vh=viewH();
  return x>=c.x-pad&&x<=c.x+vw+pad&&y>=c.y-pad&&y<=c.y+vh+pad;
}
function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
function angle(a,b){return Math.atan2(b.y-a.y,b.x-a.x)}
function rnd(a,b){return a+Math.random()*(b-a)}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function smoothstep(v){v=clamp(v,0,1);return v*v*(3-2*v)}
function gainSp(amount){}
function getUltimateCooldown(id=player.characterId){return id==="sangil"?8:id==="seunggwan"?12:id==="jiin"?34:id==="homin"?30:id==="geontaek"?8:15}
function getUltimateDuration(id=player.characterId){return id==="sangil"?5:id==="seunggwan"?1.18:id==="jiin"?7:id==="homin"?3.2:id==="geontaek"?.58:.9}
function ultimateChargeRatio(){
  const cd=player.ultimateCdMax||getUltimateCooldown();
  if(cd<=0)return 1;
  return clamp(1-(player.ultimateCd||0)/cd,0,1);
}
function ultimateReady(){return !gameOver&&player.ultimateTimer<=0&&player.ultimateCd<=0}
function characterUltimateInvincible(){
  return player.ultimateTimer>0&&(player.characterId==="sangil"||player.characterId==="homin");
}
function playerCanTakeDamage(){
  if(testInvincible||player.inv>0)return false;
  if(characterUltimateInvincible())return false;
  if(passiveUltimateDodgeActive()){
    floaters.push({x:player.x,y:player.y-34,t:.42,text:"회피",color:"#b9f7ff"});
    player.inv=.12;
    return false;
  }
  if((player.skillBarrier||0)>0){
    const b=active("barrier");
    const loss=applyPlayerDamageMitigation(barrierHitLoss(b));
    player.skillBarrier=Math.max(0,player.skillBarrier-loss);
    const broken=player.skillBarrier<=0;
    player.barrierRegenT=broken?Math.max(player.barrierRegenT||0,barrierRegenDelay(b)):0;
    effects.push({kind:broken?"barrierBreak":"barrierHit",x:player.x,y:player.y,t:broken ? .5 : .28,maxT:broken ? .5 : .28,r:broken?72:54,color:broken?"#ff9fb7":"#9ee9ff"});
    floaters.push({x:player.x,y:player.y-38,t:.46,text:broken?"\uBCF4\uD638\uB9C9 \uD30C\uAD34":"\uBCF4\uD638\uB9C9",color:broken?"#ff9fb7":"#9ee9ff"});
    player.inv=.16;
    return false;
  }
  return true;
}

function requestHitStop(seconds,priority=false){
  const now=performance.now();
  if(!priority&&now<hitStopReadyAt)return;
  hitStop=Math.max(hitStop,seconds);
  hitStopReadyAt=now+(mobileControlsAvailable()?95:68);
}
function spawnHitSpark(x,y,angleValue,color="#fff1b8",strength=1,heavy=false){
  if(impactFxBudget<=0||!isVisibleWorld(x,y,90))return false;
  impactFxBudget--;
  effects.push({
    kind:"hitSpark",x,y,angle:angleValue,color,
    r:(heavy?32:20)*strength,t:heavy?.18:.12,maxT:heavy?.18:.12,
    heavy,seed:rnd(0,99)
  });
  return true;
}
function enemyHitFeedback(e,damage,fatal=false){
  if(!e||!Number.isFinite(damage)||damage<=0)return;
  const maxHp=Math.max(1,e.maxHp||damage);
  const ratio=damage/maxHp;
  const decisive=fatal&&(e.boss||e.namedEnemy||e.object);
  const heavy=fatal||ratio>=.12||damage>=Math.max(20,maxHp*.08);
  const a=Math.atan2(e.y-player.y,e.x-player.x);
  const showImpact=spawnHitSpark(e.x,e.y-(e.r||18)*.12,a,e.color||"#ffd56a",clamp(.8+ratio*1.8,.8,1.35),heavy);
  if(showImpact){
    e.impactDx=Math.cos(a);
    e.impactDy=Math.sin(a);
    e.impactMaxT=heavy?.18:.12;
    e.impactT=Math.max(e.impactT||0,e.impactMaxT);
    e.impactFlash=Math.max(e.impactFlash||0,heavy?.1:.065);
  }
  playSfx(heavy?"hitHeavy":"hitLight");
  if(heavy){
    const shakeAmount=decisive?7:e.boss?4:fatal?1.2:0;
    if(shakeAmount>0)shake=Math.max(shake,shakeAmount);
    if(decisive||e.boss){
      const freeze=decisive
        ?(mobileControlsAvailable()?.026:.04)
        :(mobileControlsAvailable()?.012:.018);
      requestHitStop(freeze,decisive);
    }
  }
}
function flushEnemyDamageFeedback(e,fatal=false){
  if(!e)return;
  const previous=Number.isFinite(e.feedbackHp)?e.feedbackHp:(Number.isFinite(e.maxHp)?e.maxHp:e.hp);
  if(e.hp>previous){
    e.feedbackHp=e.hp;
    return;
  }
  const damage=Math.max(0,previous-e.hp);
  e.feedbackHp=e.hp;
  if(damage>0)enemyHitFeedback(e,damage,fatal||e.hp<=0);
  else if(fatal)enemyHitFeedback(e,Math.max(1,(e.maxHp||1)*.2),true);
}
function flushEnemyDamageFeedbacks(){
  for(const e of enemies)flushEnemyDamageFeedback(e,false);
}
function nearestDamageSource(){
  let source=null,best=Infinity;
  for(const e of enemies){
    if(e.hp<=0||e.object)continue;
    const d=Math.hypot(e.x-player.x,e.y-player.y);
    if(d<best){best=d;source=e}
  }
  return source;
}
function playerHitFeedback(damage){
  if(!Number.isFinite(damage)||damage<=0)return;
  const source=nearestDamageSource();
  let dx=source?player.x-source.x:-(player.vx||player.face||1);
  let dy=source?player.y-source.y:-(player.vy||0);
  const len=Math.hypot(dx,dy)||1;
  dx/=len;dy/=len;
  const heavy=damage>=Math.max(12,player.maxHp*.12);
  player.hurtDx=dx;player.hurtDy=dy;
  player.hurtMaxT=heavy?.24:.18;
  player.hurtT=Math.max(player.hurtT||0,player.hurtMaxT);
  player.hurtFlash=Math.max(player.hurtFlash||0,heavy?.14:.1);
  playerDamagePulse=Math.max(playerDamagePulse,heavy?1:.7);
  playerDamageAngle=Math.atan2(dy,dx);
  floaters.push({x:player.x+rnd(-5,5),y:player.y-46,t:.58,text:`-${Math.max(1,Math.round(damage))}`,color:"#ff6b78"});
  spawnHitSpark(player.x,player.y-12,playerDamageAngle,"#ff7185",heavy?1.15:.9,heavy);
  playSfx(heavy?"playerHitHeavy":"playerHit");
  shake=Math.max(shake,heavy?10:6);
  requestHitStop(mobileControlsAvailable()?(heavy?.032:.022):(heavy?.05:.032),true);
  const now=performance.now();
  if(mobileControlsAvailable()&&navigator.vibrate&&now-lastDamageVibrationAt>220){
    navigator.vibrate(heavy?[18,24,12]:12);
    lastDamageVibrationAt=now;
  }
}

function unlockAudio(){
  if(audioCtx){
    if(audioCtx.state==="suspended")audioCtx.resume().catch(()=>{});
    if(paused&&overlayVisible(startOverlay)&&!gameOver)startSelectBgm();
    else if(!paused&&!gameOver)startGameBgm();
    return;
  }
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!AC)return;
  audioCtx=new AC();
  masterGain=audioCtx.createGain();
  masterGain.gain.value=sfxVolume();
  masterGain.connect(audioCtx.destination);
  if(audioCtx.state==="suspended")audioCtx.resume().catch(()=>{});
  if(paused&&overlayVisible(startOverlay)&&!gameOver)startSelectBgm();
  else if(!paused&&!gameOver)startGameBgm();
}
function attemptAudioAutoplay(){
  unlockAudio();
  if(audioCtx&&audioCtx.state==="suspended"){
    const retry=setInterval(()=>{
      if(!audioCtx||audioCtx.state==="running"){clearInterval(retry);startSelectBgm();return}
      audioCtx.resume().then(startSelectBgm).catch(()=>{});
    },600);
    setTimeout(()=>clearInterval(retry),5000);
  }
}
function startSelectBgm(){
  if(!audioCtx||selectBgmTimer||!overlayVisible(startOverlay)||gameOver)return;
  selectBgmStep=0;
  playSelectBgmStep();
  selectBgmTimer=setInterval(playSelectBgmStep,185);
}
function stopSelectBgm(){
  if(!selectBgmTimer)return;
  clearInterval(selectBgmTimer);
  selectBgmTimer=null;
}
function officeBossBgmActive(){
  return stageClearMode||bossVsCutscene.active||pendingBossVs||enemies.some(e=>e.boss);
}
function desiredOfficeBgmKey(){
  const sources=stageBgmSources[currentThemeId];
  if(!sources)return "";
  const mode=officeBossBgmActive()?"boss":"normal";
  return sources[mode]?`${currentThemeId}:${mode}`:"";
}
function officeBgmSourceForKey(key){
  const [theme,mode]=String(key||"").split(":");
  return stageBgmSources[theme]?.[mode]||"";
}
function stopOfficeBgm(){
  if(officeBgmAudio){
    officeBgmAudio.pause();
    officeBgmAudio.currentTime=0;
  }
  officeBgmAudio=null;
  officeBgmKey="";
}
function syncOfficeBgm(){
  const key=desiredOfficeBgmKey();
  if(!key){
    stopOfficeBgm();
    return false;
  }
  if(officeBgmKey!==key){
    stopOfficeBgm();
    const src=officeBgmSourceForKey(key);
    if(!src)return false;
    officeBgmAudio=new Audio(src);
    officeBgmAudio.loop=true;
    officeBgmAudio.volume=bgmVolume();
    officeBgmKey=key;
  }
  officeBgmAudio.volume=bgmVolume();
  if(officeBgmAudio.paused)officeBgmAudio.play().catch(()=>{});
  return true;
}
function startGameBgm(){
  if(!audioCtx||gameBgmTimer||gameOver)return;
  if(paused&&overlayVisible(startOverlay))return;
  gameBgmTheme=currentThemeId;
  gameBgmStep=0;
  playGameBgmStep();
  gameBgmTimer=setInterval(playGameBgmStep,150);
}
function stopGameBgm(){
  if(gameBgmTimer){
    clearInterval(gameBgmTimer);
    gameBgmTimer=null;
  }
  stopOfficeBgm();
}
function restartGameBgmForTheme(){
  if(!gameBgmTimer||gameOver)return;
  const officeKey=desiredOfficeBgmKey();
  if(gameBgmTheme===currentThemeId&&(!officeKey||officeBgmKey===officeKey))return;
  stopGameBgm();
  startGameBgm();
}
const stageBgmPatterns={
  office:{
    lead:[330,392,440,523,494,440,392,370,330,392,440,587,523,494,440,392],
    bass:[82,82,98,98,110,110,98,98,73,73,82,82,98,98,110,110],
    wave:"triangle",dur:.18,gain:.014,bassGain:.017,chord:1.5,noise:.006,noiseFreq:760,tick:.004,
    slide:i=>i%3===0?10:0
  },
  factory:{
    lead:[262,330,392,330,294,370,440,370,262,330,392,494,440,392,330,294],
    bass:[65,65,65,82,73,73,73,92,65,65,82,82,73,73,55,55],
    wave:"square",dur:.14,gain:.011,bassGain:.022,chord:2,noise:.012,noiseFreq:520,tick:.01,
    slide:i=>i%4===0?-8:0
  },
  bike:{
    lead:[392,494,587,659,587,494,440,392,440,523,659,784,659,587,523,440],
    bass:[98,98,123,123,110,110,98,98,110,110,147,147,123,123,110,110],
    wave:"sawtooth",dur:.12,gain:.01,bassGain:.014,chord:1.25,noise:.004,noiseFreq:2100,tick:.006,
    slide:i=>i%2===0?18:-12
  },
  logistics:{
    lead:[294,330,392,330,294,247,294,330,392,440,392,330,294,262,247,220],
    bass:[73,73,73,92,82,82,73,73,65,65,73,73,82,82,92,92],
    wave:"square",dur:.13,gain:.01,bassGain:.02,chord:1.5,noise:.01,noiseFreq:680,tick:.012,
    slide:i=>i%4===0?6:0
  },
  gym:{
    lead:[220,294,330,392,440,392,330,294,247,330,370,440,494,440,370,330],
    bass:[55,55,73,73,82,82,73,73,62,62,82,82,98,98,82,82],
    wave:"sawtooth",dur:.11,gain:.011,bassGain:.023,chord:2,noise:.014,noiseFreq:980,tick:.014,
    slide:i=>i%4<2?14:-10
  }
};
function playSelectBgmStep(){
  if(!audioCtx||!masterGain||!overlayVisible(startOverlay)||gameOver){stopSelectBgm();return}
  const notes=[392,494,587,740,659,587,494,440];
  const bass=[98,98,123,123,110,110,123,147];
  const i=selectBgmStep++%notes.length;
  playTone(notes[i],.2,"triangle",.016,0,0);
  playTone(notes[(i+2)%notes.length]*2,.1,"sine",.008,.045,0);
  if(i%2===0)playTone(bass[i],.24,"sine",.015,0,-6);
  if(i%8===0)playNoise(.025,.005,.02,1200);
}
function playGameBgmStep(){
  if(!audioCtx||!masterGain||gameOver){stopGameBgm();return}
  if(paused&&overlayVisible(startOverlay)){stopGameBgm();return}
  if(syncOfficeBgm())return;
  const theme=stageBgmPatterns[gameBgmTheme]||stageBgmPatterns.office;
  const synthBgmMul=.62;
  const lead=theme.lead,bass=theme.bass;
  const i=gameBgmStep++%lead.length;
  playTone(lead[i],theme.dur,theme.wave,theme.gain*synthBgmMul,0,theme.slide(i));
  if(i%2===0)playTone(bass[i%bass.length],.22,"sine",theme.bassGain*synthBgmMul,0,-6);
  if(theme.chord&&i%4===2)playTone(lead[i]*theme.chord,.1,"sine",.007*synthBgmMul,.045,0);
  if(i%8===0)playNoise(.025,theme.noise*synthBgmMul,.01,theme.noiseFreq);
  if(theme.tick&&i%8===4)playNoise(.018,theme.tick*synthBgmMul,.01,1600);
}
function playTone(freq,duration,type="sine",gain=.12,when=0,slide=0){
  if(!audioCtx||!masterGain)return;
  const t=audioCtx.currentTime+when;
  const osc=audioCtx.createOscillator();
  const g=audioCtx.createGain();
  osc.type=type;
  osc.frequency.setValueAtTime(freq,t);
  if(slide)osc.frequency.exponentialRampToValueAtTime(Math.max(30,freq+slide),t+duration);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(gain,t+.012);
  g.gain.exponentialRampToValueAtTime(.001,t+duration);
  osc.connect(g);g.connect(masterGain);
  osc.start(t);osc.stop(t+duration+.03);
}
function playNoise(duration,gain=.08,when=0,filterFreq=900){
  if(!audioCtx||!masterGain)return;
  const t=audioCtx.currentTime+when;
  const buffer=audioCtx.createBuffer(1,Math.max(1,Math.floor(audioCtx.sampleRate*duration)),audioCtx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length);
  const src=audioCtx.createBufferSource();
  const filter=audioCtx.createBiquadFilter();
  const g=audioCtx.createGain();
  filter.type="bandpass";filter.frequency.value=filterFreq;filter.Q.value=1.8;
  g.gain.setValueAtTime(gain,t);
  g.gain.exponentialRampToValueAtTime(.001,t+duration);
  src.buffer=buffer;src.connect(filter);filter.connect(g);g.connect(masterGain);
  src.start(t);src.stop(t+duration+.02);
}
function playSweep(start,end,duration,gain=.08,when=0,q=8){
  if(!audioCtx||!masterGain)return;
  const t=audioCtx.currentTime+when;
  const buffer=audioCtx.createBuffer(1,Math.max(1,Math.floor(audioCtx.sampleRate*duration)),audioCtx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length*.35);
  const src=audioCtx.createBufferSource();
  const filter=audioCtx.createBiquadFilter();
  const g=audioCtx.createGain();
  filter.type="bandpass";
  filter.Q.value=q;
  filter.frequency.setValueAtTime(start,t);
  filter.frequency.exponentialRampToValueAtTime(end,t+duration);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(gain,t+.01);
  g.gain.exponentialRampToValueAtTime(.001,t+duration);
  src.buffer=buffer;src.connect(filter);filter.connect(g);g.connect(masterGain);
  src.start(t);src.stop(t+duration+.02);
}
function playVoiceYell(){
  if(!audioCtx||!masterGain)return;
  const t=audioCtx.currentTime;
  const out=audioCtx.createGain();
  out.gain.setValueAtTime(0,t);
  out.gain.linearRampToValueAtTime(.22,t+.025);
  out.gain.exponentialRampToValueAtTime(.001,t+.24);
  out.connect(masterGain);
  for(const [freq,gain,detune] of [[185,.14,0],[370,.08,8],[555,.045,-7]]){
    const osc=audioCtx.createOscillator();
    osc.type="sawtooth";
    osc.frequency.setValueAtTime(freq,t);
    osc.frequency.exponentialRampToValueAtTime(freq*.72,t+.2);
    osc.detune.value=detune;
    const filter=audioCtx.createBiquadFilter();
    filter.type="bandpass";filter.frequency.value=720;filter.Q.value=2.4;
    const g=audioCtx.createGain();
    g.gain.value=gain;
    osc.connect(filter);filter.connect(g);g.connect(out);
    osc.start(t);osc.stop(t+.26);
  }
  playNoise(.12,.045,0,760);
}
function playFemaleBossDeath(){
  if(!audioCtx||!masterGain)return;
  const t=audioCtx.currentTime;
  const out=audioCtx.createGain();
  out.gain.setValueAtTime(0,t);
  out.gain.linearRampToValueAtTime(.18,t+.018);
  out.gain.exponentialRampToValueAtTime(.001,t+.62);
  out.connect(masterGain);
  for(const [freq,gain,delay] of [[720,.09,0],[960,.06,.018],[1280,.035,.035]]){
    const osc=audioCtx.createOscillator();
    const filter=audioCtx.createBiquadFilter();
    const g=audioCtx.createGain();
    osc.type="triangle";
    osc.frequency.setValueAtTime(freq,t+delay);
    osc.frequency.exponentialRampToValueAtTime(freq*.46,t+delay+.46);
    filter.type="bandpass";filter.frequency.setValueAtTime(1200,t+delay);filter.Q.value=5.2;
    g.gain.setValueAtTime(gain,t+delay);
    g.gain.exponentialRampToValueAtTime(.001,t+delay+.54);
    osc.connect(filter);filter.connect(g);g.connect(out);
    osc.start(t+delay);osc.stop(t+delay+.58);
  }
  playNoise(.18,.035,.04,2100);
  playSweep(1800,520,.34,.04,.12,9);
}
function playSfx(name){
  if(!audioCtx)return;
  const now=audioCtx.currentTime;
  const gap={
    selectMove:.055,selectConfirm:.2,hitLight:.075,hitHeavy:.13,playerHit:.14,playerHitHeavy:.2,golfThrow:.08,golfSpin:.18,golfReturn:.14,ultimateSwing:.2,bossDeath:.5,
    bossNagCast:.45,bossNagFire:.28,bossKickCast:.35,bossKickDash:.22,
    bossCoupon:.18,bubblePop:.08,iceBall:.09,iceShatter:.08,cheonHeatCast:.45,cheonHeatFire:.35,cheonBellyCast:.35,cheonBellyJump:.16,cheonBellyLand:.18,
    cultTalisman:.16,cultChant:.45,cultTotem:.42,cultHands:.45,cultCoffin:.65,
    gossipShot:.16,gossipDown:.34,gossipRevive:.5,gossipRumorCast:.45,gossipRumorDrop:.18,gossipTribunalCast:.45,gossipTribunalFire:.28,gossipSpin:.22,gossipDashCast:.35,gossipDash:.22
  }[name]||.05;
  if(sfxLast[name]&&now-sfxLast[name]<gap)return;
  sfxLast[name]=now;
  if(name==="hitLight"){
    playNoise(.028,.022,0,2400);
    playTone(310,.045,"triangle",.025,0,-70);
  }else if(name==="hitHeavy"){
    playNoise(.065,.048,0,1450);
    playTone(165,.09,"square",.042,0,-55);
    playSweep(760,260,.08,.026,0,5);
  }else if(name==="playerHit"||name==="playerHitHeavy"){
    const heavy=name==="playerHitHeavy";
    playNoise(heavy?.09:.055,heavy?.065:.042,0,900);
    playTone(heavy?120:170,heavy?.13:.08,"sawtooth",heavy?.052:.035,0,-45);
    playSweep(heavy?680:520,heavy?180:240,heavy?.12:.08,heavy?.034:.022,.015,4);
  }else if(name==="selectMove"){
    playTone(620,.055,"square",.05,0,260);
    playTone(1240,.045,"triangle",.026,.025,0);
    playNoise(.025,.012,0,2400);
  }else if(name==="selectConfirm"){
    playTone(440,.08,"square",.055,0,220);
    playTone(660,.1,"square",.05,.055,220);
    playTone(990,.16,"triangle",.045,.11,0);
    playNoise(.055,.025,.035,3200);
  }else if(name==="golfThrow"){
    playSweep(520,2600,.16,.12,0,10);
    playSweep(900,3600,.12,.07,.055,12);
    playNoise(.05,.025,0,2800);
  }else if(name==="golfSpin"){
    playSweep(620,4200,.22,.075,0,14);
    playSweep(1200,5200,.18,.055,.055,16);
    playSweep(900,3600,.16,.045,.11,12);
  }else if(name==="golfReturn"){
    playSweep(2600,620,.15,.1,0,10);
    playSweep(3600,900,.1,.055,.045,12);
  }else if(name==="ultimateSwing"){
    playNoise(.025,.22,0,3200);
    playTone(520,.42,"triangle",.18,.012,-110);
    playTone(1040,.34,"sine",.075,.018,-220);
    playTone(260,.48,"triangle",.09,.02,-70);
    playSweep(1800,520,.28,.075,.04,7);
    playNoise(.18,.045,.09,1400);
  }else if(name==="bossDeath"){
    playFemaleBossDeath();
  }else if(name==="gossipShot"){
    playSweep(740,2100,.11,.055,0,10);
    playTone(980,.07,"triangle",.026,.035,180);
    playNoise(.035,.018,0,2600);
  }else if(name==="gossipDown"){
    playTone(420,.14,"sawtooth",.045,0,-120);
    playTone(260,.2,"triangle",.035,.04,-80);
    playNoise(.08,.032,.02,900);
  }else if(name==="gossipRevive"){
    playSweep(360,1600,.24,.06,0,8);
    playTone(720,.16,"triangle",.045,.08,220);
    playNoise(.1,.024,.04,1900);
  }else if(name==="gossipRumorCast"){
    playVoiceYell();
    playTone(860,.18,"sawtooth",.044,.02,-130);
    playNoise(.12,.03,.035,2300);
  }else if(name==="gossipRumorDrop"){
    playSweep(1800,620,.14,.072,0,9);
    playNoise(.05,.035,0,2800);
  }else if(name==="gossipTribunalCast"){
    playVoiceYell();
    playTone(520,.2,"square",.045,0,160);
    playTone(780,.18,"triangle",.034,.04,120);
    playNoise(.1,.026,.02,1800);
  }else if(name==="gossipTribunalFire"){
    playSweep(1200,2600,.09,.064,0,12);
    playSweep(2000,900,.13,.052,.035,10);
    playNoise(.055,.036,0,2500);
  }else if(name==="gossipSpin"){
    playSweep(520,3400,.2,.07,0,13);
    playSweep(900,4200,.18,.055,.06,15);
  }else if(name==="gossipDashCast"){
    playTone(220,.24,"sawtooth",.055,0,90);
    playNoise(.08,.024,.02,1100);
  }else if(name==="gossipDash"){
    playSweep(420,2400,.16,.11,0,9);
    playNoise(.09,.065,.015,1500);
  }else if(name==="bossNagCast"){
    playVoiceYell();
    playTone(760,.18,"sawtooth",.045,.02,-180);
    playNoise(.12,.026,.04,1800);
  }else if(name==="bossNagFire"){
    playSweep(1800,520,.22,.11,0,10);
    playSweep(2600,900,.16,.07,.035,12);
    playNoise(.08,.055,0,2600);
  }else if(name==="bossKickCast"){
    playTone(180,.28,"sawtooth",.08,0,80);
    playTone(360,.2,"triangle",.045,.04,120);
    playNoise(.08,.026,.02,900);
  }else if(name==="bossKickDash"){
    playSweep(420,2400,.18,.12,0,9);
    playNoise(.11,.075,.015,1400);
  }else if(name==="iceBall"){
    playSweep(520,2400,.13,.06,0,11);
    playTone(1180,.1,"triangle",.035,.02,160);
    playNoise(.045,.018,0,3600);
  }else if(name==="iceShatter"){
    playTone(1960,.08,"triangle",.045,0,-260);
    playTone(2860,.055,"sine",.028,.015,-420);
    playNoise(.1,.055,0,5200);
  }else if(name==="bubblePop"){
    playSweep(2200,480,.085,.045,0,5);
    playTone(2800,.025,"sine",.018,0,0);
    playNoise(.045,.018,.005,4200);
  }else if(name==="bossCoupon"){
    playSweep(900,2600,.1,.052,0,12);
    playTone(1320,.055,"square",.026,.025,0);
    playNoise(.035,.018,0,3200);
  }else if(name==="cheonHeatCast"){
    playTone(110,.5,"sawtooth",.08,0,70);
    playSweep(420,1400,.42,.055,.04,6);
    playNoise(.32,.035,.02,520);
  }else if(name==="cheonHeatFire"){
    playNoise(.24,.12,0,620);
    playSweep(620,2600,.32,.075,0,8);
    playTone(220,.42,"triangle",.055,.02,-60);
  }else if(name==="cheonBellyCast"){
    playTone(95,.38,"sawtooth",.09,0,45);
    playTone(190,.28,"triangle",.05,.05,35);
    playNoise(.12,.035,.03,700);
  }else if(name==="cheonBellyJump"){
    playSweep(160,900,.16,.095,0,6);
    playNoise(.08,.045,.02,1200);
  }else if(name==="cheonBellyLand"){
    playTone(72,.34,"sawtooth",.16,0,-22);
    playTone(144,.26,"triangle",.09,.015,-35);
    playNoise(.2,.13,0,360);
  }else if(name==="cultTalisman"){
    playSweep(1400,520,.14,.055,0,10);
    playTone(880,.11,"square",.035,.015,-90);
    playNoise(.04,.018,0,2600);
  }else if(name==="cultChant"){
    playTone(180,.5,"triangle",.055,0,35);
    playTone(270,.46,"sine",.035,.04,-20);
    playSweep(520,1220,.38,.04,.05,4);
    playNoise(.18,.022,.04,900);
  }else if(name==="cultTotem"){
    playTone(96,.34,"sawtooth",.09,0,-35);
    playSweep(360,980,.28,.06,.03,5);
    playNoise(.16,.055,0,520);
  }else if(name==="cultHands"){
    playNoise(.2,.075,0,760);
    playSweep(260,820,.3,.055,0,6);
    playTone(130,.28,"triangle",.045,.035,40);
  }else if(name==="cultCoffin"){
    playTone(74,.58,"sawtooth",.12,0,-20);
    playTone(148,.42,"triangle",.06,.06,-35);
    playNoise(.28,.06,.02,480);
  }
}

function loop(now){
  const dt=Math.min((now-last)/1000,.033);last=now;
  if(!paused){
    if(hitStop>0){
      hitStop=Math.max(0,hitStop-dt);
      draw();
    }else{
      update(dt);
      draw();
    }
  }
  requestAnimationFrame(loop);
}


function update(dt){
  const playerHpBefore=player.hp;
  impactFxBudget=mobileControlsAvailable()?1:3;
  updateMobileControlsUi();
  elapsed+=dt;player.frame+=dt*6.5;shake=Math.max(0,shake-dt*18);player.inv=Math.max(0,player.inv-dt);player.slowT=Math.max(0,(player.slowT||0)-dt);
  player.hurtT=Math.max(0,(player.hurtT||0)-dt);
  player.hurtFlash=Math.max(0,(player.hurtFlash||0)-dt);
  playerDamagePulse=Math.max(0,playerDamagePulse-dt*3.7);
  updatePose(dt);
  player.attackTimer=Math.max(0,(player.attackTimer||0)-dt);
  updateStageClear(dt);
  updateBossVsCutscene(dt);
  updateUltimate(dt);
  updateWaveState(dt);
  if(stageClearMode){
    shots.length=0;
    bossShots.length=0;
    floaters.length=0;
    updateEffects(dt);
  }else if(bossVsCutscene.active){
    player.moving=false;
    player.vx=0;
    player.vy=0;
    shots.length=0;
    bossShots.length=0;
    updateEffects(dt);
  }else{
    movePlayer(dt);spawn(dt);updateEnemies(dt);updateBossShots(dt);updateSkills(dt);updateShots(dt);updateEffects(dt);flushEnemyDamageFeedbacks();collectGems(dt);trimMobileTransientLoad();
  }
  if(player.hp<playerHpBefore)playerHitFeedback(playerHpBefore-player.hp);
  hpFill.style.width=clamp(player.hp/player.maxHp*100,0,100)+"%";
  const xpPct=clamp(player.xp/player.next*100,0,100)+"%";
  xpFill.style.width=xpPct;
  if(bottomXpFill)bottomXpFill.style.width=xpPct;
  spFill.style.width=(ultimateChargeRatio()*100)+"%";
  levelText.textContent=`Lv. ${player.level} 분석가`;
  killText.textContent=`처리 ${kills}`;
  const m=Math.floor(elapsed/60),s=Math.floor(elapsed%60);timeText.textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  const theme=themeForStage(currentStage);
  if(stageHudText)stageHudText.textContent=`${currentStage} STAGE`;
  if(mapHudText)mapHudText.textContent=theme.name;
  renderSkillHud();
  if(player.hp<=0&&!gameOver){gameOver=true;paused=true;openEnd()}
}

function updateStageClear(dt){
  if(stageClearBanner.t>0)stageClearBanner.t=Math.max(0,stageClearBanner.t-dt);
  if(stageBanner.t>0)stageBanner.t=Math.max(0,stageBanner.t-dt);
  const target=themeBlendTarget();
  outdoorBlend=approach(outdoorBlend,target.outdoor,dt*OUTDOOR_BLEND_SPEED);
  factoryBlend=approach(factoryBlend,target.factory,dt*OUTDOOR_BLEND_SPEED);
  logisticsBlend=approach(logisticsBlend,target.logistics,dt*OUTDOOR_BLEND_SPEED);
  gymBlend=approach(gymBlend,target.gym,dt*OUTDOOR_BLEND_SPEED);
  estechBlend=approach(estechBlend,target.estech,dt*OUTDOOR_BLEND_SPEED);
  if(stageClearMode&&stageClearTimer>0){
    stageClearTimer=Math.max(0,stageClearTimer-dt);
    if(stageClearTimer<=0)finishBossClear();
  }
}

function finishBossClear(){
  stageClearMode=false;
  const nextStage=(currentStage||1)+1;
  showStageBanner(nextStage);
  postBossPower=nextStage>=2?1:0;
  if(nextStage===2){
    stage2Start=elapsed;
    wave2.started=false;
    wave2.active=false;
    wave2.done=false;
    wave2.start=0;
    wave2.banner=0;
  }else if(nextStage>=3){
    stage3Start=elapsed;
    wave2.active=false;
    wave2.done=true;
    wave3.started=false;
    wave3.active=false;
    wave3.done=false;
    wave3.start=0;
    wave3.banner=0;
  }
  spawnTimer=0;
  player.inv=Math.max(player.inv,.8);
  if(arenaFence){
    arenaFence.t=Math.min(arenaFence.t,1);
    arenaFence.clearing=true;
  }
  show(`${nextStage} STAGE: ${themeForStage(nextStage).name} 진입`);
}

function pickStageBossId(stage=currentStage){
  return themeForStage(stage).bossId;
}
function beginBossVsCutscene(stage=currentStage,bossId=null){
  if(typeof stage==="string"){bossId=stage;stage=currentStage}
  stage=Math.max(1,stage||currentStage||1);
  bossId=bossId||pickStageBossId(stage);
  if(bossVsCutscene.active||bossStageSpawned[stage]||enemies.some(e=>e.boss))return;
  bossVsCutscene={active:true,t:2.45,maxT:2.45,bossId,stage};
  shots.length=0;
  bossShots.length=0;
  player.moving=false;
  player.vx=0;
  player.vy=0;
  player.dir="side";
  player.face=1;
}

function updateBossVsCutscene(dt){
  if(!bossVsCutscene.active)return;
  bossVsCutscene.t=Math.max(0,bossVsCutscene.t-dt);
  if(bossVsCutscene.t<=0){
    bossVsCutscene.active=false;
    if(bossVsCutscene.bossId==="parkSejunFamily")spawnBoss6(bossVsCutscene.stage);
    else if(bossVsCutscene.bossId==="emotionCeo")spawnBoss5(bossVsCutscene.stage);
    else if(bossVsCutscene.bossId==="cultFanatic")spawnBoss3(bossVsCutscene.stage);
    else if(bossVsCutscene.bossId==="cheonSangmu")spawnBoss2(bossVsCutscene.stage);
    else if(bossVsCutscene.bossId==="gossipGroup")spawnBoss4(bossVsCutscene.stage);
    else spawnBoss1(bossVsCutscene.stage);
  }
}

function movePlayer(dt){
  let x=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0)+(mobileInput.x||0);
  let y=(keys.s||keys.arrowdown?1:0)-(keys.w||keys.arrowup?1:0)+(mobileInput.y||0);
  const geontaekSwingFinished=player.characterId==="geontaek"&&player.ultimateFired;
  if(player.ultimateTimer>0&&player.characterId!=="sangil"&&player.characterId!=="jiin"&&player.characterId!=="homin"&&!geontaekSwingFinished){player.moving=false;player.vx=0;player.vy=0;return}
  if(player.action==="clear"&&player.actionTimer>0){player.moving=false;player.vx=0;player.vy=0;return}
  if(player.action&&player.actionTimer>0&&!(x||y)){player.moving=false;player.vx=0;player.vy=0;return}
  if((x||y)&&player.action){player.action=null;player.actionTimer=0}
  player.moving=!!(x||y);
  player.vx=0;player.vy=0;
  if(x||y){
    const l=Math.hypot(x,y);x/=l;y/=l;
    player.vx=x;player.vy=y;
    if(Math.abs(x)>Math.abs(y)){player.dir="side";player.face=x>0?1:-1}
    else{player.dir=y>0?"down":"up"}
  }
  const slowMul=player.slowT>0?.46:1;
  const ultimateMoveMul=player.ultimateTimer>0?(player.characterId==="jiin"?1.75:player.characterId==="sangil"?1.55:player.characterId==="homin"?.45:1):1;
  const moveSpeed=(player.speed+playerMoveBonus())*ultimateMoveMul;
  player.x=clamp(player.x+x*moveSpeed*slowMul*dt,20,world.w-20);
  player.y=clamp(player.y+y*moveSpeed*slowMul*dt,20,world.h-20);
  if(arenaFence){
    player.x=clamp(player.x,arenaFence.x+28,arenaFence.x+arenaFence.w-28);
    player.y=clamp(player.y,arenaFence.y+28,arenaFence.y+arenaFence.h-28);
  }
}

function triggerPose(action,duration){
  player.action=action;
  player.actionTimer=duration;
  player.actionDuration=duration;
}

function updatePose(dt){
  if(!player.action)return;
  player.actionTimer-=dt;
  if(player.actionTimer<=0){
    player.action=null;
    player.actionTimer=0;
    player.actionDuration=0;
    if(stageClearMode){
      player.dir="down";
      player.face=1;
      player.moving=false;
      player.vx=0;
      player.vy=0;
    }
  }
}

function triggerStageClearPose(){
  clearPlayerAttackState();
  triggerPose("clear",1.35);
  updateUltimateButton();
  player.inv=Math.max(player.inv,1.8);
  spawnTimer=Math.max(spawnTimer,1.2);
  show("업무 구간 정리 완료");
}

function beginBossClear(b){
  stageClearMode=true;
  const clearText=b.id==="parkSejunFamily"?"박세준과 서호서로~~~ 컷 !!!":b.id==="emotionCeo"?"사장님~~~ 컷 !!!":b.id==="gossipGroup"?"뒷담화꾼~~~ 컷 !!!":b.id==="cultFanatic"?"광신도~~~ 컷 !!!":b.id==="cheonSangmu"?"천상무~~~ 컷 !!!":"주대리~~~ 컷 !!!";
  const clearColor=b.id==="parkSejunFamily"?"#55d9ff":b.id==="emotionCeo"?"#69d7ff":b.id==="gossipGroup"?"#ff7ad8":b.id==="cultFanatic"?"#b56cff":b.id==="cheonSangmu"?"#ffd15a":"#ff5c78";
  stageClearBanner={t:1.65,maxT:1.65,text:clearText};
  playSfx("bossDeath");
  shots.length=0;
  bossShots.length=0;
  clearPlayerAttackState();
  clearBossTelegraphs();
  for(let i=effects.length-1;i>=0;i--){
    if(effects[i].kind==="bossNagBlast"||effects[i].kind==="bossStampBurst"||effects[i].kind==="bossKickTrail"||effects[i].kind==="bossQuote")effects.splice(i,1);
  }
  triggerPose("clear",2.3);
  player.dir="down";
  player.face=1;
  player.moving=false;
  player.vx=0;
  player.vy=0;
  player.inv=Math.max(player.inv,3);
  spawnTimer=9999;
  stageClearTimer=3.05;
  if(b.id!=="gossipGroup")effects.push({kind:"bossFall",bossId:b.id,x:b.x,y:b.y,row:b.x<player.x?1:0,t:1.7,maxT:1.7,color:clearColor});
  effects.push({kind:"bossDeath",x:b.x,y:b.y,r:b.id==="emotionCeo"?126:b.id==="cheonSangmu"?128:b.id==="cultFanatic"?120:b.id==="gossipGroup"?140:112,t:1.35,maxT:1.35,color:clearColor});
  shake=18;
}

function waveTargetCount(stage=currentStage){
  const s=clamp(stage||1,1,20);
  return Math.round(18+s*9+Math.max(0,s-2)*5);
}
function prepareWave(wave,stage=currentStage){
  wave.spawned=0;
  wave.target=waveTargetCount(stage);
  wave.cleanupT=0;
}
function waveCanFinish(wave){
  if(!wave.active)return false;
  if((wave.spawned||0)<(wave.target||waveTargetCount(currentStage)))return false;
  return !enemies.some(e=>e.waveMob&&e.hp>0);
}

function updateWaveState(dt){
  if(!wave1.started&&elapsed>=wave1.triggerAt){
    wave1.started=true;
    wave1.active=true;
    wave1.start=elapsed;
    prepareWave(wave1,1);
    wave1.banner=2.4;
    spawnTimer=0;
    shake=12;
    show("1 WAVE: 울음 보고서 쇄도");
  }
  if(wave1.banner>0)wave1.banner=Math.max(0,wave1.banner-dt);
  if(wave2.banner>0)wave2.banner=Math.max(0,wave2.banner-dt);
  if(wave3.banner>0)wave3.banner=Math.max(0,wave3.banner-dt);
  if(arenaFence){
    if(arenaFence.clearing){
      arenaFence.t-=dt*2.2;
      if(arenaFence.t<=0)arenaFence=null;
    }else arenaFence.t+=dt;
  }
  if(pendingBossVs&&arenaFence&&arenaFence.t>=1.1){
    pendingBossVs=false;
    beginBossVsCutscene();
  }
  if(wave1.active&&elapsed-wave1.start>=7&&waveCanFinish(wave1)){
    wave1.active=false;
    wave1.done=true;
    spawnTimer=9999;
    createArenaFence();
    pendingBossVs=true;
    show("1 WAVE 보스 등장: 주대리");
  }
  if(postBossPower&&!wave2.started&&!wave2.done&&stage2Start>0&&elapsed-stage2Start>=wave2.triggerAt){
    wave2.started=true;
    wave2.active=true;
    wave2.start=elapsed;
    prepareWave(wave2,2);
    wave2.banner=2.4;
    spawnTimer=0;
    shake=12;
    show("2 WAVE: 자전거도로 진상 러시");
  }
  if(wave2.active&&elapsed-wave2.start>=8&&waveCanFinish(wave2)){
    wave2.active=false;
    wave2.done=true;
    spawnTimer=9999;
    createArenaFence();
    pendingBossVs=true;
    show("2 WAVE 보스 구역 형성");
  }
  if(currentStage>=3&&!wave3.started&&!wave3.done&&stage3Start>0&&elapsed-stage3Start>=wave3.triggerAt){
    wave3.started=true;
    wave3.active=true;
    wave3.start=elapsed;
    prepareWave(wave3,currentStage);
    wave3.banner=2.4;
    spawnTimer=0;
    shake=12;
    show(activeTheme().id==="estech"?"6 WAVE: 배전반 과부하 발생":"3 WAVE: 광신도 공장 난입");
  }
  if(wave3.active&&elapsed-wave3.start>=9&&waveCanFinish(wave3)){
    wave3.active=false;
    wave3.done=true;
    spawnTimer=9999;
    createArenaFence();
    pendingBossVs=true;
    show("3 WAVE 보스 구역 형성");
  }
}

function bossStageScale(stage){
  stage=Math.max(1,stage||1);
  const t=stage-1;
  return {
    hp:.74+t*.31+t*t*.035,
    dmg:.78+t*.13,
    spd:.9+t*.045,
    cd:clamp(1.2-t*.1,.74,1.2)
  };
}
function bossCd(b,base){
  return base*(b?.cdScale||1);
}
function spawnBoss1(stage=currentStage){
  if(bossStageSpawned[stage])return;
  bossStageSpawned[stage]=true;
  boss1Spawned=true;
  const scale=bossStageScale(stage);
  const x=arenaFence?arenaFence.x+arenaFence.w/2:player.x+260;
  const y=arenaFence?arenaFence.y+90:player.y-260;
  const hp=Math.floor(1800*scale.hp);
  enemies.push({
    id:"juDaeri",name:"주대리",boss:true,stage,x,y,r:30,size:30,drawSize:96,
    hp,maxHp:hp,spd:96*scale.spd,dmg:Math.floor(16*scale.dmg),xp:28+stage*6,slow:0,hit:0,
    state:"intro",stateT:1.65,attackCd:1.35*scale.cd,patternCd:2.5*scale.cd,cdScale:scale.cd,dir:{x:0,y:1},
    phase:0,inv:1.2
  });
  effects.push({kind:"bossIntro",x,y,t:1.55,maxT:1.55,r:110,color:"#ff4f64"});
  effects.push({kind:"bossQuote",x,y:y-98,text:"내가 시키는 대로만 하시라구요 !!",t:1.35,maxT:1.35,color:"#fff8d6"});
  shake=14;
}

function spawnBoss2(stage=currentStage){
  if(bossStageSpawned[stage])return;
  bossStageSpawned[stage]=true;
  boss2Spawned=true;
  const scale=bossStageScale(stage);
  const x=arenaFence?arenaFence.x+arenaFence.w/2:player.x+260;
  const y=arenaFence?arenaFence.y+100:player.y-260;
  const hp=Math.floor(2400*scale.hp);
  enemies.push({
    id:"cheonSangmu",name:"횡령을 일삼는 천상무",boss:true,stage,x,y,r:34,size:34,drawSize:108,
    hp,maxHp:hp,spd:86*scale.spd,dmg:Math.floor(18*scale.dmg),xp:40+stage*7,slow:0,hit:0,
    state:"intro",stateT:1.45,attackCd:1.05*scale.cd,patternCd:2.2*scale.cd,cdScale:scale.cd,dir:{x:0,y:1},
    phase:0,inv:1.2,bellyJumps:0
  });
  effects.push({kind:"bossIntro",x,y,t:1.55,maxT:1.55,r:125,color:"#ffd15a"});
  effects.push({kind:"bossQuote",x,y:y-104,text:"하핫! 올해도 상품권이 그득하구만!",t:1.35,maxT:1.35,color:"#fff0a8"});
  shake=14;
}

function spawnBoss3(stage=currentStage){
  if(bossStageSpawned[stage])return;
  bossStageSpawned[stage]=true;
  const scale=bossStageScale(stage);
  const x=arenaFence?arenaFence.x+arenaFence.w/2:player.x+260;
  const y=arenaFence?arenaFence.y+100:player.y-260;
  const hp=Math.floor(2200*scale.hp);
  enemies.push({
      id:"cultFanatic",name:"편집비 먹튀한 광신도",boss:true,stage,x,y,r:42,size:42,drawSize:150,
    hp,maxHp:hp,spd:92*scale.spd,dmg:Math.floor(16*scale.dmg),xp:44+stage*7,slow:0,hit:0,
    state:"intro",stateT:1.45,attackCd:.85*scale.cd,patternCd:2.0*scale.cd,cdScale:scale.cd,dir:{x:0,y:1},
    phase:0,inv:1.2,coffinUsed:false
  });
  effects.push({kind:"bossIntro",x,y,t:1.55,maxT:1.55,r:124,color:"#b56cff"});
  effects.push({kind:"bossQuote",x,y:y-104,text:"편집비? 믿음으로 퉁쳐요!",t:1.45,maxT:1.45,color:"#fff0a8"});
  shake=14;
}

function spawnBoss4(stage=currentStage){
  if(bossStageSpawned[stage])return;
  bossStageSpawned[stage]=true;
  const scale=bossStageScale(stage);
  const cx=arenaFence?arenaFence.x+arenaFence.w/2:player.x+260;
  const cy=arenaFence?arenaFence.y+arenaFence.h*.32:player.y-260;
  const group={id:"gossip",cx,cy,mode:"intro",modeT:1.35,patternCd:2.2*scale.cd,cdScale:scale.cd,phase:0,spinAngle:0,spinVx:0,spinVy:0,lastUpdate:-1,spinHitCd:0};
  const defs=[
    {id:"gossipShort",name:"단발 뒷담화꾼",idx:0,ox:-54,oy:30,hp:980,dmg:12,drawSize:102,color:"#ff8ad8"},
    {id:"gossipLong",name:"장발 뒷담화꾼",idx:1,ox:54,oy:30,hp:1040,dmg:12,drawSize:106,color:"#c188ff"},
    {id:"gossipMale",name:"악질 모함남",idx:2,ox:0,oy:-38,hp:1450,dmg:16,drawSize:108,color:"#ffd15a"}
  ];
  for(const d of defs){
    const hp=Math.floor(d.hp*scale.hp);
    enemies.push({
      id:d.id,name:d.name,boss:true,bossGroup:"gossip",stage,group,memberIndex:d.idx,
      x:cx+d.ox,y:cy+d.oy,r:27,size:27,drawSize:d.drawSize,
      hp,maxHp:hp,spd:104*scale.spd,dmg:Math.floor(d.dmg*scale.dmg),xp:20+stage*5,
      slow:0,hit:0,inv:1.2,dir:{x:0,y:1},attackCd:(.8+d.idx*.42)*scale.cd,cdScale:scale.cd,color:d.color,
      projectileDmg:Math.floor((8+d.idx*2)*scale.dmg),projectileSpeed:390+stage*12
    });
  }
  effects.push({kind:"bossIntro",x:cx,y:cy,t:1.55,maxT:1.55,r:142,color:"#ff7ad8"});
  effects.push({kind:"bossQuote",x:cx,y:cy-118,text:"우리끼리만 아는 얘기야.",t:1.45,maxT:1.45,color:"#ffe1f5"});
  shake=14;
}

function spawnBoss5(stage=currentStage){
  if(bossStageSpawned[stage])return;
  bossStageSpawned[stage]=true;
  const scale=bossStageScale(stage);
  const x=arenaFence?arenaFence.x+arenaFence.w/2:player.x+260;
  const y=arenaFence?arenaFence.y+100:player.y-260;
  const hp=Math.floor(2600*scale.hp);
  enemies.push({
    id:"emotionCeo",name:"감정쓰레기통 찾는 사장",boss:true,stage,x,y,r:36,size:36,drawSize:126,
    hp,maxHp:hp,spd:82*scale.spd,dmg:Math.floor(17*scale.dmg),xp:50+stage*8,slow:0,hit:0,
    state:"intro",stateT:1.45,attackCd:.55*scale.cd,patternCd:1.65*scale.cd,cdScale:scale.cd,dir:{x:0,y:1},
    phase:0,inv:1.2,tearBurstLeft:0,tearBurstT:0
  });
  effects.push({kind:"bossIntro",x,y,t:1.55,maxT:1.55,r:132,color:"#69d7ff"});
  effects.push({kind:"bossQuote",x,y:y-112,text:"사장은 너무 외로워 ㅠㅠ",t:1.55,maxT:1.55,color:"#e7f8ff"});
  shake=14;
}

function spawnBoss6(stage=currentStage){
  if(bossStageSpawned[stage])return;
  bossStageSpawned[stage]=true;
  const scale=bossStageScale(stage),cx=arenaFence?arenaFence.x+arenaFence.w/2:player.x+260,cy=arenaFence?arenaFence.y+arenaFence.h*.34:player.y-250;
  const group={id:"parkSejunFamily",cx,cy,guardAlive:true,phase:1};
  const shieldHp=Math.floor(1850*scale.hp),bodyHp=Math.floor(1250*scale.hp);
  enemies.push({id:"parkSejunGuard",name:"박세준 쉴드",object:true,familyRole:"father",group,x:cx,y:cy,r:38,size:38,drawSize:126,hp:shieldHp,maxHp:shieldHp,shieldMax:shieldHp,bodyHp,spd:78*scale.spd,dmg:Math.floor(18*scale.dmg),cdScale:scale.cd,inv:1.1,hit:0,state:"shield",dir:{x:0,y:1}});
  const defs=[
    {id:"sejunArtistSon",name:"첫째 서호",familyRole:"artist",memberIndex:0,x:cx-90,y:cy+100,hp:1500,dmg:11,color:"#ff69ae"},
    {id:"sejunTaekwondoSon",name:"둘째 서로",familyRole:"taekwondo",memberIndex:1,x:cx+90,y:cy+100,hp:1750,dmg:18,color:"#55bfff"}
  ];
  for(const d of defs){const hp=Math.floor(d.hp*scale.hp);enemies.push({...d,boss:true,bossGroup:"estechFamilyChild",group,stage,r:28,size:28,drawSize:108,hp,maxHp:hp,spd:130*scale.spd,dmg:Math.floor(d.dmg*scale.dmg),xp:40+stage*6,slow:0,hit:0,inv:1.2,attackCd:1.2*scale.cd,state:"idle",stateT:0,cdScale:scale.cd,dir:{x:0,y:1}})}
  effects.push({kind:"bossIntro",x:cx,y:cy,t:1.55,maxT:1.55,r:150,color:"#55d9ff"});effects.push({kind:"bossQuote",x:cx,y:cy-140,text:"아들들은 아빠가 지킨다!",t:1.7,maxT:1.7,color:"#e9fbff"});shake=14;
}

function updateParkSejunShield(b,dt){
  const a=angle(b,player),d=dist(b,player),slow=b.slow>0?.38:1;b.dir={x:Math.cos(a),y:Math.sin(a)};
  if(d>360){b.x+=Math.cos(a)*b.spd*slow*dt;b.y+=Math.sin(a)*b.spd*slow*dt}else if(d<235){b.x-=Math.cos(a)*b.spd*.7*slow*dt;b.y-=Math.sin(a)*b.spd*.7*slow*dt}
  b.x+=Math.cos(a+Math.PI/2)*Math.sin(elapsed*.9)*b.spd*.18*dt;b.y+=Math.sin(a+Math.PI/2)*Math.sin(elapsed*.9)*b.spd*.18*dt;
  b.group.cx=b.x;b.group.cy=b.y;
  if(arenaFence){b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r)}
}

function beginEstechKick(b,shortWarn=false){
  const a=angle(b,player),warn=shortWarn?.28:.58;
  b.state="kickWarn";b.stateT=warn;b.kickAngle=a;b.attackCd=99;
  effects.push({kind:"bossLineTelegraph",x:b.x,y:b.y,angle:a,len:360,wide:54,t:warn,maxT:warn,color:"#ff304f"});
}

function fireEstechArt(b,a){
  const palette=["#f04f88","#3f9fdb","#f0b83f","#55ad73","#7656bc"],count=2+Math.floor(Math.random()*2);
  for(let i=0;i<count;i++){const aa=a+(i-(count-1)/2)*.18+rnd(-.035,.035),spd=rnd(310,360),kind=Math.random()<.58?"paintStroke":"colorPencil";bossShots.push({kind,x:b.x+Math.cos(aa)*18,y:b.y-10+Math.sin(aa)*18,vx:Math.cos(aa)*spd,vy:Math.sin(aa)*spd,r:kind==="paintStroke"?10:7,life:4,dmg:b.dmg,spin:rnd(0,Math.PI*2),color:palette[Math.floor(Math.random()*palette.length)],hitText:kind==="paintStroke"?"물감 붓자국":"색연필 낙서"})}
}

function estechChildGuardSpot(child,guard){
  const towardPlayer=angle(guard,player),back=towardPlayer+Math.PI;
  const side=child.familyRole==="artist"?-1:1,spread=58,backDist=92;
  return {x:guard.x+Math.cos(back)*backDist+Math.cos(back+Math.PI/2)*spread*side,y:guard.y+Math.sin(back)*backDist+Math.sin(back+Math.PI/2)*spread*side};
}

function moveEstechChildToGuardSpot(child,guard,dt){
  const spot=estechChildGuardSpot(child,guard),dx=spot.x-child.x,dy=spot.y-child.y,d=Math.hypot(dx,dy),speed=(child.spd||130)*2.25;
  child.guardX=spot.x;child.guardY=spot.y;
  if(d>1){const step=Math.min(d,speed*dt);child.x+=dx/d*step;child.y+=dy/d*step}
}

function updateEstechFamilyBoss(b,dt){
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.stateT=Math.max(0,(b.stateT||0)-dt);b.attackCd-=dt;
  const guard=enemies.find(e=>e.id==="parkSejunGuard"&&e.group===b.group&&e.hp>0);b.group.guardAlive=!!guard;
  if(guard)b.inv=Math.max(b.inv||0,.14);else b.inv=Math.max(0,(b.inv||0)-dt);
  const a=angle(b,player),d=dist(b,player),slow=b.slow>0?.38:1;b.dir={x:Math.cos(a),y:Math.sin(a)};
  if(guard&&b.state!=="kickDash"&&b.state!=="kickWarn"&&b.state!=="spinReturn")moveEstechChildToGuardSpot(b,guard,dt);
  if(b.familyRole==="artist"){
    if(!guard){
      if(d>360){b.x+=Math.cos(a)*b.spd*.68*slow*dt;b.y+=Math.sin(a)*b.spd*.68*slow*dt}else if(d<225){b.x-=Math.cos(a)*b.spd*.58*slow*dt;b.y-=Math.sin(a)*b.spd*.58*slow*dt}
      const strafe=Math.sin(elapsed*1.4+b.memberIndex)*b.spd*.28*dt;b.x+=Math.cos(a+Math.PI/2)*strafe;b.y+=Math.sin(a+Math.PI/2)*strafe;
    }
    if(b.attackCd<=0){fireEstechArt(b,a);b.attackCd=bossCd(b,guard?1.75:1.55)}
  }else{
    if(b.state==="kickWarn"&&b.stateT<=0){b.state="kickDash";b.stateT=.3;b.dashX=Math.cos(b.kickAngle);b.dashY=Math.sin(b.kickAngle);b.kickHit=false}
    if(b.state==="kickDash"){
      b.x+=b.dashX*720*dt;b.y+=b.dashY*720*dt;
      if(!b.kickHit&&dist(b,player)<b.r+player.r+22&&playerCanTakeDamage()){player.hp-=b.dmg;player.inv=.72;b.kickHit=true;shake=10;floaters.push({x:player.x,y:player.y-30,t:.65,text:`태권도 ${b.kickTotal-b.kicksLeft+1}단`,color:"#ff6b78"})}
      if(b.stateT<=0){b.kicksLeft--;if(b.kicksLeft>0)beginEstechKick(b,true);else{const spot=guard?estechChildGuardSpot(b,guard):{x:b.returnX,y:b.returnY};b.returnX=spot.x;b.returnY=spot.y;b.state="spinReturn";b.stateT=.48;b.spinReturnT=.48;b.spinFromX=b.x;b.spinFromY=b.y;b.attackCd=bossCd(b,guard?1.65:1.45)}}
    }else if(b.state==="kickWarn"){
      // The clean telegraph holds the attack direction.
    }else if(b.state==="spinReturn"){
      if(guard){const spot=estechChildGuardSpot(b,guard);b.returnX=spot.x;b.returnY=spot.y}
      const p=1-b.stateT/(b.spinReturnT||.48),ease=1-Math.pow(1-clamp(p,0,1),3);
      b.x=b.spinFromX+(b.returnX-b.spinFromX)*ease;b.y=b.spinFromY+(b.returnY-b.spinFromY)*ease;
      if(b.stateT<=0){b.x=b.returnX;b.y=b.returnY;b.state="idle"}
    }else{
      if(!guard){
        if(d>250){b.x+=Math.cos(a)*b.spd*.82*slow*dt;b.y+=Math.sin(a)*b.spd*.82*slow*dt}else if(d<150){b.x-=Math.cos(a)*b.spd*.55*slow*dt;b.y-=Math.sin(a)*b.spd*.55*slow*dt}
      }
      if(b.attackCd<=0){const spot=guard?estechChildGuardSpot(b,guard):{x:b.x,y:b.y};b.returnX=spot.x;b.returnY=spot.y;b.kickTotal=1+Math.floor(Math.random()*3);b.kicksLeft=b.kickTotal;beginEstechKick(b)}
    }
  }
  if(arenaFence){b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r)}
}

function updateParkSejunBoss(b,dt){
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.inv=Math.max(0,(b.inv||0)-dt);if(b.stateT>0)b.stateT-=dt;
  const a=angle(b,player);if(!["nagCast","heatCast","bellyCast","bellyJump"].includes(b.state))b.dir={x:Math.cos(a),y:Math.sin(a)};
  if(b.state==="shieldBreak"){if(b.stateT<=0){b.state="idle";b.patternCd=bossCd(b,1.1)}return}
  if(b.state==="nagCast"){if(b.stateT<=0)fireBossNag(b);return}
  if(b.state==="heatCast"){if(b.stateT<=0)fireCheonHeat(b);return}
  if(b.state==="bellyCast"){if(b.stateT<=0)startCheonBellyJump(b);return}
  if(b.state==="bellyJump"){
    const p=1-b.stateT/(b.bellyJumpT||CHEON_BELLY_SKILL.jumpT),ease=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;b.x=b.jumpFromX+(b.jumpX-b.jumpFromX)*ease;b.y=b.jumpFromY+(b.jumpY-b.jumpFromY)*ease;if(b.stateT<=0)landCheonBelly(b);return
  }
  const d=dist(b,player),slow=b.slow>0?.38:1;if(d>300){b.x+=Math.cos(a)*b.spd*slow*dt;b.y+=Math.sin(a)*b.spd*slow*dt}else if(d<175){b.x-=Math.cos(a)*b.spd*.55*slow*dt;b.y-=Math.sin(a)*b.spd*.55*slow*dt}
  if(arenaFence){b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r)}
  b.patternCd-=dt;if(b.patternCd<=0){const roll=Math.random();if(roll<.34)beginBossNag(b);else if(roll<.67)beginCheonBelly(b,1);else beginCheonHeat(b)}
}
function gossipAlive(group){
  return enemies.filter(e=>e.bossGroup==="gossip"&&e.group===group&&e.hp>0).sort((a,b)=>a.memberIndex-b.memberIndex);
}

function gossipArenaClamp(o,pad=35){
  if("cx" in o){
    if(arenaFence){
      o.cx=clamp(o.cx,arenaFence.x+pad,arenaFence.x+arenaFence.w-pad);
      o.cy=clamp(o.cy,arenaFence.y+pad,arenaFence.y+arenaFence.h-pad);
    }else{
      o.cx=clamp(o.cx,30,world.w-30);
      o.cy=clamp(o.cy,30,world.h-30);
    }
    return;
  }
  if(arenaFence){
    o.x=clamp(o.x,arenaFence.x+pad,arenaFence.x+arenaFence.w-pad);
    o.y=clamp(o.y,arenaFence.y+pad,arenaFence.y+arenaFence.h-pad);
  }else{
    o.x=clamp(o.x,30,world.w-30);
    o.y=clamp(o.y,30,world.h-30);
  }
}

function gossipFormationOffsets(count){
  if(count>=3)return [{x:-58,y:28},{x:58,y:28},{x:0,y:-42}];
  if(count===2)return [{x:-46,y:0},{x:46,y:0}];
  return [{x:0,y:0}];
}

function fireGossipShot(m){
  const a=angle(m,player);
  bossShots.push({
    kind:"gossip",x:m.x+Math.cos(a)*32,y:m.y-18+Math.sin(a)*32,
    vx:Math.cos(a)*(m.projectileSpeed||410),vy:Math.sin(a)*(m.projectileSpeed||410),
    r:15,life:2.8,dmg:m.projectileDmg||9,spin:rnd(0,Math.PI*2),hitText:"뒷담화"
  });
}

function startGossipDash(group,members){
  group.mode="dashPrep";group.modeT=1.05;
  const center={x:arenaFence?arenaFence.x+arenaFence.w/2:group.cx,y:arenaFence?arenaFence.y+arenaFence.h/2:group.cy};
  const radius=members.length>=3?210:150;
  group.dashPoints=[];
  for(let i=0;i<members.length;i++){
    const m=members[i];
    const a=-Math.PI/2+i*(Math.PI*2/members.length);
    const tx=center.x+Math.cos(a)*radius,ty=center.y+Math.sin(a)*radius;
    const da=Math.atan2(player.y-ty,player.x-tx);
    group.dashPoints.push({m,tx,ty,angle:da});
    effects.push({kind:"bossLineTelegraph",x:tx,y:ty,angle:da,len:680,wide:58,t:1.05,maxT:1.05,color:"#ff304f"});
  }
  effects.push({kind:"bossQuote",x:center.x,y:center.y-160,text:"저 사람 진짜 이상하다니까!",t:1.05,maxT:1.05,color:"#ffe1f5"});
  playSfx("bossNagCast");
}

function startGossipSpin(group,members){
  if(members.length<2){startGossipDash(group,members);return}
  group.mode="spin";group.modeT=3;group.spinAngle=angle({x:group.cx,y:group.cy},player);
  const a=rnd(0,Math.PI*2),speed=300;
  group.spinVx=Math.cos(a)*speed;
  group.spinVy=Math.sin(a)*speed;
  group.spinHitCd=0;
  effects.push({kind:"bossQuote",x:group.cx,y:group.cy-120,text:"하하하, 다 같이 돌려버려!",t:1.15,maxT:1.15,color:"#fff0ff"});
  playSfx("golfSpin");
}

function startGossipRumor(group,members){
  group.mode="rumorCast";group.modeT=2.55;group.patternCd=99;
  group.rumorDropT=.08;
  group.rumorDropCount=0;
  group.rumorTotal=7+Math.min(3,members.length);
  effects.push({kind:"bossQuote",x:group.cx,y:group.cy-120,text:"저 사람이 몰카를 찍었 대",t:1.25,maxT:1.25,color:"#ffe1f5"});
  playSfx("bossNagCast");
}

function dropGossipRumor(group,members){
  const i=group.rumorDropCount||0;
  const trailAngle=(player.vx||player.vy)?Math.atan2(player.vy,player.vx)+Math.PI:rnd(0,Math.PI*2);
  const side=(i%2?1:-1)*(34+rnd(0,28));
  const back=28+i*6+rnd(0,26);
  const x=clamp(
    player.x+Math.cos(trailAngle)*back+Math.cos(trailAngle+Math.PI/2)*side+rnd(-12,12),
    arenaFence?arenaFence.x+70:70,
    arenaFence?arenaFence.x+arenaFence.w-70:world.w-70
  );
  const y=clamp(
    player.y+Math.sin(trailAngle)*back+Math.sin(trailAngle+Math.PI/2)*side+rnd(-12,12),
    arenaFence?arenaFence.y+70:70,
    arenaFence?arenaFence.y+arenaFence.h-70:world.h-70
  );
  const labels=["쟤래","봤어?","진짜래"];
  effects.push({
    kind:"gossipRumorWarn",x,y,r:44+i%3*5,t:.72,maxT:.72,
    damage:12+members.length*2,color:"#ff4f8f",text:labels[i%labels.length],spin:rnd(0,Math.PI*2)
  });
  if(i%3===0)playSfx("bossNagFire");
}

function gossipTriangleCenter(){
  return arenaFence?{x:arenaFence.x+arenaFence.w/2,y:arenaFence.y+arenaFence.h/2}:{x:player.x,y:player.y};
}
function pointInTriangle(px,py,pts){
  if(!pts||pts.length<3)return true;
  const sign=(p1,p2,p3)=>(p1.x-p3.x)*(p2.y-p3.y)-(p2.x-p3.x)*(p1.y-p3.y);
  const p={x:px,y:py};
  const d1=sign(p,pts[0],pts[1]),d2=sign(p,pts[1],pts[2]),d3=sign(p,pts[2],pts[0]);
  const neg=d1<0||d2<0||d3<0,pos=d1>0||d2>0||d3>0;
  return !(neg&&pos);
}
function applyGossipTriangleFence(group,dt,pull=false){
  const pts=group.tribunalVertices;
  const center=group.tribunalCenter||gossipTriangleCenter();
  if(pull||!pointInTriangle(player.x,player.y,pts)){
    player.x+=(center.x-player.x)*Math.min(1,dt*(pull?2.6:5.2));
    player.y+=(center.y-player.y)*Math.min(1,dt*(pull?2.6:5.2));
    player.slowT=Math.max(player.slowT||0,.08);
  }
}

function startGossipTribunal(group,members){
  if(members.length<2){startGossipRumor(group,members);return}
  group.mode="tribunalPrep";group.modeT=1.05;group.volleyT=.24;group.volleyCount=0;group.tribunalPoints=[];
  const center=gossipTriangleCenter();
  group.tribunalCenter=center;
  group.tribunalVertices=[];
  const radius=arenaFence?Math.min(arenaFence.w,arenaFence.h)*.5:(members.length>=3?360:285);
  for(let i=0;i<members.length;i++){
    const m=members[i];
    const a=-Math.PI/2+i*(Math.PI*2/members.length);
    const tx=clamp(center.x+Math.cos(a)*radius,arenaFence?arenaFence.x+45:45,arenaFence?arenaFence.x+arenaFence.w-45:world.w-45);
    const ty=clamp(center.y+Math.sin(a)*radius,arenaFence?arenaFence.y+45:45,arenaFence?arenaFence.y+arenaFence.h-45:world.h-45);
    group.tribunalVertices.push({x:tx,y:ty});
    group.tribunalPoints.push({m,tx,ty});
  }
  effects.push({kind:"gossipTriangleFence",points:group.tribunalVertices,t:3.55,maxT:3.55,color:"#ff4f8f"});
  effects.push({kind:"bossQuote",x:player.x,y:player.y-150,text:"마녀재판 시작이야.",t:1.15,maxT:1.15,color:"#fff0ff"});
  playSfx("bossNagCast");
}

function fireGossipTribunalVolley(group,members){
  const volley=group.volleyCount||0;
  for(let i=0;i<members.length;i++){
    const m=members[i];
    if(m.hp<=0)continue;
    const base=angle(m,player);
    const a=base+(i-(members.length-1)/2)*(members.length>=3?.13:.1)+Math.sin((volley+i)*1.7)*.055;
    const speed=245+volley*9+i*10;
    bossShots.push({
      kind:"gossip",x:m.x+Math.cos(a)*34,y:m.y-18+Math.sin(a)*34,
      vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,
      r:15,life:3.1,dmg:m.projectileDmg||9,spin:rnd(0,Math.PI*2),hitText:"마녀재판"
    });
  }
  playSfx("bossNagFire");
}

function updateGossipBoss(b,dt){
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.inv=Math.max(0,(b.inv||0)-dt);
  const group=b.group;
  if(!group||group.lastUpdate===elapsed)return;
  group.lastUpdate=elapsed;
  const members=gossipAlive(group);
  if(!members.length)return;
  const slow=members.some(m=>m.slow>0)?.55:1;
  group.spinHitCd=Math.max(0,(group.spinHitCd||0)-dt);
  if(group.mode==="intro"){
    group.modeT-=dt;
    const offs=gossipFormationOffsets(members.length);
    for(let i=0;i<members.length;i++){
      const m=members[i],o=offs[i]||offs[0];
      m.x+=((group.cx+o.x)-m.x)*Math.min(1,dt*4);
      m.y+=((group.cy+o.y)-m.y)*Math.min(1,dt*4);
      m.dir={x:0,y:1};
    }
    if(group.modeT<=0){group.mode="group";group.patternCd=2.2*(group.cdScale||1)}
    return;
  }
  if(group.mode==="rumorCast"){
    group.modeT-=dt;
    group.rumorDropT-=dt;
    if(group.rumorDropT<=0&&(group.rumorDropCount||0)<(group.rumorTotal||8)){
      dropGossipRumor(group,members);
      group.rumorDropCount=(group.rumorDropCount||0)+1;
      group.rumorDropT=.22;
    }
    const offs=gossipFormationOffsets(members.length);
    for(let i=0;i<members.length;i++){
      const m=members[i],o=offs[i]||offs[0];
      m.x+=((group.cx+o.x+Math.sin(elapsed*16+i)*5)-m.x)*Math.min(1,dt*4.5);
      m.y+=((group.cy+o.y)-m.y)*Math.min(1,dt*4.5);
      const ma=angle(m,player);
      m.dir={x:Math.cos(ma),y:Math.sin(ma)};
    }
    if(group.modeT<=0){group.mode="group";group.patternCd=2.45*(group.cdScale||1)}
    return;
  }
  if(group.mode==="tribunalPrep"){
    group.modeT-=dt;
    applyGossipTriangleFence(group,dt,true);
    for(const p of group.tribunalPoints||[]){
      const m=p.m;
      if(m.hp<=0)continue;
      m.x+=(p.tx-m.x)*Math.min(1,dt*5);
      m.y+=(p.ty-m.y)*Math.min(1,dt*5);
      const ma=angle(m,player);
      m.dir={x:Math.cos(ma),y:Math.sin(ma)};
    }
    if(group.modeT<=0){group.mode="tribunalFire";group.modeT=2.05;group.volleyT=.18;group.volleyCount=0}
    return;
  }
  if(group.mode==="tribunalFire"){
    group.modeT-=dt;
    group.volleyT-=dt;
    applyGossipTriangleFence(group,dt,false);
    for(const p of group.tribunalPoints||[]){
      const m=p.m;
      if(m.hp<=0)continue;
      m.x+=(p.tx-m.x)*Math.min(1,dt*3.5);
      m.y+=(p.ty-m.y)*Math.min(1,dt*3.5);
      const ma=angle(m,player);
      m.dir={x:Math.cos(ma),y:Math.sin(ma)};
    }
    if(group.volleyT<=0){
      fireGossipTribunalVolley(group,members);
      group.volleyCount++;
      group.volleyT=.68;
    }
    if(group.modeT<=0||group.volleyCount>=3){group.mode="dizzy";group.modeT=.85;group.patternCd=2.1*(group.cdScale||1)}
    return;
  }
  if(group.mode==="dashPrep"){
    group.modeT-=dt;
    for(const p of group.dashPoints||[]){
      const m=p.m;
      if(m.hp<=0)continue;
      m.x+=(p.tx-m.x)*Math.min(1,dt*5.2);
      m.y+=(p.ty-m.y)*Math.min(1,dt*5.2);
      m.dir={x:Math.cos(p.angle),y:Math.sin(p.angle)};
    }
    if(group.modeT<=0){
      clearBossTelegraphs();
      group.mode="dash";group.modeT=.58;
      for(const p of group.dashPoints||[]){
        p.m.dashDx=Math.cos(p.angle);p.m.dashDy=Math.sin(p.angle);p.m.dashHit=false;
      }
      playSfx("bossKickDash");
    }
    return;
  }
  if(group.mode==="dash"){
    group.modeT-=dt;
    for(const p of group.dashPoints||[]){
      const m=p.m;
      if(m.hp<=0)continue;
      m.x+=m.dashDx*840*dt;
      m.y+=m.dashDy*840*dt;
      gossipArenaClamp(m,m.r);
      m.dir={x:m.dashDx,y:m.dashDy};
      if(!m.dashHit&&dist(m,player)<m.r+player.r+16&&playerCanTakeDamage()){
        player.hp-=m.dmg+8;player.inv=.75;m.dashHit=true;shake=10;
        floaters.push({x:player.x,y:player.y-32,t:.65,text:"모함 돌진",color:"#ff6b78"});
      }
    }
    if(group.modeT<=0){group.mode="group";group.patternCd=2.4*(group.cdScale||1)}
    return;
  }
  if(group.mode==="spin"){
    group.modeT-=dt;
    group.cx+=group.spinVx*dt;group.cy+=group.spinVy*dt;
    if(arenaFence){
      const minX=arenaFence.x+80,maxX=arenaFence.x+arenaFence.w-80,minY=arenaFence.y+80,maxY=arenaFence.y+arenaFence.h-80;
      if(group.cx<minX||group.cx>maxX){group.cx=clamp(group.cx,minX,maxX);group.spinVx*=-1}
      if(group.cy<minY||group.cy>maxY){group.cy=clamp(group.cy,minY,maxY);group.spinVy*=-1}
    }
    group.spinAngle+=dt*8.8;
    const radius=members.length>=3?70:46;
    for(let i=0;i<members.length;i++){
      const m=members[i];
      const a=group.spinAngle+i*(Math.PI*2/members.length);
      m.x=group.cx+Math.cos(a)*radius;
      m.y=group.cy+Math.sin(a)*radius;
      m.dir={x:Math.cos(a+Math.PI/2),y:Math.sin(a+Math.PI/2)};
    }
    if(dist({x:group.cx,y:group.cy},player)<radius+60+player.r&&group.spinHitCd<=0&&playerCanTakeDamage()){
      group.spinHitCd=.42;player.hp-=18;player.inv=.55;shake=9;
      floaters.push({x:player.x,y:player.y-32,t:.55,text:"강강수월래",color:"#ff6b78"});
    }
    if(group.modeT<=0){group.mode="dizzy";group.modeT=1.2;group.patternCd=2.2*(group.cdScale||1);playSfx("bossNagFire")}
    return;
  }
  if(group.mode==="dizzy"){
    group.modeT-=dt;
    const offs=gossipFormationOffsets(members.length);
    for(let i=0;i<members.length;i++){
      const m=members[i],o=offs[i]||offs[0];
      m.x+=((group.cx+o.x+Math.sin(elapsed*18+i)*6)-m.x)*Math.min(1,dt*4);
      m.y+=((group.cy+o.y+Math.cos(elapsed*16+i)*4)-m.y)*Math.min(1,dt*4);
      m.dir={x:0,y:1};
    }
    if(group.modeT<=0){group.mode="group";group.patternCd=1.8*(group.cdScale||1)}
    return;
  }
  const a=angle({x:group.cx,y:group.cy},player);
  const keep=Math.hypot(player.x-group.cx,player.y-group.cy);
  if(keep>310){group.cx+=Math.cos(a)*92*slow*dt;group.cy+=Math.sin(a)*92*slow*dt}
  else if(keep<210){group.cx-=Math.cos(a)*58*slow*dt;group.cy-=Math.sin(a)*58*slow*dt}
  gossipArenaClamp(group,78);
  const offs=gossipFormationOffsets(members.length);
  for(let i=0;i<members.length;i++){
    const m=members[i],o=offs[i]||offs[0];
    m.x+=((group.cx+o.x)-m.x)*Math.min(1,dt*6);
    m.y+=((group.cy+o.y)-m.y)*Math.min(1,dt*6);
    const ma=angle(m,player);
    m.dir={x:Math.cos(ma),y:Math.sin(ma)};
    m.attackCd-=dt;
    if(m.attackCd<=0){
      fireGossipShot(m);
      m.attackCd=(2.15+i*.38+rnd(0,.22))*(group.cdScale||1);
    }
  }
  group.patternCd-=dt;
  if(group.patternCd<=0){
    if(members.length>=2&&(group.phase++%2)===1)startGossipTribunal(group,members);
    else startGossipRumor(group,members);
  }
}

function createArenaFence(){
  const w=900,h=620;
  arenaFence={
    x:clamp(player.x-w/2,60,world.w-w-60),
    y:clamp(player.y-h/2,60,world.h-h-60),
    w,h,t:0
  };
  gems.length=0;
  gems.push({
    x:arenaFence.x+arenaFence.w/2,
    y:arenaFence.y+arenaFence.h-86,
    r:11,value:20,kind:"heal"
  });
  for(let i=enemies.length-1;i>=0;i--){
    const e=enemies[i];
    if(!e.boss){
      effects.push({kind:"pop",x:e.x,y:e.y,r:e.r+18,t:.45,color:"#f5fbff"});
      floaters.push({x:e.x,y:e.y-e.r,t:.55,text:"퇴장",color:"#dfe7ef"});
      enemies.splice(i,1);
    }
  }
}

function pointInFence(x,y,f,pad=0){
  return !!f&&x>f.x+pad&&x<f.x+f.w-pad&&y>f.y+pad&&y<f.y+f.h-pad;
}

function directionVector(){
  if(player.dir==="up")return {x:0,y:-1};
  if(player.dir==="down")return {x:0,y:1};
  return {x:player.face<0?-1:1,y:0};
}
function ultimateDirectionVector(){
  let x=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0)+(mobileInput.x||0);
  let y=(keys.s||keys.arrowdown?1:0)-(keys.w||keys.arrowup?1:0)+(mobileInput.y||0);
  if(Math.abs(x)>.2||Math.abs(y)>.2){
    if(Math.abs(x)>=Math.abs(y))return {x:x<0?-1:1,y:0};
    return {x:0,y:y<0?-1:1};
  }
  return directionVector();
}

function rowFromVector(d){
  if(Math.abs(d.x)>Math.abs(d.y))return d.x<0?1:2;
  return d.y<0?3:0;
}

function rowFromAngle4(a){
  const x=Math.cos(a),y=Math.sin(a);
  if(Math.abs(x)>=Math.abs(y))return x<0?2:1;
  return y>0?0:3;
}

function useUltimate(){
  if(gameOver||paused||player.action==="clear"||bossVsCutscene.active)return;
  if(!ultimateReady()){
    show(`필살기 대기 중 ${Math.ceil(player.ultimateCd)}초`);
    return;
  }
  const d=player.characterId==="seunggwan"||player.characterId==="jiin"||player.characterId==="homin"?{x:0,y:0}:directionVector();
  player.ultimateCdMax=getUltimateCooldown();
  player.ultimateTimer=getUltimateDuration();
  player.ultimateFired=false;
  player.ultimateDir=d;
  if(player.characterId==="seunggwan"){const mx=player.vx||0,my=player.vy||0,ml=Math.hypot(mx,my)||1;const drift=player.moving?45:0;player.ultimateStartX=player.x;player.ultimateStartY=player.y;player.ultimateTargetX=player.x+mx/ml*drift;player.ultimateTargetY=player.y+my/ml*drift;}
  if(player.characterId==="sangil"){
    player.ultimateFired=true;
    fireUltimateSwing();
  }else if(player.characterId==="seunggwan"){
    player.ultimateFired=true;
    fireUltimateSwing();
    player.ultimateCd=player.ultimateCdMax;
  }else if(player.characterId==="jiin"){
    player.ultimateFired=true;
    fireUltimateSwing();
    player.ultimateCd=player.ultimateCdMax;
  }else if(player.characterId==="homin"){
    player.ultimateFired=true;
    fireUltimateSwing();
    player.ultimateCd=player.ultimateCdMax;
  }else{
    player.ultimateCd=player.ultimateCdMax;
  }
  updateUltimateButton();
  show("필살기 발동");
}

function updateUltimate(dt){
  const wasSeunggwanUltimate=player.characterId==="seunggwan"&&player.ultimateTimer>0;
  const wasSangilUltimate=player.characterId==="sangil"&&player.ultimateTimer>0;
  const wasHominUltimate=player.characterId==="homin"&&player.ultimateTimer>0;
  if(player.ultimateCd>0&&player.ultimateTimer<=0)player.ultimateCd=Math.max(0,player.ultimateCd-dt);
  if(player.ultimateTimer>0){
    player.ultimateTimer=Math.max(0,player.ultimateTimer-dt);
    if(player.characterId==="seunggwan"&&Number.isFinite(player.ultimateStartX)&&Number.isFinite(player.ultimateTargetX)){
      const p=clamp(1-player.ultimateTimer/1.18,0,1);
      const fly=smoothstep(clamp((p-.12)/.46,0,1));
      const settle=smoothstep(clamp((p-.58)/.16,0,1));
      const k=Math.max(fly,settle);
      player.x=player.ultimateStartX+(player.ultimateTargetX-player.ultimateStartX)*k;
      player.y=player.ultimateStartY+(player.ultimateTargetY-player.ultimateStartY)*k;
    }
    const fireAt=.42;
    if(!player.ultimateFired&&player.ultimateTimer<=fireAt){
      player.ultimateFired=true;
      fireUltimateSwing();
    }
  }
  if(wasSeunggwanUltimate&&player.ultimateTimer<=0&&Number.isFinite(player.ultimateTargetX)){
    player.x=player.ultimateTargetX;
    player.y=player.ultimateTargetY;
    player.ultimateStartX=player.ultimateStartY=player.ultimateTargetX=player.ultimateTargetY=undefined;
  }
  if(wasSangilUltimate&&player.ultimateTimer<=0){
    player.ultimateCdMax=getUltimateCooldown();
    player.ultimateCd=player.ultimateCdMax;
  }
  if(wasHominUltimate&&player.ultimateTimer<=0)fireHominUltimateBurst();
  updateUltimateButton();
}

function fireUltimateSwing(){
  if(player.characterId==="sangil"){
    playVoiceYell();
    playSfx("golfSpin");
    effects.push({kind:"sangilWhirlwind",x:player.x,y:player.y,t:5,maxT:5,r:118,dmg:46,hit:new Map(),soundT:.34,color:"#f7d889"});
    shake=12;
    show("필살기: 등산스틱 휠윈드");
    return;
  }
  if(player.characterId==="jiin"){
    playVoiceYell();
    playSfx("selectConfirm");
    effects.push({kind:"seoyulCompanion",x:player.x-46,y:player.y+36,t:getUltimateDuration("jiin"),maxT:getUltimateDuration("jiin"),dir:"down",color:"#ff7ab6"});
    show("필살기: 서율이 에너지 충전");
    return;
  }
  if(player.characterId==="homin"){
    playVoiceYell();
    playSfx("selectConfirm");
    effects.push({kind:"hominBubbleShield",x:player.x,y:player.y-30,t:getUltimateDuration("homin"),maxT:getUltimateDuration("homin"),r:74,color:"#ff8fd7"});
    player.inv=Math.max(player.inv,.25);
    show("필살기: 소울 버블 세이프");
    return;
  }
  if(player.characterId==="seunggwan"){
    playVoiceYell();
    playSfx("cheonBellyJump");
    const d=player.ultimateDir||directionVector();
    const len=Math.hypot(d.x,d.y)||1;
    effects.push({
      kind:"seunggwanFamilySlam",
      x:player.ultimateStartX??player.x,y:player.ultimateStartY??player.y,
      dx:d.x/len,dy:d.y/len,
      r:250,dmg:275,
      t:1.18,maxT:1.18,
      hit:false,color:"#fff0a8"
    });
    shake=10;
    show("필살기: 삼부자 내려찍기");
    return;
  }
  const d=player.ultimateDir;
  playVoiceYell();
  playSfx("ultimateSwing");
  effects.push({
    kind:"ultimateBall",
    x:player.x+d.x*52,
    y:player.y-10+d.y*52,
    dx:d.x,dy:d.y,
    t:.82,maxT:.82,
    speed:1100,dmg:440*basicDamageMul(),r:48,vortexR:108,
    hit:new Set(),
    color:"#eaf9ff"
  });
  shake=10;
  show("필살기: 퇴근 풀스윙");
}

function updateUltimateButton(){
  player.ultimateCdMax=getUltimateCooldown();
  if(player.ultimateTimer>0&&player.characterId==="sangil")player.ultimateCd=0;
  if(spFill)spFill.style.width=(ultimateChargeRatio()*100)+"%";
  const ready=ultimateReady();
  if(ultimateBtn){
    ultimateBtn.disabled=!ready;
    ultimateBtn.textContent=ready?"SPACE 필살기":`SPACE ${Math.ceil(player.ultimateCd)}초`;
  }
  if(mobileUltimateBtn){
    mobileUltimateBtn.disabled=!ready;
    mobileUltimateBtn.textContent=ready?"필살기":`${Math.ceil(player.ultimateCd)}초`;
  }
}

function spawn(dt){
  if(wave1.done&&currentStage<2)return;
  if(currentStage===2&&wave2.done)return;
  spawnTimer-=dt;
  if(spawnTimer>0)return;
  const theme=activeTheme();
  const wave=waveForStage(currentStage);
  const age=stageAge(currentStage);
  const female=enemyTypes.find(e=>e.id==="cryingFemale");
  const male=enemyTypes.find(e=>e.id==="cryingMale");
  const mzResignation=enemyTypes.find(e=>e.id==="mzResignation");
  const roadCyclist=enemyTypes.find(e=>e.id==="roadCyclist");
  const fixieShooter=enemyTypes.find(e=>e.id==="fixieShooter");
  const fishermanUncle=enemyTypes.find(e=>e.id==="fishermanUncle");
  const lazyFactoryWorker=enemyTypes.find(e=>e.id==="lazyFactoryWorker");
  const tapeThrower=enemyTypes.find(e=>e.id==="tapeThrower");
  const juCousinWorker=enemyTypes.find(e=>e.id==="juCousinWorker");
  const logisticsOfficeLady=enemyTypes.find(e=>e.id==="logisticsOfficeLady");
  const boxThrower=enemyTypes.find(e=>e.id==="boxThrower");
  const forkliftDriver=enemyTypes.find(e=>e.id==="forkliftDriver");
  const gymTattooPig=enemyTypes.find(e=>e.id==="gymTattooPig");
  const gymLeggings=enemyTypes.find(e=>e.id==="gymLeggings");
  const gymBodybuilder=enemyTypes.find(e=>e.id==="gymBodybuilder");
  const doubleScooterStudents=enemyTypes.find(e=>e.id==="doubleScooterStudents");
  const pigeonFlock=enemyTypes.find(e=>e.id==="pigeonFlock");
  const wireWorker=enemyTypes.find(e=>e.id==="wireWorker");
  const powerStripOctopus=enemyTypes.find(e=>e.id==="powerStripOctopus");
  const breakerShield=enemyTypes.find(e=>e.id==="breakerShield");
  const wiringRookie=enemyTypes.find(e=>e.id==="wiringRookie");
  const liveWireMan=enemyTypes.find(e=>e.id==="liveWireMan");
  const roster=theme.id==="estech"
    ?[wireWorker,powerStripOctopus,breakerShield]
    :theme.id==="bike"
    ?[roadCyclist,fixieShooter,fishermanUncle]
    :theme.id==="factory"
      ?[lazyFactoryWorker,tapeThrower,juCousinWorker]
      :theme.id==="logistics"
        ?[logisticsOfficeLady,boxThrower,forkliftDriver]
        :theme.id==="gym"
          ?[gymTattooPig,gymLeggings,gymBodybuilder]
          :[female,male,mzResignation];
  const stageNo=clamp(currentStage,1,20);
  const progress=clamp(age/105,0,1);
  const levelThreat=Math.max(0,player.level-1);
  const fieldEnemyCount=enemies.reduce((count,e)=>count+(!e.boss&&!e.object?1:0),0);
  const mobileLoad=mobileControlsAvailable();
  const loadScale=mobileLoad ? .62 : 1;
  const densityTarget=Math.round(clamp((16+stageNo*9+levelThreat*.8+progress*14)*loadScale,mobileLoad?22:24,mobileLoad?78:150));
  const enemyCap=Math.round(clamp((48+stageNo*11+levelThreat*1.05)*loadScale,mobileLoad?42:60,mobileLoad?96:160));
  const densityRatio=fieldEnemyCount/Math.max(1,densityTarget);
  if(fieldEnemyCount>=enemyCap){
    spawnTimer=.24;
    return;
  }
  const skillCurve=1+levelThreat*.012;
  const hpPressure=(.58+stageNo*.13+Math.pow(stageNo-1,1.28)*.04)*(1+age*.0017)*skillCurve;
  const speedPressure=clamp(.78+(stageNo-1)*.045+progress*.09+Math.min(.16,levelThreat*.004),.78,1.38);
  const rawInterval=1.42-(stageNo-1)*.12-age*.0022-Math.min(.38,levelThreat*.007);
  const densityIntervalMul=densityRatio<.45?.68:densityRatio<.8?.84:1.05;
  const baseInterval=Math.max(.26,rawInterval)*densityIntervalMul*(mobileLoad?1.18:1);
  const unlock2=18+Math.max(0,3-stageNo)*7;
  const unlock3=44+Math.max(0,3-stageNo)*9;
  const rangedChance=clamp(.06+stageNo*.035+progress*.05,.08,.28);
  const chooseWeights=()=>{
    if(age<unlock2)return [1,0,0];
    if(age<unlock3){
      const p=clamp((age-unlock2)/Math.max(1,unlock3-unlock2),0,1);
      return [.86-.18*p,.14+.18*p,0];
    }
    const p=clamp((age-unlock3)/90,0,1);
    return [.66-.13*p,.27+.04*p,.07+.09*p];
  };
  const pickFromRoster=(weights)=>{
    if(theme.id==="estech"&&age>28&&Math.random()<.3)return Math.random()<.52?wiringRookie:liveWireMan;
    const roll=Math.random();
    const picked=roll<weights[0]?roster[0]:roll<weights[0]+weights[1]?roster[1]:roster[2];
    if(picked?.ranged&&Math.random()>rangedChance)return roster[0];
    return picked;
  };
  const specialSide=Math.floor(Math.random()*4);
  if(age>10&&!enemies.some(e=>e.scooterNamed)&&Math.random()<clamp(.012+stageNo*.004+progress*.01,.015,.04)){
    const p=pickEnemySpawnPoint(specialSide,doubleScooterStudents);
    const rushAngle=Math.atan2(player.y-p.y,player.x-p.x);
    spawnEnemyAt(doubleScooterStudents,p.x,p.y,hpPressure*.95,speedPressure*(1.08+stageNo*.035),{
      scooterNamed:true,rushAngle,rushVx:Math.cos(rushAngle),rushVy:Math.sin(rushAngle),
      scooterTime:rnd(0,6),scooterSeed:rnd(0,Math.PI*2),xpScale:1.25,dmgScale:1.12
    });
    spawnTimer=Math.max(.65,baseInterval*.8);
    return;
  }
  if(age>5&&Math.random()<clamp(.04+stageNo*.025+progress*.03,.055,.17)){
    const c=cam(),vw=viewW(),vh=viewH(),pad=135;
    const rows=mobileLoad?2:2+Math.floor(Math.random()*2);
    const cols=mobileLoad?3+Math.floor(Math.random()*Math.min(2,stageNo+1)):3+Math.floor(Math.random()*Math.min(4,stageNo+1));
    let centerX,centerY;
    if(specialSide===0){centerX=c.x+rnd(vw*.15,vw*.85);centerY=c.y-pad}
    else if(specialSide===1){centerX=c.x+vw+pad;centerY=c.y+rnd(vh*.15,vh*.85)}
    else if(specialSide===2){centerX=c.x+rnd(vw*.15,vw*.85);centerY=c.y+vh+pad}
    else{centerX=c.x-pad;centerY=c.y+rnd(vh*.15,vh*.85)}
    centerX=clamp(centerX,20,world.w-20);centerY=clamp(centerY,20,world.h-20);
    const flockAngle=Math.atan2(player.y-centerY,player.x-centerX);
    const vx=Math.cos(flockAngle),vy=Math.sin(flockAngle),px=-vy,py=vx;
    const total=rows*cols,shootCount=Math.random()<.55?1:2,shooters=new Set();
    while(shooters.size<Math.min(shootCount,total))shooters.add(Math.floor(Math.random()*total));
    const flockId=`pigeon-${elapsed.toFixed(2)}-${Math.random().toString(36).slice(2,7)}`;
    for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){
      const index=row*cols+col;
      const across=(col-(cols-1)/2)*46;
      const behind=(row-(rows-1)/2)*42;
      const x=centerX+px*across-vx*behind;
      const y=centerY+py*across-vy*behind;
      spawnEnemyAt(pigeonFlock,x,y,hpPressure,speedPressure*(1.95+stageNo*.11+progress*.2),{
        pigeonRush:true,flockId,rushVx:vx,rushVy:vy,pigeonPoops:shooters.has(index)?1:0,
        poopT:rnd(.45,1.05),noItem:true
      });
    }
    spawnTimer=Math.max(.58,baseInterval*.72);
    return;
  }
  if(wave.active){
    const waveProgress=clamp((elapsed-wave.start)/wave.duration,0,1);
    const weights=chooseWeights();
    const target=wave.target||waveTargetCount(stageNo);
    if((wave.spawned||0)>=target){
      spawnTimer=.35;
      return;
    }
    const remaining=target-(wave.spawned||0);
    const waveCount=Math.min(remaining,Math.max(0,enemyCap-fieldEnemyCount),Math.floor(4+stageNo*1.2+waveProgress*2.4+Math.min(3,age/130)));
    if(waveCount<=0){spawnTimer=.24;return}
    spawnTimer=Math.max(.52,baseInterval*(.9-stageNo*.045));
    const side=Math.floor(Math.random()*4);
    const circleFormation=Math.random()<.86;
    const ringSeed=rnd(0,Math.PI*2);
    for(let n=0;n<waveCount;n++){
      const type=pickFromRoster(weights);
      const typeSpeed=(type===roster[0]?speedPressure:speedPressure+waveProgress*.16)*1.06;
      if(circleFormation){
        const a=ringSeed+n*Math.PI*2/waveCount+rnd(-.025,.025);
        const ring=n%3;
        const radius=Math.max(viewW(),viewH())*(.64+ring*.055)+rnd(-10,10);
        spawnEnemyAt(type,clamp(player.x+Math.cos(a)*radius,20,world.w-20),clamp(player.y+Math.sin(a)*radius,20,world.h-20),hpPressure*1.05,typeSpeed,{waveRing:true,waveMob:true,xpScale:1.12});
      }else{
        const p=pickEnemySpawnPoint((side+n)%4,type);
        spawnEnemyAt(type,p.x,p.y,hpPressure*1.08,typeSpeed,{waveMob:true,xpScale:1.12});
      }
      wave.spawned=(wave.spawned||0)+1;
    }
    return;
  }
  spawnTimer=baseInterval;
  const weights=chooseWeights();
  const type=pickFromRoster(weights);
  const groupChance=clamp(.08+stageNo*.055+progress*.14,.1,.5);
  const baseGroup=Math.random()<groupChance?2+Math.floor(Math.random()*(1+Math.min(3,stageNo))):1;
  const densityBonus=densityRatio<.45?Math.min(3,1+Math.floor(stageNo/3)):densityRatio<.75?1:0;
  const desiredGroup=type?.ranged?(stageNo>=5&&densityRatio<.55?2:1):baseGroup+densityBonus;
  const groupSize=Math.max(1,Math.min(8,enemyCap-fieldEnemyCount,desiredGroup));
  const side=Math.floor(Math.random()*4);

  for(let i=0;i<groupSize;i++){
    const memberType=i===0?type:(Math.random()<.76?roster[0]:pickFromRoster(weights));
    spawnEnemy(memberType,side,hpPressure,memberType===roster[0]?speedPressure:speedPressure*.98);
  }
}

function pickEnemySpawnPoint(preferredSide=0,type=null){
  const c=cam();
  const vw=viewW(),vh=viewH();
  const pad=Math.max(90,(type?.drawSize||type?.size||60)*1.25);
  const minDist=Math.max(360,Math.min(760,Math.max(vw,vh)*.58));
  const make=(side)=>{
    if(side===0)return {x:c.x+rnd(-pad,vw+pad),y:c.y-pad};
    if(side===1)return {x:c.x+vw+pad,y:c.y+rnd(-pad,vh+pad)};
    if(side===2)return {x:c.x+rnd(-pad,vw+pad),y:c.y+vh+pad};
    return {x:c.x-pad,y:c.y+rnd(-pad,vh+pad)};
  };
  let best=null,bestScore=-Infinity;
  for(let i=0;i<18;i++){
    const side=i===0?preferredSide:Math.floor(Math.random()*4);
    const p=make(side);
    p.x=clamp(p.x,20,world.w-20);
    p.y=clamp(p.y,20,world.h-20);
    const visible=isVisibleWorld(p.x,p.y,36);
    const d=Math.hypot(p.x-player.x,p.y-player.y);
    const score=(visible?-1200:0)+d+(side===preferredSide?80:0);
    if(score>bestScore){bestScore=score;best=p}
    if(!visible&&d>=minDist)return p;
  }
  if(best&&Math.hypot(best.x-player.x,best.y-player.y)<minDist){
    const a=Math.atan2(best.y-player.y,best.x-player.x)||rnd(0,Math.PI*2);
    best.x=clamp(player.x+Math.cos(a)*minDist,20,world.w-20);
    best.y=clamp(player.y+Math.sin(a)*minDist,20,world.h-20);
  }
  return best||{x:clamp(player.x+minDist,20,world.w-20),y:player.y};
}

function spawnEnemy(type,side,pressure=1,speedScale=1){
  if(!type)return;
  const p=pickEnemySpawnPoint(side,type);
  const themeScale=themeProgressionScale();
  const hp=type.hp*pressure*themeScale.hp;
  const dmg=Math.max(1,Math.round(type.dmg*themeScale.dmg*clamp(.82+pressure*.18,.85,1.38)));
  const xp=Math.max(1,Math.round(type.xp*themeScale.xp));
  enemies.push({...type,x:p.x,y:p.y,r:type.size,hp,maxHp:hp,dmg,xp,spd:type.spd*speedScale,slow:0,hit:0,shootT:rnd(.4,type.shootCd||1.2),attackT:0});
}

function spawnEnemyAt(type,x,y,pressure=1,speedScale=1,extra={}){
  if(!type)return;
  x=clamp(x,20,world.w-20);y=clamp(y,20,world.h-20);
  if(arenaFence&&extra.insideArena){
    x=clamp(x,arenaFence.x+32,arenaFence.x+arenaFence.w-32);
    y=clamp(y,arenaFence.y+32,arenaFence.y+arenaFence.h-32);
  }
  const size=extra.size||type.size;
  const drawSize=extra.drawSize||type.drawSize;
  const themeScale=themeProgressionScale();
  const hp=type.hp*pressure*themeScale.hp*(extra.hpScale||1);
  const dmg=Math.max(1,Math.round(type.dmg*themeScale.dmg*(extra.dmgScale||1)*clamp(.82+pressure*.18,.85,1.38)));
  const xp=Math.max(1,Math.round(type.xp*themeScale.xp*(extra.xpScale||1)));
  enemies.push({...type,...extra,x,y,r:size,size,drawSize,hp,maxHp:hp,dmg,xp,spd:type.spd*speedScale,slow:0,hit:0,shootT:rnd(.4,type.shootCd||1.2),attackT:0});
}

function updateEnemies(dt){
  const meet=active("meeting");
  for(const e of enemies){
    updateEnemyBurn(e,dt);
    e.impactT=Math.max(0,(e.impactT||0)-dt);
    e.impactFlash=Math.max(0,(e.impactFlash||0)-dt);
    if(e.boss){updateBoss(e,dt);continue}
    e.hit=Math.max(0,e.hit-dt);e.slow=Math.max(0,e.slow-dt);e.freezeT=Math.max(0,(e.freezeT||0)-dt);e.inv=Math.max(0,(e.inv||0)-dt);
    if(e.object){
      if(e.id==="parkSejunGuard")updateParkSejunShield(e,dt);
      if(e.id==="cultTotem"){
        e.spawnT=(e.spawnT||1)-dt;
        if(e.spawnT<=0){
          e.spawnT=1.35;
          const type=enemyTypes.find(t=>t.id==="cultMinion");
          if(type)spawnEnemyAt(type,e.x+rnd(-34,34),e.y+rnd(-34,34),1.15,1,{insideArena:true});
          effects.push({kind:"cultHeal",x:e.x,y:e.y,t:.25,maxT:.25,r:44,color:"#b56cff"});
        }
      }
      continue;
    }
    e.attackT=Math.max(0,(e.attackT||0)-dt);
    if(e.ranged)e.shootT=(e.shootT||0)-dt;
    const a=angle(e,player),slow=e.slow>0?.38:1,d=dist(e,player);
    if(e.scooterNamed){
      e.scooterTime=(e.scooterTime||0)+dt;
      const targetAngle=Math.atan2(player.y-e.y,player.x-e.x);
      const turnDelta=Math.atan2(Math.sin(targetAngle-(e.rushAngle||0)),Math.cos(targetAngle-(e.rushAngle||0)));
      e.rushAngle=(e.rushAngle||0)+clamp(turnDelta,-3.1*dt,3.1*dt);
      const moveAngle=e.rushAngle+Math.sin(e.scooterTime*3.2+(e.scooterSeed||0))*.1;
      e.rushVx=Math.cos(moveAngle);
      e.rushVy=Math.sin(moveAngle);
      e.x+=e.rushVx*e.spd*slow*dt;
      e.y+=e.rushVy*e.spd*slow*dt;
    }else if(e.pigeonRush){
      e.poopT=(e.poopT||0)-dt;
      if(e.pigeonPoops>0&&e.poopT<=0&&isVisibleWorld(e.x,e.y,80)){
        firePigeonDropping(e);
        e.pigeonPoops=0;
      }
      e.x+=(e.rushVx||0)*e.spd*slow*dt;
      e.y+=(e.rushVy||0)*e.spd*slow*dt;
      if(!isVisibleWorld(e.x,e.y,180)&&dist(e,player)>Math.max(viewW(),viewH())*.7){e.noDrop=true;e.hp=0}
    }else if(e.ranged){
      const minRange=e.range*.58;
      const holdRange=e.range*.9;
      if(d>holdRange){
        e.x+=Math.cos(a)*e.spd*slow*dt;
        e.y+=Math.sin(a)*e.spd*slow*dt;
      }else if(d<minRange){
        e.x-=Math.cos(a)*e.spd*.72*slow*dt;
        e.y-=Math.sin(a)*e.spd*.72*slow*dt;
      }
      if(e.shootT<=0&&d<e.range*1.12&&(!mobileControlsAvailable()||isVisibleWorld(e.x,e.y,56))){
        fireEnemyAttack(e,a);
        e.shootT=e.shootCd*rnd(.9,1.22);
        e.attackT=.5;
      }
    }else{
      const weave=e.zigzag?Math.sin(elapsed*8+e.x*.02)*.72:0,ma=a+weave;
      e.x+=Math.cos(ma)*e.spd*slow*dt;e.y+=Math.sin(ma)*e.spd*slow*dt;
    }
    if(arenaFence&&e.insideArena){
      e.x=clamp(e.x,arenaFence.x+e.r,arenaFence.x+arenaFence.w-e.r);
      e.y=clamp(e.y,arenaFence.y+e.r,arenaFence.y+arenaFence.h-e.r);
    }else if(arenaFence&&pointInFence(e.x,e.y,arenaFence,e.r)){
      const left=Math.abs(e.x-(arenaFence.x-e.r));
      const right=Math.abs(e.x-(arenaFence.x+arenaFence.w+e.r));
      const top=Math.abs(e.y-(arenaFence.y-e.r));
      const bottom=Math.abs(e.y-(arenaFence.y+arenaFence.h+e.r));
      const m=Math.min(left,right,top,bottom);
      if(m===left)e.x=arenaFence.x-e.r;
      else if(m===right)e.x=arenaFence.x+arenaFence.w+e.r;
      else if(m===top)e.y=arenaFence.y-e.r;
      else e.y=arenaFence.y+arenaFence.h+e.r;
      e.slow=Math.max(e.slow,.2);
    }
    if(meet.level&&dist(e,player)<92+meet.level*18){e.slow=Math.max(e.slow,.12)}
    if(dist(e,player)<e.r+player.r&&playerCanTakeDamage()){
      player.hp-=e.dmg;player.inv=.75;shake=8;floaters.push({x:player.x,y:player.y-30,t:.7,text:"계획 수정",color:"#ff6b78"});
    }
  }
}

function firePigeonDropping(e){
  const a=angle(e,player),spd=380;
  bossShots.push({
    kind:"pigeonDropping",x:e.x+Math.cos(a)*12,y:e.y+Math.sin(a)*12,
    vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:11,life:6,dmg:7,spin:rnd(0,Math.PI*2),hitText:"비둘기 똥"
  });
}

function fireEnemyAttack(e,a){
  if(e.attackKind==="tapeWhip")fireEnemyTapeWhip(e,a);
  else if(e.attackKind==="geodeureok")fireEnemyGeodeureok(e,a);
  else if(e.attackKind==="resignationEnvelope")fireEnemyResignation(e,a);
  else if(e.attackKind==="boxThrow")fireEnemyBox(e,a);
  else if(e.attackKind==="fartCloud")fireEnemyFartCloud(e,a);
  else if(e.attackKind==="dumbbellBoomerang")fireEnemyDumbbell(e,a);
  else if(e.attackKind==="electricPlug"||e.attackKind==="breakerBolt")fireEnemyElectric(e,a);
  else fireEnemyBB(e,a);
}

function fireEnemyElectric(e,a){
  const count=e.attackKind==="breakerBolt"?3:1,spread=e.attackKind==="breakerBolt"?.18:0;
  for(let i=0;i<count;i++){
    const aa=a+(i-(count-1)/2)*spread,spd=e.projectileSpeed||400;
    bossShots.push({kind:e.attackKind,x:e.x+Math.cos(aa)*26,y:e.y+Math.sin(aa)*26,vx:Math.cos(aa)*spd,vy:Math.sin(aa)*spd,r:e.attackKind==="breakerBolt"?9:7,life:4,dmg:e.projectileDmg||9,spin:0,hitText:e.attackKind==="breakerBolt"?"차단기 과전류":"멀티탭 감전"});
  }
}

function fireEnemyBB(e,a){
  const spd=e.projectileSpeed||410;
  const muzzle=28;
  bossShots.push({
    kind:"bb",x:e.x+Math.cos(a)*muzzle,y:e.y-9+Math.sin(a)*muzzle,
    vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,
    r:5,life:2.6,dmg:e.projectileDmg||5,spin:0,
    hitText:"BB탄",color:"#ffd95a"
  });
}

function fireEnemyTapeWhip(e,a){
  const anchor=44;
  effects.push({
    kind:"enemyTapeWhip",
    x:e.x+Math.cos(a)*anchor,y:e.y-8+Math.sin(a)*anchor,angle:a,
    t:.42,maxT:.42,range:150,wide:58,anchor,
    dmg:e.projectileDmg||8,hit:false
  });
}

function fireEnemyGeodeureok(e,a){
  const spd=e.projectileSpeed||380;
  const muzzle=32;
  bossShots.push({
    kind:"geodeureok",x:e.x+Math.cos(a)*muzzle,y:e.y-10+Math.sin(a)*muzzle,scale:.62,
    vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,
    r:10,life:3.1,dmg:e.projectileDmg||10,spin:rnd(0,Math.PI*2),
    hitText:"꺼드럭"
  });
}

function fireEnemyResignation(e,a){
  const spd=e.projectileSpeed||430;
  const muzzle=30;
  bossShots.push({
    kind:"resignationEnvelope",x:e.x+Math.cos(a)*muzzle,y:e.y-10+Math.sin(a)*muzzle,
    vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,
    r:8,life:2.7,dmg:e.projectileDmg||8,spin:rnd(0,Math.PI*2),
    hitText:"사직서"
  });
}

function fireEnemyBox(e,a){
  const spd=e.projectileSpeed||390;
  const muzzle=34;
  bossShots.push({
    kind:"box",x:e.x+Math.cos(a)*muzzle,y:e.y-10+Math.sin(a)*muzzle,
    vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,
    r:10,life:2.9,dmg:e.projectileDmg||9,spin:rnd(0,Math.PI*2),
    hitText:"박스"
  });
}

function fireEnemyFartCloud(e,a){
  const distOut=54;
  effects.push({
    kind:"fartCloud",
    x:e.x+Math.cos(a)*distOut,
    y:e.y-6+Math.sin(a)*distOut,
    t:3.4,maxT:3.4,r:58,dmg:e.projectileDmg||3,poisonT:2.4,tick:.45,color:"#d9df69"
  });
}

function fireEnemyDumbbell(e,a){
  const spd=e.projectileSpeed||430;
  const muzzle=36;
  bossShots.push({
    kind:"dumbbellBoomerang",owner:e,age:0,turnT:.72,
    x:e.x+Math.cos(a)*muzzle,y:e.y-10+Math.sin(a)*muzzle,
    vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,
    r:14,life:2.6,dmg:e.projectileDmg||11,spin:rnd(0,Math.PI*2),
    hitText:"덤벨"
  });
}

function clearEmotionSafetyHeals(){
  for(let i=gems.length-1;i>=0;i--)if(gems[i].emotionSafety)gems.splice(i,1);
}

function spawnEmotionSafetyHeal(b,mode){
  clearEmotionSafetyHeals();
  let x=b.x,y=b.y;
  if(mode==="push"){
    const a=rnd(0,Math.PI*2),r=rnd(42,EMOTION_CEO_SKILL.pushSafe*.72);
    x=b.x+Math.cos(a)*r;y=b.y+Math.sin(a)*r;
  }else{
    const a=angle(b,player)+Math.PI+rnd(-.8,.8),r=rnd(EMOTION_CEO_SKILL.pullDamageRadius+38,EMOTION_CEO_SKILL.pullRadius-22);
    x=b.x+Math.cos(a)*r;y=b.y+Math.sin(a)*r;
  }
  if(arenaFence){
    x=clamp(x,arenaFence.x+40,arenaFence.x+arenaFence.w-40);
    y=clamp(y,arenaFence.y+40,arenaFence.y+arenaFence.h-40);
  }
  gems.push({x,y,r:11,value:20,kind:"heal",emotionSafety:true});
}

function updateEmotionCeo(b,dt){
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.inv=Math.max(0,(b.inv||0)-dt);
  const a=angle(b,player);
  if(!["pullCast","pushCast"].includes(b.state))b.dir={x:Math.cos(a),y:Math.sin(a)};
  if(b.stateT>0)b.stateT-=dt;
  if(b.state==="intro"){
    if(b.stateT<=0){b.state="idle";b.patternCd=bossCd(b,1.45);b.attackCd=bossCd(b,.25)}
    return;
  }
  if(b.state==="pullCast"){
    updateEmotionTearBurst(b,dt,.16,5);
    const d=dist(b,player);
    if(d<EMOTION_CEO_SKILL.pullRadius+90){
      const ax=(b.x-player.x)/Math.max(1,d),ay=(b.y-player.y)/Math.max(1,d);
      const awayX=-ax,awayY=-ay;
      const resist=clamp(Math.max(0,(player.vx||0)*awayX+(player.vy||0)*awayY),0,1);
      const pullDepth=clamp(1-d/(EMOTION_CEO_SKILL.pullRadius+90),.04,.72);
      const strength=pullDepth*(1-resist*.92);
      player.x=clamp(player.x+ax*EMOTION_CEO_SKILL.pullForce*strength*dt,20,world.w-20);
      player.y=clamp(player.y+ay*EMOTION_CEO_SKILL.pullForce*strength*dt,20,world.h-20);
      if(resist<.35)player.slowT=Math.max(player.slowT||0,.06);
    }
    if(b.stateT<=0){
      clearBossTelegraphs();
      if(dist(b,player)<EMOTION_CEO_SKILL.pullDamageRadius+player.r&&playerCanTakeDamage()){
        player.hp-=22;player.inv=.85;shake=12;
        floaters.push({x:player.x,y:player.y-32,t:.7,text:"하소연 늪",color:"#69d7ff"});
      }
      b.state="idle";b.patternCd=bossCd(b,2.2);b.attackCd=bossCd(b,.35);
    }
    return;
  }
  if(b.state==="pushCast"){
    const d=dist(b,player);
    const inPushZone=arenaFence?pointInFence(player.x,player.y,arenaFence,0):d<EMOTION_CEO_SKILL.pushOuter;
    if(d>EMOTION_CEO_SKILL.pushSafe*.62&&inPushZone){
      const ax=(player.x-b.x)/Math.max(1,d),ay=(player.y-b.y)/Math.max(1,d);
      const edgeBoost=arenaFence?1.18:1;
      player.x=clamp(player.x+ax*EMOTION_CEO_SKILL.pushForce*edgeBoost*dt,20,world.w-20);
      player.y=clamp(player.y+ay*EMOTION_CEO_SKILL.pushForce*edgeBoost*dt,20,world.h-20);
    }
    if(b.stateT<=0){
      clearBossTelegraphs();
      const inOuter=arenaFence?pointInFence(player.x,player.y,arenaFence,0):dist(b,player)<EMOTION_CEO_SKILL.pushOuter+player.r;
      const inSafe=dist(b,player)<EMOTION_CEO_SKILL.pushSafe+player.r;
      if(inOuter&&!inSafe&&playerCanTakeDamage()){
        player.hp-=26;player.inv=.9;shake=13;
        floaters.push({x:player.x,y:player.y-32,t:.75,text:"감정 폭발",color:"#ff6b78"});
      }
      effects.push({kind:"emotionPushBlast",x:b.x,y:b.y,r:EMOTION_CEO_SKILL.pushOuter,t:.42,maxT:.42,color:"#69d7ff"});
      b.state="idle";b.patternCd=bossCd(b,2.25);b.attackCd=bossCd(b,.35);
    }
    return;
  }
  const slow=b.slow>0?.38:1,keep=dist(b,player);
  if(keep>290&&keep<950){b.x+=Math.cos(a)*b.spd*slow*dt;b.y+=Math.sin(a)*b.spd*slow*dt}
  else if(keep<210){b.x-=Math.cos(a)*b.spd*.58*slow*dt;b.y-=Math.sin(a)*b.spd*.58*slow*dt}
  if(arenaFence){
    b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);
    b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r);
  }
  b.patternCd-=dt;b.attackCd-=dt;
  if(b.patternCd<=0){
    if((b.phase++%2)===0)beginEmotionPull(b);
    else beginEmotionPush(b);
    return;
  }
  if(b.attackCd<=0){beginEmotionTearBurst(b,6);b.attackCd=bossCd(b,.9)}
  updateEmotionTearBurst(b,dt,.075,1);
  if(dist(b,player)<b.r+player.r&&playerCanTakeDamage()){
    player.hp-=b.dmg;player.inv=.75;shake=7;
    floaters.push({x:player.x,y:player.y-30,t:.7,text:"술자리 압박",color:"#ff6b78"});
  }
}

function beginEmotionTearBurst(b,count=7){
  b.tearBurstLeft=Math.max(b.tearBurstLeft||0,count);
  b.tearBurstT=0;
}

function updateEmotionTearBurst(b,dt,gap=.08,spreadShots=1){
  b.tearBurstT=(b.tearBurstT||0)-dt;
  while((b.tearBurstLeft||0)>0&&b.tearBurstT<=0){
    fireEmotionTear(b,spreadShots);
    b.tearBurstLeft--;
    b.tearBurstT+=gap;
  }
}

function fireEmotionTear(b,spreadShots=1){
  const base=angle(b,player);
  const spd=420+(b.stage||1)*12;
  const count=Math.max(1,spreadShots);
  for(let i=0;i<count;i++){
    const a=base+(i-(count-1)/2)*.12+rnd(-.035,.035);
    bossShots.push({
      kind:"emotionTear",x:b.x+Math.cos(a)*32,y:b.y-14+Math.sin(a)*32,
      vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:8,life:2.45,dmg:7+(b.stage||1),spin:rnd(0,Math.PI*2),
      hitText:"눈물탄"
    });
  }
  playSfx("bossNagFire");
}

function beginEmotionPull(b){
  playSfx("bossNagCast");
  b.state="pullCast";b.stateT=EMOTION_CEO_SKILL.pullCastT;b.patternCd=99;b.attackCd=99;
  effects.push({kind:"emotionPullField",x:b.x,y:b.y,r:EMOTION_CEO_SKILL.pullRadius,damageR:EMOTION_CEO_SKILL.pullDamageRadius,t:EMOTION_CEO_SKILL.pullCastT,maxT:EMOTION_CEO_SKILL.pullCastT,color:"#69d7ff"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:"퇴근만 하지 말고 얘기 좀 들어줘...",t:1.45,maxT:1.45,color:"#e7f8ff"});
}

function beginEmotionPush(b){
  playSfx("bossKickCast");
  b.state="pushCast";b.stateT=EMOTION_CEO_SKILL.pushCastT;b.patternCd=99;b.attackCd=99;
  effects.push({kind:"emotionPushWarn",x:b.x,y:b.y,safe:EMOTION_CEO_SKILL.pushSafe,r:EMOTION_CEO_SKILL.pushOuter,arena:arenaFence?{x:arenaFence.x,y:arenaFence.y,w:arenaFence.w,h:arenaFence.h}:null,t:EMOTION_CEO_SKILL.pushCastT,maxT:EMOTION_CEO_SKILL.pushCastT,color:"#ff4865"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:"너희들은 내 마음 몰라!",t:1.25,maxT:1.25,color:"#fff0a8"});
}

function beginEmotionPullV2(b){
  playSfx("bossNagCast");
  b.state="pullCast";b.stateT=EMOTION_CEO_SKILL.pullCastT;b.patternCd=99;b.attackCd=99;
  b.forceBurstDone=false;b.zoneDmgT=.08;
  spawnEmotionSafetyHeal(b,"pull");
  effects.push({kind:"emotionPullField",x:b.x,y:b.y,r:EMOTION_CEO_SKILL.pullRadius,damageR:EMOTION_CEO_SKILL.pullDamageRadius,t:EMOTION_CEO_SKILL.pullCastT,maxT:EMOTION_CEO_SKILL.pullCastT,color:"#69d7ff"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:"퇴근만 하지 말고 얘기 좀 들어줘...",t:1.45,maxT:1.45,color:"#e7f8ff"});
}

function beginEmotionPushV2(b){
  playSfx("bossKickCast");
  b.state="pushCast";b.stateT=EMOTION_CEO_SKILL.pushCastT;b.patternCd=99;b.attackCd=99;
  b.forceBurstDone=false;b.zoneDmgT=.08;
  spawnEmotionSafetyHeal(b,"push");
  effects.push({kind:"emotionPushWarn",x:b.x,y:b.y,safe:EMOTION_CEO_SKILL.pushSafe,r:EMOTION_CEO_SKILL.pushOuter,arena:arenaFence?{x:arenaFence.x,y:arenaFence.y,w:arenaFence.w,h:arenaFence.h}:null,t:EMOTION_CEO_SKILL.pushCastT,maxT:EMOTION_CEO_SKILL.pushCastT,color:"#ff4865"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:"너희들은 내 마음 몰라!",t:1.25,maxT:1.25,color:"#fff0a8"});
}

function updateEmotionCeoV2(b,dt){
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.inv=Math.max(0,(b.inv||0)-dt);
  const a=angle(b,player);
  if(!["pullCast","pushCast"].includes(b.state))b.dir={x:Math.cos(a),y:Math.sin(a)};
  if(b.stateT>0)b.stateT-=dt;
  if(b.state==="intro"){
    if(b.stateT<=0){b.state="idle";b.patternCd=bossCd(b,1.45);b.attackCd=bossCd(b,.25)}
    return;
  }
  if(b.state==="pullCast"){
    updateEmotionTearBurst(b,dt,.16,5);
    const d=dist(b,player);
    if(d<EMOTION_CEO_SKILL.pullRadius+90){
      const ax=(b.x-player.x)/Math.max(1,d),ay=(b.y-player.y)/Math.max(1,d);
      if(!b.forceBurstDone){
        player.x=clamp(player.x+ax*EMOTION_CEO_SKILL.pullBurst,20,world.w-20);
        player.y=clamp(player.y+ay*EMOTION_CEO_SKILL.pullBurst,20,world.h-20);
        b.forceBurstDone=true;shake=9;
      }
      const awayX=-ax,awayY=-ay;
      const resist=clamp(Math.max(0,(player.vx||0)*awayX+(player.vy||0)*awayY),0,1);
      const pullDepth=clamp(1-d/(EMOTION_CEO_SKILL.pullRadius+90),.04,.66);
      const strength=pullDepth*(1-resist*.86);
      player.x=clamp(player.x+ax*EMOTION_CEO_SKILL.pullForce*strength*dt,20,world.w-20);
      player.y=clamp(player.y+ay*EMOTION_CEO_SKILL.pullForce*strength*dt,20,world.h-20);
      if(resist<.35)player.slowT=Math.max(player.slowT||0,.06);
    }
    b.zoneDmgT=(b.zoneDmgT||0)-dt;
    if(d<EMOTION_CEO_SKILL.pullDamageRadius+player.r&&b.zoneDmgT<=0&&!characterUltimateInvincible()){
      player.hp=Math.max(0,player.hp-3);
      b.zoneDmgT=EMOTION_CEO_SKILL.dotGap;
      floaters.push({x:player.x,y:player.y-32,t:.45,text:"하소연 늪",color:"#69d7ff"});
      shake=Math.max(shake,4);
    }
    if(b.stateT<=0){
      clearBossTelegraphs();
      clearEmotionSafetyHeals();
      b.state="idle";b.patternCd=bossCd(b,2.2);b.attackCd=bossCd(b,.35);
    }
    return;
  }
  if(b.state==="pushCast"){
    const d=dist(b,player);
    const inPushZone=arenaFence?pointInFence(player.x,player.y,arenaFence,0):d<EMOTION_CEO_SKILL.pushOuter;
    if(!b.forceBurstDone&&inPushZone){
      const ax=(player.x-b.x)/Math.max(1,d),ay=(player.y-b.y)/Math.max(1,d);
      player.x=clamp(player.x+ax*EMOTION_CEO_SKILL.pushForce,20,world.w-20);
      player.y=clamp(player.y+ay*EMOTION_CEO_SKILL.pushForce,20,world.h-20);
      b.forceBurstDone=true;shake=10;
    }
    if(d>EMOTION_CEO_SKILL.pushSafe*.62&&inPushZone){
      const ax=(player.x-b.x)/Math.max(1,d),ay=(player.y-b.y)/Math.max(1,d);
      player.x=clamp(player.x+ax*EMOTION_CEO_SKILL.pushForce*.2*dt,20,world.w-20);
      player.y=clamp(player.y+ay*EMOTION_CEO_SKILL.pushForce*.2*dt,20,world.h-20);
    }
    b.zoneDmgT=(b.zoneDmgT||0)-dt;
    if(inPushZone&&d>EMOTION_CEO_SKILL.pushSafe+player.r&&b.zoneDmgT<=0&&!characterUltimateInvincible()){
      player.hp=Math.max(0,player.hp-4);
      b.zoneDmgT=EMOTION_CEO_SKILL.dotGap;
      floaters.push({x:player.x,y:player.y-32,t:.45,text:"감정 폭발",color:"#ff6b78"});
      shake=Math.max(shake,4);
    }
    if(b.stateT<=0){
      clearBossTelegraphs();
      clearEmotionSafetyHeals();
      b.state="idle";b.patternCd=bossCd(b,2.25);b.attackCd=bossCd(b,.35);
    }
    return;
  }
  const slow=b.slow>0?.38:1,keep=dist(b,player);
  if(keep>290&&keep<950){b.x+=Math.cos(a)*b.spd*slow*dt;b.y+=Math.sin(a)*b.spd*slow*dt}
  else if(keep<210){b.x-=Math.cos(a)*b.spd*.58*slow*dt;b.y-=Math.sin(a)*b.spd*.58*slow*dt}
  if(arenaFence){
    b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);
    b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r);
  }
  b.patternCd-=dt;b.attackCd-=dt;
  if(b.patternCd<=0){
    if((b.phase++%2)===0)beginEmotionPullV2(b);
    else beginEmotionPushV2(b);
    return;
  }
  if(b.attackCd<=0){beginEmotionTearBurst(b,6);b.attackCd=bossCd(b,.9)}
  updateEmotionTearBurst(b,dt,.075,1);
  if(dist(b,player)<b.r+player.r&&playerCanTakeDamage()){
    player.hp-=b.dmg;player.inv=.75;shake=7;
    floaters.push({x:player.x,y:player.y-30,t:.7,text:"술자리 압박",color:"#ff6b78"});
  }
}

function updateBoss(b,dt){
  if(b.bossGroup==="estechFather"){updateParkSejunBoss(b,dt);return}
  if(b.bossGroup==="estechFamilyChild"){updateEstechFamilyBoss(b,dt);return}
  if(b.bossGroup==="gossip"){updateGossipBoss(b,dt);return}
  if(b.id==="emotionCeo"){updateEmotionCeoV2(b,dt);return}
  if(b.id==="cultFanatic"){updateCultFanatic(b,dt);return}
  if(b.id==="cheonSangmu"){updateCheonSangmu(b,dt);return}
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.inv=Math.max(0,(b.inv||0)-dt);
  const a=angle(b,player);
  if(b.state!=="nagCast"&&b.state!=="kickCast"&&b.state!=="kickDash")b.dir={x:Math.cos(a),y:Math.sin(a)};
  if(b.stateT>0)b.stateT-=dt;
  if(b.state==="intro"){
    if(b.stateT<=0){b.state="idle";b.patternCd=bossCd(b,1.8);b.attackCd=bossCd(b,.8)}
    return;
  }
  if(b.state==="nagCast"||b.state==="kickCast"){
    if(b.stateT<=0){
      if(b.state==="nagCast")fireBossNag(b);
      else startBossKickDash(b);
    }
    return;
  }
  if(b.state==="kickDash"){
    b.x=clamp(b.x+b.dashDx*b.dashSpeed*dt,20,world.w-20);
    b.y=clamp(b.y+b.dashDy*b.dashSpeed*dt,20,world.h-20);
    if(arenaFence){
      b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);
      b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r);
    }
    if(!b.kickHit&&(dist(b,player)<b.r+player.r+12||pointInRotRect(player.x,player.y,b.dashStartX,b.dashStartY,b.dashAngle,BOSS_KICK_SKILL.len,BOSS_KICK_SKILL.wide+8))&&playerCanTakeDamage()){
      player.hp-=28;player.inv=.9;b.kickHit=true;shake=12;
      floaters.push({x:player.x,y:player.y-34,t:.75,text:"날라차기",color:"#ff6b78"});
    }
    if(b.stateT<=0){b.state="idle";b.patternCd=bossCd(b,2.2);b.attackCd=bossCd(b,.75)}
    return;
  }
  const slow=b.slow>0?.38:1;
  const keep=dist(b,player);
  if(keep>260&&keep<900){
    b.x+=Math.cos(a)*b.spd*slow*dt;
    b.y+=Math.sin(a)*b.spd*slow*dt;
  }else if(keep<170){
    b.x-=Math.cos(a)*b.spd*.65*slow*dt;
    b.y-=Math.sin(a)*b.spd*.65*slow*dt;
  }
  if(arenaFence){
    b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);
    b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r);
  }
  b.patternCd-=dt;b.attackCd-=dt;
  if(b.patternCd<=0){
    if((b.phase++%2)===0)beginBossNag(b);
    else beginBossKick(b);
    return;
  }
  if(b.attackCd<=0){throwBossNabul(b);b.attackCd=bossCd(b,1.55)}
  if(dist(b,player)<b.r+player.r&&playerCanTakeDamage()){
    player.hp-=b.dmg;player.inv=.75;shake=7;
    floaters.push({x:player.x,y:player.y-30,t:.7,text:"갑질 압박",color:"#ff6b78"});
  }
}

function beginBossNag(b){
  playSfx("bossNagCast");
  b.state="nagCast";b.stateT=1.35;b.patternCd=99;b.attackCd=99;
  const a=angle(b,player);
  b.castAngle=a;
  b.dir={x:Math.cos(a),y:Math.sin(a)};
  effects.push({kind:"bossConeTelegraph",x:b.x,y:b.y,angle:a,range:BOSS_NAG_SKILL.range,arc:BOSS_NAG_SKILL.arc,t:1.35,maxT:1.35,color:"#ff304f"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-92,text:b.id==="parkSejun"?"고압 전류 받아라!":"내 말이 곧 법이야 !!!",t:1.35,maxT:1.35,color:"#fff8d6"});
}

function fireBossNag(b){
  playSfx("bossNagFire");
  clearBossTelegraphs();
  const a=b.castAngle??Math.atan2(b.dir.y,b.dir.x);
  if(b.id==="parkSejun")launchParkElectricCone(b,a);else launchBossStampCone(b,a);
  b.state="idle";b.patternCd=bossCd(b,2.6);b.attackCd=bossCd(b,.9);
  return;
  effects.push({kind:"bossNagBlast",x:b.x,y:b.y,angle:a,range:BOSS_NAG_SKILL.range,arc:BOSS_NAG_SKILL.arc,t:.45,maxT:.45,color:"#ff4865"});
  if(pointInCone(player.x,player.y,b.x,b.y,a,BOSS_NAG_SKILL.range,BOSS_NAG_SKILL.arc)&&playerCanTakeDamage()){
    player.hp-=20;player.inv=.8;shake=10;
    floaters.push({x:player.x,y:player.y-32,t:.7,text:"고성 잔소리",color:"#ff6b78"});
  }
  b.state="idle";b.patternCd=bossCd(b,2.6);b.attackCd=bossCd(b,.9);
}

function beginBossKick(b){
  playSfx("bossKickCast");
  b.state="kickCast";b.stateT=BOSS_KICK_SKILL.castT;b.patternCd=99;b.attackCd=99;
  const a=angle(b,player);
  b.castAngle=a;
  b.dir={x:Math.cos(a),y:Math.sin(a)};
  b.kickRow=rowFromAngle4(a);
  effects.push({kind:"bossLineTelegraph",x:b.x,y:b.y,angle:a,len:BOSS_KICK_SKILL.len,wide:BOSS_KICK_SKILL.wide,t:BOSS_KICK_SKILL.castT,maxT:BOSS_KICK_SKILL.castT,color:"#ff304f"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-92,text:"까라면 까 ~~",t:BOSS_KICK_SKILL.castT,maxT:BOSS_KICK_SKILL.castT,color:"#fff8d6"});
}

function startBossKickDash(b){
  playSfx("bossKickDash");
  clearBossTelegraphs();
  const a=b.castAngle??Math.atan2(b.dir.y,b.dir.x);
  b.state="kickDash";b.stateT=BOSS_KICK_SKILL.dashT;b.dashDx=Math.cos(a);b.dashDy=Math.sin(a);b.dashAngle=a;b.dashStartX=b.x;b.dashStartY=b.y;b.dashSpeed=BOSS_KICK_SKILL.dashSpeed;b.kickHit=false;
  effects.push({kind:"bossKickTrail",x:b.x,y:b.y,angle:a,t:BOSS_KICK_SKILL.dashT,maxT:BOSS_KICK_SKILL.dashT,color:"#ffb347"});
}

function clearBossTelegraphs(){
  for(let i=effects.length-1;i>=0;i--){
    if(effects[i].kind==="bossConeTelegraph"||effects[i].kind==="bossLineTelegraph"||effects[i].kind==="bossCircleTelegraph"||effects[i].kind==="cheonHeatTelegraph"||effects[i].kind==="cultHandsWarn"||effects[i].kind==="cultHandsZone"||effects[i].kind==="gossipTriangleFence"||effects[i].kind==="gossipRumorWarn"||effects[i].kind==="gossipRumorBlast"||effects[i].kind==="gossipFrameWarn"||effects[i].kind==="gossipFrameBlast"||effects[i].kind==="emotionPullField"||effects[i].kind==="emotionPushWarn")effects.splice(i,1);
  }
  clearEmotionSafetyHeals();
}

function updateCheonSangmu(b,dt){
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.inv=Math.max(0,(b.inv||0)-dt);
  const a=angle(b,player);
  if(!["heatCast","bellyCast","bellyJump"].includes(b.state))b.dir={x:Math.cos(a),y:Math.sin(a)};
  if(b.stateT>0)b.stateT-=dt;
  if(b.state==="intro"){
    if(b.stateT<=0){b.state="idle";b.patternCd=bossCd(b,1.4);b.attackCd=bossCd(b,.65)}
    return;
  }
  if(b.state==="heatCast"){
    if(b.stateT<=0)fireCheonHeat(b);
    return;
  }
  if(b.state==="bellyCast"){
    if(b.stateT<=0)startCheonBellyJump(b);
    return;
  }
  if(b.state==="bellyJump"){
    const p=1-b.stateT/(b.bellyJumpT||CHEON_BELLY_SKILL.jumpT);
    const ease=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
    b.x=b.jumpFromX+(b.jumpX-b.jumpFromX)*ease;
    b.y=b.jumpFromY+(b.jumpY-b.jumpFromY)*ease;
    if(b.stateT<=0)landCheonBelly(b);
    return;
  }
  const slow=b.slow>0?.38:1,keep=dist(b,player);
  if(keep>250&&keep<900){b.x+=Math.cos(a)*b.spd*slow*dt;b.y+=Math.sin(a)*b.spd*slow*dt}
  else if(keep<150){b.x-=Math.cos(a)*b.spd*.55*slow*dt;b.y-=Math.sin(a)*b.spd*.55*slow*dt}
  if(arenaFence){
    b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);
    b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r);
  }
  b.patternCd-=dt;b.attackCd-=dt;
  if(b.patternCd<=0){
    if((b.phase++%2)===0)beginCheonHeat(b);
    else beginCheonBelly(b,3);
    return;
  }
  if(b.attackCd<=0){throwCheonCoupons(b);b.attackCd=bossCd(b,1.25)}
  if(dist(b,player)<b.r+player.r&&playerCanTakeDamage()){
    player.hp-=b.dmg;player.inv=.75;shake=7;
    floaters.push({x:player.x,y:player.y-30,t:.7,text:"상무님 압박",color:"#ff6b78"});
  }
}

function throwCheonCoupons(b){
  const base=angle(b,player),count=7,arc=Math.PI,spd=350;
  for(let i=0;i<count;i++){
    const t=count===1?.5:i/(count-1);
    const a=base+(t-.5)*arc+rnd(-.035,.035);
    bossShots.push({kind:"coupon",x:b.x+Math.cos(a)*32,y:b.y-10+Math.sin(a)*32,vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:12,life:2.8,dmg:8,spin:rnd(0,Math.PI*2),hitText:"상품권"});
  }
}

function beginCheonHeat(b){
  playSfx("cheonHeatCast");
  b.state="heatCast";b.stateT=CHEON_HEAT_SKILL.castT;b.patternCd=99;b.attackCd=99;
  effects.push({kind:"cheonHeatTelegraph",x:b.x,y:b.y-8,r:CHEON_HEAT_SKILL.ringRadius,t:CHEON_HEAT_SKILL.castT,maxT:CHEON_HEAT_SKILL.castT,color:"#ff304f"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:b.id==="parkSejun"?"배전반 열기 맛 좀 봐라!":"황과장! 너 뭐 돼 ?!",t:CHEON_HEAT_SKILL.castT,maxT:CHEON_HEAT_SKILL.castT,color:"#fff0a8"});
}

function fireCheonHeat(b){
  playSfx("cheonHeatFire");
  clearBossTelegraphs();
  const count=CHEON_HEAT_SKILL.count;
  for(let wave=0;wave<CHEON_HEAT_SKILL.waves;wave++){
    const offset=wave?Math.PI/count:0;
    for(let i=0;i<count;i++){
      const a=i*Math.PI*2/count+offset;
      const delay=wave*CHEON_HEAT_SKILL.waveDelay;
      bossShots.push({
        kind:b.id==="parkSejun"?"parkElectricHeat":"heatCloud",
        x:b.x+Math.cos(a)*42,
        y:b.y-8+Math.sin(a)*42,
        ox:b.x,
        oy:b.y-8,
        angle:a,
        speed:CHEON_HEAT_SKILL.spd,
        vx:Math.cos(a)*CHEON_HEAT_SKILL.spd,
        vy:Math.sin(a)*CHEON_HEAT_SKILL.spd,
        travel:42,
        ringRadius:CHEON_HEAT_SKILL.ringRadius,
        slowAt:CHEON_HEAT_SKILL.slowAt,
        holdT:CHEON_HEAT_SKILL.holdT,
        r:18,
        life:2.3+delay,
        dmg:CHEON_HEAT_SKILL.dmg,
        spin:rnd(0,Math.PI*2),
        delay,
        hitText:b.id==="parkSejun"?"박세준 열기":"상무 열기"
      });
    }
  }
  effects.push({kind:"cheonHeatPuff",x:b.x,y:b.y,r:86,t:.45,maxT:.45,color:"#ff6038"});
  shake=8;
  b.state="idle";b.patternCd=bossCd(b,2.4);b.attackCd=bossCd(b,.75);
}

function beginCheonBelly(b,jumps=CHEON_BELLY_SKILL.chainTotal){
  playSfx("cheonBellyCast");
  const total=CHEON_BELLY_SKILL.chainTotal||3;
  const step=clamp(total-jumps,0,total-1);
  const speedMul=1+step*.28;
  const castT=CHEON_BELLY_SKILL.castT/speedMul;
  const jumpT=CHEON_BELLY_SKILL.jumpT/speedMul;
  b.state="bellyCast";b.stateT=castT;b.patternCd=99;b.attackCd=99;b.bellyJumps=jumps;b.bellyCastT=castT;b.bellyJumpT=jumpT;
  const target=chooseCheonBellyTarget(b);
  b.jumpX=target.x;b.jumpY=target.y;
  effects.push({kind:"bossCircleTelegraph",x:b.jumpX,y:b.jumpY,r:CHEON_BELLY_SKILL.radius,t:castT,maxT:castT,color:"#ff304f"});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:b.id==="parkSejun"?"위에서 찍어 누른다!":"감히 과장 따위가 !!",t:castT,maxT:castT,color:"#fff0a8"});
}

function chooseCheonBellyTarget(b){
  const a=angle(b,player),d=Math.min(CHEON_BELLY_SKILL.range,dist(b,player));
  let x=b.x+Math.cos(a)*d,y=b.y+Math.sin(a)*d;
  if(arenaFence){x=clamp(x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);y=clamp(y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r)}
  return {x,y};
}

function startCheonBellyJump(b){
  playSfx("cheonBellyJump");
  clearBossTelegraphs();
  b.state="bellyJump";b.stateT=b.bellyJumpT||CHEON_BELLY_SKILL.jumpT;b.jumpFromX=b.x;b.jumpFromY=b.y;
}

function landCheonBelly(b){
  playSfx("cheonBellyLand");
  b.x=b.jumpX;b.y=b.jumpY;shake=14;
  effects.push({kind:"cheonBellyImpact",x:b.x,y:b.y,r:CHEON_BELLY_SKILL.radius,t:.55,maxT:.55,color:"#ff304f"});
  if(dist(b,player)<CHEON_BELLY_SKILL.radius+player.r&&playerCanTakeDamage()){
    player.hp-=CHEON_BELLY_SKILL.dmg;player.inv=.9;
    floaters.push({x:player.x,y:player.y-34,t:.75,text:b.id==="parkSejun"?"점프 내려찍기":"배치기",color:"#ff6b78"});
  }
  b.bellyJumps=(b.bellyJumps||1)-1;
  if(b.bellyJumps>0)beginCheonBelly(b,b.bellyJumps);
  else{b.state="idle";b.patternCd=bossCd(b,2.8);b.attackCd=bossCd(b,.8)}
}

function updateCultFanatic(b,dt){
  b.hit=Math.max(0,b.hit-dt);b.slow=Math.max(0,b.slow-dt);b.inv=Math.max(0,(b.inv||0)-dt);
  if(b.stateT>0)b.stateT-=dt;
  if(b.state==="intro"){
    if(b.stateT<=0){b.state="idle";b.patternCd=bossCd(b,1.5);b.attackCd=bossCd(b,.75)}
    return;
  }
  if(b.state==="chant"){
    if(b.stateT<=0){
      if(b.castKind==="totem")finishCultTotem(b);
      else finishCultHands(b);
    }
    return;
  }
  if(b.state==="coffin"){
    b.hp=Math.min(b.maxHp,b.hp+b.maxHp*CULT_SKILL.coffinHeal*dt);
    const coffin=enemies.find(e=>e.id==="cultCoffin"&&e.owner===b);
    if(coffin){
      b.x=coffin.x;b.y=coffin.y;b.inv=Math.max(b.inv,.25);
      effects.push({kind:"cultHeal",x:b.x,y:b.y-18,t:.18,maxT:.18,r:54,color:"#b56cff"});
    }else{
      b.state="idle";b.patternCd=bossCd(b,2.0);b.attackCd=bossCd(b,.75);b.inv=1.1;
      effects.push({kind:"bossIntro",x:b.x,y:b.y,t:.7,maxT:.7,r:92,color:"#b56cff"});
    }
    return;
  }
  if(!b.coffinUsed&&b.hp/b.maxHp<=.2){
    beginCultCoffin(b);
    return;
  }
  const a=angle(b,player);
  b.dir={x:Math.cos(a),y:Math.sin(a)};
  const slow=b.slow>0?.38:1,keep=dist(b,player);
  if(keep>230&&keep<900){b.x+=Math.cos(a)*b.spd*slow*dt;b.y+=Math.sin(a)*b.spd*slow*dt}
  else if(keep<130){b.x-=Math.cos(a)*b.spd*.58*slow*dt;b.y-=Math.sin(a)*b.spd*.58*slow*dt}
  if(arenaFence){b.x=clamp(b.x,arenaFence.x+b.r,arenaFence.x+arenaFence.w-b.r);b.y=clamp(b.y,arenaFence.y+b.r,arenaFence.y+arenaFence.h-b.r)}
  b.patternCd-=dt;b.attackCd-=dt;
  if(b.patternCd<=0){
    const hasTotem=enemies.some(e=>e.id==="cultTotem");
    const hasHands=effects.some(e=>e.kind==="cultHandsWarn"||e.kind==="cultHandsZone");
    const preferTotem=(b.phase++%2)===0;
    if(preferTotem&&!hasTotem)beginCultChant(b,"totem");
    else if(!hasHands)beginCultChant(b,"hands");
    else if(!hasTotem)beginCultChant(b,"totem");
    else{b.patternCd=bossCd(b,1.2);b.attackCd=Math.min(b.attackCd,bossCd(b,.45))}
    return;
  }
  if(b.attackCd<=0){throwCultTalisman(b);b.attackCd=bossCd(b,1.15)}
  if(dist(b,player)<b.r+player.r&&playerCanTakeDamage()){
    player.hp-=b.dmg;player.inv=.75;shake=7;
    floaters.push({x:player.x,y:player.y-30,t:.7,text:"광신도 압박",color:"#ff6b78"});
  }
}

function throwCultTalisman(b){
  const base=angle(b,player),count=1,arc=0,spd=330;
  for(let i=0;i<count;i++){
    const t=count===1?.5:i/(count-1);
    const a=base+(t-.5)*arc;
    bossShots.push({kind:"cultTalisman",x:b.x+Math.cos(a)*28,y:b.y-10+Math.sin(a)*28,vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:11,life:1.45,dmg:8,spin:rnd(0,Math.PI*2),hitText:"미납 부적"});
  }
}

function beginCultChant(b,kind){
  playSfx("cultChant");
  b.state="chant";b.castKind=kind;b.stateT=CULT_SKILL.chantT;b.patternCd=99;b.attackCd=99;
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:kind==="totem"?"신도들아, 일어나라!":"저 손길을 믿으세요!",t:CULT_SKILL.chantT,maxT:CULT_SKILL.chantT,color:"#fff0a8"});
}

function finishCultTotem(b){
  playSfx("cultTotem");
  const a=angle(b,player),d=210;
  let x=b.x+Math.cos(a)*d,y=b.y+Math.sin(a)*d;
  if(arenaFence){x=clamp(x,arenaFence.x+44,arenaFence.x+arenaFence.w-44);y=clamp(y,arenaFence.y+44,arenaFence.y+arenaFence.h-44)}
  enemies.push({id:"cultTotem",name:"광신도 토템",object:true,x,y,r:36,size:36,drawSize:98,hp:CULT_SKILL.totemHp,maxHp:CULT_SKILL.totemHp,spd:0,dmg:0,xp:0,slow:0,hit:0,spawnT:.9});
  effects.push({kind:"bossIntro",x,y,t:.65,maxT:.65,r:96,color:"#b56cff"});
  b.state="idle";b.patternCd=bossCd(b,4.2);b.attackCd=bossCd(b,.8);
}

function finishCultHands(b){
  playSfx("cultHands");
  for(let i=0;i<9;i++){
    const a=rnd(0,Math.PI*2),d=rnd(70,390);
    let x=player.x+Math.cos(a)*d,y=player.y+Math.sin(a)*d;
    if(arenaFence){x=clamp(x,arenaFence.x+44,arenaFence.x+arenaFence.w-44);y=clamp(y,arenaFence.y+44,arenaFence.y+arenaFence.h-44)}
    effects.push({kind:"cultHandsWarn",x,y,r:34+rnd(0,8),t:.42,maxT:.42,color:"#ff304f"});
  }
  b.state="idle";b.patternCd=bossCd(b,2.75);b.attackCd=bossCd(b,.8);
}

function beginCultCoffin(b){
  playSfx("cultCoffin");
  b.coffinUsed=true;b.state="coffin";b.patternCd=99;b.attackCd=99;b.inv=99;
  enemies.push({id:"cultCoffin",name:"회복 관",object:true,x:b.x,y:b.y,r:38,size:38,drawSize:104,hp:CULT_SKILL.coffinHp,maxHp:CULT_SKILL.coffinHp,spd:0,dmg:0,xp:0,slow:0,hit:0,inv:1.25,owner:b});
  effects.push({kind:"bossQuote",x:b.x,y:b.y-104,text:"잠깐 관짝 은신 기도!",t:1.35,maxT:1.35,color:"#fff0a8"});
  effects.push({kind:"bossIntro",x:b.x,y:b.y,t:1,maxT:1,r:110,color:"#b56cff"});
}

function throwBossNabul(b){
  const base=angle(b,player);
  for(const spread of [-.22,0,.22]){
    const a=base+spread,spd=330;
    bossShots.push({kind:"nabul",x:b.x+Math.cos(a)*28,y:b.y-8+Math.sin(a)*28,vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:13,life:3.2,dmg:10,spin:rnd(0,Math.PI*2)});
  }
}

function launchBossStampCone(b,base){
  const waves=3,count=5,arc=BOSS_NAG_SKILL.arc*.9,spd=390;
  for(let w=0;w<waves;w++){
    for(let i=0;i<count;i++){
      const t=count===1?.5:i/(count-1);
      const a=base+(t-.5)*arc+rnd(-.025,.025);
      const delay=w*BOSS_STAMP_WAVE_DELAY+i*BOSS_STAMP_SHOT_DELAY;
      bossShots.push({kind:"stamp",x:b.x+Math.cos(a)*28,y:b.y-8+Math.sin(a)*28,vx:Math.cos(a)*(spd+w*28),vy:Math.sin(a)*(spd+w*28),r:13,life:3.35+delay,dmg:9,spin:rnd(0,Math.PI*2),delay});
    }
  }
  effects.push({kind:"bossStampBurst",x:b.x,y:b.y,angle:base,t:.55,maxT:.55,color:"#ff4865"});
  shake=8;
}

function launchParkElectricCone(b,base){
  const waves=3,count=5,arc=BOSS_NAG_SKILL.arc*.9,spd=410;
  for(let w=0;w<waves;w++)for(let i=0;i<count;i++){
    const t=count===1?.5:i/(count-1),a=base+(t-.5)*arc+rnd(-.025,.025),delay=w*BOSS_STAMP_WAVE_DELAY+i*BOSS_STAMP_SHOT_DELAY;
    bossShots.push({kind:"parkElectricArc",x:b.x+Math.cos(a)*30,y:b.y-8+Math.sin(a)*30,vx:Math.cos(a)*(spd+w*28),vy:Math.sin(a)*(spd+w*28),r:14,life:3.35+delay,dmg:9,spin:rnd(0,Math.PI*2),delay,hitText:"고압 전기 아크"});
  }
  effects.push({kind:"bossStampBurst",x:b.x,y:b.y,angle:base,t:.55,maxT:.55,color:"#56dfff"});shake=8;
}
function pointInCone(px,py,x,y,a,range,arc){
  const dx=px-x,dy=py-y,d=Math.hypot(dx,dy);
  if(d>range)return false;
  let da=Math.atan2(dy,dx)-a;
  while(da>Math.PI)da-=Math.PI*2;
  while(da<-Math.PI)da+=Math.PI*2;
  return Math.abs(da)<=arc/2;
}

function pointInRotRect(px,py,x,y,a,len,wide){
  const dx=px-x,dy=py-y,ca=Math.cos(-a),sa=Math.sin(-a);
  const rx=dx*ca-dy*sa,ry=dx*sa+dy*ca;
  return rx>0&&rx<len&&Math.abs(ry)<wide/2;
}

function pointInSangilSlash(m,e){
  const dx=m.x-player.x,dy=m.y-(player.y-8),ca=Math.cos(e.angle),sa=Math.sin(e.angle);
  const forward=dx*ca+dy*sa;
  const side=-dx*sa+dy*ca;
  return forward>-m.r*.35&&forward<e.range+(e.offset||54)+m.r*.4&&Math.abs(side-(e.side||0))<52+m.r*.7;
}

function pushSangilSlash(angle,offset,level,side=0){
  const px=Math.cos(angle),py=Math.sin(angle),sx=-py,sy=px;
  effects.push({
    kind:"sangilSlash",
    x:player.x+px*offset+sx*side,y:player.y-8+py*offset+sy*side,
    angle,t:.2,maxT:.2,delay:.2,follow:true,offset,side,range:150,wide:128,
    dmg:(32+level*10)*basicDamageMul(),hit:false,color:"#f7d889"
  });
}

function syncSangilSlashEffect(e){
  if(!e.follow)return;
  const px=Math.cos(e.angle),py=Math.sin(e.angle),sx=-py,sy=px;
  const ox=px*(e.offset||54)+sx*(e.side||0);
  const oy=py*(e.offset||54)+sy*(e.side||0);
  e.x=player.x+ox;
  e.y=player.y-8+oy;
}

function clearPlayerAttackState(){
  const wasUltimateActive=player.ultimateTimer>0;
  player.attackTimer=0;
  player.attackDuration=0;
  player.ultimateTimer=0;
  player.ultimateFired=false;
  for(let i=effects.length-1;i>=0;i--){
  if(effects[i].kind==="sangilSlash"||effects[i].kind==="sangilWhirlwind"||effects[i].kind==="seunggwanFamilySlam")effects.splice(i,1);
  }
  if(player.characterId==="sangil"&&wasUltimateActive){
    player.ultimateCdMax=getUltimateCooldown();
    player.ultimateCd=player.ultimateCdMax;
  }
}

function updateSkills(dt){
  for(const s of skills)s.t-=dt;
  updatePassiveSystems(dt);
  if(player.action==="clear"&&player.actionTimer>0)return;
  if(player.characterId==="sangil"){
    if(player.ultimateTimer<=0)fireSangilMelee();
  }
  else if(player.characterId==="seunggwan"){if(player.ultimateTimer<=0)fireSeunggwanIronBall();}
  else if(player.characterId==="jiin")fireJiinHeartBurst();
  else if(player.characterId==="homin")fireHominBubblegum();
  else fireGolfClub();
  fireDroneBot();
  orbitShield(dt);
  fireLittleDragon();
  fireFreezerBird();
  fireSatelliteBeam();
  updateDamageAura(dt);
}

function isAttackableEnemyObject(e){
  return !!e&&e.object&&(e.id==="cultCoffin"||e.id==="cultTotem"||e.id==="parkSejunGuard");
}
function canTargetEnemy(e){
  return !!e&&!e.dead&&e.hp>0&&(!e.object||isAttackableEnemyObject(e))&&(isAttackableEnemyObject(e)||(e.inv||0)<=0);
}
function canDamageEnemy(e){
  return canTargetEnemy(e)&&(e.inv||0)<=0;
}
function visibleEnemies(pad=24){
  return enemies.filter(e=>canTargetEnemy(e)&&isVisibleWorld(e.x,e.y,(e.r||24)+pad));
}
function nearest(range=900){
  let best=null,bd=range;
  for(const e of visibleEnemies(32)){
    const d=dist(player,e);
    if(d<bd){bd=d;best=e}
  }
  return best;
}
function nearestTargets(range=900,count=1){
  return visibleEnemies(32)
    .map(e=>({e,d:dist(player,e)}))
    .filter(item=>item.d<range)
    .sort((a,b)=>a.d-b.d)
    .slice(0,count)
    .map(item=>item.e);
}
function visiblePoint(index=0,count=1,pad=96){
  const c=cam(),vw=viewW(),vh=viewH();
  const cols=Math.max(2,Math.ceil(Math.sqrt(count)));
  const rows=Math.max(2,Math.ceil(count/cols));
  const col=index%cols,row=Math.floor(index/cols);
  const cellW=Math.max(1,(vw-pad*2)/cols),cellH=Math.max(1,(vh-pad*2)/rows);
  const x=c.x+pad+cellW*(col+.5)+rnd(-cellW*.28,cellW*.28);
  const y=c.y+pad+cellH*(row+.5)+rnd(-cellH*.28,cellH*.28);
  return {x:clamp(x,c.x+pad,Math.min(world.w-pad,c.x+vw-pad)),y:clamp(y,c.y+pad,Math.min(world.h-pad,c.y+vh-pad))};
}
function clampVisiblePoint(x,y,pad=70){
  const c=cam(),vw=viewW(),vh=viewH();
  return {x:clamp(x,c.x+pad,Math.min(world.w-pad,c.x+vw-pad)),y:clamp(y,c.y+pad,Math.min(world.h-pad,c.y+vh-pad))};
}

function fireSangilMelee(){
  const s=active("golf");if(s.t>0)return;
  playSfx("golfSpin");
  const target=nearest(560);
  const d=target?{x:target.x-player.x,y:target.y-player.y}:directionVector();
  const len=Math.hypot(d.x,d.y)||1;
  d.x/=len;d.y/=len;
  const a=Math.atan2(d.y,d.x);
  const level=s.level||1;
  s.t=Math.max(.46,.92-level*.04)*attackSpeedMul();
  player.attackTimer=.44;
  player.attackDuration=.44;
  player.attackDir=d;
  const slashOffset=player.moving?78:54;
  if(s.evolved){
    pushSangilSlash(a,slashOffset,level,-34);
    pushSangilSlash(a,slashOffset,level,34);
  }else{
    pushSangilSlash(a,slashOffset,level);
  }
}

function explodeSeunggwanIronBall(p){
  const radius=p.splash||72;
  effects.push({kind:"seunggwanIronImpact",x:p.targetX,y:p.targetY,r:radius,t:.42,maxT:.42,dmg:0,color:"#d8d2c2",seed:rnd(0,99)});
  playSfx("cheonBellyLand");
  shake=Math.max(shake,6);
  for(const e of enemies){
    if((e.inv||0)>0)continue;
    const d=Math.hypot(e.x-p.targetX,e.y-p.targetY);
    if(d<radius+e.r){
      const falloff=clamp(1-d/(radius+e.r),.42,1);
      const dmg=p.dmg*falloff;
      e.hp-=dmg;
      e.hit=.2;
      e.slow=Math.max(e.slow||0,.28);
      floaters.push({x:e.x,y:e.y-e.r,t:.45,text:Math.round(dmg),color:"#d8d2c2"});
    }
  }
}

function fireJiinHeartBurst(){
  const s=active("golf");if(s.t>0)return;
  const level=s.level||1;
  const evolved=!!s.evolved;
  const ultimate=player.ultimateTimer>0;
  const targetCount=evolved?3:level>=5?3:level>=3?2:1;
  const heartsPerTarget=evolved?6:level>=4?5:level>=2?4:3;
  const targets=nearestTargets(820,targetCount);
  if(!targets.length)return;
  const normalCooldown=Math.max(.48,.92-level*.07-(evolved?.08:0));
  s.t=Math.max(.22,normalCooldown*(ultimate?.48:1))*attackSpeedMul();
  player.attackTimer=ultimate?.2:.34;
  player.attackDuration=ultimate?.2:.34;
  const rapidIndex=player.jiinRapidIndex||0;
  player.jiinRapidIndex=rapidIndex+1;
  if(!ultimate||rapidIndex%2===0)playSfx("selectMove");
  for(let targetIndex=0;targetIndex<targets.length;targetIndex++){
    const target=targets[targetIndex];
    const baseAngle=angle(player,target);
    for(let i=0;i<heartsPerTarget;i++){
      const spread=(i-(heartsPerTarget-1)/2)*.075;
      const a=baseAngle+spread+rnd(-.04,.04);
      shots.push({
        kind:"jiinHeart",
        x:player.x+Math.cos(a)*18,
        y:player.y-20+Math.sin(a)*18,
        vx:Math.cos(a)*(250+level*18),vy:Math.sin(a)*(250+level*18),
        r:5.5+s.level*.35,life:2.65,age:0,dmg:(4+level*1.4)*basicDamageMul(),pierce:1,
        color:"#ff6fa8",target,homingRange:880,wobble:rnd(0,Math.PI*2),delay:i*(ultimate?.032:.045)
      });
    }
  }
}

function hominBubbleColor(i=0){
  const colors=["#ff8fd7","#8fe9ff","#ffe873","#b68dff","#ff9f6e"];
  return colors[Math.abs(i)%colors.length];
}
function damageHominBubbleSplash(x,y,radius,dmg,color="#ff8fd7"){
  effects.push({kind:"hominBubbleBurst",x,y,r:radius,t:.46,maxT:.46,color,seed:rnd(0,99)});
  playSfx("bubblePop");
  shake=Math.max(shake,5+radius*.035);
  for(const e of enemies){
    if(!canDamageEnemy(e))continue;
    const d=Math.hypot(e.x-x,e.y-y);
    if(d<radius+(e.r||18)){
      const falloff=clamp(1-d/(radius+(e.r||18)),.38,1);
      const hit=dmg*falloff;
      e.hp-=hit;e.hit=.18;e.slow=Math.max(e.slow||0,.18);
      floaters.push({x:e.x,y:e.y-e.r,t:.45,text:Math.round(hit),color});
    }
  }
}
function bubbleShardTargetAhead(p,range=260,exclude=null){
  const speed=Math.hypot(p.vx,p.vy)||1;
  const fx=p.vx/speed,fy=p.vy/speed;
  let best=null,bestScore=Infinity;
  for(const e of enemies){
    if(!isVisibleWorld(e.x,e.y,(e.r||24)+70))continue;
    if(e===exclude||!canTargetEnemy(e)||p.hit?.has(e))continue;
    const dx=e.x-p.x,dy=e.y-p.y,d=Math.hypot(dx,dy)||1;
    if(d>range)continue;
    const forward=(dx*fx+dy*fy)/d;
    if(forward<.42)continue;
    if((e.hominBubbleClaimUntil||0)>elapsed)continue;
    const score=d+(1-forward)*190;
    if(score<bestScore){bestScore=score;best=e}
  }
  if(best)best.hominBubbleClaimUntil=elapsed+.14;
  return best;
}
function spawnHominBubbleShard(x,y,dmg,chain,level,angleSeed=0){
  const a=angleSeed;
  const speed=330+level*34+rnd(-24,24);
  shots.push({kind:"hominBubbleShard",x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,r:7+level*.45,life:2.2,age:0,dmg,chainLeft:chain,target:null,seekT:rnd(.06,.18),seekRange:235+level*18,hit:new Set(),color:hominBubbleColor(Math.floor(rnd(0,5))),wobble:rnd(0,Math.PI*2),pierce:1});
}
function explodeHominBubble(p){
  if(p.burst)return;
  p.burst=true;
  damageHominBubbleSplash(p.x,p.y,p.splash||82,p.dmg,p.color||"#ff8fd7");
  const count=p.shards||5;
  for(let i=0;i<count;i++){
    const a=Math.PI*2*i/count+rnd(-.16,.16);
    spawnHominBubbleShard(p.x+Math.cos(a)*6,p.y+Math.sin(a)*6,(p.shardDmg||p.dmg*.42),p.chain||2,p.level||1,a);
  }
}
function fireHominBubblegum(){
  const s=active("golf");if(s.t>0)return;
  const level=s.level||1;
  const facing=directionVector();
  const evolved=!!s.evolved;
  const count=evolved?2:1;
  const targets=nearestTargets(980,count);
  const fallbackAngle=Math.atan2(facing.y,facing.x);
  const firstTarget=targets[0]||null;
  const a=firstTarget?Math.atan2(firstTarget.y-(player.y-28),firstTarget.x-player.x):fallbackAngle;
  s.t=Math.max(1.18,2.35-level*.16-(evolved?.3:0))*attackSpeedMul();
  player.attackTimer=.34;player.attackDuration=.34;player.attackDir={x:Math.cos(a),y:Math.sin(a)};
  playSfx("selectMove");
  for(let i=0;i<count;i++){
    const target=targets[i]||firstTarget;
    const spread=count===1||targets.length>1?0:(i ? .07 : -.07);
    const aa=target?Math.atan2(target.y-(player.y-28),target.x-player.x)+spread:fallbackAngle+(count===1?0:(i ? .14 : -.14));
    shots.push({kind:"hominBubble",x:player.x+Math.cos(aa)*24,y:player.y-28+Math.sin(aa)*24,vx:Math.cos(aa)*(235+level*22),vy:Math.sin(aa)*(235+level*22),r:20+level*2.7,baseR:20+level*2.7,life:.9+level*.07,age:0,dmg:(13+level*5.2)*basicDamageMul(),splash:66+level*9,shards:(evolved?6:3)+level,shardDmg:(5+level*2.2)*basicDamageMul(),chain:evolved?3:2,level,color:hominBubbleColor(i),wobble:rnd(0,Math.PI*2),pierce:1});
  }
}
function fireHominUltimateBurst(){
  const level=active("golf").level||1;
  damageHominBubbleSplash(player.x,player.y-24,168+level*12,(130+level*28)*basicDamageMul(),"#ff8fd7");
  const count=18+level*3;
  for(let i=0;i<count;i++){
    const a=Math.PI*2*i/count+rnd(-.1,.1);
    spawnHominBubbleShard(player.x+Math.cos(a)*rnd(4,22),player.y-24+Math.sin(a)*rnd(4,18),(18+level*4)*basicDamageMul(),4,level,a);
  }
  effects.push({kind:"hominBubbleBurst",x:player.x,y:player.y-24,r:210,t:.9,maxT:.9,color:"#8fe9ff",seed:rnd(0,99)});
  shake=18;
  playSfx("dragonExplosion");
}
function fireSeunggwanIronBall(){
  const s=active("golf");if(s.t>0)return;
  const level=s.level||1;
  const target=nearest(760);
  const facing=directionVector();
  const baseAngle=target?angle(player,target):Math.atan2(facing.y,facing.x);
  const range=target?Math.min(520,Math.max(150,dist(player,target))):330;
  const count=s.evolved?2:1;
  s.t=Math.max(.68,1.28-level*.075)*attackSpeedMul();
  player.attackTimer=.58;
  player.attackDuration=.58;
  player.attackDir={x:Math.cos(baseAngle),y:Math.sin(baseAngle)};
  if(Math.abs(player.attackDir.x)>Math.abs(player.attackDir.y)){
    player.dir="side";
    player.face=player.attackDir.x<0?-1:1;
  }else{
    player.dir=player.attackDir.y<0?"up":"down";
  }
  playSfx("golfThrow");
  for(let i=0;i<count;i++){
    const spread=count===1?0:(i===0?-.18:.18);
    const a=baseAngle+spread;
    const tx=clamp(player.x+Math.cos(a)*range+rnd(-18,18),40,world.w-40);
    const ty=clamp(player.y-8+Math.sin(a)*range+rnd(-18,18),40,world.h-40);
    shots.push({
      kind:"seunggwanIronBall",
      x:player.x+Math.cos(a)*20,
      y:player.y-38+Math.sin(a)*20,
      startX:player.x+Math.cos(a)*20,
      startY:player.y-38+Math.sin(a)*20,
      targetX:tx,targetY:ty,
      vx:Math.cos(a)*260,vy:Math.sin(a)*260,
      r:18+level*1.8,
      life:2.4,age:0,airT:Math.max(.52,.78-level*.035),
      arc:112+level*8,
      dmg:(30+level*13)*basicDamageMul(),
      splash:62+level*9,
      pierce:1,color:"#d8d2c2",
      delay:.18+i*.08,
      spin:rnd(0,Math.PI*2)
    });
  }
}

function fireGolfClub(){
  const s=active("golf");if(s.t>0)return;
  if(shots.some(p=>p.kind==="golf"))return;
  playSfx("golfThrow");
  const range=230;
  s.t=Math.max(.56,s.cd-s.level*.055)*attackSpeedMul();
  const target=nearest(640);
  const facing=directionVector();
  const baseAngle=target?angle(player,target):Math.atan2(facing.y,facing.x);
  const speed=330+s.level*48,hold=.32+s.level*.035;
  const dmg=(12+s.level*8)*basicDamageMul();
  const dirs=s.evolved
    ?Array.from({length:8},(_,i)=>i*Math.PI/4)
    :[baseAngle];
  for(let i=0;i<dirs.length;i++){
    const dir=dirs[i];
    shots.push({
      kind:"golf",x:player.x,y:player.y-8,
      vx:Math.cos(dir)*speed,vy:Math.sin(dir)*speed,
      r:14,age:0,life:2.8+s.level*.15,range,speed,hold,holdAge:0,
      endX:player.x+Math.cos(dir)*range,endY:player.y-8+Math.sin(dir)*range,
      dirX:Math.cos(dir),dirY:Math.sin(dir),
      phase:"out",orbitSeed:elapsed+i*.7,dmg,pierce:99,
      color:"#d7e0e8",hit:new Map()
    });
  }
}

function barrierMaxValue(s){return s&&s.evolved?74+s.level*18:18+s.level*13}
function barrierRegenDelay(s){return s&&s.evolved?3.8:Math.max(6.8,10.8-(s.level||1)*.72)}
function barrierHitLoss(s){return s&&s.evolved?16:18+s.level*2}
function updatePassiveSystems(dt){
  const hpLv=skillLevel("maxHealth");
  const targetMax=basePlayerMaxHp()+hpLv*14;
  if(player.maxHp!==targetMax){
    const gain=targetMax-player.maxHp;
    player.maxHp=targetMax;
    if(gain>0)player.hp=Math.min(player.maxHp,player.hp+gain);
  }
  const b=active("barrier");
  if(b&&b.level>0){
    const max=barrierMaxValue(b);
    if(player.skillBarrierMax!==max&&player.skillBarrier>0){
      const ratio=player.skillBarrierMax?player.skillBarrier/player.skillBarrierMax:1;
      player.skillBarrier=Math.max(player.skillBarrier,Math.round(max*ratio));
    }
    player.skillBarrierMax=max;
    if((player.skillBarrier||0)<=0){
      if(!player.barrierRegenT)player.barrierRegenT=barrierRegenDelay(b);
      player.barrierRegenT=Math.max(0,player.barrierRegenT-dt);
      if(player.barrierRegenT<=0){
        player.skillBarrier=max;
        effects.push({kind:"barrierRestore",x:player.x,y:player.y,t:.55,maxT:.55,r:62,color:"#9ee9ff"});
      }
    }else{
      player.skillBarrier=Math.min(max,player.skillBarrier);
      player.barrierRegenT=0;
    }
  }else{
    player.skillBarrier=0;
    player.skillBarrierMax=0;
    player.barrierRegenT=0;
  }
}
function activeCooldown(skill,base){
  return Math.max(.25,base*cooldownMul());
}

function droneBotSlots(level,target=null){
  const count=1;
  const slots=[];
  for(let i=0;i<count;i++){
    const phase=elapsed*2.2+i*Math.PI*2/count;
    const side=count===1?-1:(i===0?-1:1);
    const x=player.x+Math.cos(phase)*10+side*(48+level*3);
    const y=player.y-46+Math.sin(phase*1.35)*10;
    const aim=target?{x:target.x-x,y:target.y-y}:directionVector();
    slots.push({x,y,aim});
  }
  return slots;
}

function droneRowFromVector(v){
  if(Math.abs(v.x)>Math.abs(v.y))return v.x<0?1:2;
  return v.y<0?3:0;
}

function syncDroneEffect(e){
  if(!e.followDrone)return;
  const s=active("droneBot");
  if(!s.level)return;
  const bot=droneBotSlots(s.level,null)[0];
  if(!bot)return;
  const a=e.angle||0;
  const front=e.kind==="droneBeam"?52:e.kind==="droneCharge"?36:16;
  e.x=bot.x+Math.cos(a)*front;
  e.y=bot.y+Math.sin(a)*front;
}

function dragonSlot(level,evolved=false,target=null){
  const phase=elapsed*(evolved?1.75:2.35);
  const x=player.x+62+Math.cos(phase)*12;
  const y=player.y-(evolved?58:38)+Math.sin(phase*1.2)*10;
  const aim=target?{x:target.x-x,y:target.y-y}:directionVector();
  return {x,y,aim};
}

function iceBirdSlot(level,evolved=false,target=null){
  const phase=elapsed*(evolved?1.75:2.35);
  const x=player.x+62+Math.cos(phase)*12;
  const y=player.y-(evolved?58:38)+Math.sin(phase*1.2)*10;
  const aim=target?{x:target.x-x,y:target.y-y}:directionVector();
  return {x,y,aim};
}

function syncDragonEffect(e){
  const s=active("littleDragon");
  if(!s.level)return;
  const dragon=dragonSlot(s.level,!!s.evolved,nearest(860));
  e.x=dragon.x;
  e.y=dragon.y;
}

function dragonRowFromVector(v){
  if(Math.abs(v.x)>Math.abs(v.y))return v.x<0?1:2;
  return v.y<0?3:0;
}

function fireDroneBot(){
  const s=active("droneBot");if(!s.level||s.t>0)return;
  const target=nearest(780);
  if(!target)return;
  if(s.evolved&&effects.some(e=>e.kind==="droneBeam"||e.kind==="droneCharge"))return;
  s.t=s.evolved?6.45:activeCooldown(s,Math.max(1.55,2.15-(s.level-1)*.08));
  const volley=s.evolved?1:clamp(s.level,1,5);
  for(const bot of droneBotSlots(s.level,target)){
    const a=Math.atan2(bot.aim.y,bot.aim.x);
    if(s.evolved){
      effects.push({kind:"droneCharge",x:bot.x,y:bot.y,angle:a,t:.45,maxT:.45,r:28,color:"#72f6ff",followDrone:true});
      effects.push({kind:"droneBeam",x:bot.x,y:bot.y,angle:a,t:2,maxT:2,delay:.45,len:1800,wide:42+s.level*5,dmg:18+s.level*8,tick:.08,color:"#72f6ff",followDrone:true});
      continue;
    }
    effects.push({kind:"droneCharge",x:bot.x,y:bot.y,angle:a,t:.16,maxT:.16,r:14,color:"#72f6ff",followDrone:true});
    const spd=760+s.level*42;
    for(let i=0;i<volley;i++){
      shots.push({
        kind:"droneLaser",
        x:bot.x+Math.cos(a)*18,y:bot.y+Math.sin(a)*18,
        vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,
        r:5+s.level*.2,life:2.7+i*.11,
        delay:.16+i*.11,dmg:6+s.level*4,
        pierce:1,color:"#72f6ff",angle:a,evolved:false,
        shotIndex:i,age:0
      });
    }
  }
}

function orbitShieldMax(s){return s&&s.evolved?10:Math.max(0,Math.min(6,(s.level||0)+1))}
function orbitShieldRegenDelay(s){
  if(!s)return 5.5;
  if(s.evolved)return 1.25;
  return Math.max(3.4,5.8-(s.level||1)*.42);
}
function ensureOrbitShieldState(s){
  const max=orbitShieldMax(s);
  if(s.shieldMaxSeen!==max){
    s.shields=max;
    s.shieldMaxSeen=max;
    s.regenT=0;
  }
  if(s.shields===undefined)s.shields=max;
  s.shields=clamp(s.shields,0,max);
  return max;
}
function orbitShieldPositions(s){
  const count=Math.floor(s.shields||0);
  if(count<=0)return [];
  const rad=s.evolved?78:60+s.level*4;
  const spin=elapsed*(s.evolved?4.6:3.25);
  const arr=[];
  for(let j=0;j<count;j++){
    const a=spin+j*Math.PI*2/count;
    arr.push({x:player.x+Math.cos(a)*rad,y:player.y+Math.sin(a)*rad,a});
  }
  return arr;
}
function breakOrbitShield(s,x,y){
  const max=orbitShieldMax(s);
  s.shields=clamp((s.shields??max)-1,0,max);
  s.regenT=orbitShieldRegenDelay(s);
  if(x!==undefined)effects.push({kind:"shieldBreak",x,y,t:.28,maxT:.28,r:s.evolved?34:26,color:s.evolved?"#8fffff":"#a8d8ff"});
}
function orbitShield(dt){
  const s=active("orbitShield");if(!s.level)return;
  const max=ensureOrbitShieldState(s);
  if(s.shields<max){
    s.regenT=(s.regenT||orbitShieldRegenDelay(s))-dt;
    while(s.regenT<=0&&s.shields<max){
      s.shields++;
      s.regenT+=orbitShieldRegenDelay(s);
    }
  }else s.regenT=0;
  const slots=orbitShieldPositions(s);
  if(!slots.length)return;
  const shieldR=s.evolved?22:17;
  const dmg=s.evolved?64+s.level*8:14+s.level*6;
  for(let i=bossShots.length-1;i>=0&&s.shields>0;i--){
    const p=bossShots[i];
    if(p.delay&&p.delay>0)continue;
    const hit=slots.find(o=>Math.hypot(p.x-o.x,p.y-o.y)<(p.r||8)+shieldR);
    if(hit){
      bossShots.splice(i,1);
      breakOrbitShield(s,hit.x,hit.y);
    }
  }
  if(s.shields<=0)return;
  for(const e of enemies){
    if(s.shields<=0)break;
    if(!canDamageEnemy(e)||e.boss)continue;
    if((e.shieldHitAt||0)+.22>elapsed)continue;
    const hit=slots.find(o=>Math.hypot(e.x-o.x,e.y-o.y)<(e.r||14)+shieldR);
    if(!hit)continue;
    e.hp-=dmg;
    e.hit=.22;
    e.shieldHitAt=elapsed;
    breakOrbitShield(s,hit.x,hit.y);
  }
}

function fireLittleDragon(){
  const s=active("littleDragon");if(!s.level||s.t>0)return;
  const target=nearest(s.evolved?960:860);
  if(!target)return;
  if(s.evolved){castDragonMeteorBall(s,target);return}
  s.t=activeCooldown(s,Math.max(1.05,3.25-s.level*.34));
  const dragon=dragonSlot(s.level,false,target);
  const a=Math.atan2(dragon.aim.y,dragon.aim.x);
  const speed=310+s.level*34;
  const splash=30+s.level*19;
  const radius=6+s.level*4;
  const muzzleX=dragon.x+Math.cos(a)*24;
  const muzzleY=dragon.y+Math.sin(a)*24;
  effects.push({kind:"dragonCharge",x:muzzleX,y:muzzleY,angle:a,t:.24,maxT:.24,r:14+s.level*2.2,color:"#ff9d38",followDragon:true,level:s.level});
  shots.push({
    kind:"dragonFireball",x:muzzleX,y:muzzleY,
    vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,
    targetX:target.x,targetY:target.y,
    r:radius,level:s.level,life:3.2,dmg:20+s.level*9,splash,
    burnDuration:2+s.level*.45,burnDamage:2.2+s.level*.8,
    pierce:1,color:"#ff8a32",angle:a,age:0,delay:.18,followDragonStart:true,muzzleOffset:24
  });
}

function castDragonMeteorBall(s,target){
  s.t=activeCooldown(s,3.15);
  const dragon=dragonSlot(s.level,true,target);
  const a=Math.atan2(target.y-dragon.y,target.x-dragon.x);
  const speed=900;
  for(let i=-1;i<=1;i++){
    const aa=a+i*.14;
    shots.push({kind:"dragonMeteorBall",x:dragon.x+Math.cos(aa)*32,y:dragon.y+Math.sin(aa)*32,vx:Math.cos(aa)*speed,vy:Math.sin(aa)*speed,dx:Math.cos(aa),dy:Math.sin(aa),angle:aa,r:28,life:3.2,age:0,travel:0,nextExplosion:76+Math.abs(i)*12,trailStep:82,dmg:12+s.level*2,burnDuration:4.4,burnDamage:3.8+s.level*.7,pierce:1,color:"#ff7a2c"});
  }
  playSfx("dragonExplosion");
}

function spawnDragonMeteorExplosion(x,y,r,dmg,burnDuration,burnDamage,angle=0,delay=0){
  effects.push({kind:"dragonMeteorExplosion",x,y,r,t:.5,maxT:.5,delay,dmg,burnDuration,burnDamage,angle,color:"#ff8a32",boom:false});
}

function applyDragonBurn(e,duration,damage){
  if(!canDamageEnemy(e))return;
  e.burnT=Math.max(e.burnT||0,duration);
  e.burnMaxT=Math.max(e.burnMaxT||0,duration);
  e.burnDamage=Math.max(e.burnDamage||0,damage);
  e.burnTick=Math.min(e.burnTick??.48,.48);
}

function updateEnemyBurn(e,dt){
  if((e.burnT||0)<=0)return;
  e.burnT=Math.max(0,e.burnT-dt);
  e.burnTick=(e.burnTick||0)-dt;
  if(e.burnTick<=0&&e.hp>0){
    e.burnTick=.48;
    if(canDamageEnemy(e)){
      const damage=e.burnDamage||1;
      e.hp-=damage;
      e.hit=Math.max(e.hit||0,.1);
      floaters.push({x:e.x,y:e.y-(e.r||18),t:.38,text:Math.max(1,Math.round(damage)),color:"#ff7043"});
    }
  }
  if(e.burnT<=0){e.burnDamage=0;e.burnMaxT=0}
}

function explodeDragonFireball(p){
  const radius=p.splash||50;
  effects.push({kind:"dragonFireballSplash",x:p.x,y:p.y,r:radius,t:.34,maxT:.34,dmg:0,color:"#ff8a32",seed:rnd(0,99)});
  for(const e of enemies){
    if(!canDamageEnemy(e))continue;
    const d=Math.hypot(e.x-p.x,e.y-p.y);
    if(d<radius+(e.r||18)){
      const falloff=clamp(1-d/(radius+(e.r||18)),.35,1);
      e.hp-=p.dmg*falloff;
      e.hit=.18;
      applyDragonBurn(e,p.burnDuration||2.4,(p.burnDamage||3)*clamp(falloff,.55,1));
    }
  }
  shake=Math.max(shake,4);
}

function freezeEnemyWithIceBall(e,duration){
  e.slow=Math.max(e.slow||0,duration);
  e.freezeT=Math.max(e.freezeT||0,duration);
}

function explodeIceBall(p,directTarget){
  const radius=p.splash||0;
  const visualRadius=radius>0?radius:30;
  effects.push({kind:"iceBallImpact",x:p.x,y:p.y,r:visualRadius,t:.52,maxT:.52,color:"#9eeaff"});
  if(radius<=0){
    if(canDamageEnemy(directTarget)){
      directTarget.hp-=p.dmg;
      directTarget.hit=.2;
      freezeEnemyWithIceBall(directTarget,p.freeze||1.8);
      floaters.push({x:directTarget.x,y:directTarget.y-directTarget.r,t:.48,text:Math.round(p.dmg),color:"#aeeeff"});
    }
  }else{
    for(const e of enemies){
      if(!canDamageEnemy(e))continue;
      const d=Math.hypot(e.x-p.x,e.y-p.y);
      if(d>=radius+(e.r||18))continue;
      const direct=e===directTarget;
      const falloff=clamp(1-d/(radius+(e.r||18)),.42,1);
      const damage=direct?p.dmg:p.dmg*.58*falloff;
      e.hp-=damage;
      e.hit=.2;
      freezeEnemyWithIceBall(e,p.freeze||2);
      floaters.push({x:e.x,y:e.y-e.r,t:.48,text:Math.round(damage),color:"#aeeeff"});
    }
  }
  playSfx("iceShatter");
  shake=Math.max(shake,radius>0?6:3);
}

function fireFreezerBird(){
  const s=active("freezerBird");if(!s.level||s.t>0)return;
  const count=s.evolved?3:1;
  const targets=nearestTargets(920,count);
  if(!targets.length)return;
  s.t=activeCooldown(s,s.evolved?2.15:Math.max(1.45,3.3-s.level*.32));
  const radius=6+s.level*1.5+(s.evolved?2:0);
  const splash=s.level===1&&!s.evolved?0:20+s.level*18+(s.evolved?18:0);
  const freeze=1.4+s.level*.36+(s.evolved?.35:0);
  const speed=330+s.level*30+(s.evolved?45:0);
  const bird=iceBirdSlot(s.level,!!s.evolved,targets[0]);
  const sx=bird.x,sy=bird.y;
  const fallback=targets[0];
  for(let i=0;i<count;i++){
    const target=targets[i]||fallback;
    const spread=targets[i]?0:(i-1)*.16;
    const a=Math.atan2(target.y-sy,target.x-sx)+spread;
    shots.push({kind:"iceBall",x:sx+Math.cos(a)*18,y:sy+Math.sin(a)*18,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,r:radius,life:3,age:0,dmg:10+s.level*7,splash,freeze,target,pierce:1,color:"#8fe7ff"});
  }
  playSfx("iceBall");
}

function fireSatelliteBeam(){
  const s=active("satelliteBeam");if(!s.level||s.t>0)return;
  s.t=activeCooldown(s,Math.max(2.65,s.cd-s.level*.34));
  const n=s.evolved?4:(s.level>=5?3:1+Math.floor(s.level/3));
  for(let i=0;i<n;i++){
    const target=nearest(1200);
    const x=target?target.x+rnd(-120,120):rnd(120,world.w-120);
    const y=target?target.y+rnd(-120,120):rnd(120,world.h-120);
    effects.push({
      kind:"satelliteBeam",x,y,r:68+s.level*11,t:1.08,maxT:1.08,impactAt:.55,boom:false,
      dmg:40+s.level*20,color:"#fff18a",seed:rnd(0,99),level:s.level,evolved:!!s.evolved
    });
  }
}

function damageAuraRadius(s){return s.evolved ? 112+s.level*18 : 44+s.level*12}
function damageAuraTickDelay(s){return s.evolved ? .24 : Math.max(.38,.64-s.level*.045)}
function damageAuraDamage(s){return s.evolved ? 10+s.level*5 : 1+s.level*1.6}
function updateDamageAura(dt){
  const s=active("damageAura");if(!s.level)return;
  const r=damageAuraRadius(s);
  const tick=damageAuraTickDelay(s);
  const dmg=damageAuraDamage(s);
  for(const e of enemies){
    if(!canDamageEnemy(e))continue;
    if(Math.hypot(e.x-player.x,e.y-player.y)<r+e.r){
      e.auraTick=(e.auraTick||0)-dt;
      if(e.auraTick<=0){
        e.auraTick=tick;
        e.hp-=dmg;
        e.hit=.12;
        e.slow=Math.max(e.slow||0,s.evolved ? .22 : .08);
      }
    }else if(e.auraTick&&e.auraTick<tick*.5){
      e.auraTick=tick*.5;
    }
  }
}
function firePaper(){
  const s=active("paper");if(!s.level||s.t>0)return;s.t=Math.max(.55,s.cd-s.level*.18);
  const n=s.level>=5?12:3+s.level;
  for(let i=0;i<n;i++){const a=Math.PI*2*i/n+elapsed;shots.push({kind:"paper",x:player.x,y:player.y,vx:Math.cos(a)*360,vy:Math.sin(a)*360,r:9,life:1.7,dmg:8+s.level*5,pierce:s.level>=5?3:1,color:"#f6f0dc"})}
  if(s.level>=5)show("문서 분쇄 마스터: 분쇄 폭풍");
}

function fireCalendar(){
  const s=active("calendar");if(!s.level||s.t>0)return;s.t=Math.max(1.1,s.cd-s.level*.22);
  const n=s.level>=5?5:1+Math.floor(s.level/2);
  for(let i=0;i<n;i++){const e=nearest(760),a=e?angle(player,e)+rnd(-.4,.4):rnd(0,Math.PI*2);effects.push({kind:"zone",x:player.x+Math.cos(a)*rnd(120,260),y:player.y+Math.sin(a)*rnd(120,260),r:44+s.level*8,t:.95,boom:false,dmg:24+s.level*12,color:"#ffd36b"})}
}

function fireMeeting(){
  const s=active("meeting");if(!s.level||s.t>0)return;s.t=Math.max(2.2,s.cd-s.level*.34);
  const r=s.level>=5?260:130+s.level*18;
  effects.push({kind:"pulse",x:player.x,y:player.y,r,t:.6,dmg:s.level>=5?26:8,color:"#8fd0ff"});
  for(const e of enemies)if(dist(e,player)<r){e.slow=s.level>=5?1.9:.8;e.hp-=s.level>=5?26:8;e.hit=.15}
  if(s.level>=5)show("침묵 회의 마스터: 전원 발언 금지");
}

function fireCoffee(){
  const s=active("coffee");if(s.level<5||s.t>0)return;s.t=s.cd;
  effects.push({kind:"pulse",x:player.x,y:player.y,r:180,t:.45,dmg:34,color:"#ffb86b"});
  for(const e of enemies)if(dist(e,player)<180){e.hp-=34;e.hit=.2}
}

function orbitCharts(dt){
  const s=active("chart");if(!s.level)return;
  const n=s.level>=5?5:1+s.level,rad=54+s.level*5;
  for(let i=enemies.length-1;i>=0;i--){
    const e=enemies[i];
    for(let j=0;j<n;j++){
      const ox=player.x+Math.cos(elapsed*2.2+j*Math.PI*2/n)*rad;
      const oy=player.y+Math.sin(elapsed*2.2+j*Math.PI*2/n)*rad;
      if(Math.hypot(e.x-ox,e.y-oy)<e.r+10&&e.hit<=0){
        e.hp-=s.level>=5?24:10+s.level*3;e.hit=.28;
        if(s.level>=5)shots.push({kind:"chart",x:ox,y:oy,vx:(e.x-player.x)*2.4,vy:(e.y-player.y)*2.4,r:7,life:.5,dmg:12,pierce:1,color:"#9ff0c5"});
      }
    }
  }
}

function updateShots(dt){
  for(let i=shots.length-1;i>=0;i--){
    const p=shots[i];p.life-=dt;
    if(p.delay>0){
      if(p.followDragonStart&&typeof dragonSlot==="function"&&typeof active==="function"){
        const s=active("littleDragon");
        if(s&&s.level){
          const slot=dragonSlot(s.level,false,null);
          const a=p.angle||0;
          p.x=slot.x+Math.cos(a)*(p.muzzleOffset||24);
          p.y=slot.y+Math.sin(a)*(p.muzzleOffset||24);
        }
      }
      p.delay-=dt;
      continue;
    }
    if(p.kind==="droneLaser")p.age=(p.age||0)+dt;
    if(p.kind==="iceBall"){
      p.age=(p.age||0)+dt;
      if(p.target&&!canTargetEnemy(p.target))p.target=null;
      if(p.target){
        const dx=p.target.x-p.x,dy=p.target.y-p.y,len=Math.hypot(dx,dy)||1;
        const speed=Math.hypot(p.vx,p.vy)||360;
        const turn=clamp(dt*3.4,0,1);
        p.vx=p.vx*(1-turn)+dx/len*speed*turn;
        p.vy=p.vy*(1-turn)+dy/len*speed*turn;
      }
    }
    if(p.kind==="jiinHeart"){
      p.age=(p.age||0)+dt;
      if(p.fading){
        p.fadeT-=dt;
        const drag=Math.max(0,1-dt*7);
        p.vx*=drag;p.vy*=drag;
        if(p.fadeT<=0){shots.splice(i,1);continue}
      }else{
        const invalidTarget=!canTargetEnemy(p.target)||!enemies.includes(p.target)||Math.hypot(p.target.x-p.x,p.target.y-p.y)>(p.homingRange||820);
        if(invalidTarget){
          p.target=null;
          p.fading=true;
          p.fadeT=.18;
        }else{
          const dx=p.target.x-p.x,dy=p.target.y-p.y,len=Math.hypot(dx,dy)||1;
          const nx=dx/len,ny=dy/len,w=Math.sin((p.age||0)*15+(p.wobble||0))*.42;
          const tx=nx-w*ny,ty=ny+w*nx,tl=Math.hypot(tx,ty)||1;
          const spd=310+active("golf").level*22+(active("golf").evolved?70:0);
          const turn=clamp(dt*7.5,0,1);
          p.vx=p.vx*(1-turn)+(tx/tl)*spd*turn;
          p.vy=p.vy*(1-turn)+(ty/tl)*spd*turn;
        }
      }
    }
    if(p.kind==="seunggwanIronBall"){
      p.age=(p.age||0)+dt;
      const q=clamp(p.age/(p.airT||.72),0,1);
      p.x=p.startX+(p.targetX-p.startX)*q;
      p.y=p.startY+(p.targetY-p.startY)*q-Math.sin(q*Math.PI)*(p.arc||120);
      p.spin=(p.spin||0)+dt*10;
      if(q>=1||p.life<=0){
        explodeSeunggwanIronBall(p);
        shots.splice(i,1);
      }
      continue;
    }
    if(p.kind==="dragonMeteorBall"){
      p.age=(p.age||0)+dt;
      const step=Math.hypot(p.vx,p.vy)*dt;
      p.x+=p.vx*dt;p.y+=p.vy*dt;p.travel=(p.travel||0)+step;
      while(p.nextExplosion<=p.travel){
        const back=p.travel-p.nextExplosion;
        spawnDragonMeteorExplosion(p.x-p.dx*back,p.y-p.dy*back,62,p.dmg,p.burnDuration,p.burnDamage,p.angle);
        p.nextExplosion+=p.trailStep;
      }
      if(p.life<=0||!isVisibleWorld(p.x,p.y,150)){shots.splice(i,1);continue}
      continue;
    }
    if(p.kind==="golf"){
      p.age+=dt;
      if(p.phase==="out"){
        const step=p.speed*dt,d=Math.hypot(p.endX-p.x,p.endY-p.y);
        if(d<=step){
          p.x=p.endX;p.y=p.endY;p.phase="hold";p.hit=new Map();
          playSfx("golfSpin");
        }else{
          const a=Math.atan2(p.endY-p.y,p.endX-p.x);
          p.vx=Math.cos(a)*p.speed;p.vy=Math.sin(a)*p.speed;
          p.x+=p.vx*dt;p.y+=p.vy*dt;
        }
      }else if(p.phase==="hold"){
        p.holdAge+=dt;
        p.x=p.endX;
        p.y=p.endY;
        const spin=p.holdAge*18+p.orbitSeed;
        p.vx=-Math.sin(spin)*p.speed*.2;
        p.vy=Math.cos(spin)*p.speed*.2;
        if(p.holdAge>=p.hold){p.phase="return";p.returning=true;p.hit=new Map();playSfx("golfReturn")}
      }else if(p.phase==="return"){
        const returnDist=dist(p,player);
        const speed=520+active("golf").level*60+Math.max(0,returnDist-p.range)*1.35;
        const a=angle(p,player);
        p.vx=Math.cos(a)*speed;p.vy=Math.sin(a)*speed;
        p.x+=p.vx*dt;p.y+=p.vy*dt;
        if(dist(p,player)<26)p.life=0;
      }
    }else{
      p.x+=p.vx*dt;p.y+=p.vy*dt;
    }
    if(p.kind==="hominBubble"){
      p.age=(p.age||0)+dt;
      p.r=(p.baseR||p.r)*(1+Math.sin((p.age||0)*8+(p.wobble||0))*.08);
      let popped=p.life<=0;
      if(!popped){
        for(const e of enemies){
          if(!canDamageEnemy(e)||!isVisibleWorld(e.x,e.y,(e.r||24)+48))continue;
          if(dist(p,e)<p.r+(e.r||18)){popped=true;break}
        }
      }
      if(popped){explodeHominBubble(p);shots.splice(i,1);continue}
      if(!isVisibleWorld(p.x,p.y,120)){shots.splice(i,1);continue}
      continue;
    }
    if(p.kind==="hominBubbleShard"){
      p.age=(p.age||0)+dt;
      p.seekT=(p.seekT||0)-dt;
      if(p.target){
        const dx=p.target.x-p.x,dy=p.target.y-p.y,d=Math.hypot(dx,dy)||1,spd=Math.hypot(p.vx,p.vy)||1;
        const forward=(dx*p.vx+dy*p.vy)/(d*spd);
        if(!canTargetEnemy(p.target)||p.hit?.has(p.target)||forward<.08||d>(p.seekRange||260)*1.35)p.target=null;
      }
      if(!p.target&&p.seekT<=0&&p.chainLeft>=0){
        p.target=bubbleShardTargetAhead(p,p.seekRange||260,null);
        p.seekT=rnd(.1,.2);
      }
      if(p.target){
        const dx=p.target.x-p.x,dy=p.target.y-p.y,len=Math.hypot(dx,dy)||1,spd=360+(active("golf").level||1)*32;
        const wob=Math.sin((p.age||0)*16+(p.wobble||0))*.08;
        const tx=dx/len-wob*dy/len,ty=dy/len+wob*dx/len,tl=Math.hypot(tx,ty)||1,turn=clamp(dt*5.2,0,1);
        p.vx=p.vx*(1-turn)+tx/tl*spd*turn;p.vy=p.vy*(1-turn)+ty/tl*spd*turn;
      }
      let bounced=false;
      for(const e of enemies){
        if(!canDamageEnemy(e)||p.hit?.has(e)||!isVisibleWorld(e.x,e.y,(e.r||24)+36))continue;
        if(dist(p,e)<p.r+(e.r||18)){
          e.hp-=p.dmg;e.hit=.14;p.hit.add(e);p.chainLeft--;
          floaters.push({x:e.x,y:e.y-e.r,t:.42,text:Math.round(p.dmg),color:p.color});
          if(p.chainLeft<0){p.life=0;break}
          p.target=bubbleShardTargetAhead(p,p.seekRange||260,e);
          p.seekT=p.target ? .08 : rnd(.08,.16);
          bounced=!!p.target;
          break;
        }
      }
      if(bounced){const a=angle(p,p.target),spd=390+(active("golf").level||1)*30;p.vx=Math.cos(a)*spd;p.vy=Math.sin(a)*spd}
      if(p.life<=0||!isVisibleWorld(p.x,p.y,120)){shots.splice(i,1);continue}
      continue;
    }
    if(p.kind!=="golf"&&p.kind!=="seunggwanIronBall"&&!isVisibleWorld(p.x,p.y,96)){shots.splice(i,1);continue}
    for(const e of enemies){
      if(!isVisibleWorld(e.x,e.y,(e.r||24)+36))continue;
      const lastHit=p.hit&&typeof p.hit.get==="function"?p.hit.get(e):undefined;
      const already=p.kind==="golf"
        ?(p.phase==="hold"?lastHit!==undefined&&p.age-lastHit<.18:lastHit!==undefined)
        :false;
      const hitRadius=p.kind==="golf"&&p.phase==="hold"?42+active("golf").level*4:p.r;
      if(p.pierce>0&&!p.fading&&!already&&(e.inv||0)<=0&&dist(p,e)<hitRadius+e.r){
        if(p.kind==="iceBall"){
          explodeIceBall(p,e);
          p.life=0;
          p.pierce=0;
          break;
        }
        if(p.kind==="dragonFireball"){
          explodeDragonFireball(p);
          p.life=0;
          p.pierce=0;
          break;
        }
        const dmg=p.kind==="golf"&&p.phase==="hold"?p.dmg*.42:p.dmg;
        e.hp-=dmg;e.hit=.14;p.pierce--;
        if(p.hit&&typeof p.hit.set==="function")p.hit.set(e,p.age);
        floaters.push({x:e.x,y:e.y-e.r,t:.45,text:Math.round(dmg),color:p.color});
      }
    }
    if(p.life<=0||p.pierce<=0)shots.splice(i,1);
  }
  for(let i=enemies.length-1;i>=0;i--)if(enemies[i].hp<=0)killEnemy(i);
}

function updateBossShots(dt){
  for(let i=bossShots.length-1;i>=0;i--){
    const p=bossShots[i];p.life-=dt;p.spin+=dt*9;
    if(p.delay>0){p.delay-=dt;continue}
    if(p.kind==="heatCloud"||p.kind==="parkElectricHeat"){
      const a=p.angle??Math.atan2(p.vy,p.vx);
      if(p.travel<p.ringRadius){
        if(p.travel>=p.slowAt){
          const left=clamp((p.ringRadius-p.travel)/(p.ringRadius-p.slowAt),0,1);
          p.speed=52+(CHEON_HEAT_SKILL.spd-52)*left*left;
        }
        const step=Math.min(p.speed*dt,p.ringRadius-p.travel);
        p.travel+=step;
        p.x=p.ox+Math.cos(a)*p.travel;
        p.y=p.oy+Math.sin(a)*p.travel;
        if(p.travel>=p.ringRadius){
          p.x=p.ox+Math.cos(a)*p.ringRadius;
          p.y=p.oy+Math.sin(a)*p.ringRadius;
          p.speed=0;
          p.life=Math.min(p.life,p.holdT);
        }
      }
      p.vx=Math.cos(a)*p.speed;
      p.vy=Math.sin(a)*p.speed;
    }else if(p.kind==="dumbbellBoomerang"){
      p.age=(p.age||0)+dt;
      if(p.age>(p.turnT||.7)&&p.owner&&p.owner.hp>0){
        const a=angle(p,p.owner),spd=Math.hypot(p.vx,p.vy)||420;
        p.vx=Math.cos(a)*spd;
        p.vy=Math.sin(a)*spd;
        if(dist(p,p.owner)<24){bossShots.splice(i,1);continue}
      }
      p.x+=p.vx*dt;p.y+=p.vy*dt;
    }else if(p.kind==="dragonFireball"){
      p.age=(p.age||0)+dt;
      p.x+=p.vx*dt;p.y+=p.vy*dt;
      if(Math.hypot(p.x-p.targetX,p.y-p.targetY)<Math.max(18,p.r*1.5)||p.life<=0){
        explodeDragonFireball(p);
        shots.splice(i,1);
        continue;
      }
    }else{
      p.x+=p.vx*dt;p.y+=p.vy*dt;
    }
    if(dist(p,player)<p.r+player.r&&playerCanTakeDamage()){
      player.hp-=p.dmg;player.inv=.65;shake=5;
      floaters.push({x:player.x,y:player.y-28,t:.6,text:p.hitText||(p.kind==="nabul"?"\uB098\uBD88\uB098\uBD88":"\uC9C1\uC778 \uB3C4\uC7A5"),color:"#ff6b78"});
      bossShots.splice(i,1);
      continue;
    }
    if(p.life<=0||p.x<0||p.y<0||p.x>world.w||p.y>world.h)bossShots.splice(i,1);
  }
}

function updateEffects(dt){
  for(const beam of effects){
    if(beam.kind!=="droneBeam")continue;
    syncDroneEffect(beam);
    if(beam.delay>0)continue;
    beam.tick=(beam.tick||0)-dt;
    if(beam.tick>0)continue;
    beam.tick=.08;
    const ca=Math.cos(beam.angle),sa=Math.sin(beam.angle);
    for(const e of enemies){
      if((e.inv||0)>0)continue;
      const dx=e.x-beam.x,dy=e.y-beam.y;
      const forward=dx*ca+dy*sa;
      const side=Math.abs(-dx*sa+dy*ca);
      if(forward>-e.r&&forward<(beam.len||1600)+e.r&&side<(beam.wide||38)+e.r){
        e.hp-=beam.dmg;
        e.hit=.12;
      }
    }
  }
  if((player.poisonT||0)>0){
    player.poisonT=Math.max(0,player.poisonT-dt);
    player.poisonTick=(player.poisonTick||0)-dt;
    if(player.poisonTick<=0){
      player.poisonTick=.5;
      if(!characterUltimateInvincible()){
        player.hp=Math.max(0,player.hp-2);
        floaters.push({x:player.x,y:player.y-30,t:.42,text:"중독",color:"#cfe96a"});
      }
    }
  }
  for(let i=effects.length-1;i>=0;i--){
    const e=effects[i];
    if(e.kind==="sangilSlash")syncSangilSlashEffect(e);
    if(e.delay){
      e.delay-=dt;
      if(e.delay>0)continue;
      e.delay=0;
    }
    e.t-=dt;
    if(e.kind==="fartCloud"){
      if(dist(e,player)<e.r+player.r){
        player.poisonT=Math.max(player.poisonT||0,e.poisonT||2.2);
        player.poisonTick=Math.min(player.poisonTick||0,.08);
      }
    }
    if(e.kind==="seoyulCompanion"){
      const side=player.face<0?1:-1;
      const tx=player.x+side*44;
      const ty=player.y+34;
      e.x+=(tx-e.x)*clamp(dt*5.5,0,1);
      e.y+=(ty-e.y)*clamp(dt*5.5,0,1);
      const energyRate=1.35;
      player.ultimateCd=Math.max(0,player.ultimateCd-dt*energyRate);
      player.hp=Math.min(player.maxHp,player.hp+dt*2);
      e.energyTick=(e.energyTick||0)-dt;
      if(e.energyTick<=0){
        e.energyTick=.7;
        if(player.ultimateCd>0)floaters.push({x:player.x,y:player.y-48,t:.55,text:"+ 에너지",color:"#9b7cff"});
      }
      e.dir=Math.abs(tx-e.x)>Math.abs(ty-e.y)?(tx<e.x?"sideL":"sideR"):(ty<e.y?"up":"down");
    }
    if(e.kind==="dragonMeteorExplosion"&&!e.boom&&e.t<=e.maxT*.82){
      e.boom=true;
      for(const m of enemies){
        if(!canDamageEnemy(m))continue;
        const d=Math.hypot(m.x-e.x,m.y-e.y);
        if(d<e.r+(m.r||18)){
          const falloff=clamp(1-d/(e.r+(m.r||18)),.38,1);
          m.hp-=e.dmg*falloff;
          m.hit=.2;
          applyDragonBurn(m,e.burnDuration||4.4,(e.burnDamage||7)*clamp(falloff,.55,1));
        }
      }
      shake=Math.max(shake,e.r>=90?8:4);
    }
    if(e.kind==="ultimateBall"){
      e.x+=e.dx*e.speed*dt;
      e.y+=e.dy*e.speed*dt;
       for(const m of enemies){
        if(!e.hit.has(m)&&(m.inv||0)<=0&&Math.hypot(m.x-e.x,m.y-e.y)<(e.vortexR||e.r)+(m.r||18)){
          e.hit.add(m);
          m.hp-=e.dmg;
          m.hit=.35;
          m.slow=1.3;
          m.ultimateHit=true;
          floaters.push({x:m.x,y:m.y-m.r,t:.55,text:"풀스윙",color:"#eaf9ff"});
          shake=Math.max(shake,8);
         }
      }
    }
    if(e.kind==="sangilWhirlwind"){
      e.x=player.x;e.y=player.y-8;
      e.soundT=(e.soundT||0)-dt;
      if(e.soundT<=0){playSfx("golfSpin");e.soundT=.38}
      for(const m of enemies){
        const last=e.hit.get(m)||0;
        if((m.inv||0)<=0&&e.maxT-e.t-last>.16&&Math.hypot(m.x-e.x,m.y-e.y)<e.r+m.r){
          e.hit.set(m,e.maxT-e.t);
          m.hp-=e.dmg;
          m.hit=.25;
          m.slow=.45;
          m.ultimateHit=true;
          floaters.push({x:m.x,y:m.y-m.r,t:.45,text:"휠윈드",color:"#fff0a8"});
          shake=Math.max(shake,7);
        }
      }
    }
    if(e.kind==="seunggwanFamilySlam"){
      const p=1-e.t/e.maxT;
      const dx=e.dx||0,dy=e.dy||1;
      const sx=-dy,sy=dx;
      const impactX=e.x;
      const impactY=e.y;
      if(!e.hit&&p>=.62){
        e.hit=true;
        playSfx("cheonBellyLand");
        shake=Math.max(shake,18);
        effects.push({kind:"seunggwanIronImpact",x:impactX,y:impactY,r:e.r*.58,t:.5,maxT:.5,delay:.12,color:"#fff0a8"});
        for(let i=0;i<7;i++){
          const a=i*Math.PI*2/7+(e.maxT-e.t)*.7;
          const d=42+(i%3)*28;
          effects.push({
            kind:"seunggwanIronImpact",
            x:impactX+Math.cos(a)*d,
            y:impactY+Math.sin(a)*d*.72,
            r:42+(i%2)*12,
            t:.42,maxT:.42,
            delay:.12+i*.038,
            color:"#d8d2c2",
            seed:i*13
          });
        }
        const spots=[
          {x:impactX,y:impactY},
          {x:impactX+sx*42-dx*10,y:impactY+sy*42-dy*10},
          {x:impactX-sx*42-dx*10,y:impactY-sy*42-dy*10}
        ];
        for(const m of enemies){
          if((m.inv||0)>0)continue;
          let best=9999;
          for(const s of spots)best=Math.min(best,Math.hypot(m.x-s.x,m.y-s.y));
          if(best<e.r+m.r){
            const dmg=e.dmg*clamp(1-best/(e.r+m.r),.4,1);
            m.hp-=dmg;
            m.hit=.34;
            m.slow=1.1;
            m.ultimateHit=true;
            floaters.push({x:m.x,y:m.y-m.r,t:.58,text:Math.round(dmg),color:"#fff0a8"});
          }
        }
      }
    }
    if(e.kind==="gossipRumorWarn"&&e.t<=0&&!e.spawned){
      e.spawned=true;
      effects.push({kind:"gossipRumorBlast",x:e.x,y:e.y,r:e.r,t:.34,maxT:.34,damage:e.damage||14,color:e.color||"#ff4f8f",text:e.text||"쟤래"});
    }
    if(e.kind==="gossipFrameWarn"){
      e.followT=Math.max(0,(e.followT||0)-dt);
      if(e.followT>0){
        e.x=player.x;
        e.y=player.y;
      }
      if(e.t<=0&&!e.spawned){
        e.spawned=true;
        effects.push({kind:"gossipFrameBlast",x:e.x,y:e.y,w:e.w||138,h:e.h||108,r:e.r||74,t:.38,maxT:.38,damage:e.damage||20,color:e.color||"#ff304f"});
      }
    }
    if(e.kind==="gossipRumorBlast"&&!e.hit&&e.t<e.maxT*.72){
      e.hit=true;
      if(dist(e,player)<e.r+player.r&&playerCanTakeDamage()){
        player.hp-=e.damage||14;
        player.inv=.65;
        shake=Math.max(shake,7);
        floaters.push({x:player.x,y:player.y-30,t:.58,text:e.text||"소문",color:"#ff6b78"});
      }
    }
    if(e.kind==="gossipFrameBlast"&&!e.hit&&e.t<e.maxT*.72){
      e.hit=true;
      if(Math.abs(player.x-e.x)<(e.w||138)/2+player.r&&Math.abs(player.y-e.y)<(e.h||108)/2+player.r&&playerCanTakeDamage()){
        player.hp-=e.damage||20;
        player.inv=.75;
        shake=Math.max(shake,9);
        floaters.push({x:player.x,y:player.y-30,t:.65,text:"모함 프레임",color:"#ff6b78"});
      }
    }
    if(e.kind==="satelliteBeam"&&!e.boom){
      const p=1-e.t/e.maxT;
      if(p>=(e.impactAt||.55)){
        e.boom=true;
        for(const m of enemies){
          if((m.inv||0)>0)continue;
          const d=Math.hypot(m.x-e.x,m.y-e.y);
          if(d<e.r+m.r){
            m.hp-=e.dmg*clamp(1-d/(e.r+m.r),.42,1);
            m.hit=.28;
            m.slow=Math.max(m.slow||0,.45);
          }
        }
        shake=Math.max(shake,8);
      }
    }
    if(e.kind==="zone"&&e.t<.22&&!e.boom){e.boom=true;for(const m of enemies)if((m.inv||0)<=0&&Math.hypot(m.x-e.x,m.y-e.y)<e.r){m.hp-=e.dmg;m.hit=.2;m.slow=Math.max(m.slow||0,e.slow||.4)}shake=4}
    if(e.kind==="sangilSlash"&&!e.hit&&e.t<e.maxT*.62){
      e.hit=true;
      for(const m of enemies){
        if((m.inv||0)<=0&&pointInSangilSlash(m,e)){
          m.hp-=e.dmg;
          m.hit=.18;
          m.slow=.25;
          floaters.push({x:m.x,y:m.y-m.r,t:.42,text:Math.round(e.dmg),color:e.color});
        }
      }
      shake=Math.max(shake,4);
    }
    if(e.kind==="enemyTapeWhip"&&!e.hit&&e.t<e.maxT*.46){
      e.hit=true;
      if(pointInRotRect(player.x,player.y,e.x+Math.cos(e.angle)*e.range*.48,e.y+Math.sin(e.angle)*e.range*.48,e.angle,e.range,e.wide)&&playerCanTakeDamage()){
        player.hp-=e.dmg;player.inv=.7;shake=7;
        floaters.push({x:player.x,y:player.y-28,t:.6,text:"테이프 채찍",color:"#ff6b78"});
      }
    }
    if(e.kind==="cultHandsZone"){
      e.damageT=Math.max(0,(e.damageT||0)-dt);
      if(dist(e,player)<e.r+player.r){
        player.slowT=Math.max(player.slowT||0,.18);
        if(e.damageT<=0&&playerCanTakeDamage()){
          e.damageT=.55;
          player.hp-=2;
          shake=Math.max(shake,3);
          floaters.push({x:player.x,y:player.y-28,t:.45,text:"저주",color:"#d9b6ff"});
        }
      }
    }
    if(e.kind==="cultHandsWarn"&&e.t<=0&&!e.spawned){
      e.spawned=true;
      effects.push({kind:"cultHandsZone",x:e.x,y:e.y,r:e.r,t:5.5,maxT:5.5,frameT:0,color:"#7e58d6"});
    }
    if(e.t<=0)effects.splice(i,1);
  }
  for(let i=floaters.length-1;i>=0;i--){floaters[i].t-=dt;floaters[i].y-=34*dt;if(floaters[i].t<=0)floaters.splice(i,1)}
  for(let i=enemies.length-1;i>=0;i--)if(enemies[i].hp<=0)killEnemy(i);
}

function experienceGemLimit(){
  return mobileControlsAvailable()?140:220;
}
function isExperienceGem(g){
  return g.kind==="blue"||g.kind==="green"||g.kind==="purple"||g.kind==="gold";
}
function experienceGemAppearance(stageNo,value,forceGold=false){
  if(stageNo<=1)return {kind:"blue",r:6};
  if(stageNo===2)return value>=12?{kind:"green",r:7}:{kind:"blue",r:6};
  if(forceGold||value>=80)return {kind:"gold",r:9};
  const stageFloor=stageNo>=6?2:stageNo>=3?1:0;
  const valueTier=value>=18?2:value>=6?1:0;
  const tier=Math.max(stageFloor,valueTier);
  return tier>=2?{kind:"purple",r:8}:tier>=1?{kind:"green",r:7}:{kind:"blue",r:6};
}
function dropExperienceGem(x,y,value,{forceGold=false}={}){
  const stageNo=clamp(currentStage||1,1,20);
  const appearance=experienceGemAppearance(stageNo,value,forceGold);
  let xpCount=0,bank=null,bestDist=-1;
  for(const gem of gems){
    if(!isExperienceGem(gem))continue;
    xpCount++;
    if(gem.xpBank){bank=gem;break}
    const d=Math.hypot(gem.x-player.x,gem.y-player.y);
    if(d>bestDist){bestDist=d;bank=gem}
  }
  if(xpCount>=experienceGemLimit()&&bank){
    bank.xpBank=true;
    bank.value+=value;
    const merged=experienceGemAppearance(stageNo,bank.value,forceGold||bank.kind==="gold");
    bank.kind=merged.kind;
    bank.r=merged.r;
    return bank;
  }
  const gem={x,y,r:appearance.r,value,kind:appearance.kind};
  gems.push(gem);
  return gem;
}

function killEnemy(i){
  const e=enemies[i];
  flushEnemyDamageFeedback(e,true);
  if(e.boss){
    if(e.bossGroup==="estechFamilyChild"){
      kills++;effects.push({kind:"bossDeath",x:e.x,y:e.y,r:78,t:.7,maxT:.7,color:e.color});floaters.push({x:e.x,y:e.y-74,t:.85,text:`${e.name} 퇴장`,color:"#fff8d6"});enemies.splice(i,1);shake=9;return;
    }
    if(e.bossGroup==="estechFather"){
      kills++;const x=e.x,y=e.y,group=e.group;beginBossClear({id:"parkSejunFamily",x,y});
      for(let j=enemies.length-1;j>=0;j--)if(enemies[j]!==e&&enemies[j].group===group)enemies.splice(j,1);
      const fatherIndex=enemies.indexOf(e);if(fatherIndex>=0)enemies.splice(fatherIndex,1);
      for(let j=0;j<12;j++)gems.push({x:x+rnd(-60,60),y:y+rnd(-42,52),r:8,value:12,kind:"purple"});gems.push({x,y:y+45,r:11,value:20,kind:"heal"});floaters.push({x,y:y-110,t:1.2,text:"박세준과 서호서로 클리어",color:"#fff8d6"});shake=18;return;
    }
    if(e.bossGroup==="gossip"){
      kills++;
      const remaining=enemies.filter((m,idx)=>idx!==i&&m.bossGroup==="gossip"&&m.hp>0);
      effects.push({kind:"bossDeath",x:e.x,y:e.y,r:72,t:.7,maxT:.7,color:e.color||"#ff7ad8"});
      floaters.push({x:e.x,y:e.y-78,t:.9,text:`${e.name} 퇴장`,color:"#fff8d6"});
      enemies.splice(i,1);
      if(remaining.length===0){
        const clearX=e.group?e.group.cx:e.x,clearY=e.group?e.group.cy:e.y;
        beginBossClear({id:"gossipGroup",x:clearX,y:clearY});
        const bossGemKind=currentStage>=4?"purple":currentStage>=3?"green":"blue";
        const bossGemValue=4+currentStage*2;
        const bossGemR=bossGemKind==="purple"?8:bossGemKind==="green"?7:6;
        for(let j=0;j<10;j++)gems.push({x:clearX+rnd(-54,54),y:clearY+rnd(-36,44),r:bossGemR,value:bossGemValue,kind:bossGemKind});
        gems.push({x:clearX-34,y:clearY+36,r:11,value:20,kind:"heal"});
        gems.push({x:clearX+34,y:clearY+36,r:11,value:20,kind:"heal"});
        floaters.push({x:clearX,y:clearY-102,t:1.1,text:"모함하는 뒷담화꾼 퇴장",color:"#fff8d6"});
        shake=18;
      }else{
        shake=10;
      }
      return;
    }
    kills++;
    beginBossClear(e);
    const bossGemKind=currentStage>=4?"purple":currentStage>=3?"green":"blue";
    const bossGemValue=4+currentStage*2;
    const bossGemR=bossGemKind==="purple"?8:bossGemKind==="green"?7:6;
    for(let j=0;j<10;j++)gems.push({x:e.x+rnd(-46,46),y:e.y+rnd(-30,40),r:bossGemR,value:bossGemValue,kind:bossGemKind});
    gems.push({x:e.x-34,y:e.y+30,r:11,value:20,kind:"heal"});
    gems.push({x:e.x+34,y:e.y+30,r:11,value:20,kind:"heal"});
    const bossDownText=e.id==="cultFanatic"?"광신도 퇴장":e.id==="cheonSangmu"?"천상무 퇴장":"주대리 퇴장";
    floaters.push({x:e.x,y:e.y-88,t:1.1,text:bossDownText,color:"#fff8d6"});
    enemies.splice(i,1);shake=16;return;
  }
  if(e.object){
    if(e.id==="parkSejunGuard"){e.group.guardAlive=false;e.group.phase=2;e.id="parkSejun";e.name="박세준";e.object=false;e.boss=true;e.bossGroup="estechFather";e.hp=e.bodyHp;e.maxHp=e.bodyHp;e.state="shieldBreak";e.stateT=1.05;e.patternCd=99;e.attackCd=99;e.inv=1.15;floaters.push({x:e.x,y:e.y-82,t:1.1,text:"쉴드 파괴 - 2페이즈",color:"#7fe9ff"});effects.push({kind:"bossDeath",x:e.x,y:e.y,r:105,t:1,maxT:1,color:"#55d9ff"});shake=13;return}
    effects.push({kind:"pop",x:e.x,y:e.y,r:e.r+18,t:.35,color:e.id==="cultCoffin"?"#b56cff":"#d7b15f"});
    enemies.splice(i,1);
    shake=Math.max(shake,7);
    return;
  }
  if(e.noDrop){
    enemies.splice(i,1);
    return;
  }
  kills++;
  if(e.volatile){effects.push({kind:"bossDeath",x:e.x,y:e.y,r:70,t:.48,maxT:.48,color:"#55d9ff"});for(const other of enemies){if(other!==e&&!other.boss&&!other.object&&dist(e,other)<105){other.hp-=24;other.hit=.15}}if(dist(e,player)<90&&playerCanTakeDamage()){player.hp-=7;player.inv=.55;floaters.push({x:player.x,y:player.y-28,t:.55,text:"활선 감전",color:"#65e7ff"})}}
  const xpBase=Math.max(1,Math.ceil(e.xp||1));
  const stageNo=clamp(currentStage||1,1,20);
  const stageValueScale=.8+stageNo*.2+Math.pow(stageNo-1,1.1)*.035;
  let gemValue=Math.max(1,Math.ceil(xpBase*stageValueScale));
  const goldChance=stageNo>=3?clamp(Math.max(0,stageNo-3)*.025+(xpBase>=12?.05:0),0,.22):0;
  const forceGold=Math.random()<goldChance;
  if(forceGold)gemValue=Math.ceil(gemValue*1.65);
  const droppedGem=dropExperienceGem(e.x,e.y,gemValue,{forceGold});
  if(!e.noItem){
    const itemRoll=Math.random();
    if(itemRoll<.021)gems.push({x:e.x+rnd(-18,18),y:e.y+rnd(-16,16),r:11,value:20,kind:"heal"});
    else if(itemRoll<.032)gems.push({x:e.x+rnd(-18,18),y:e.y+rnd(-16,16),r:13,value:0,kind:"powerMagnet"});
    else if(itemRoll<.04)gems.push({x:e.x+rnd(-18,18),y:e.y+rnd(-16,16),r:13,value:0,kind:"dynamite"});
  }
  effects.push({kind:"pop",x:e.x,y:e.y,r:e.r,t:.35,color:droppedGem.kind==="gold"?"#ffd45a":"#dfe7ef"});enemies.splice(i,1);
}

function collectGemReward(g){
  if(g.kind==="heal"){
    const before=player.hp;
    player.hp=Math.min(player.maxHp,player.hp+g.value);
    if(player.hp>before)floaters.push({x:player.x,y:player.y-34,t:.75,text:"회복",color:"#77ffb2"});
  }else if(g.kind==="powerMagnet"){
    attractAllPickups();
    floaters.push({x:player.x,y:player.y-42,t:.85,text:"자석!",color:"#9ee8ff"});
  }else if(g.kind==="dynamite"){
    detonateVisibleEnemies();
    floaters.push({x:player.x,y:player.y-42,t:.85,text:"펑!",color:"#ffd45a"});
  }else{
    if(player.skillsMastered){
      player.xp=0;
      return;
    }
    player.xp+=Math.ceil(g.value*experienceGainMultiplier());
    if(player.xp>=player.next)levelUp();
  }
}

function attractAllPickups(){
  for(const g of gems){
    if(g.kind==="powerMagnet")continue;
    g.magnetAll=true;
  }
}

function detonateVisibleEnemies(){
  let hit=0;
  for(let i=enemies.length-1;i>=0;i--){
    const e=enemies[i];
    if(e.boss||e.object||!isVisibleWorld(e.x,e.y,e.r+24))continue;
    effects.push({kind:"dragonExplosion",x:e.x,y:e.y,r:62,t:.42,maxT:.42,dmg:0,color:"#ff8a32"});
    killEnemy(i);
    hit++;
  }
  if(hit>0)shake=Math.max(shake,12);
}

function collectGems(dt=1/60){
  for(let i=gems.length-1;i>=0;i--){
    const g=gems[i];
    let d=dist(g,player);
    const magnetLv=skillLevel("magnetRange");
    const collectReach=player.r+g.r+14;
    const attractReach=magnetLv>0?78+(magnetLv-1)*34:0;
    if(g.magnetAll||(magnetLv>0&&d<attractReach)){
      const dx=player.x-g.x,dy=player.y-g.y;
      const len=Math.max(.001,Math.hypot(dx,dy));
      const speed=g.magnetAll?Math.min(3200,1100+d*3.4):(210+magnetLv*34+d*.55);
      const step=Math.min(len,speed*dt);
      g.x+=dx/len*step;
      g.y+=dy/len*step;
      d=dist(g,player);
    }
    if(d<collectReach){
      collectGemReward(g);
      gems.splice(i,1);
    }
  }
}

function levelUp(){
  player.xp-=player.next;player.level++;player.next=levelXpRequirement(player.level);paused=true;
  const available=skills.filter(s=>s.level<s.max);
  const picks=[];
  while(picks.length<3&&available.length){const s=available.splice(Math.floor(Math.random()*available.length),1)[0];picks.push(s)}
  levelChoices=picks;
  selectedChoice=0;
  choicesEl.innerHTML=picks.map((s,i)=>`<button class="choice" data-index="${i}" data-id="${s.id}"><b>${s.icon}</b><strong>${skillDisplayName(s)} ${s.level?`Lv.${s.level+1}`:"획득"}</strong><p>${skillDisplayDesc(s)}${s.level+1===s.max?" 마스터하면 필살기로 진화합니다.":""}</p></button>`).join("");
  updateChoiceSelection();
  levelOverlay.classList.remove("hidden");
}

choicesEl.onclick=e=>{
  const btn=e.target.closest(".choice");if(!btn)return;
  selectedChoice=Number(btn.dataset.index)||0;
  confirmLevelChoice();
};

function moveLevelSelection(delta){
  if(!levelChoices.length)return;
  selectedChoice=(selectedChoice+delta+levelChoices.length)%levelChoices.length;
  updateChoiceSelection();
}

function updateChoiceSelection(){
  Array.from(choicesEl.querySelectorAll(".choice")).forEach((btn,i)=>btn.classList.toggle("selected",i===selectedChoice));
}

function confirmLevelChoice(){
  const s=levelChoices[selectedChoice];
  if(!s)return;
  s.level++;
  if(s.level===s.max)show(`${skillDisplayName(s)} 마스터. 필살기 개방.`);
  levelChoices=[];
  choicesEl.classList.remove("test-all-choices");
  levelOverlay.classList.add("hidden");paused=false;last=performance.now();
}

function skillDisplayName(s){
  if(s.id==="golf"&&player.characterId==="sangil")return "등산 스틱 난타";
  if(s.id==="golf"&&player.characterId==="seunggwan")return "철공 포환";
  return s.name;
}
function skillDisplayDesc(s){
  if(player.characterId==="sangil"&&s.id==="golf")return "투사체 없이 전방 근접 범위만 공격합니다. 등산 스틱을 쌍도끼처럼 휘둘러 강하게 후려칩니다.";
  if(player.characterId==="seunggwan"&&s.id==="golf")return "철공을 포물선으로 던져 낙하지점 주변에 스플래시 피해를 줍니다.";
  return s.desc;
}
function renderSkillHud(){
  skillHud.innerHTML=skills.filter(s=>s.level>0).map(s=>`<div class="slot"><b>${s.icon}</b><span>${skillDisplayName(s)}</span><small>Lv.${s.level}${s.level>=s.max?" MAX":""}</small></div>`).join("");
}

function updateStartPrompt(mode="start"){
  const btn=document.getElementById("startBtn");
  if(!btn)return;
  const action=mode==="restart"?"RESTART":"START";
  btn.classList.add("press-space");
  btn.classList.remove("end-retry");
  if(mobileControlsAvailable()){
    btn.innerHTML=`<span>TOUCH TO ${action}</span>`;
  }else{
    btn.innerHTML=`<span>PRESS</span><span class="space-key" aria-label="spacebar"></span><span>TO ${action}</span>`;
  }
}

function openEnd(){
  stopGameBgm();
  startOverlay.classList.remove("hidden");
  const card=startOverlay.querySelector(".start-card");
  const characterSelect=startOverlay.querySelector(".character-select");
  const heading=startOverlay.querySelector("h1");
  if(characterSelect)characterSelect.classList.add("hidden");
  if(heading)heading.classList.add("hidden");
  if(gameOverTitle)gameOverTitle.classList.remove("hidden");
  if(card)card.classList.add("game-over-card");
  let lead=startOverlay.querySelector(".lead");
  if(!lead){
    lead=document.createElement("p");
    lead.className="lead";
    card.insertBefore(lead,startOverlay.querySelector(".start-row"));
  }
  lead.textContent=`${Math.floor(elapsed)}초 생존 · 사회 진상 ${kills}명 처치`;
  window.hanFightRanking?.showGameOver({
    characterId:player.characterId,
    stage:Math.max(1,currentStage||1),
    bossKills:Math.max(0,(currentStage||1)-1),
    kills:Math.max(0,kills||0),
    playerLevel:Math.max(1,player.level||1),
    survivalSeconds:Math.max(0,Math.floor(elapsed||0)),
    eligible:!testMode&&!testInvincible
  });
  updateStartPrompt("restart");
  document.getElementById("startBtn").onclick=restart;
}

function draw(){
  const c=cam(),scale=gameplayScale();ctx.save();
  const vw=viewW(),vh=viewH();
  const inView=(o,pad=0)=>!Number.isFinite(o?.x)||!Number.isFinite(o?.y)||(o.x>=c.x-pad&&o.x<=c.x+vw+pad&&o.y>=c.y-pad&&o.y<=c.y+vh+pad);
  if(shake)ctx.translate(rnd(-shake,shake),rnd(-shake,shake));
  ctx.scale(scale,scale);
  drawBg(c);ctx.translate(-c.x,-c.y);
  drawArenaFence();
  for(const g of gems)if(inView(g,48))drawGem(g);
  for(const e of effects)if(inView(e,Math.max(180,(e.r||0)+80)))drawEffect(e);
  drawDamageAura();
  for(const p of shots)if(inView(p,180))drawShot(p);
  for(const p of bossShots)if(inView(p,140)&&(!p.delay||p.delay<=0))drawBossShot(p);
  for(const e of enemies)if(inView(e,(e.drawSize||e.r||40)+100)){drawEnemy(e);drawBurningEnemyStatus(e);drawFrozenEnemyStatus(e)}
  drawDroneBots();
  drawDragonCompanion();
  drawIceBirdCompanion();
  drawOrbitShields();
  drawJiinUltimateAura();
  drawPlayer();
  drawDamageAuraFront();
  drawPlayerBarrier();
  drawPlayerStatusBars();
  drawUltimateQuote();
  for(const f of floaters)if(inView(f,100))drawText(f);
  ctx.restore();
  drawCombatScreenFx();
  drawWaveOverlay();
  drawStageOverlay();
  drawBossVsCutsceneV2();
  drawStageClearBanner();
}

function drawCombatScreenFx(){
  if(playerDamagePulse<=0)return;
  const p=clamp(playerDamagePulse,0,1);
  ctx.save();
  const outer=ctx.createRadialGradient(W*.5,H*.5,Math.min(W,H)*.22,W*.5,H*.5,Math.max(W,H)*.72);
  outer.addColorStop(0,"rgba(255,64,82,0)");
  outer.addColorStop(.62,`rgba(255,54,72,${p*.025})`);
  outer.addColorStop(1,`rgba(150,8,24,${p*.22})`);
  ctx.fillStyle=outer;
  ctx.fillRect(0,0,W,H);
  const edgeX=W*.5+Math.cos(playerDamageAngle)*W*.42;
  const edgeY=H*.5+Math.sin(playerDamageAngle)*H*.42;
  const directional=ctx.createRadialGradient(edgeX,edgeY,0,edgeX,edgeY,Math.min(W,H)*.3);
  directional.addColorStop(0,`rgba(255,118,128,${p*.16})`);
  directional.addColorStop(1,"rgba(255,80,96,0)");
  ctx.fillStyle=directional;
  ctx.fillRect(0,0,W,H);
  ctx.restore();
}

function drawBg(c){
  const vw=viewW(),vh=viewH();
  ctx.fillStyle="#dce5e8";ctx.fillRect(0,0,vw,vh);
  if(bgTile.complete&&bgTile.naturalWidth){
    const tile=512;
    const cx=Math.floor(c.x),cy=Math.floor(c.y);
    const ox=-(cx%tile),oy=-(cy%tile);
    ctx.imageSmoothingEnabled=false;
    for(let x=ox-tile;x<vw+tile;x+=tile){
      for(let y=oy-tile;y<vh+tile;y+=tile){
        ctx.drawImage(bgTile,x,y,tile,tile);
      }
    }
  }else{
    const grd=ctx.createLinearGradient(0,0,0,vh);grd.addColorStop(0,"#e7edf0");grd.addColorStop(1,"#ccd9de");ctx.fillStyle=grd;ctx.fillRect(0,0,vw,vh);
  }
  if(outdoorBlend>0&&bikeRoadTile.complete&&bikeRoadTile.naturalWidth){
    ctx.save();
    ctx.globalAlpha=clamp(outdoorBlend,0,1);
    const tile=512;
    const cx=Math.floor(c.x),cy=Math.floor(c.y);
    const ox=-(cx%tile),oy=-(cy%tile);
    ctx.imageSmoothingEnabled=false;
    for(let x=ox-tile;x<vw+tile;x+=tile){
      for(let y=oy-tile;y<vh+tile;y+=tile){
        ctx.drawImage(bikeRoadTile,x,y,tile,tile);
      }
    }
    ctx.restore();
  }
  if(factoryBlend>0&&factoryTapeTile.complete&&factoryTapeTile.naturalWidth){
    ctx.save();
    ctx.globalAlpha=clamp(factoryBlend,0,1);
    const tile=512;
    const cx=Math.floor(c.x),cy=Math.floor(c.y);
    const ox=-(cx%tile),oy=-(cy%tile);
    ctx.imageSmoothingEnabled=false;
    for(let x=ox-tile;x<vw+tile;x+=tile){
      for(let y=oy-tile;y<vh+tile;y+=tile){
        ctx.drawImage(factoryTapeTile,x,y,tile,tile);
      }
    }
    ctx.restore();
  }
  if(logisticsBlend>0){
    ctx.save();
    ctx.globalAlpha=clamp(logisticsBlend,0,1);
    drawLogisticsTileLayer(c);
    ctx.restore();
  }
  if(gymBlend>0){
    ctx.save();
    ctx.globalAlpha=clamp(gymBlend,0,1);
    drawGymTileLayer(c);
    ctx.restore();
  }
  if(estechBlend>0&&estechTile.complete&&estechTile.naturalWidth){
    ctx.save();ctx.globalAlpha=clamp(estechBlend,0,1);ctx.imageSmoothingEnabled=false;
    const tile=512,cx=Math.floor(c.x),cy=Math.floor(c.y),ox=-(cx%tile),oy=-(cy%tile);
    for(let x=ox-tile;x<viewW()+tile;x+=tile)for(let y=oy-tile;y<viewH()+tile;y+=tile)ctx.drawImage(estechTile,x,y,tile,tile);
    ctx.restore();
  }
  ctx.fillStyle="rgba(58,151,178,.07)";
  for(let i=0;i<7;i++){
    const x=Math.round(((i*431-Math.floor(c.x)*.18)%vw+vw)%vw);
    const y=Math.round(((i*227-Math.floor(c.y)*.18)%vh+vh)%vh);
    ctx.fillRect(x,y,130,16);ctx.fillRect(x+18,y+16,74,7);
  }
  const glow=ctx.createRadialGradient(vw/2,vh/2,Math.min(vw,vh)*.12,vw/2,vh/2,Math.max(vw,vh)*.72);
  glow.addColorStop(0,"rgba(255,255,255,.16)");
  glow.addColorStop(1,"rgba(255,255,255,0)");
  ctx.fillStyle=glow;ctx.fillRect(0,0,vw,vh);
}

function drawLogisticsTileLayer(c){
  const tile=512;
  const vw=viewW(),vh=viewH();
  const cx=Math.floor(c.x),cy=Math.floor(c.y);
  const ox=-(cx%tile),oy=-(cy%tile);
  ctx.imageSmoothingEnabled=false;
  for(let x=ox-tile;x<vw+tile;x+=tile){
    for(let y=oy-tile;y<vh+tile;y+=tile){
      if(logisticsTile.complete&&logisticsTile.naturalWidth){
        ctx.drawImage(logisticsTile,x,y,tile,tile);
      }else{
        drawLogisticsTile(x,y,tile);
      }
    }
  }
}

function drawLogisticsTile(x,y,tile){
  ctx.fillStyle="#8d9394";
  ctx.fillRect(x,y,tile,tile);
  for(let gx=0;gx<=tile;gx+=128){
    ctx.fillStyle="#70787a";
    ctx.fillRect(x+gx,y,2,tile);
    ctx.fillStyle="#a4aaaa";
    ctx.fillRect(x+gx+2,y,1,tile);
  }
  for(let gy=0;gy<=tile;gy+=128){
    ctx.fillStyle="#70787a";
    ctx.fillRect(x,y+gy,tile,2);
    ctx.fillStyle="#a4aaaa";
    ctx.fillRect(x,y+gy+2,tile,1);
  }
  ctx.fillStyle="#62696b";
  for(let gx=8;gx<tile;gx+=128){
    for(let gy=8;gy<tile;gy+=128){
      ctx.fillRect(x+gx,y+gy,4,4);
      ctx.fillRect(x+gx+108,y+gy+108,4,4);
    }
  }
  ctx.fillStyle="rgba(89,97,100,.42)";
  [[82,194,36,18],[332,92,48,20],[408,338,34,22],[188,404,50,16]].forEach(s=>ctx.fillRect(x+s[0],y+s[1],s[2],s[3]));
  ctx.strokeStyle="#646d70";
  ctx.lineWidth=3;
  [[[210,68],[236,92],[256,88]],[[72,364],[94,342],[118,350]],[[370,210],[394,232],[421,226]]].forEach(points=>{
    ctx.beginPath();
    ctx.moveTo(x+points[0][0],y+points[0][1]);
    for(let i=1;i<points.length;i++)ctx.lineTo(x+points[i][0],y+points[i][1]);
    ctx.stroke();
  });
  drawSafetyStripe(x+30,y+30);
  drawSafetyStripe(x+384,y+156);
  drawSafetyStripe(x+156,y+384);
  drawPalletStack(x+92,y+82,.82);
  drawPalletStack(x+296,y+296,1);
  drawCarton(x+224,y+220,42,42,"#b88248");
  ctx.fillStyle="#c9a65a";
  [[276,118],[64,276],[426,432]].forEach(p=>{
    ctx.fillRect(x+p[0],y+p[1],42,5);
    ctx.fillRect(x+p[0]+14,y+p[1]+12,42,5);
  });
}

function drawSafetyStripe(x,y){
  ctx.fillStyle="#6c6246";
  ctx.fillRect(x,y,78,18);
  ctx.fillStyle="#d2a84a";
  for(let i=-20;i<90;i+=18){
    ctx.beginPath();
    ctx.moveTo(x+i,y+18);
    ctx.lineTo(x+i+10,y+18);
    ctx.lineTo(x+i+28,y);
    ctx.lineTo(x+i+18,y);
    ctx.closePath();
    ctx.fill();
  }
}

function drawPalletStack(x,y,scale=1){
  ctx.save();
  ctx.translate(x,y);
  ctx.scale(scale,scale);
  ctx.fillStyle="#4b3d2d";
  ctx.fillRect(0,28,86,54);
  ctx.fillStyle="#694b2b";
  for(const yy of [32,52,72])ctx.fillRect(4,yy,78,7);
  ctx.fillStyle="#372d23";
  for(const xx of [12,38,64])ctx.fillRect(xx,31,8,51);
  drawCarton(12,0,46,58,"#c29252");
  drawCarton(56,18,54,46,"#b88248");
  ctx.restore();
}

function drawCarton(x,y,w,h,color="#b08046"){
  ctx.fillStyle=color;
  ctx.fillRect(x,y,w,h);
  ctx.strokeStyle="#66492d";
  ctx.lineWidth=2;
  ctx.strokeRect(x,y,w,h);
  ctx.fillStyle="#e6d3a6";
  ctx.fillRect(x+w/2-2,y+2,4,h-4);
  ctx.fillStyle="#d4cdbb";
  ctx.fillRect(x+w-20,y+h-14,15,9);
}

function drawGymTileLayer(c){
  const tile=512;
  const vw=viewW(),vh=viewH();
  const cx=Math.floor(c.x),cy=Math.floor(c.y);
  const ox=-(cx%tile),oy=-(cy%tile);
  ctx.imageSmoothingEnabled=false;
  for(let x=ox-tile;x<vw+tile;x+=tile){
    for(let y=oy-tile;y<vh+tile;y+=tile){
      if(gymTile.complete&&gymTile.naturalWidth){
        ctx.drawImage(gymTile,x,y,tile,tile);
      }else{
        drawGymTile(x,y,tile);
      }
    }
  }
}

function drawGymTile(x,y,tile){
  ctx.fillStyle="#252a2f";
  ctx.fillRect(x,y,tile,tile);
  for(let gx=0;gx<=tile;gx+=128){
    ctx.fillStyle="#1a1f24";
    ctx.fillRect(x+gx,y,3,tile);
    ctx.fillStyle="#343b42";
    ctx.fillRect(x+gx+3,y,1,tile);
  }
  for(let gy=0;gy<=tile;gy+=128){
    ctx.fillStyle="#1a1f24";
    ctx.fillRect(x,y+gy,tile,3);
    ctx.fillStyle="#343b42";
    ctx.fillRect(x,y+gy+3,tile,1);
  }
  ctx.fillStyle="#313941";
  for(let gx=12;gx<tile;gx+=64){
    for(let gy=12;gy<tile;gy+=64){
      ctx.fillRect(x+gx,y+gy,6,6);
      ctx.fillRect(x+gx+34,y+gy+34,4,4);
    }
  }
  drawGymMat(x+48,y+54,120,86,"#344b57","#50b7c8");
  drawGymMat(x+316,y+64,136,78,"#413447","#c85b8b");
  drawGymMat(x+74,y+318,144,84,"#344234","#8cc864");
  drawGymRig(x+244,y+176);
  drawBarbell(x+78,y+210,1);
  drawBarbell(x+348,y+328,.9);
  drawKettlebell(x+244,y+82,"#20252a");
  drawKettlebell(x+426,y+214,"#20252a");
  ctx.fillStyle="#d1b34c";
  ctx.fillRect(x+230,y+436,52,8);
  ctx.fillRect(x+230,y+452,52,8);
  ctx.fillStyle="#65513b";
  ctx.fillRect(x+254,y+424,4,48);
}

function drawGymMat(x,y,w,h,base,accent){
  ctx.fillStyle=base;
  ctx.fillRect(x,y,w,h);
  ctx.strokeStyle="#11161b";
  ctx.lineWidth=3;
  ctx.strokeRect(x,y,w,h);
  ctx.fillStyle=accent;
  ctx.fillRect(x+10,y+10,w-20,6);
  ctx.fillRect(x+10,y+h-16,w-20,6);
  ctx.fillStyle="rgba(255,255,255,.08)";
  ctx.fillRect(x+14,y+24,w-28,h-48);
}

function drawGymRig(x,y){
  ctx.strokeStyle="#15191e";
  ctx.lineWidth=8;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x,y+140);
  ctx.moveTo(x+100,y);
  ctx.lineTo(x+100,y+140);
  ctx.moveTo(x-8,y+28);
  ctx.lineTo(x+108,y+28);
  ctx.stroke();
  ctx.strokeStyle="#565f66";
  ctx.lineWidth=3;
  for(let i=0;i<5;i++){
    ctx.beginPath();
    ctx.moveTo(x+16+i*18,y+28);
    ctx.lineTo(x+8+i*18,y+58);
    ctx.stroke();
  }
}

function drawBarbell(x,y,scale=1){
  ctx.save();
  ctx.translate(x,y);
  ctx.scale(scale,scale);
  ctx.strokeStyle="#c6cdd2";
  ctx.lineWidth=5;
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(118,0);
  ctx.stroke();
  ctx.fillStyle="#11161b";
  [-12,-4,118,126].forEach(px=>ctx.fillRect(px,-20,8,40));
  ctx.restore();
}

function drawKettlebell(x,y,color){
  ctx.strokeStyle="#777f87";
  ctx.lineWidth=5;
  ctx.beginPath();
  ctx.arc(x,y-10,16,Math.PI,0);
  ctx.stroke();
  ctx.fillStyle=color;
  ctx.beginPath();
  ctx.arc(x,y+10,20,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle="#3d464e";
  ctx.fillRect(x-10,y+4,20,8);
}

function drawArenaFence(){
  if(!arenaFence)return;
  const f=arenaFence,pulse=Math.sin((f.t||0)*5)*.08+.92;
  ctx.save();
  ctx.globalAlpha=clamp((f.t||0)*1.8,0,1);
  ctx.strokeStyle="#2b3948";
  ctx.lineWidth=8;
  ctx.strokeRect(f.x,f.y,f.w,f.h);
  ctx.strokeStyle="#f1d37a";
  ctx.lineWidth=3;
  ctx.setLineDash([18,12]);
  ctx.lineDashOffset=-(f.t||0)*36;
  ctx.strokeRect(f.x+7,f.y+7,f.w-14,f.h-14);
  ctx.setLineDash([]);
  ctx.fillStyle="#263242";
  for(let x=f.x;x<=f.x+f.w;x+=72){
    ctx.fillRect(x-5,f.y-12,10,28);
    ctx.fillRect(x-5,f.y+f.h-16,10,28);
  }
  for(let y=f.y;y<=f.y+f.h;y+=72){
    ctx.fillRect(f.x-12,y-5,28,10);
    ctx.fillRect(f.x+f.w-16,y-5,28,10);
  }
  ctx.globalAlpha=.18*pulse;
  ctx.fillStyle="#ffe08a";
  ctx.fillRect(f.x+10,f.y+10,f.w-20,f.h-20);
  ctx.restore();
}

function drawWaveOverlay(){
  const t=Math.max(wave1.banner,wave2.banner,wave3.banner);
  if(t<=0)return;
  const progress=1-t/2.4;
  const alpha=progress<.18?progress/.18:t<.45?t/.45:1;
  const scale=progress<.22?.72+progress*1.45:1+Math.sin(progress*Math.PI)*.06;
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.fillStyle=`rgba(11,18,28,${.34*alpha})`;
  ctx.fillRect(0,0,W,H);
  if(waveBanner.complete&&waveBanner.naturalWidth){
    const w=Math.min(W*.82,620)*scale;
    const h=w*(waveBanner.naturalHeight/waveBanner.naturalWidth);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(waveBanner,W/2-w/2,H/2-h/2,w,h);
  }else{
    ctx.fillStyle="#f5fbff";
    ctx.font=`${Math.floor(72*scale)}px Malgun Gothic`;
    ctx.textAlign="center";
    ctx.fillText("WAVE TIME",W/2,H/2);
  }
  ctx.restore();
}

function drawStageOverlay(){
  if(stageBanner.t<=0)return;
  const p=1-stageBanner.t/stageBanner.maxT;
  const alpha=p<.18?p/.18:stageBanner.t<.42?stageBanner.t/.42:1;
  const responsive=mobileControlsAvailable()?clamp(Math.min(W/760,H/920),.48,.82):clamp(Math.min(W/960,H/720),.72,1);
  const scale=(p<.2?.78+p*1.4:1+Math.sin(p*Math.PI)*.08)*responsive;
  const theme=themeForStage(stageBanner.stage);
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.fillStyle=`rgba(10,16,24,${.28*alpha})`;
  ctx.fillRect(0,0,W,H);
  ctx.translate(W/2,H*.36);
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.font=`900 ${Math.floor(76*scale)}px "Courier New","Lucida Console",monospace`;
  ctx.lineWidth=Math.max(4,9*scale);
  ctx.strokeStyle="#090c10";
  ctx.fillStyle="#fff6d0";
  const text=`${stageBanner.stage} STAGE`;
  ctx.strokeText(text,0,0);
  ctx.fillText(text,0,0);
  let mapFont=Math.floor(58*scale);
  ctx.font=`900 ${mapFont}px "Black Han Sans","Jua","Do Hyeon","Arial Black",sans-serif`;
  while(ctx.measureText(theme.name).width>W*.82&&mapFont>22){
    mapFont-=4;
    ctx.font=`900 ${mapFont}px "Black Han Sans","Jua","Do Hyeon","Arial Black",sans-serif`;
  }
  ctx.fillStyle="#8ce8ff";
  ctx.strokeStyle="#090c10";
  ctx.lineWidth=Math.max(3,7*scale);
  ctx.strokeText(theme.name,0,76*scale);
  ctx.fillText(theme.name,0,76*scale);
  ctx.restore();
}

function drawJiinUltimateAura(){
  if(player.characterId!=="jiin"||player.ultimateTimer<=0||!jiinSprite.complete||!jiinSprite.naturalWidth)return;
  const rowByDir={down:0,side:player.face<0?1:2,up:3};
  const row=rowByDir[player.dir]??0;
  const col=player.moving?Math.floor(player.frame)%4:Math.floor(elapsed*2)%4;
  const fw=Math.floor(jiinSprite.naturalWidth/4),fh=Math.floor(jiinSprite.naturalHeight/4);
  const walk=player.moving?Math.sin(player.frame*1.45):0;
  const bob=player.moving?Math.abs(walk)*.6:0;
  const lean=player.moving&&player.dir==="side"?player.face*walk*.018:0;
  const size=88,drawX=-size/2,drawY=-57-bob;
  ctx.save();
  ctx.translate(Math.round(player.x),Math.round(player.y));
  ctx.rotate(lean);
  ctx.imageSmoothingEnabled=false;
  ctx.globalCompositeOperation="lighter";
  for(let i=0;i<3;i++){
    const phase=elapsed*2.8+i*Math.PI*2/3;
    ctx.globalAlpha=.2+.05*Math.sin(phase*1.7);
    ctx.shadowColor=`hsl(${(elapsed*95+i*112)%360} 95% 67%)`;
    ctx.shadowBlur=10+3*Math.sin(phase);
    ctx.drawImage(jiinSprite,fw*col,fh*row,fw,fh,drawX+Math.cos(phase)*1.8,drawY+Math.sin(phase)*1.8,size,size);
  }
  ctx.restore();
}

function drawTranslucentBubble(x,y,r,color="#ff8fd7",alpha=.68,seed=0,borderWidth=null){
  ctx.save();ctx.translate(x,y);
  const wob=1+Math.sin(elapsed*4+seed)*.025;
  ctx.scale(wob,1/wob);

  ctx.globalAlpha=alpha;
  ctx.fillStyle=colorToRgba(color,.28);
  ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle=colorToRgba(color,.82);ctx.lineWidth=borderWidth??Math.max(2,r*.08);ctx.stroke();
  ctx.globalAlpha=alpha*.85;
  ctx.fillStyle="rgba(255,255,255,.8)";ctx.beginPath();ctx.ellipse(-r*.32,-r*.36,r*.18,r*.1,-.55,0,Math.PI*2);ctx.fill();
  for(let i=0;i<4;i++){const a=seed+i*1.7+elapsed*.7;ctx.fillStyle=colorToRgba(hominBubbleColor(i),.34);ctx.beginPath();ctx.arc(Math.cos(a)*r*.38,Math.sin(a*1.3)*r*.32,r*(.08+i*.012),0,Math.PI*2);ctx.fill();}
  ctx.restore();
}
function colorToRgba(hex,a){
  const h=String(hex||"#ff8fd7").replace("#","");
  const n=parseInt(h.length===3?h.split("").map(c=>c+c).join(""):h,16);
  return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;
}
function drawHominBubbleShield(){
  const pulse=1+Math.sin(elapsed*7)*.035;
  drawTranslucentBubble(0,-35,78*pulse,"#ff8fd7",.72,elapsed,2.4);
}
function hominUltimateFloatMotion(){
  if(player.characterId!=="homin"||player.ultimateTimer<=0)return {x:0,y:0,tilt:0};
  const duration=getUltimateDuration("homin");
  const progress=clamp(1-player.ultimateTimer/duration,0,1);
  const envelope=smoothstep(clamp(progress/.14,0,1))*smoothstep(clamp(player.ultimateTimer/.2,0,1));
  return {
    x:Math.sin(elapsed*1.45)*2.6*envelope,
    y:(-6+Math.sin(elapsed*2.35)*5.2)*envelope,
    tilt:Math.sin(elapsed*1.6)*.018*envelope
  };
}
function drawPlayer(){
  const hominFloat=hominUltimateFloatMotion();
  let hurtX=0,hurtY=0;
  if((player.hurtT||0)>0){
    const progress=1-player.hurtT/Math.max(.001,player.hurtMaxT||.18);
    const kick=Math.sin(progress*Math.PI)*7;
    hurtX=(player.hurtDx||0)*kick;
    hurtY=(player.hurtDy||0)*kick;
  }
  ctx.save();ctx.translate(Math.round(player.x+hominFloat.x+hurtX),Math.round(player.y+hominFloat.y+hurtY));ctx.rotate(hominFloat.tilt);
  if((player.hurtFlash||0)>0)ctx.filter="brightness(1.9) saturate(.5) contrast(1.12)";
  else if(player.inv>0&&player.action!=="clear"&&Math.floor(elapsed*18)%2){ctx.globalAlpha=.45}
  const isSangil=player.characterId==="sangil";
  const isSeunggwan=player.characterId==="seunggwan";
  const isJiin=player.characterId==="jiin";
  const isHomin=player.characterId==="homin";
  const runSheet=isSangil?sangilSprite:isSeunggwan?seunggwanSprite:isJiin?jiinSprite:isHomin?hominSprite:sprite;
  const idleSheet=isSangil?sangilSprite:isSeunggwan?seunggwanSprite:isJiin?jiinSprite:isHomin?hominSprite:idleSprite;
  const clearSheet=isSangil?sangilClearSprite:isSeunggwan?seunggwanClearSprite:isJiin?jiinSprite:isHomin?hominClearSprite:clearSprite;
  if(player.action==="clear"&&clearSheet.complete&&clearSheet.naturalWidth){
    const fw=Math.floor(clearSheet.naturalWidth/4),fh=isJiin?Math.floor(clearSheet.naturalHeight/4):clearSheet.naturalHeight;
    const progress=player.actionDuration>0?clamp(1-player.actionTimer/player.actionDuration,0,.999):0;
    const col=Math.floor(progress*4);
    ctx.imageSmoothingEnabled=false;
    const size=isSangil?96:isSeunggwan?104:isJiin?88:isHomin?92:84;
    const drawW=isHomin?size*fw/fh:size;
    ctx.drawImage(clearSheet,fw*col,0,fw,fh,-drawW/2,-size*.64,drawW,size);
    ctx.restore();
    return;
  }
  const rowByDir={down:0,side:player.face<0?1:2,up:3};
  const row=rowByDir[player.dir]??0;
  if(player.ultimateTimer>0&&isSangil&&sangilWhirlwindSprite.complete&&sangilWhirlwindSprite.naturalWidth){
    const fw=Math.floor(sangilWhirlwindSprite.naturalWidth/6),fh=sangilWhirlwindSprite.naturalHeight;
    const col=Math.floor(elapsed*18)%6;
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(sangilWhirlwindSprite,fw*col,0,fw,fh,-62,-72,124,124);
    ctx.restore();
    return;
  }
  if(player.ultimateTimer>0&&isSeunggwan){
    ctx.restore();
    return;
  }
  if(player.ultimateTimer>0&&isHomin){
    drawHominBubbleShield();
  }
  if(player.ultimateTimer>0&&!isJiin&&!isHomin&&ultimateSprite.complete&&ultimateSprite.naturalWidth){
    const fw=Math.floor(ultimateSprite.naturalWidth/4),fh=Math.floor(ultimateSprite.naturalHeight/4);
    const progress=clamp(1-player.ultimateTimer/getUltimateDuration("geontaek"),0,.999);
    const col=Math.floor(progress*4);
    let castRow=rowFromVector(player.ultimateDir);
    if(player.ultimateDir.x)castRow=player.ultimateDir.x<0?2:1;
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(ultimateSprite,fw*col,fh*castRow,fw,fh,-46,-61,92,92);
    ctx.restore();
    return;
  }
  const sangilAttacking=player.attackTimer>0&&player.attackDuration>0;
  const seunggwanAttacking=player.attackTimer>0&&player.attackDuration>0;
  if(isSangil&&sangilAttackSprite.complete&&sangilAttackSprite.naturalWidth&&(sangilAttacking||!player.moving)){
    const fw=Math.floor(sangilAttackSprite.naturalWidth/4),fh=Math.floor(sangilAttackSprite.naturalHeight/4);
    const progress=sangilAttacking?clamp(1-player.attackTimer/player.attackDuration,0,.999):(elapsed*1.35)%1;
    const col=progress<.22?0:progress<.48?1:progress<.78?2:3;
    const attackRow=row;
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(sangilAttackSprite,fw*col,fh*attackRow,fw,fh,-49,-63,98,98);
    ctx.restore();
    return;
  }

  if(!isSangil&&(!player.moving||(isHomin&&player.ultimateTimer>0))&&idleSheet.complete&&idleSheet.naturalWidth){
    const fw=Math.floor(idleSheet.naturalWidth/4),fh=Math.floor(idleSheet.naturalHeight/4);
    const col=isHomin&&player.ultimateTimer>0?0:Math.floor(elapsed*2)%4;
    const idleSize=isJiin?88:isHomin?92:isSeunggwan?84:84;
    const idleY=isSangil?(row===3?-36:-53):isSeunggwan?-55:isJiin?-57:isHomin?-60:(row===3?-43:-53);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(idleSheet,fw*col,fh*row,fw,fh,-idleSize/2,idleY,idleSize,idleSize);
    ctx.restore();
    return;
  }
  const col=player.moving?Math.floor(player.frame)%4:0;
  if(runSheet.complete&&runSheet.naturalWidth){
    const fw=Math.floor(runSheet.naturalWidth/4),fh=Math.floor(runSheet.naturalHeight/4);
    const walk=player.moving?Math.sin(player.frame*1.45):0;
    const bob=player.moving?Math.abs(walk)*.6:0;
    const lean=player.moving&&player.dir==="side"?player.face*walk*.018:0;
    ctx.imageSmoothingEnabled=false;
    ctx.save();
    ctx.rotate(lean);
    const drawSize=isSangil?98:isSeunggwan?84:isJiin?88:isHomin?92:84;
    const drawX=-drawSize/2;
    const drawY=isSangil?-63-bob:isSeunggwan?-55-bob:isJiin?-57-bob:isHomin?-60-bob:-53-bob;
    ctx.drawImage(runSheet,fw*col,fh*row,fw,fh,drawX,drawY,drawSize,drawSize);
    ctx.restore();
  }else{
    drawGeontaekPixel();
  }
  ctx.restore();
}

function drawPlayerStatusBars(){
  if(player.action==="clear"||bossVsCutscene.active)return;
  const barW=58,barH=5,gap=3;
  const hominFloat=hominUltimateFloatMotion();
  const x=Math.round(player.x+hominFloat.x-barW/2);
  const y=Math.round(player.y+hominFloat.y-(player.characterId==="sangil"?82:player.characterId==="seunggwan"?76:player.characterId==="jiin"?78:player.characterId==="homin"?80:72));
  const hp=clamp(player.hp/player.maxHp,0,1);
  const sp=ultimateChargeRatio();
  ctx.save();
  ctx.imageSmoothingEnabled=false;
  ctx.fillStyle="rgba(7,10,15,.72)";
  ctx.fillRect(x-2,y-2,barW+4,barH*2+gap+4);
  ctx.fillStyle="#26303b";
  ctx.fillRect(x,y,barW,barH);
  ctx.fillRect(x,y+barH+gap,barW,barH);
  ctx.fillStyle="#e84e62";
  ctx.fillRect(x,y,Math.round(barW*hp),barH);
  ctx.fillStyle="#9b7cff";
  ctx.fillRect(x,y+barH+gap,Math.round(barW*sp),barH);
  ctx.strokeStyle="rgba(255,255,255,.34)";
  ctx.lineWidth=1;
  ctx.strokeRect(x+.5,y+.5,barW-1,barH-1);
  ctx.strokeRect(x+.5,y+barH+gap+.5,barW-1,barH-1);
  ctx.restore();
}

function drawUltimateQuote(){
  if(player.ultimateTimer<=0)return;
  const quoteDuration=getUltimateDuration(player.characterId);
  const quoteText=getPlayableUltimateQuote(player.characterId);
  const progress=clamp(1-player.ultimateTimer/quoteDuration,0,1);
  const alpha=progress<.08?progress/.08:player.ultimateTimer<.25?player.ultimateTimer/.25:1;
  const pop=1+Math.sin(Math.min(progress,1)*Math.PI)*.12;
  ctx.save();
  ctx.translate(Math.round(player.x),Math.round(player.y-96));
  ctx.scale(pop,pop);
  ctx.globalAlpha=alpha;
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  drawComicShoutText(quoteText,0,0);
  ctx.restore();
}

function drawComicShoutText(text,x,y){
  const chars=[...text];
  const fontFamily='"Black Han Sans","Bagel Fat One","Jua","Do Hyeon","Galmuri11","DungGeunMo","NeoDunggeunmo","Arial Black",sans-serif';
  ctx.save();
  ctx.font=`700 32px ${fontFamily}`;
  ctx.lineJoin="round";
  ctx.miterLimit=2;
  const widths=chars.map(ch=>ctx.measureText(ch).width+(ch==="!"?3:2));
  let cursor=x-widths.reduce((sum,w)=>sum+w,0)/2;
  chars.forEach((ch,i)=>{
    const w=widths[i];
    const punch=ch==="!"||ch==="~";
    const size=punch?36:32+(i%3===1?2:0);
    const lift=i%2===0?-2:2;
    const tilt=((i%5)-2)*.035;
    ctx.save();
    ctx.translate(cursor+w/2,y+lift);
    ctx.rotate(tilt);
    ctx.font=`700 ${size}px ${fontFamily}`;
    ctx.strokeStyle="#101319";
    ctx.lineWidth=5.5;
    ctx.strokeText(ch,0,0);
    ctx.strokeStyle="#ff4f64";
    ctx.lineWidth=2.5;
    ctx.strokeText(ch,0,0);
    ctx.strokeStyle="#ffe15c";
    ctx.lineWidth=1;
    ctx.strokeText(ch,0,0);
    ctx.fillStyle="#fff8d6";
    ctx.fillText(ch,0,0);
    ctx.restore();
    cursor+=w;
  });
  ctx.restore();
}

function drawBossVsCutsceneV2(){
  if(!bossVsCutscene.active)return;
  const mobile=mobileControlsAvailable();
  const portrait=H>W;
  const fit=mobile?clamp(Math.min(W/(portrait?820:760),H/(portrait?980:760)),.42,.78):1;
  const p=1-bossVsCutscene.t/bossVsCutscene.maxT;
  const enter=clamp(p/.18,0,1);
  const exit=clamp((p-.86)/.14,0,1);
  const easeIn=1-(1-enter)**3;
  const easeOut=exit**3;
  const alpha=clamp(enter*1.6,0,1)*(1-exit*.45);
  const panelH=Math.min(mobile?(portrait?300:340):500,H*(mobile?(portrait?.48:.58):.76)),panelY=H/2-panelH/2;
  const panelW=Math.min(W,Math.floor(panelH*(1600/560)));
  const panelX=W/2-panelW/2;
  const split=W/2;
  const impact=Math.sin(p*52)*3*(1-exit);
  const playerX=(panelX-260)*(1-easeIn)+(panelX+panelW*.24)*easeIn-340*easeOut+impact;
  const bossId=bossVsCutscene.bossId||"juDaeri";
  const bossX=(panelX+panelW+260)*(1-easeIn)+(panelX+panelW*.76)*easeIn+350*easeOut-impact;
  const duelY=panelY+panelH*.56;
  const playerY=duelY;
  const bossY=duelY;
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.fillStyle="rgba(5,8,14,.16)";
  ctx.fillRect(0,0,W,H);
  if(bossVsBanner.complete&&bossVsBanner.naturalWidth){
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(bossVsBanner,panelX,panelY,panelW,panelH);
  }else{
    ctx.fillStyle="rgba(90,96,96,.96)";
    ctx.fillRect(panelX,panelY,panelW,panelH);
  }
  const bossName=bossId==="parkSejunFamily"?"박세준과 서호서로":bossId==="emotionCeo"?"감정쓰레기통 찾는 사장":bossId==="gossipGroup"?"모함하는 뒷담화꾼":bossId==="cultFanatic"?"편집비 먹튀한 광신도":bossId==="cheonSangmu"?"\uD6A1\uB839\uC744 \uC77C\uC0BC\uB294 \uCC9C\uC0C1\uBB34":"\uC0AC\uC7A5 \uBD88\uB95C\uB140 \uC8FC\uB300\uB9AC";
  drawVsPlayer(playerX,playerY,2.45*fit);
  drawVsBoss(bossX,bossY,(bossId==="emotionCeo"?1.55:bossId==="gossipGroup"?1.55:bossId==="cheonSangmu"?2.05:bossId==="cultFanatic"?2.0:2.2)*fit,bossId);
  drawVsNameV2(bossName,bossX,bossY-178*fit,bossId==="emotionCeo"?"#e7f8ff":bossId==="gossipGroup"?"#ffe1f5":bossId==="cultFanatic"?"#efe0ff":bossId==="cheonSangmu"?"#fff0a8":"#ffe1ec",fit);
  drawVsNameV2(getPlayableName(player.characterId),playerX,playerY+128*fit,"#fff7c8",fit);
  ctx.restore();
}

function drawVsNameV2(text,x,y,fill,scale=1){
  ctx.save();
  ctx.translate(x,y);
  let fontSize=Math.floor(46*scale);
  ctx.font=`900 ${fontSize}px "Black Han Sans","Bagel Fat One","Jua","Arial Black",sans-serif`;
  while(ctx.measureText(text).width>W*.46&&fontSize>18){
    fontSize-=2;
    ctx.font=`900 ${fontSize}px "Black Han Sans","Bagel Fat One","Jua","Arial Black",sans-serif`;
  }
  ctx.textAlign="center";ctx.textBaseline="middle";
  ctx.lineJoin="round";
  ctx.strokeStyle="#101319";ctx.lineWidth=13*scale;ctx.strokeText(text,0,2);
  ctx.strokeStyle="#ff4f64";ctx.lineWidth=6*scale;ctx.strokeText(text,0,2);
  ctx.strokeStyle="#ffe15c";ctx.lineWidth=2*scale;ctx.strokeText(text,0,2);
  ctx.fillStyle=fill;ctx.fillText(text,0,2);
  ctx.restore();
}

function drawBossVsCutscene(){
  if(!bossVsCutscene.active)return;
  const p=1-bossVsCutscene.t/bossVsCutscene.maxT;
  const enter=clamp(p/.32,0,1);
  const exit=clamp((p-.78)/.22,0,1);
  const easeIn=1-(1-enter)**3;
  const easeOut=exit**3;
  const alpha=clamp(enter*1.4,0,1)*(1-exit*.45);
  const panelH=Math.min(360,H*.58),panelY=H/2-panelH/2;
  const playerX=(-260)*(1-easeIn)+(W*.28)*easeIn-260*easeOut;
  const bossX=(W+260)*(1-easeIn)+(W*.72)*easeIn+280*easeOut;
  const playerY=panelY+panelH*.62;
  const bossY=panelY+panelH*.38;
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.fillStyle="rgba(5,8,14,.28)";
  ctx.fillRect(0,0,W,H);
  ctx.fillStyle="rgba(10,16,25,.92)";
  ctx.fillRect(0,panelY,W,panelH);
  ctx.strokeStyle="rgba(255,255,255,.18)";ctx.lineWidth=4;
  ctx.strokeRect(0,panelY+4,W,panelH-8);
  const split=W/2;
  const leftGrad=ctx.createLinearGradient(0,panelY,split,panelY+panelH);
  leftGrad.addColorStop(0,"#173f5f");leftGrad.addColorStop(.52,"#217c88");leftGrad.addColorStop(1,"#ffe36e");
  ctx.fillStyle=leftGrad;
  ctx.beginPath();ctx.moveTo(0,panelY);ctx.lineTo(split-54,panelY);ctx.lineTo(split-118,panelY+panelH);ctx.lineTo(0,panelY+panelH);ctx.closePath();ctx.fill();
  const rightGrad=ctx.createLinearGradient(W,panelY,split,panelY+panelH);
  rightGrad.addColorStop(0,"#501224");rightGrad.addColorStop(.55,"#b51e45");rightGrad.addColorStop(1,"#f6a23a");
  ctx.fillStyle=rightGrad;
  ctx.beginPath();ctx.moveTo(W,panelY);ctx.lineTo(split+54,panelY);ctx.lineTo(split+118,panelY+panelH);ctx.lineTo(W,panelY+panelH);ctx.closePath();ctx.fill();
  ctx.fillStyle="rgba(255,255,255,.14)";
  for(let i=0;i<9;i++){
    const y=panelY+18+i*38;
    ctx.fillRect(0,y,split-120,4);
    ctx.fillRect(split+120,y+16,W-split-120,4);
  }
  drawVsPlayer(playerX,playerY,2.45);
  drawVsBoss(bossX,bossY,2.28);
  drawVsName(getPlayableName(player.characterId),playerX,panelY+panelH-42,"#fff7c8","#12313d");
  drawVsName("사장 불륜녀 주대리",bossX,panelY+38,"#ffe1ec","#40101e");
  const vsPop=1+Math.sin(clamp((p-.18)/.36,0,1)*Math.PI)*.24;
  ctx.save();
  ctx.translate(W/2,H/2);
  ctx.scale(vsPop,vsPop);
  drawVsFlames(p);
  ctx.textAlign="center";ctx.textBaseline="middle";
  ctx.font='900 104px "Black Han Sans","Arial Black",sans-serif';
  ctx.lineJoin="round";
  ctx.strokeStyle="#101319";ctx.lineWidth=22;ctx.strokeText("VS",0,0);
  ctx.strokeStyle="#ff4f64";ctx.lineWidth=11;ctx.strokeText("VS",0,0);
  ctx.strokeStyle="#ffe15c";ctx.lineWidth=3;ctx.strokeText("VS",0,0);
  ctx.fillStyle="#fff8d6";ctx.fillText("VS",0,0);
  ctx.restore();
  ctx.restore();
}

function drawVsName(text,x,y,fill,bg){
  ctx.save();
  ctx.translate(x,y);
  ctx.font='900 26px "Black Han Sans","Jua","Arial Black",sans-serif';
  ctx.textAlign="center";ctx.textBaseline="middle";
  const w=ctx.measureText(text).width+36;
  ctx.fillStyle=bg;
  ctx.fillRect(-w/2,-20,w,40);
  ctx.strokeStyle="#f6d66b";ctx.lineWidth=3;ctx.strokeRect(-w/2,-20,w,40);
  ctx.strokeStyle="#101319";ctx.lineWidth=6;ctx.strokeText(text,0,2);
  ctx.fillStyle=fill;ctx.fillText(text,0,2);
  ctx.restore();
}

function drawVsFlames(p){
  const heat=clamp((p-.12)/.45,0,1);
  for(let i=0;i<10;i++){
    const x=-92+i*12;
    const h=(28+Math.sin(p*18+i)*18)*heat;
    ctx.fillStyle=i%2?"rgba(255,80,48,.78)":"rgba(255,218,72,.82)";
    ctx.beginPath();
    ctx.moveTo(x,70);
    ctx.lineTo(x+7,70-h);
    ctx.lineTo(x+15,70);
    ctx.closePath();
    ctx.fill();
  }
}

function getPlayableName(id){
  const ch=playableCharacters.find(c=>c.id===id)||selectedCharacter;
  return ch?ch.name:"건택";
}

function getPlayableCharacter(id){
  return playableCharacters.find(c=>c.id===id)||selectedCharacter||playableCharacters[0];
}

function getPlayableUltimateQuote(id){
  const ch=getPlayableCharacter(id);
  return ch.ultimateQuote||playerUltimateQuote;
}

function drawVsPlayer(x,y,scale){
  ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);
  const id=player.characterId||selectedCharacter.id;
  if(id==="sangil"&&sangilWhirlwindSprite.complete&&sangilWhirlwindSprite.naturalWidth){
    const fw=Math.floor(sangilWhirlwindSprite.naturalWidth/6),fh=sangilWhirlwindSprite.naturalHeight;
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(sangilWhirlwindSprite,fw*2,0,fw,fh,-62,-74,124,124);
  }else if(id==="seunggwan"&&seunggwanUltimateSprite.complete&&seunggwanUltimateSprite.naturalWidth){
    const fw=Math.floor(seunggwanUltimateSprite.naturalWidth/4),fh=seunggwanUltimateSprite.naturalHeight;
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(seunggwanUltimateSprite,fw*2,0,fw,fh,-54,-74,108,108);
  }else if(id==="jiin"&&jiinSprite.complete&&jiinSprite.naturalWidth){
    const fw=Math.floor(jiinSprite.naturalWidth/4),fh=Math.floor(jiinSprite.naturalHeight/4);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(jiinSprite,fw*0,fh*0,fw,fh,-46,-64,92,92);
  }else if(id==="homin"&&hominClearSprite.complete&&hominClearSprite.naturalWidth){
    const fw=Math.floor(hominClearSprite.naturalWidth/4),fh=hominClearSprite.naturalHeight;
    const progress=clamp(1-bossVsCutscene.t/bossVsCutscene.maxT,0,1);
    const col=Math.min(3,Math.floor(clamp((progress-.08)/.52,0,.999)*4));
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(hominClearSprite,fw*col,0,fw,fh,-42,-80,84,112);
  }else if(id==="geontaek"&&ultimateSprite.complete&&ultimateSprite.naturalWidth){
    const fw=Math.floor(ultimateSprite.naturalWidth/4),fh=Math.floor(ultimateSprite.naturalHeight/4);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(ultimateSprite,fw*1,fh*1,fw,fh,-48,-63,96,96);
  }else if(characterPortraits[id]&&characterPortraits[id].complete&&characterPortraits[id].naturalWidth){
    const img=characterPortraits[id];
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(img,-46,-78,92,112);
  }else if(idleSprite.complete&&idleSprite.naturalWidth){
    const fw=Math.floor(idleSprite.naturalWidth/4),fh=Math.floor(idleSprite.naturalHeight/4);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(idleSprite,0,fh*2,fw,fh,-42,-53,84,84);
  }else drawGeontaekPixel();
  ctx.restore();
}

function drawVsBoss(x,y,scale,bossId="juDaeri"){
  ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);
  if(bossId==="parkSejunFamily"){
    if(parkSejunFamilySprite.complete&&parkSejunFamilySprite.naturalWidth){const fw=parkSejunFamilySprite.naturalWidth/4,fh=parkSejunFamilySprite.naturalHeight/3;ctx.imageSmoothingEnabled=false;ctx.drawImage(parkSejunFamilySprite,0,0,fw,fh,-68,-94,136,136)}
    ctx.restore();return;
  }
  if(bossId==="gossipGroup"){
    const sheets=[gossipShortSprite,gossipLongSprite,gossipMaleSprite];
    const poses=[{x:-60,y:14,s:88},{x:60,y:14,s:92},{x:0,y:-4,s:96}];
    for(let i=0;i<sheets.length;i++){
      const sheet=sheets[i],p=poses[i];
      if(sheet.complete&&sheet.naturalWidth){
        const fw=sheet.naturalWidth/4,fh=sheet.naturalHeight/4;
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(sheet,0,0,fw,fh,p.x-p.s/2,p.y-p.s*.72,p.s,p.s);
      }else{
        ctx.fillStyle=i===2?"#d5b37a":i===1?"#624f62":"#f4e8df";
        ctx.fillRect(p.x-20,p.y-58,40,72);
      }
    }
    ctx.restore();
    return;
  }
  const sheet=bossId==="emotionCeo"?emotionCeoSprite:bossId==="cultFanatic"?cultFanaticSprite:bossId==="cheonSangmu"?cheonSangmuSprite:juDaeriSprite;
  const size=bossId==="emotionCeo"?126:bossId==="cheonSangmu"?108:bossId==="cultFanatic"?156:96;
  if(sheet.complete&&sheet.naturalWidth){
    const fw=Math.floor(sheet.naturalWidth/4),fh=bossId==="emotionCeo"?152:Math.floor(sheet.naturalHeight/4);
    ctx.imageSmoothingEnabled=false;
    if(bossId==="cultFanatic"){
      const sw=Math.min(fw,204),sx=(fw-sw)/2,drawW=size*(sw/fh);
      ctx.drawImage(sheet,sx,0,sw,fh,-drawW/2,-size*.64,drawW,size);
    }else if(bossId==="emotionCeo"){
      const r=EMOTION_CEO_FRAMES.move[0][0];
      ctx.drawImage(sheet,r.x,r.y,r.w,r.h,-size/2,-size*.7,size,size);
    }else{
      ctx.drawImage(sheet,0,0,fw,fh,-size/2,-size*.64,size,size);
    }
  }else{
    ctx.fillStyle="#301b25";ctx.fillRect(-26,-48,52,84);
    ctx.fillStyle="#ffccd8";ctx.fillRect(-20,-66,40,38);
  }
  ctx.restore();
}

function drawStageClearBanner(){
  if(stageClearBanner.t<=0)return;
  const p=1-stageClearBanner.t/stageClearBanner.maxT;
  const alpha=p<.12?p/.12:stageClearBanner.t<.35?stageClearBanner.t/.35:1;
  const chars=[...(stageClearBanner.text||"컷 !!!")];
  const fontFamily='"Black Han Sans","Bagel Fat One","Jua","Do Hyeon","Galmuri11","DungGeunMo","NeoDunggeunmo","Arial Black",sans-serif';
  const responsive=mobileControlsAvailable()?clamp(Math.min(W/760,H/920),.45,.78):clamp(Math.min(W/1040,H/760),.72,1);
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.translate(W/2,H*.43);
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.lineJoin="round";
  ctx.miterLimit=2;
  const baseSize=58*responsive;
  ctx.font=`900 ${baseSize}px ${fontFamily}`;
  let widths=chars.map(ch=>ch===" "?22*responsive:ctx.measureText(ch).width+(ch==="!"?12:5)*responsive);
  const totalWidth=widths.reduce((sum,w)=>sum+w,0);
  const fitScale=totalWidth>W*.9?clamp(W*.9/totalWidth,.55,1):1;
  widths=widths.map(w=>w*fitScale);
  let cursor=-widths.reduce((sum,w)=>sum+w,0)/2;
  chars.forEach((ch,i)=>{
    const w=widths[i];
    if(ch===" "){cursor+=w;return}
    const cp=clamp((p-i*.032)/.24,0,1);
    if(cp<=0){cursor+=w;return}
    const ease=1-(1-cp)**3;
    const pop=1+Math.sin(cp*Math.PI)*.38;
    ctx.save();
    ctx.globalAlpha*=cp;
    ctx.translate(cursor+w/2-90*(1-ease),Math.sin(i*1.7)*5-26*(1-ease));
    ctx.rotate(((i%5)-2)*.05*(1-cp));
    ctx.scale(pop,pop);
    const size=(ch==="!"?62:ch==="컷"?66:58+(i%3===1?5:0))*responsive*fitScale;
    ctx.font=`900 ${size}px ${fontFamily}`;
    ctx.strokeStyle="#101319";ctx.lineWidth=Math.max(4,14*responsive*fitScale);ctx.strokeText(ch,0,0);
    ctx.strokeStyle="#ff4f64";ctx.lineWidth=Math.max(2,7*responsive*fitScale);ctx.strokeText(ch,0,0);
    ctx.strokeStyle="#ffe15c";ctx.lineWidth=Math.max(1,3*responsive*fitScale);ctx.strokeText(ch,0,0);
    ctx.fillStyle="#fff8d6";ctx.fillText(ch,0,0);
    ctx.restore();
    cursor+=w;
  });
  ctx.restore();
}

function drawGeontaekPixel(){
  const walk=player.moving?Math.sin(player.frame*1.55):0;
  const step=player.moving?Math.sign(walk||1):0;
  const bob=player.moving?Math.abs(walk)*2:Math.sin(player.frame*.45)*.8;
  ctx.save();
  ctx.translate(0,-bob);
  if(player.dir==="side")ctx.scale(player.face,1);

  const back=player.dir==="up",side=player.dir==="side";
  const skin="#f0c8bc",hair="#16191e",shirt="#f4f4ef",line="#101319",tie="#202631",pants="#151922",cyan="#65e8ff";

  // Legs
  ctx.fillStyle=line;
  if(side){
    ctx.fillRect(-7+step*2,18,7,17);ctx.fillRect(1-step*2,18,7,17);
    ctx.fillStyle=pants;ctx.fillRect(-6+step*2,18,5,15);ctx.fillRect(2-step*2,18,5,15);
  }else{
    ctx.fillRect(-10-step*2,17,8,18);ctx.fillRect(2+step*2,17,8,18);
    ctx.fillStyle=pants;ctx.fillRect(-9-step*2,17,6,16);ctx.fillRect(3+step*2,17,6,16);
  }
  ctx.fillStyle=line;ctx.fillRect(-10-step*2,33,8,4);ctx.fillRect(2+step*2,33,8,4);

  // Body and arms
  ctx.fillStyle=line;ctx.fillRect(-15,0,30,22);
  ctx.fillStyle=shirt;ctx.fillRect(-13,1,26,20);
  ctx.fillStyle=tie;
  if(!back){ctx.fillRect(-3,2,6,15);ctx.fillRect(-2,16,4,5)}
  ctx.fillStyle=shirt;
  if(side){
    ctx.fillRect(-17,2+step*2,6,18);ctx.fillRect(11,2-step*2,5,16);
    ctx.fillStyle=skin;ctx.fillRect(-18,18+step*2,6,5);ctx.fillRect(11,17-step*2,5,5);
  }else{
    ctx.fillRect(-20,3+step*2,6,18);ctx.fillRect(14,3-step*2,6,18);
    ctx.fillStyle=skin;ctx.fillRect(-20,20+step*2,6,5);ctx.fillRect(14,20-step*2,6,5);
  }

  // Head
  ctx.fillStyle=skin;
  if(side){
    ctx.fillRect(-12,-28,23,25);ctx.fillRect(8,-17,6,9);
    ctx.fillStyle=hair;ctx.fillRect(-13,-32,24,11);ctx.fillRect(-11,-23,7,8);ctx.fillRect(0,-24,8,6);
  }else{
    ctx.fillRect(-14,-29,28,25);
    ctx.fillStyle=skin;ctx.fillRect(-18,-18,5,8);ctx.fillRect(13,-18,5,8);
    ctx.fillStyle=hair;ctx.fillRect(-15,-34,30,12);ctx.fillRect(-14,-25,6,9);ctx.fillRect(-7,-24,6,7);ctx.fillRect(1,-24,7,7);ctx.fillRect(8,-25,6,8);
  }

  // Face or back hair detail
  if(back){
    ctx.fillStyle=hair;ctx.fillRect(-13,-28,26,14);ctx.fillRect(-10,-16,20,5);
  }else if(side){
    ctx.fillStyle=line;ctx.fillRect(3,-17,7,3);ctx.fillRect(4,-7,6,2);
  }else{
    ctx.fillStyle=line;ctx.fillRect(-10,-17,8,3);ctx.fillRect(3,-17,8,3);ctx.fillRect(-4,-7,8,2);
  }

  // Direction cue
  if(player.moving){
    ctx.strokeStyle=cyan;ctx.globalAlpha=.45;ctx.lineWidth=2;
    ctx.beginPath();
    if(player.dir==="up"){ctx.moveTo(0,-43);ctx.lineTo(0,-49)}
    else if(player.dir==="down"){ctx.moveTo(0,43);ctx.lineTo(0,49)}
    else{ctx.moveTo(24*player.face,0);ctx.lineTo(31*player.face,0)}
    ctx.stroke();ctx.globalAlpha=1;
  }
  ctx.restore();
}

function drawEnemy(e){
  let hitX=0,hitY=0;
  if((e.impactT||0)>0){
    const progress=1-e.impactT/Math.max(.001,e.impactMaxT||.14);
    const kick=Math.sin(progress*Math.PI)*(e.boss?4:6);
    hitX=(e.impactDx||0)*kick;
    hitY=(e.impactDy||0)*kick;
  }
  ctx.save();ctx.translate(e.x+hitX,e.y+hitY);
  if((e.impactFlash||0)>0)ctx.filter="brightness(2) saturate(.35) contrast(1.15)";
  else if((e.freezeT||0)>0)ctx.filter="grayscale(.7) sepia(.55) saturate(3.4) hue-rotate(155deg) brightness(1.12)";
  else if((e.burnT||0)>0)ctx.filter="sepia(.72) saturate(4.2) hue-rotate(325deg) brightness(1.08)";
  if(e.hit>0&&(e.impactFlash||0)<=0)ctx.globalAlpha=.84;
  if(e.bossGroup==="estechFamilyChild"||e.bossGroup==="estechFather"||e.id==="parkSejunGuard"){
    drawEstechFamily(e);ctx.restore();return;
  }
  if(e.boss&&e.id==="juDaeri"){
    drawJuDaeri(e);
    ctx.restore();
    return;
  }
  if(e.boss&&e.id==="cheonSangmu"){
    drawCheonSangmu(e);
    ctx.restore();
    return;
  }
  if(e.boss&&e.id==="cultFanatic"){
    drawCultFanatic(e);
    ctx.restore();
    return;
  }
  if(e.boss&&e.id==="emotionCeo"){
    drawEmotionCeo(e);
    ctx.restore();
    return;
  }
  if(e.bossGroup==="gossip"){
    drawGossipBoss(e);
    ctx.restore();
    return;
  }
  if(e.object){
    drawCultObject(e);
    ctx.restore();
    return;
  }
  if(e.estechAtlasRow!==undefined&&estechEnemyAtlas.complete&&estechEnemyAtlas.naturalWidth){
    const fw=estechEnemyAtlas.naturalWidth/4,fh=estechEnemyAtlas.naturalHeight/5,col=Math.floor(elapsed*7+e.x*.01+e.y*.01)%4,size=e.drawSize||78;
    ctx.imageSmoothingEnabled=false;ctx.save();if(player.x<e.x)ctx.scale(-1,1);ctx.drawImage(estechEnemyAtlas,fw*col,fh*e.estechAtlasRow,fw,fh,-size/2,-size*.72,size,size);ctx.restore();
  }else{
  const enemySprite=enemySprites[e.id];
  if(enemySprite&&enemySprite.complete&&enemySprite.naturalWidth){
    const rows=e.spriteRows||2;
    const fw=enemySprite.naturalWidth/4,fh=enemySprite.naturalHeight/rows;
    const directionalRush=e.scooterNamed||e.pigeonRush;
    const facingLeft=directionalRush?(e.rushVx||0)<0:player.x<e.x;
    const baseRow=directionalRush?rowFromVector({x:e.rushVx||0,y:e.rushVy||0}):e.sourceRow??(facingLeft?0:1);
    const attackRow=e.attackSourceRow!==undefined?e.attackSourceRow:rows>=4?baseRow+2:baseRow;
    const row=e.ranged&&e.attackT>0?attackRow:baseRow;
    const col=e.ranged&&e.attackT>0?clamp(Math.floor((1-e.attackT/.5)*4),0,3):Math.floor(elapsed*(e.scooterNamed?10:e.pigeonRush?12:6)+e.x*.01+e.y*.01)%4;
    const size=e.drawSize||58;
    const scooterFrameOffsets=[[-3,0,-2,2],[-3,1,-2,4],[-1,3,0,6],[5,6,3,7]];
    const frameOffsetX=e.scooterNamed?scooterFrameOffsets[baseRow][col]:0;
    ctx.imageSmoothingEnabled=false;
    if(e.flipByFacing&&facingLeft)ctx.scale(-1,1);
    ctx.drawImage(enemySprite,fw*col,fh*row,fw,fh,-size/2+frameOffsetX,-size*.72,size,size);
  }
  else if(e.id==="contract"){ctx.fillStyle=e.color;ctx.fillRect(-14,-18,28,36);ctx.fillStyle="#b7bec8";for(let y=-10;y<12;y+=7)ctx.fillRect(-8,y,16,2);ctx.fillStyle="#d34c5c";ctx.fillRect(4,8,6,6)}
  else if(e.id==="invite"){ctx.fillStyle=e.color;ctx.fillRect(-16,-13,32,26);ctx.strokeStyle="#4d8fbd";ctx.strokeRect(-16,-13,32,26);ctx.beginPath();ctx.moveTo(-16,-13);ctx.lineTo(0,2);ctx.lineTo(16,-13);ctx.stroke()}
  else if(e.id==="coffee"){ctx.fillStyle=e.color;ctx.fillRect(-11,-15,22,28);ctx.fillStyle="#f7f2e6";ctx.fillRect(-13,-20,26,6);ctx.strokeStyle="#f0d08a";ctx.strokeRect(10,-6,8,12)}
  else{ctx.fillStyle="#f0c8bc";ctx.fillRect(-14,-24,28,25);ctx.fillStyle="#20242c";ctx.fillRect(-16,-32,32,14);ctx.fillStyle=e.color;ctx.fillRect(-17,2,34,34);ctx.fillStyle=e.tie;ctx.fillRect(-4,4,8,24);ctx.fillStyle="#111";ctx.fillRect(-9,-11,6,3);ctx.fillRect(4,-11,6,3)}
  }
  ctx.filter="none";
  if(!e.hideHp){
    const barY=e.drawSize?-e.drawSize*.72:-e.r-13;
    const barHalf=e.namedEnemy?e.r*1.3:e.r;
    ctx.fillStyle=e.namedEnemy?"#503913":"#111821";ctx.fillRect(-barHalf,barY,barHalf*2,5);
    ctx.fillStyle=e.namedEnemy?"#ffc247":"#ff6875";ctx.fillRect(-barHalf,barY,barHalf*2*(e.hp/e.maxHp),5);
  }
  ctx.restore();
}

function drawBurningEnemyStatus(e){
  if((e.burnT||0)<=0||(e.freezeT||0)>0)return;
  const radius=(e.drawSize||e.r*2||48)*.42;
  const fade=clamp(e.burnT/.28,0,1);
  ctx.save();
  ctx.translate(e.x,e.y+(e.drawSize?e.drawSize*.16:8));
  ctx.globalCompositeOperation="lighter";
  for(let i=0;i<5;i++){
    const phase=(elapsed*(1.8+i*.14)+i*.23+(e.x+e.y)*.0007)%1;
    const x=Math.sin(i*2.17+elapsed*.8)*radius*.62;
    const y=-phase*radius*1.45;
    const size=(5+(i%3)*2.2)*(1-phase*.58);
    ctx.globalAlpha=fade*(1-phase)*.72;
    ctx.fillStyle=i%2?"#ffb22e":"#ff5428";
    ctx.beginPath();
    ctx.moveTo(x,y-size*1.8);
    ctx.quadraticCurveTo(x+size,y-size*.15,x,y+size);
    ctx.quadraticCurveTo(x-size,y-size*.15,x,y-size*1.8);
    ctx.fill();
  }
  ctx.restore();
}

function drawFrozenEnemyStatus(e){
  if((e.freezeT||0)<=0)return;
  const radius=(e.drawSize||e.r*2||48)*.48;
  const fade=clamp(e.freezeT/.35,0,1);
  ctx.save();
  ctx.translate(e.x,e.y-8);
  ctx.globalCompositeOperation="lighter";
  ctx.globalAlpha=.42*fade;
  ctx.fillStyle="#bff8ff";
  for(let i=0;i<5;i++){
    const a=i*Math.PI*2/5+elapsed*.42;
    const d=radius*(.82+.08*Math.sin(elapsed*3+i));
    const x=Math.cos(a)*d,y=Math.sin(a)*d*.72;
    const size=2.5+(i%2)*1.4;
    ctx.save();ctx.translate(x,y);ctx.rotate(a);
    ctx.beginPath();ctx.moveTo(0,-size*1.8);ctx.lineTo(size,0);ctx.lineTo(0,size*1.8);ctx.lineTo(-size,0);ctx.closePath();ctx.fill();
    ctx.restore();
  }
  ctx.restore();
}

function drawEstechFamily(e){
  const father=e.id==="parkSejunGuard"||e.bossGroup==="estechFather",size=e.drawSize||112,facingLeft=player.x<e.x;
  ctx.save();
  if(facingLeft)ctx.scale(-1,1);
  ctx.imageSmoothingEnabled=false;
  if(father&&e.bossGroup==="estechFather"&&parkSejunPhase2Sprite.complete&&parkSejunPhase2Sprite.naturalWidth){
    const fw=parkSejunPhase2Sprite.naturalWidth/4,fh=parkSejunPhase2Sprite.naturalHeight/3;
    let row=1,col=0;
    if(e.state==="shieldBreak"){row=0;col=clamp(Math.floor((1-e.stateT/1.05)*4),0,3)}
    else if(e.state==="bellyJump")col=2;
    else if(e.state==="bellyCast"||e.state==="heatCast"||e.state==="nagCast")col=3;
    else if(e.state==="idle")col=Math.floor(elapsed*6)%2;
    ctx.drawImage(parkSejunPhase2Sprite,fw*col,fh*row,fw,fh,-size/2,-size*.72,size,size);
  }else if(e.familyRole==="taekwondo"&&e.state==="spinReturn"&&seoroSpinSprite.complete&&seoroSpinSprite.naturalWidth){
    const fw=seoroSpinSprite.naturalWidth/4,fh=seoroSpinSprite.naturalHeight,col=clamp(Math.floor((1-e.stateT/(e.spinReturnT||.48))*4),0,3);
    ctx.drawImage(seoroSpinSprite,fw*col,0,fw,fh,-size*.57,-size*.78,size*1.14,size);
  }else if(parkSejunFamilySprite.complete&&parkSejunFamilySprite.naturalWidth){
    const row=e.familyRole==="artist"?1:e.familyRole==="taekwondo"?2:0,fw=parkSejunFamilySprite.naturalWidth/4,fh=parkSejunFamilySprite.naturalHeight/3;
    let col=Math.floor(elapsed*6+(e.memberIndex||0))%4;
    if(e.state==="kickWarn")col=0;else if(e.state==="kickDash")col=2;else if(e.state==="spinReturn")col=1;
    ctx.drawImage(parkSejunFamilySprite,fw*col,fh*row,fw,fh,-size/2,-size*.72,size,size);
  }
  ctx.restore();
  if(e.boss&&e.group&&e.group.guardAlive){ctx.strokeStyle="rgba(85,210,255,.8)";ctx.lineWidth=4;ctx.beginPath();ctx.arc(0,-8,e.r+17,0,Math.PI*2);ctx.stroke()}
  const half=father?52:42,barY=-size*.72;
  ctx.fillStyle="#101820";ctx.fillRect(-half,barY,half*2,7);
  ctx.fillStyle=e.id==="parkSejunGuard"?"#55d9ff":father?"#ff596d":e.color||"#ff6875";ctx.fillRect(-half,barY,half*2*clamp(e.hp/e.maxHp,0,1),7);
  if(father){ctx.font='900 10px "Malgun Gothic",sans-serif';ctx.textAlign="center";ctx.textBaseline="bottom";ctx.fillStyle="#f4fbff";ctx.strokeStyle="#101820";ctx.lineWidth=3;const label=e.id==="parkSejunGuard"?"쉴드":"HP";ctx.strokeText(label,0,barY-2);ctx.fillText(label,0,barY-2)}
}
function drawEmotionCeo(e){
  if(!Number.isFinite(e.x)||!Number.isFinite(e.y))return;
  let sheet=emotionCeoSprite,cols=4,rows=4,row=rowFromVector(e.dir||{x:0,y:1});
  row=clamp(Math.floor(row||0),0,3);
  if((e.state==="pullCast"||e.state==="pushCast")&&emotionCeoSkillSprite.complete&&emotionCeoSkillSprite.naturalWidth){
    sheet=emotionCeoSkillSprite;
    cols=4;rows=2;
    const slamP=e.ceoMode==="slamJump"?1-Math.max(0,e.stateT)/(e.slamJumpT||.48):0;
    row=e.state==="pushCast"||(e.ceoMode==="slamJump"&&slamP>.68)?1:0;
  }
  if(sheet.complete&&sheet.naturalWidth){
    let col=((Math.floor(elapsed*(e.state==="pullCast"||e.state==="pushCast"?7:5)+e.x*.01)%4)+4)%4;
    if(sheet===emotionCeoSkillSprite&&e.ceoMode==="slamJump"){
      const slamP=1-Math.max(0,e.stateT)/(e.slamJumpT||.48);
      col=slamP<.45?0:slamP<.68?1:slamP<.9?2:3;
    }
    let fw=sheet.naturalWidth/cols,fh=sheet.naturalHeight/rows,sx=fw*col,sy=fh*row;
    let drawSquare=false;
    if(sheet===emotionCeoSprite){
      if(e.state==="intro"){
        const r=EMOTION_CEO_FRAMES.intro[col]||EMOTION_CEO_FRAMES.intro[0];
        sx=r.x;sy=r.y;fw=r.w;fh=r.h;
      }else{
        const rowFrames=EMOTION_CEO_FRAMES.move[row]||EMOTION_CEO_FRAMES.move[0];
        const r=rowFrames[col]||rowFrames[0]||EMOTION_CEO_FRAMES.move[0][0];
        sx=r.x;sy=r.y;fw=r.w;fh=r.h;drawSquare=true;
      }
    }
    const size=(e.drawSize||126)*(sheet===emotionCeoSkillSprite?1.28:1);
    const drawW=size*(fw/fh);
    ctx.imageSmoothingEnabled=false;
    const lift=e.jumpLift||0;
    if(drawSquare)ctx.drawImage(sheet,sx,sy,fw,fh,-size/2,-size*.74-lift,size,size);
    else ctx.drawImage(sheet,sx,sy,fw,fh,-drawW/2,-size*.74-lift,drawW,size);
  }else{
    ctx.fillStyle="#2d2530";ctx.fillRect(-28,-60,56,88);
    ctx.fillStyle="#f4c2a8";ctx.fillRect(-22,-78,44,34);
  }
  const barY=-(e.drawSize||126)*.78;
  ctx.fillStyle="#111821";ctx.fillRect(-42,barY,84,7);
  ctx.fillStyle="#69d7ff";ctx.fillRect(-42,barY,84*(e.hp/e.maxHp),7);
}

function drawGossipBoss(e){
  const group=e.group;
  const members=group?gossipAlive(group):[e];
  if(members[0]===e&&members.length>=2&&(group.mode==="spin"||group.mode==="dizzy")){
    ctx.save();
    ctx.translate(-e.x,-e.y);
    ctx.strokeStyle=group.mode==="spin"?"rgba(255,122,216,.72)":"rgba(255,241,150,.55)";
    ctx.lineWidth=5;
    ctx.setLineDash(group.mode==="dizzy"?[8,7]:[]);
    ctx.beginPath();
    for(let i=0;i<members.length;i++){
      const m=members[i];
      if(i===0)ctx.moveTo(m.x,m.y-36);
      else ctx.lineTo(m.x,m.y-36);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }
  const sheet=e.id==="gossipMale"?gossipMaleSprite:e.id==="gossipLong"?gossipLongSprite:gossipShortSprite;
  if(sheet.complete&&sheet.naturalWidth){
    const fw=sheet.naturalWidth/4,fh=sheet.naturalHeight/4;
    let row=rowFromVector(e.dir||{x:0,y:1});
    let col=Math.floor(elapsed*(group&&group.mode==="dizzy"?8:5)+e.memberIndex)%4;
    if(group&&group.mode==="spin")col=Math.floor(elapsed*14+e.memberIndex)%4;
    if(group&&group.mode==="intro")col=Math.floor(elapsed*7)%4,row=0;
    const size=e.drawSize||104;
    ctx.imageSmoothingEnabled=false;
    if(group&&group.mode==="dizzy"){
      ctx.save();
      ctx.rotate(Math.sin(elapsed*22+e.memberIndex)*.07);
      ctx.drawImage(sheet,fw*col,fh*row,fw,fh,-size/2,-size*.76,size,size);
      ctx.restore();
    }else{
      ctx.drawImage(sheet,fw*col,fh*row,fw,fh,-size/2,-size*.76,size,size);
    }
  }else{
    ctx.fillStyle=e.id==="gossipMale"?"#d5b37a":e.id==="gossipLong"?"#624f62":"#f4e8df";
    ctx.fillRect(-24,-52,48,78);
    ctx.fillStyle="#f0c8bc";
    ctx.fillRect(-18,-72,36,30);
  }
  const w=72,barY=-(e.drawSize||104)*.84;
  ctx.fillStyle="#111821";
  ctx.fillRect(-w/2,barY,w,7);
  ctx.fillStyle=e.color||"#ff7ad8";
  ctx.fillRect(-w/2,barY,w*clamp(e.hp/e.maxHp,0,1),7);
  ctx.strokeStyle="#f9e8a5";
  ctx.lineWidth=2;
  ctx.strokeRect(-w/2,barY,w,7);
}

function drawJuDaeri(e){
  let sheet=juDaeriSprite;
  if(e.state==="nagCast"&&juDaeriNagSprite.complete&&juDaeriNagSprite.naturalWidth)sheet=juDaeriNagSprite;
  if((e.state==="kickCast"||e.state==="kickDash")&&juDaeriKickSprite.complete&&juDaeriKickSprite.naturalWidth)sheet=juDaeriKickSprite;
  if(sheet.complete&&sheet.naturalWidth){
    const fw=sheet.naturalWidth/4,fh=sheet.naturalHeight/4;
    let row=rowFromVector(e.dir||{x:0,y:1});
    if(e.state==="kickCast"||e.state==="kickDash")row=e.kickRow??(e.dir.x<0?1:2);
    let col=Math.floor(elapsed*5+e.x*.01)%2;
    if(e.state==="nagCast")col=clamp(Math.floor((1-e.stateT/1.35)*4),0,3);
    else if(e.state==="kickCast")col=clamp(Math.floor((1-e.stateT/BOSS_KICK_SKILL.castT)*4),0,3);
    else if(e.state==="kickDash")col=2;
    else if(e.state==="intro")col=Math.floor(elapsed*8)%4;
    else if(e.state==="idle")col=Math.floor(elapsed*3)%2;
    const size=e.drawSize||96;
    ctx.imageSmoothingEnabled=false;
    const intro=e.state==="intro"?1+Math.sin((1-e.stateT/1.65)*Math.PI)*.22:1;
    ctx.save();
    ctx.scale(intro,intro);
    ctx.drawImage(sheet,fw*col,fh*row,fw,fh,-size/2,-size*.76,size,size);
    ctx.restore();
  }else{
    ctx.fillStyle="#5a243f";ctx.fillRect(-22,-34,44,70);
    ctx.fillStyle="#f0c8bc";ctx.fillRect(-18,-58,36,30);
  }
  const barY=-(e.drawSize||96)*.82;
  ctx.fillStyle="#111821";ctx.fillRect(-42,barY,84,7);
  ctx.fillStyle="#ff3f63";ctx.fillRect(-42,barY,84*clamp(e.hp/e.maxHp,0,1),7);
  ctx.strokeStyle="#f9e8a5";ctx.lineWidth=2;ctx.strokeRect(-42,barY,84,7);
}

function drawCheonSangmu(e){
  let sheet=cheonSangmuSprite,rows=4;
  if(e.state==="intro"&&cheonSangmuIntroSprite.complete&&cheonSangmuIntroSprite.naturalWidth){sheet=cheonSangmuIntroSprite;rows=2}
  else if(e.state==="heatCast"&&cheonSangmuHeatSprite.complete&&cheonSangmuHeatSprite.naturalWidth){sheet=cheonSangmuHeatSprite;rows=4}
  else if((e.state==="bellyCast"||e.state==="bellyJump")&&cheonSangmuBellySprite.complete&&cheonSangmuBellySprite.naturalWidth){sheet=cheonSangmuBellySprite;rows=4}
  if(sheet.complete&&sheet.naturalWidth){
    const fw=sheet.naturalWidth/4,fh=sheet.naturalHeight/rows;
    let row=rows===2?0:rowFromVector(e.dir||{x:0,y:1});
    let col=Math.floor(elapsed*4+e.x*.01)%2;
    if(e.state==="intro")col=clamp(Math.floor((1-e.stateT/1.45)*8),0,7)%4,row=Math.floor(clamp(Math.floor((1-e.stateT/1.45)*8),0,7)/4);
    else if(e.state==="heatCast")col=clamp(Math.floor((1-e.stateT/CHEON_HEAT_SKILL.castT)*4),0,3);
    else if(e.state==="bellyCast")col=clamp(Math.floor((1-e.stateT/(e.bellyCastT||CHEON_BELLY_SKILL.castT))*2),0,1);
    else if(e.state==="bellyJump")col=2+clamp(Math.floor((1-e.stateT/(e.bellyJumpT||CHEON_BELLY_SKILL.jumpT))*2),0,1);
    const size=e.drawSize||108;
    const hop=e.state==="bellyJump"?Math.sin((1-e.stateT/(e.bellyJumpT||CHEON_BELLY_SKILL.jumpT))*Math.PI)*32:0;
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(sheet,fw*col,fh*row,fw,fh,-size/2,-size*.76-hop,size,size);
  }else{
    ctx.fillStyle="#172033";ctx.fillRect(-30,-44,60,78);
    ctx.fillStyle="#f0c8bc";ctx.fillRect(-20,-66,40,30);
  }
  const barY=-(e.drawSize||108)*.82;
  ctx.fillStyle="#111821";ctx.fillRect(-48,barY,96,8);
  ctx.fillStyle="#ffb13f";ctx.fillRect(-48,barY,96*clamp(e.hp/e.maxHp,0,1),8);
  ctx.strokeStyle="#f9e8a5";ctx.lineWidth=2;ctx.strokeRect(-48,barY,96,8);
}

function drawPixelFrame(sheet,col,row,cols,rows,centerY,size){
  const fw=sheet.naturalWidth/cols,fh=sheet.naturalHeight/rows;
  const drawH=size;
  const drawW=size*(fw/fh);
  ctx.drawImage(sheet,fw*col,fh*row,fw,fh,-drawW/2,centerY-drawH,drawW,drawH);
  return {fw,fh,drawW,drawH};
}

function drawCultMoveFrame(sheet,col,row,rows,centerY,size){
  const fw=sheet.naturalWidth/4,fh=sheet.naturalHeight/rows;
  const sw=Math.min(fw,204),sx=fw*col+(fw-sw)/2,sy=fh*row,sh=fh;
  const drawH=size,drawW=size*(sw/sh);
  ctx.drawImage(sheet,sx,sy,sw,sh,-drawW/2,centerY-drawH,drawW,drawH);
}

function drawCultFanatic(e){
  if(e.state==="coffin"){
    drawCultBossHpBar(e,0,-112,112,true);
    return;
  }
  let sheet=cultFanaticSprite,rows=4;
  let cols=4;
  if(e.state==="intro"&&cultFanaticIntroSprite.complete&&cultFanaticIntroSprite.naturalWidth){sheet=cultFanaticIntroSprite;rows=2}
  else if(e.state==="chant"&&cultFanaticChantSprite.complete&&cultFanaticChantSprite.naturalWidth){sheet=cultFanaticChantSprite;rows=2}
  if(sheet.complete&&sheet.naturalWidth){
    const fw=sheet.naturalWidth/cols,fh=sheet.naturalHeight/rows;
    let row=rows===2?0:rowFromVector(e.dir||{x:0,y:1});
    let col=Math.floor(elapsed*4+e.x*.01)%2;
    if(e.state==="intro"){
      const frame=clamp(Math.floor((1-e.stateT/1.45)*8),0,7);
      col=frame%4;row=Math.floor(frame/4);
    }else if(e.state==="chant"){
      const frame=clamp(Math.floor((1-e.stateT/CULT_SKILL.chantT)*8),0,7);
      col=frame%4;row=Math.floor(frame/4);
      ctx.save();
      ctx.globalAlpha=.55+.28*Math.sin(elapsed*28);
      ctx.strokeStyle=`hsl(${Math.floor(elapsed*210)%360} 95% 68%)`;
      ctx.lineWidth=5;
      ctx.beginPath();ctx.arc(0,-34,54+Math.sin(elapsed*14)*4,0,Math.PI*2);ctx.stroke();
      ctx.restore();
    }
    const size=e.drawSize||104;
    ctx.imageSmoothingEnabled=false;
    if(sheet===cultFanaticSprite)drawCultMoveFrame(sheet,col,row,rows,size*.24,size);
    else{
      const actionSize=e.state==="intro"?size*1.22:e.state==="chant"?size*1.18:size;
      drawPixelFrame(sheet,col,row,cols,rows,size*.24,actionSize);
    }
  }else{
    ctx.fillStyle="#4b3858";ctx.fillRect(-26,-42,52,74);
    ctx.fillStyle="#e1bba9";ctx.fillRect(-19,-64,38,29);
  }
  drawCultBossHpBar(e,0,-(e.drawSize||104)*.82,96,false);
}

function drawCultBossHpBar(e,x,y,w,label=false){
  const hp=clamp(e.hp/e.maxHp,0,1);
  ctx.save();
  ctx.translate(x,y);
  if(label){
    ctx.textAlign="center";
    ctx.textBaseline="bottom";
    ctx.font='900 12px "Courier New","Arial Black",sans-serif';
    ctx.lineWidth=4;
    ctx.strokeStyle="#101319";
    ctx.strokeText("BOSS",0,-4);
    ctx.fillStyle="#fff0ff";
    ctx.fillText("BOSS",0,-4);
  }
  ctx.fillStyle="#111821";
  ctx.fillRect(-w/2,0,w,8);
  ctx.fillStyle="#b56cff";
  ctx.fillRect(-w/2,0,w*hp,8);
  ctx.strokeStyle="#f9e8a5";
  ctx.lineWidth=2;
  ctx.strokeRect(-w/2,0,w,8);
  ctx.restore();
}

function drawCultObject(e){
  const sheet=e.id==="cultCoffin"?cultCoffinSprite:cultTotemSprite;
  const size=e.drawSize||80;
  if(sheet.complete&&sheet.naturalWidth){
    const fw=sheet.naturalWidth/4,fh=sheet.naturalHeight;
    const col=Math.floor(elapsed*(e.id==="cultCoffin"?5:7))%4;
    const drawH=size;
    const drawW=size*(fw/fh);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(sheet,fw*col,0,fw,fh,-drawW/2,-size*.72,drawW,drawH);
  }else{
    ctx.fillStyle=e.id==="cultCoffin"?"#34233d":"#6a5430";
    ctx.fillRect(-e.r,-e.r*1.5,e.r*2,e.r*2.1);
  }
  const barY=-size*.82;
  ctx.fillStyle="#111821";ctx.fillRect(-e.r,barY,e.r*2,5);
  ctx.fillStyle=e.id==="cultCoffin"?"#b56cff":"#ffd15a";
  ctx.fillRect(-e.r,barY,e.r*2*clamp(e.hp/e.maxHp,0,1),5);
}

function drawAuraRibbon(rx,ry,scale,width,start,span,seed,color,alpha,blur){
  const samples=Math.max(9,Math.ceil(span*14));
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.fillStyle=color;
  ctx.shadowColor=color;
  ctx.shadowBlur=blur;
  ctx.beginPath();
  for(let i=0;i<=samples;i++){
    const p=i/samples;
    const a=start+span*p;
    const ripple=Math.sin(a*3.1+seed)*.016+Math.sin(a*7.3-seed*1.6)*.009;
    const uneven=width*(.48+.18*Math.sin(p*Math.PI*3+seed));
    const k=scale+ripple+uneven;
    const x=Math.cos(a)*rx*k;
    const y=Math.sin(a)*ry*k;
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  for(let i=samples;i>=0;i--){
    const p=i/samples;
    const a=start+span*p;
    const ripple=Math.sin(a*3.1+seed)*.016+Math.sin(a*7.3-seed*1.6)*.009;
    const uneven=width*(.52+.2*Math.cos(p*Math.PI*2.4-seed));
    const k=scale+ripple-uneven;
    ctx.lineTo(Math.cos(a)*rx*k,Math.sin(a)*ry*k);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawDamageAura(){
  const s=active("damageAura");
  if(!s.level)return;
  const r=damageAuraRadius(s);
  const t=elapsed;
  const evolved=!!s.evolved;
  const levelTone=clamp(s.level/5,0,1);
  const pulse=1+Math.sin(t*1.7)*.018;
  const rx=r*1.16*pulse;
  const ry=r*.62*pulse;
  const fieldAlpha=evolved?.43:.3+levelTone*.065;
  ctx.save();
  ctx.translate(player.x,player.y+12);

  ctx.save();
  ctx.scale(1,ry/rx);
  const field=ctx.createRadialGradient(0,0,rx*.04,0,0,rx);
  if(evolved){
    field.addColorStop(0,"rgba(255,239,255,"+(fieldAlpha*.82)+")");
    field.addColorStop(.24,"rgba(232,76,255,"+(fieldAlpha*.72)+")");
    field.addColorStop(.62,"rgba(128,30,224,"+(fieldAlpha*.54)+")");
    field.addColorStop(.86,"rgba(67,17,137,"+(fieldAlpha*.3)+")");
    field.addColorStop(1,"rgba(45,8,105,0)");
  }else{
    field.addColorStop(0,"rgba(236,255,244,"+(fieldAlpha*.76)+")");
    field.addColorStop(.24,"rgba(112,255,210,"+(fieldAlpha*.68)+")");
    field.addColorStop(.62,"rgba(31,207,190,"+(fieldAlpha*.48)+")");
    field.addColorStop(.86,"rgba(20,163,180,"+(fieldAlpha*.25)+")");
    field.addColorStop(1,"rgba(20,163,180,0)");
  }
  ctx.fillStyle=field;
  ctx.beginPath();
  const points=72;
  for(let i=0;i<=points;i++){
    const a=i*Math.PI*2/points;
    const edge=1+Math.sin(a*3+t*.18)*.027+Math.sin(a*7-t*.24)*.015;
    const x=Math.cos(a)*rx*edge;
    const y=Math.sin(a)*rx*edge;
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.globalCompositeOperation="lighter";
  const waveCount=evolved?5:3+(s.level>=4?1:0);
  const waveSpeed=evolved?.46:.34;
  for(let i=0;i<waveCount;i++){
    const phase=(t*waveSpeed+i/waveCount)%1;
    const spread=.1+phase*.89;
    const fade=Math.sin(phase*Math.PI)*(1-phase*.28);
    const fragments=3+(i%2);
    const width=(evolved?.041:.033)*(1-phase*.42);
    for(let j=0;j<fragments;j++){
      const seed=i*2.47+j*1.83;
      const start=j*Math.PI*2/fragments+Math.sin(t*.19+seed)*.24;
      const span=.68+.28*Math.sin(seed+t*.27);
      const color=evolved?((i+j)%5===0?"#fff2ff":((i+j)%2?"#e84dff":"#9e62ff")):((i+j)%6===0?"#fff1ad":"#8fffe0");
      const alpha=fade*(evolved?.22:.11+levelTone*.02)*(.72+.28*Math.sin(t*.8+seed));
      drawAuraRibbon(rx,ry,spread,width,start,span,seed+t*.35,color,alpha,evolved?11:8);
    }
  }

  const edgeFlows=evolved?9:7;
  for(let i=0;i<edgeFlows;i++){
    const seed=i*2.76+1.2;
    const drift=t*(i%2?.045:-.038);
    const start=i*Math.PI*2/edgeFlows+drift+Math.sin(t*.31+seed)*.13;
    const span=.34+.3*(.5+.5*Math.sin(seed*1.7+t*.43));
    const scale=.965+.018*Math.sin(t*.52+seed);
    const width=.021+.007*Math.sin(t*.71+seed*1.4);
    const alpha=(evolved?.22:.12+levelTone*.02)*(.55+.45*Math.sin(t*.9+seed));
    const color=evolved?(i%4===0?"#fff0ff":"#cf48ff"):(i%5===0?"#fff0a8":"#70f5d5");
    drawAuraRibbon(rx,ry,scale,width,start,span,seed+t*.21,color,alpha,evolved?13:9);
  }
  ctx.restore();
}

function drawDamageAuraFront(){
  const s=active("damageAura");
  if(!s.level)return;
  const t=elapsed;
  const evolved=!!s.evolved;
  const levelTone=clamp(s.level/5,0,1);
  ctx.save();
  ctx.translate(player.x,player.y+10);
  ctx.globalCompositeOperation="lighter";

  const wisps=evolved?8:4+Math.ceil(s.level*.55);
  for(let i=0;i<wisps;i++){
    const seed=i*4.73+.8;
    const cycle=(t*(.2+(i%3)*.025)+i/wisps)%1;
    const side=Math.sin(seed)*(.55+levelTone*.18);
    const baseX=side*(26+s.level*2)+Math.sin(t*.8+seed)*3;
    const height=(22+s.level*3+(i%3)*7)*(evolved?1.22:1);
    const sway=Math.sin(t*1.35+seed)*7;
    const width=4+(i%2)*2+levelTone*1.5;
    const alpha=Math.sin(cycle*Math.PI)*(evolved?.2:.105+levelTone*.025);
    const wisp=ctx.createLinearGradient(0,7,0,-height);
    if(evolved){
      wisp.addColorStop(0,"rgba(102,24,214,0)");
      wisp.addColorStop(.3,"rgba(216,65,255,"+alpha+")");
      wisp.addColorStop(.72,"rgba(239,165,255,"+(alpha*.72)+")");
      wisp.addColorStop(1,"rgba(255,241,255,0)");
    }else{
      wisp.addColorStop(0,"rgba(58,226,193,0)");
      wisp.addColorStop(.3,"rgba(65,239,201,"+alpha+")");
      wisp.addColorStop(.72,"rgba(174,255,226,"+(alpha*.72)+")");
      wisp.addColorStop(1,"rgba(241,255,225,0)");
    }
    ctx.fillStyle=wisp;
    ctx.beginPath();
    ctx.moveTo(baseX-width,7);
    ctx.bezierCurveTo(baseX-width*1.25,-height*.28,baseX+sway-width*.35,-height*.62,baseX+sway,-height);
    ctx.bezierCurveTo(baseX+sway+width*.5,-height*.58,baseX+width*1.2,-height*.22,baseX+width,7);
    ctx.closePath();
    ctx.fill();
  }

  const motes=evolved?24:10+s.level*2;
  for(let i=0;i<motes;i++){
    const seed=i*2.917;
    const speed=.18+(i%4)*.027;
    const rise=(t*speed+(i*.618)%1)%1;
    const spread=18+((i*23)%19)+s.level*2;
    const x=Math.sin(seed+t*.22)*spread*(.55+rise*.35);
    const y=4-rise*(34+s.level*4+(i%3)*7);
    const alpha=Math.sin(rise*Math.PI)*(evolved?.62:.34+levelTone*.07);
    const size=(i%5===0?2.3:1.35)*(evolved?1.15:1);
    ctx.globalAlpha=alpha;
    ctx.fillStyle=evolved?(i%6===0?"#fff2ff":(i%3===0?"#ef6dff":"#c6a2ff")):(i%6===0?"#fff1b5":"#c9ffea");
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fill();
  }
  ctx.restore();
}

function drawHexShieldCell(cx,cy,size,fillAlpha,strokeAlpha,broken,radialAngle=0,depth=1,edge=0){
  const tx=Math.cos(radialAngle+Math.PI/2),ty=Math.sin(radialAngle+Math.PI/2);
  const rx=Math.cos(radialAngle),ry=Math.sin(radialAngle);
  const tangentScale=.86+.18*depth;
  const radialScale=.22+.58*depth;
  const skew=edge*.22;
  ctx.beginPath();
  for(let i=0;i<6;i++){
    const a=Math.PI/6+i*Math.PI/3;
    const lx=Math.cos(a)*size*tangentScale;
    const ly=Math.sin(a)*size*radialScale;
    const curve=ly*skew*(lx/Math.max(1,size));
    const x=cx+tx*lx+rx*(ly+curve);
    const y=cy+ty*lx*.92+ry*(ly+curve)*.92;
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();
  if(fillAlpha>0){
    ctx.globalAlpha=fillAlpha;
    ctx.fillStyle=broken?"rgba(255,132,174,.24)":"rgba(92,225,255,.14)";
    ctx.fill();
  }
  ctx.globalAlpha=strokeAlpha;
  ctx.strokeStyle=broken?"rgba(255,210,228,.86)":"rgba(162,246,255,.82)";
  ctx.lineWidth=.9+depth*.55;
  ctx.stroke();
}
function drawPlayerBarrier(){
  const s=active("barrier");
  if(!s.level||player.action==="clear"||bossVsCutscene.active)return;
  const max=player.skillBarrierMax||barrierMaxValue(s);
  const value=player.skillBarrier||0;
  const alive=value>0;
  const ratio=alive?clamp(value/max,0,1):0;
  const regen=alive?0:clamp(1-(player.barrierRegenT||0)/barrierRegenDelay(s),0,1);
  const visible=alive?ratio:regen;
  const r=45+(s.evolved?12:0)+s.level*2;
  ctx.save();
  ctx.translate(player.x,player.y-12);
  ctx.globalCompositeOperation="lighter";

  const domeAlpha=alive?.19+.18*ratio:.065+.15*regen;
  const body=ctx.createRadialGradient(-r*.36,-r*.48,2,0,0,r*1.18);
  body.addColorStop(0,"rgba(255,255,255,"+(domeAlpha*.68)+")");
  body.addColorStop(.22,"rgba(160,244,255,"+(domeAlpha*.38)+")");
  body.addColorStop(.52,"rgba(70,185,255,"+(domeAlpha*.2)+")");
  body.addColorStop(.78,"rgba(40,90,230,"+(domeAlpha*.08)+")");
  body.addColorStop(1,"rgba(40,70,180,0)");
  ctx.fillStyle=body;
  ctx.beginPath();ctx.ellipse(0,0,r,r*1.08,0,0,Math.PI*2);ctx.fill();

  ctx.save();
  ctx.beginPath();ctx.ellipse(0,0,r*.99,r*1.07,0,0,Math.PI*2);ctx.clip();
  const baseStroke=alive?.12+.3*ratio:.045+.22*regen;
  const baseFill=alive?.018+.06*ratio:.01+.045*regen;
  const spacing=.27;
  let idx=0;
  for(let row=-5;row<=5;row++){
    const ny=row*spacing*.86;
    const offset=(row&1)?spacing*.5:0;
    for(let col=-6;col<=6;col++){
      const nx=col*spacing+offset;
      const d2=nx*nx+ny*ny;
      if(d2>.99||d2<.34)continue;
      const d=Math.sqrt(d2);
      const z=Math.sqrt(Math.max(0,1-d2));
      const band=clamp((d-.58)/.42,0,1);
      if(band<=0)continue;
      const a=Math.atan2(ny,nx);
      const px=nx*r*.96;
      const py=ny*r*1.04;
      const missing=alive&&ratio<.38&&((idx*29+7)%17)<2;
      const broken=alive&&ratio<.72&&((idx*23)%13)<(ratio<.34?4:2);
      idx++;
      if(missing)continue;
      const edge=Math.pow(band,.82);
      const size=(10.5+(s.evolved?1.2:0))*(.62+.38*z)*(.92+.16*edge);
      const fade=edge*(.58+.42*(1-z));
      const fill=baseFill*fade;
      const stroke=baseStroke*fade*(.82+.18*Math.sin(a*3));
      drawHexShieldCell(px,py,size,fill,stroke,broken,a,z,edge);
      if(broken){
        ctx.globalAlpha=(.76-ratio)*.38*fade;
        ctx.strokeStyle="rgba(255,245,255,.88)";
        ctx.lineWidth=1;
        const ca=Math.cos(a),sa=Math.sin(a);
        ctx.beginPath();
        ctx.moveTo(px-ca*size*.18,py-sa*size*.15);
        ctx.lineTo(px+ca*size*.12-sa*size*.12,py+sa*size*.12+ca*size*.12);
        ctx.lineTo(px+ca*size*.34,py+sa*size*.28);
        ctx.stroke();
      }
    }
  }
  ctx.restore();

  const rimAlpha=alive?.5+.34*ratio:.22+.36*regen;
  ctx.globalAlpha=rimAlpha;
  ctx.strokeStyle=alive?(s.evolved?"rgba(190,255,255,.98)":"rgba(135,235,255,.96)"):"rgba(158,233,255,.75)";
  ctx.lineWidth=s.evolved?3.4:2.8;
  ctx.setLineDash(alive?[]:[7,5]);
  ctx.beginPath();ctx.ellipse(0,0,r*1.02,r*1.1,0,alive?0:-Math.PI/2,alive?Math.PI*2:-Math.PI/2+Math.PI*2*regen);ctx.stroke();
  ctx.setLineDash([]);

  ctx.globalCompositeOperation="source-over";
  ctx.globalAlpha=(alive?.34:.18)*visible;
  const shine=ctx.createLinearGradient(-r*.8,-r*.95,r*.25,-r*.25);
  shine.addColorStop(0,"rgba(255,255,255,0)");
  shine.addColorStop(.46,"rgba(255,255,255,.58)");
  shine.addColorStop(1,"rgba(255,255,255,0)");
  ctx.strokeStyle=shine;
  ctx.lineWidth=3.2;
  ctx.beginPath();ctx.arc(-r*.18,-r*.34,r*.48,Math.PI*1.04,Math.PI*1.76);ctx.stroke();
  ctx.globalAlpha=(alive?.14:.07)*visible;
  ctx.fillStyle="rgba(255,255,255,.28)";
  ctx.beginPath();ctx.ellipse(-r*.22,-r*.32,r*.28,r*.13,-.58,0,Math.PI*2);ctx.fill();
  ctx.globalCompositeOperation="lighter";
  ctx.globalAlpha=(alive?.16:.08)*visible;
  ctx.strokeStyle="rgba(60,135,255,.62)";
  ctx.lineWidth=5;
  ctx.beginPath();ctx.ellipse(0,r*.12,r*.92,r*.92,0,Math.PI*.08,Math.PI*.92);ctx.stroke();
  ctx.globalCompositeOperation="source-over";
  ctx.restore();
}

function drawOrbitShields(){
  const s=active("orbitShield");
  if(!s.level)return;
  ensureOrbitShieldState(s);
  const slots=orbitShieldPositions(s);
  if(!slots.length)return;
  const sheet=s.evolved?orbitShieldEvolvedSprite:orbitShieldSprite;
  const frame=Math.floor(elapsed*(s.evolved?12:9))%4;
  const size=s.evolved?42:34;
  for(const o of slots){
    ctx.save();
    ctx.translate(o.x,o.y);
    ctx.rotate(o.a+Math.PI/2+Math.sin(elapsed*6)*.12);
    ctx.imageSmoothingEnabled=false;
    if(sheet.complete&&sheet.naturalWidth){
      const fw=Math.floor(sheet.naturalWidth/4),fh=sheet.naturalHeight;
      ctx.drawImage(sheet,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
    }else{
      ctx.fillStyle=s.evolved?"#8fffff":"#8fbfff";
      ctx.beginPath();ctx.moveTo(0,-size*.48);ctx.lineTo(size*.38,-size*.12);ctx.lineTo(size*.25,size*.42);ctx.lineTo(-size*.25,size*.42);ctx.lineTo(-size*.38,-size*.12);ctx.closePath();ctx.fill();
      ctx.strokeStyle="#ffffff";ctx.lineWidth=2;ctx.stroke();
    }
    ctx.restore();
  }
}

function drawDroneBots(){
  const s=active("droneBot");
  if(!s.level)return;
  const target=nearest(780);
  const bots=droneBotSlots(s.level,target);
  const evolveFx=effects.find(e=>e.kind==="droneEvolve");
  for(const bot of bots){
    ctx.save();
    ctx.translate(bot.x,bot.y);
    ctx.imageSmoothingEnabled=false;
    const bob=Math.sin(elapsed*5+bot.x*.01)*2.5;
    const evolved=!!s.evolved;
    const row=droneRowFromVector(bot.aim);
    const col=Math.floor(elapsed*8)%4;
    const drawBotSheet=(sheet,size,alpha=1,scale=1)=>{
      if(!sheet.complete||!sheet.naturalWidth)return false;
      const fw=Math.floor(sheet.naturalWidth/4);
      const fh=Math.floor(sheet.naturalHeight/4);
      ctx.save();
      ctx.globalAlpha*=alpha;
      ctx.scale(scale,scale);
      ctx.drawImage(sheet,fw*col,fh*row,fw,fh,-size/2,-size/2-2+bob,size,size);
      ctx.restore();
      return true;
    };
    if(evolveFx&&laserBotEvolvedSprite.complete&&laserBotEvolvedSprite.naturalWidth&&laserBotSprite.complete&&laserBotSprite.naturalWidth){
      const p=clamp(1-evolveFx.t/evolveFx.maxT,0,1);
      const flash=Math.sin(p*Math.PI);
      drawBotSheet(laserBotSprite,68,1-p*.92,1+.06*flash);
      ctx.globalCompositeOperation="lighter";
      drawBotSheet(laserBotEvolvedSprite,82,clamp((p-.18)/.72,0,1),.82+p*.18+.08*flash);
      ctx.globalCompositeOperation="source-over";
    }else{
      const sheet=evolved&&laserBotEvolvedSprite.complete&&laserBotEvolvedSprite.naturalWidth?laserBotEvolvedSprite:laserBotSprite;
      const size=evolved?82:68;
      if(!drawBotSheet(sheet,size)){
        ctx.fillStyle="#1b2732";
        ctx.beginPath();ctx.ellipse(0,bob,22,14,0,0,Math.PI*2);ctx.fill();
        ctx.fillStyle="#60efff";
        ctx.beginPath();ctx.arc(0,bob,6,0,Math.PI*2);ctx.fill();
      }
    }
    ctx.restore();
  }
}

function drawDragonCompanion(){
  const s=active("littleDragon");
  if(!s.level)return;
  const target=nearest(860);
  const evolved=!!s.evolved;
  const dragon=dragonSlot(s.level,evolved,target);
  const row=dragonRowFromVector(dragon.aim);
  const adultSheet=row===2?adultDragonRightSprite:adultDragonSprite;
  const sheet=evolved?adultSheet:babyDragonSprite;
  const evolveFx=effects.find(e=>e.kind==="dragonEvolve");
  ctx.save();
  ctx.translate(dragon.x,dragon.y);
  ctx.imageSmoothingEnabled=false;
  const bob=Math.sin(elapsed*(evolved?3.2:4.4))*2.5;
  const drawDragonSheet=(src,size,alpha=1,scale=1)=>{
    if(!src.complete||!src.naturalWidth)return false;
    const rightOnly=src===adultDragonRightSprite;
    const fw=src.naturalWidth/4;
    const fh=src.naturalHeight/(rightOnly?1:4);
    const col=Math.floor(elapsed*(evolved?6:8))%4;
    const sourceRow=rightOnly?0:row;
    const draw=size*scale;
    ctx.save();
    ctx.globalAlpha*=alpha;
    ctx.drawImage(src,fw*col,fh*sourceRow,fw,fh,-draw/2,-draw/2+bob,draw,draw);
    ctx.restore();
    return true;
  };
  if(evolveFx&&evolved&&babyDragonSprite.complete&&adultSheet.complete){
    const p=clamp(1-evolveFx.t/evolveFx.maxT,0,1);
    const flash=Math.sin(p*Math.PI);
    ctx.save();
    ctx.globalCompositeOperation="lighter";
    ctx.globalAlpha=.24+.5*flash;
    ctx.strokeStyle="#fff4a8";
    ctx.lineWidth=3;
    for(let i=0;i<3;i++){
      const a=elapsed*5+i*Math.PI*2/3;
      ctx.beginPath();
      ctx.ellipse(Math.cos(a)*10,Math.sin(a)*7+bob,32+flash*26+i*7,16+flash*16+i*3,a,0,Math.PI*2);
      ctx.stroke();
    }
    ctx.restore();
    drawDragonSheet(babyDragonSprite,52,1-p,.9+flash*.1);
    ctx.globalCompositeOperation="lighter";
    drawDragonSheet(adultSheet,98,clamp((p-.18)/.72,0,1),.72+p*.28+flash*.08);
    ctx.globalCompositeOperation="source-over";
  }else if(sheet.complete&&sheet.naturalWidth){
    drawDragonSheet(sheet,evolved?98:52,1,1);
  }else{
    ctx.fillStyle=evolved?"#9b2a16":"#e65a24";
    ctx.beginPath();ctx.ellipse(0,bob,evolved?28:16,evolved?18:10,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#ffd16b";ctx.beginPath();ctx.arc(10,bob,5,0,Math.PI*2);ctx.fill();
  }
  ctx.restore();
}

function drawIceBirdCompanion(){
  const s=active("freezerBird");
  if(!s.level)return;
  const target=nearest(920);
  const evolved=!!s.evolved;
  const bird=iceBirdSlot(s.level,evolved,target);
  const sheet=evolved?iceBirdEvolvedSprite:iceBirdSprite;
  ctx.save();
  ctx.translate(bird.x,bird.y);
  ctx.imageSmoothingEnabled=false;
  const bob=Math.sin(elapsed*(evolved?3.6:4.8))*2.4;
  if(sheet.complete&&sheet.naturalWidth){
    const fw=sheet.naturalWidth/4;
    const fh=sheet.naturalHeight/4;
    const col=Math.floor(elapsed*(evolved?7:9))%4;
    const row=dragonRowFromVector(bird.aim);
    const size=evolved?88:54;
    ctx.drawImage(sheet,fw*col,fh*row,fw,fh,-size/2,-size/2+bob,size,size);
  }else{
    ctx.fillStyle=evolved?"#d8fbff":"#a7edff";
    ctx.beginPath();ctx.ellipse(0,bob,evolved?24:16,evolved?16:11,0,0,Math.PI*2);ctx.fill();
  }
  ctx.restore();
}

function drawShot(p){
  if(p.delay>0)return;
  if(p.kind==="golf"){drawGolfClub(p);return}
  if(p.kind==="seunggwanIronBall"){
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate((p.spin||0));
    ctx.imageSmoothingEnabled=false;
    if(seunggwanIronBallSprite.complete&&seunggwanIronBallSprite.naturalWidth){
      const fw=Math.floor(seunggwanIronBallSprite.naturalWidth/8),fh=seunggwanIronBallSprite.naturalHeight;
      const frame=Math.floor((p.age||0)*14)%4;
      const size=44+(p.r||18)*1.1;
      ctx.drawImage(seunggwanIronBallSprite,fw*frame,0,fw,fh,-size/2,-size,size,size*2);
    }else{
      ctx.fillStyle="#3d3c42";
      ctx.beginPath();ctx.arc(0,0,p.r||18,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
    return;
  }
  if(p.kind==="jiinHeart"){
    const a=Math.atan2(p.vy,p.vx);
    const pulse=1+Math.sin((p.age||0)*18+(p.wobble||0))*.1;
    ctx.save();
    ctx.globalAlpha=p.fading?clamp((p.fadeT||0)/.18,0,1):1;
    ctx.translate(p.x,p.y);
    ctx.rotate(a+Math.PI/2);
    ctx.scale(pulse*.62,pulse*.62);
    ctx.shadowColor="#ff7ab6";
    ctx.shadowBlur=8;
    ctx.fillStyle="#ff6fa8";
    ctx.beginPath();
    ctx.moveTo(0,9);
    ctx.bezierCurveTo(-18,-6,-8,-20,0,-11);
    ctx.bezierCurveTo(8,-20,18,-6,0,9);
    ctx.fill();
    ctx.shadowBlur=0;
    ctx.strokeStyle="#fff1f7";
    ctx.lineWidth=2;
    ctx.stroke();
    ctx.restore();
    return;
  }
  if(p.kind==="hominBubble"){
    ctx.save();ctx.translate(p.x,p.y);
    drawTranslucentBubble(0,0,p.r||24,p.color||"#ff8fd7",.72,p.wobble||0);
    ctx.restore();
    return;
  }
  if(p.kind==="hominBubbleShard"){
    ctx.save();ctx.translate(p.x,p.y);
    drawTranslucentBubble(0,0,p.r||8,p.color||"#8fe9ff",.82,p.wobble||0);
    ctx.restore();
    return;
  }  if(p.kind==="droneLaser"){
    const a=Math.atan2(p.vy,p.vx);
    const flicker=.85+Math.sin(elapsed*48+p.x*.03)*.15;
    const len=16+p.r*1.35;
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(a);
    ctx.globalAlpha=1;
    ctx.shadowColor="#5df8ff";
    ctx.shadowBlur=5*flicker;
    const grad=ctx.createLinearGradient(-8,0,len,0);
    grad.addColorStop(0,"rgba(86,255,255,.1)");
    grad.addColorStop(.18,"rgba(86,255,255,.95)");
    grad.addColorStop(.72,"rgba(170,255,255,.95)");
    grad.addColorStop(1,"rgba(255,255,255,.05)");
    ctx.strokeStyle=grad;
    ctx.lineCap="round";
    ctx.lineWidth=3.2*flicker;
    ctx.beginPath();
    ctx.moveTo(-7,0);
    ctx.lineTo(len,0);
    ctx.stroke();
    ctx.shadowBlur=3;
    ctx.strokeStyle="rgba(255,255,255,.98)";
    ctx.lineWidth=1.4;
    ctx.beginPath();
    ctx.moveTo(-4,0);
    ctx.lineTo(len-3,0);
    ctx.stroke();
    ctx.shadowBlur=0;
    ctx.fillStyle="rgba(116,245,255,.95)";
    ctx.beginPath();
    ctx.arc(0,0,3.2*flicker,0,Math.PI*2);
    ctx.fill();
    ctx.restore();
    return;
  }
  if(p.kind==="iceBall"){
    const a=Math.atan2(p.vy,p.vx);
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(a);
    ctx.imageSmoothingEnabled=false;
    if(iceBallProjectileSprite.complete&&iceBallProjectileSprite.naturalWidth){
      const fw=iceBallProjectileSprite.naturalWidth/4,fh=iceBallProjectileSprite.naturalHeight;
      const frame=Math.floor((p.age||0)*14)%4;
      const size=28+p.r*2.15;
      ctx.drawImage(iceBallProjectileSprite,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
    }else{
      ctx.fillStyle="#8fe7ff";ctx.beginPath();ctx.arc(0,0,p.r,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
    return;
  }
  if(p.kind==="dragonMeteorBall"){
    const a=Math.atan2(p.vy,p.vx);
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(a-Math.PI/2);
    ctx.imageSmoothingEnabled=false;
    if(dragonMeteorSprite.complete&&dragonMeteorSprite.naturalWidth){
      const fw=dragonMeteorSprite.naturalWidth/4,fh=dragonMeteorSprite.naturalHeight;
      const frame=Math.floor((p.age||0)*14)%4;
      const drawH=128,drawW=drawH*(fw/fh);
      ctx.drawImage(dragonMeteorSprite,fw*frame,0,fw,fh,-drawW/2,-drawH/2,drawW,drawH);
    }else{
      ctx.fillStyle="#ff7a2c";ctx.beginPath();ctx.ellipse(0,0,18,38,0,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();return;
  }
  if(p.kind==="dragonFireball"){
    const a=Math.atan2(p.vy,p.vx);
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(a);
    ctx.imageSmoothingEnabled=false;
    if(dragonFireballSprite.complete&&dragonFireballSprite.naturalWidth){
      const fw=Math.floor(dragonFireballSprite.naturalWidth/4);
      const fh=dragonFireballSprite.naturalHeight;
      const frame=Math.floor((elapsed*12+(p.age||0)*8))%4;
      const drawH=28+(p.level||1)*12.8;
      const drawW=drawH*(fw/fh);
      ctx.drawImage(dragonFireballSprite,fw*frame,0,fw,fh,-drawW/2,-drawH/2,drawW,drawH);
    }else{
      ctx.fillStyle="#ff8a32";ctx.beginPath();ctx.arc(0,0,p.r,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
    return;
  }
  ctx.fillStyle=p.color;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(Math.atan2(p.vy,p.vx));ctx.fillRect(-p.r,-p.r/2,p.r*3,p.r);ctx.restore()
}

function drawBossShot(p){
  ctx.save();
  ctx.translate(p.x,p.y);
  ctx.imageSmoothingEnabled=false;
  if(p.kind==="pigeonDropping"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(elapsed*14+p.spin)*.14);
    if(pigeonDroppingSprite.complete&&pigeonDroppingSprite.naturalWidth){
      const frames=4,fw=pigeonDroppingSprite.naturalWidth/frames,fh=pigeonDroppingSprite.naturalHeight;
      const frame=Math.floor(elapsed*12+p.spin)%frames;
      ctx.drawImage(pigeonDroppingSprite,fw*frame,0,fw,fh,-23,-16,46,32);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#f4f2e9";ctx.beginPath();ctx.ellipse(0,0,9,6,0,0,Math.PI*2);ctx.fill();
    ctx.restore();
    return;
  }
  if(p.kind==="paintStroke"){
    ctx.rotate(Math.atan2(p.vy,p.vx));ctx.fillStyle=p.color||"#f04f88";
    ctx.globalAlpha=.3;for(let i=1;i<=3;i++){ctx.beginPath();ctx.ellipse(-i*9,Math.sin(p.spin+i)*4,7-i,3,0,0,Math.PI*2);ctx.fill()}
    ctx.globalAlpha=1;ctx.beginPath();ctx.moveTo(-15,-5);ctx.quadraticCurveTo(0,-11,18,-3);ctx.quadraticCurveTo(8,9,-14,6);ctx.closePath();ctx.fill();
    ctx.fillStyle="#fff4dc";ctx.globalAlpha=.55;ctx.fillRect(-8,-2,14,2);ctx.restore();return;
  }
  if(p.kind==="colorPencil"){
    ctx.rotate(Math.atan2(p.vy,p.vx));ctx.fillStyle=p.color||"#3f9fdb";ctx.fillRect(-17,-4,27,8);
    ctx.fillStyle="#f0d0a0";ctx.beginPath();ctx.moveTo(10,-4);ctx.lineTo(20,0);ctx.lineTo(10,4);ctx.closePath();ctx.fill();
    ctx.fillStyle=p.color||"#3f9fdb";ctx.beginPath();ctx.moveTo(17,-1.5);ctx.lineTo(21,0);ctx.lineTo(17,1.5);ctx.closePath();ctx.fill();
    ctx.fillStyle="#f6e7c8";ctx.fillRect(-12,-1,17,2);ctx.restore();return;
  }
  if(p.kind==="electricPlug"||p.kind==="breakerBolt"){
    ctx.rotate(Math.atan2(p.vy,p.vx));ctx.fillStyle=p.kind==="breakerBolt"?"#ffe24a":"#55d9ff";
    ctx.beginPath();ctx.arc(0,0,p.r,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#f8fbff";ctx.lineWidth=2;ctx.stroke();
    ctx.fillRect(-p.r-7,-2,8,4);ctx.fillRect(p.r-1,-5,5,3);ctx.fillRect(p.r-1,2,5,3);ctx.restore();return;
  }
  if(p.kind==="bb"){
    const a=Math.atan2(p.vy,p.vx);
    ctx.rotate(a);
    ctx.fillStyle="#ffe66a";
    ctx.beginPath();
    ctx.arc(0,0,4,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle="rgba(255,255,255,.85)";
    ctx.fillRect(-10,-1,8,2);
    ctx.strokeStyle="#8a5a17";
    ctx.lineWidth=1.5;
    ctx.stroke();
    ctx.restore();
    return;
  }
  if(p.kind==="emotionTear"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(elapsed*12+p.spin)*.12);
    if(emotionTearSprite.complete&&emotionTearSprite.naturalWidth){
      const frames=4,fw=emotionTearSprite.naturalWidth/frames,fh=emotionTearSprite.naturalHeight;
      const frame=Math.floor(elapsed*12+p.spin)%frames;
      ctx.drawImage(emotionTearSprite,fw*frame,0,fw,fh,-15,-15,30,30);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#bfefff";
    ctx.beginPath();ctx.arc(0,0,9,0,Math.PI*2);ctx.fill();
    ctx.restore();
    return;
  }
  if(p.kind==="dumbbellBoomerang"){
    ctx.rotate(p.spin||0);
    if(gymDumbbellSprite.complete&&gymDumbbellSprite.naturalWidth){
      const frames=4,fw=gymDumbbellSprite.naturalWidth/frames,fh=gymDumbbellSprite.naturalHeight;
      const frame=Math.floor(elapsed*14+p.spin)%frames;
      ctx.drawImage(gymDumbbellSprite,fw*frame,0,fw,fh,-28,-28,56,56);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#2d3138";ctx.fillRect(-24,-8,48,16);
    ctx.restore();
    return;
  }
  if(p.kind==="coupon"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(p.spin)*.12);
    if(bossCouponSprite.complete&&bossCouponSprite.naturalWidth){
      ctx.drawImage(bossCouponSprite,-26,-17,52,34);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#ffe7a6";
    ctx.fillRect(-18,-10,32,18);
    ctx.strokeStyle="#6a4424";
    ctx.strokeRect(-18,-10,32,18);
    ctx.restore();
    return;
  }
  if(p.kind==="geodeureok"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(elapsed*12+p.spin)*.05);
    const s=p.scale||1;
    ctx.scale(s,s);
    if(enemyGeodeureokSprite.complete&&enemyGeodeureokSprite.naturalWidth){
      ctx.drawImage(enemyGeodeureokSprite,-34,-18,98,38);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#fff6d0";
    ctx.strokeStyle="#102844";
    ctx.lineWidth=4;
    ctx.beginPath();
    ctx.moveTo(-24,-12);ctx.lineTo(36,-12);ctx.lineTo(50,0);ctx.lineTo(36,12);ctx.lineTo(-24,12);ctx.closePath();
    ctx.fill();ctx.stroke();
    ctx.restore();
    return;
  }
  if(p.kind==="resignationEnvelope"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.PI/2+Math.sin(elapsed*14+p.spin)*.08);
    ctx.fillStyle="#fff6df";
    ctx.strokeStyle="#49342f";
    ctx.lineWidth=2;
    ctx.fillRect(-8,-18,16,36);
    ctx.strokeRect(-8,-18,16,36);
    ctx.fillStyle="#f2dcc4";
    ctx.fillRect(-6,-16,12,4);
    ctx.fillStyle="#261b1b";
    ctx.font="bold 8px sans-serif";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.fillText("사",0,-10);
    ctx.fillText("직",0,2);
    ctx.fillText("서",0,14);
    ctx.restore();
    return;
  }
  if(p.kind==="box"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(elapsed*12+p.spin)*.18);
    if(enemyBoxProjectileSprite.complete&&enemyBoxProjectileSprite.naturalWidth){
      ctx.drawImage(enemyBoxProjectileSprite,-15,-15,30,30);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#b88248";
    ctx.fillRect(-11,-10,22,20);
    ctx.strokeStyle="#5c3b22";
    ctx.strokeRect(-11,-10,22,20);
    ctx.fillStyle="#e8d1a5";
    ctx.fillRect(-1,-10,3,20);
    ctx.restore();
    return;
  }
  if(p.kind==="gossip"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(elapsed*14+p.spin)*.12);
    if(gossipProjectileSprite.complete&&gossipProjectileSprite.naturalWidth){
      ctx.drawImage(gossipProjectileSprite,-26,-26,52,52);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#f7a4ff";
    ctx.beginPath();
    ctx.arc(0,0,18,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle="#7a2f95";
    ctx.fillRect(-8,-2,16,4);
    ctx.restore();
    return;
  }
  if(p.kind==="cultTalisman"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(elapsed*16+p.spin)*.08);
    if(cultTalismanSprite.complete&&cultTalismanSprite.naturalWidth){
      ctx.drawImage(cultTalismanSprite,-28,-15,56,30);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#ffe9a6";
    ctx.fillRect(-18,-9,36,18);
    ctx.strokeStyle="#5b233d";
    ctx.lineWidth=3;
    ctx.strokeRect(-18,-9,36,18);
    ctx.restore();
    return;
  }
  if(p.kind==="parkElectricArc"&&parkSejunElectricFxSprite.complete&&parkSejunElectricFxSprite.naturalWidth){
    const fw=parkSejunElectricFxSprite.naturalWidth/4,fh=parkSejunElectricFxSprite.naturalHeight/2,frame=Math.floor(elapsed*14+p.spin)%4;ctx.rotate(Math.atan2(p.vy,p.vx));ctx.drawImage(parkSejunElectricFxSprite,fw*frame,0,fw,fh,-30,-22,60,44);ctx.restore();return;
  }
  if(p.kind==="parkElectricHeat"&&parkSejunElectricFxSprite.complete&&parkSejunElectricFxSprite.naturalWidth){
    const fw=parkSejunElectricFxSprite.naturalWidth/4,fh=parkSejunElectricFxSprite.naturalHeight/2,frame=Math.floor(elapsed*12+p.spin)%4,settle=p.ringRadius?clamp((p.travel||0)/p.ringRadius,0,1):1,size=42+settle*20;ctx.drawImage(parkSejunElectricFxSprite,fw*frame,fh,fw,fh,-size/2,-size/2,size,size);ctx.restore();return;
  }
  if(p.kind==="heatCloud"){
    const a=p.angle??Math.atan2(p.vy,p.vx);
    const settle=p.ringRadius?clamp((p.travel||0)/p.ringRadius,0,1):1;
    const wobble=Math.sin(elapsed*12+p.spin)*(.12-.06*settle);
    const scale=.74+settle*.32+Math.sin(elapsed*10+p.spin)*.025;
    ctx.rotate(a+Math.PI/2+wobble);
    ctx.scale(scale,scale);
    if(bossHeatCloudSprite.complete&&bossHeatCloudSprite.naturalWidth){
      ctx.drawImage(bossHeatCloudSprite,-30,-34,60,68);
      ctx.restore();
      return;
    }
    ctx.strokeStyle="#f8ffff";
    ctx.lineWidth=8;
    ctx.beginPath();ctx.arc(0,4,21,-Math.PI*.78,-Math.PI*.18);ctx.stroke();
    ctx.restore();
    return;
  }
  if(p.kind==="nabul"){
    ctx.rotate(Math.atan2(p.vy,p.vx)+Math.sin(elapsed*18+p.spin)*.08);
    if(bossNabulSprite.complete&&bossNabulSprite.naturalWidth){
      ctx.drawImage(bossNabulSprite,-30,-18,60,36);
      ctx.restore();
      return;
    }
    ctx.fillStyle="#fff0c8";
    ctx.fillRect(-20,-10,32,20);
    ctx.fillStyle="#ff6b8a";
    ctx.fillRect(-9,-7,18,14);
    ctx.strokeStyle="#30131a";
    ctx.lineWidth=3;
    ctx.strokeRect(-20,-10,32,20);
    ctx.restore();
    return;
  }
  ctx.rotate(p.spin);
  if(bossStampSprite.complete&&bossStampSprite.naturalWidth){
    const frames=8,fw=bossStampSprite.naturalWidth/frames,fh=bossStampSprite.naturalHeight;
    const frame=Math.floor((p.spin*1.4)%frames+frames)%frames;
    ctx.drawImage(bossStampSprite,fw*frame,0,fw,fh,-22,-22,44,44);
    ctx.restore();
    return;
  }
  ctx.fillStyle="#7d2a1c";
  ctx.fillRect(-11,-9,22,18);
  ctx.fillStyle="#b84d36";
  ctx.fillRect(-8,-7,16,14);
  ctx.fillStyle="#3a1d18";
  ctx.fillRect(-6,-18,12,11);
  ctx.fillStyle="#7d4a2c";
  ctx.fillRect(-4,-25,8,8);
  ctx.strokeStyle="#ffdf9a";
  ctx.lineWidth=2;
  ctx.strokeRect(-10,-8,20,16);
  ctx.restore();
}

function drawGolfClub(p){
  if(p.phase==="hold"&&golfClubSpinSprite.complete&&golfClubSpinSprite.naturalWidth){
    const frames=8;
    const fw=golfClubSpinSprite.naturalWidth/frames;
    const fh=golfClubSpinSprite.naturalHeight;
    const frame=Math.floor((p.holdAge||0)*20)%frames;
    const size=92+active("golf").level*4;
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.imageSmoothingEnabled=false;
    ctx.globalAlpha=.96;
    ctx.drawImage(golfClubSpinSprite,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
    ctx.restore();
    return;
  }
  if(golfClubSprite.complete&&golfClubSprite.naturalWidth){
    const frames=8;
    const fw=golfClubSprite.naturalWidth/frames;
    const fh=golfClubSprite.naturalHeight;
    const frame=Math.floor((p.age||0)*(p.phase==="hold"?28:18))%frames;
    const size=p.phase==="hold"?74:(p.returning?70:66);
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(Math.atan2(p.vy,p.vx)*(p.phase==="hold"?.08:.18));
    ctx.imageSmoothingEnabled=false;
    ctx.globalAlpha=p.returning?.98:.92;
    ctx.drawImage(golfClubSprite,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
    ctx.restore();
    return;
  }
  const spin=(p.age||0)*14*(p.returning?-1:1);
  ctx.save();
  ctx.translate(p.x,p.y);
  ctx.rotate(Math.atan2(p.vy,p.vx)+spin);
  ctx.imageSmoothingEnabled=false;
  ctx.globalAlpha=.24;
  ctx.fillStyle=p.returning?"#7dd8ff":"#ffffff";
  ctx.fillRect(-28,-2,52,4);
  ctx.globalAlpha=1;
  ctx.fillStyle="#10161d";
  ctx.fillRect(-27,-4,38,8);
  ctx.fillStyle="#dce5ed";
  ctx.fillRect(-25,-2,36,4);
  ctx.fillStyle="#2a3440";
  ctx.fillRect(-31,-5,8,10);
  ctx.fillStyle="#97a4af";
  ctx.fillRect(8,-7,15,10);
  ctx.fillRect(19,-11,9,8);
  ctx.fillStyle="#f3f7fb";
  ctx.fillRect(11,-5,9,3);
  ctx.fillStyle="#5ccbe8";
  ctx.fillRect(20,-9,4,3);
  ctx.restore();
}
function drawGem(g){
  if(g.kind==="heal"){
    const bob=Math.sin(elapsed*5+g.x*.01)*2;
    if(sojuHealSprite.complete&&sojuHealSprite.naturalWidth){
      ctx.save();
      ctx.imageSmoothingEnabled=false;
      ctx.drawImage(sojuHealSprite,g.x-18,g.y-24+bob,36,48);
      ctx.restore();
    }else{
      ctx.fillStyle="#54d88a";
      ctx.fillRect(g.x-7,g.y-20+bob,14,30);
      ctx.fillStyle="#eef7f0";
      ctx.fillRect(g.x-6,g.y-5+bob,12,9);
      ctx.strokeStyle="#1f5d3b";
      ctx.lineWidth=2;
      ctx.strokeRect(g.x-7,g.y-20+bob,14,30);
    }
    ctx.save();
    ctx.globalAlpha=.45+.2*Math.sin(elapsed*7);
    ctx.strokeStyle="#8dffc2";
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.arc(g.x,g.y+bob,18,0,Math.PI*2);
    ctx.stroke();
    ctx.restore();
    return;
  }
  if(g.kind==="powerMagnet"||g.kind==="dynamite"){
    const bob=Math.sin(elapsed*5+g.x*.01)*2;
    const frame=g.kind==="powerMagnet"?0:1;
    ctx.save();
    ctx.imageSmoothingEnabled=false;
    if(powerPickupSprite.complete&&powerPickupSprite.naturalWidth){
      const fw=powerPickupSprite.naturalWidth/2,fh=powerPickupSprite.naturalHeight;
      ctx.drawImage(powerPickupSprite,fw*frame,0,fw,fh,g.x-21,g.y-21+bob,42,42);
    }else{
      ctx.fillStyle=g.kind==="powerMagnet"?"#e94a4a":"#d84030";
      ctx.beginPath();ctx.arc(g.x,g.y+bob,15,0,Math.PI*2);ctx.fill();
    }
    ctx.globalAlpha=.38+.2*Math.sin(elapsed*8);
    ctx.strokeStyle=g.kind==="powerMagnet"?"#8fefff":"#ffd45a";
    ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(g.x,g.y+bob,22,0,Math.PI*2);ctx.stroke();
    ctx.restore();
    return;
  }
  const style={
    copper:{fill:"#b87945",mid:"#7b4a2b",edge:"#4a3323",shine:"#e0b985",shape:"chip"},
    cyan:{fill:"#7cf6ff",mid:"#2fc8f0",edge:"#167a96",shine:"#e9ffff",shape:"chip"},
    blue:{fill:"#59d9ff",mid:"#278edb",edge:"#1d5f93",shine:"#dff8ff",shape:"diamond"},
    green:{fill:"#72f6a2",mid:"#31b96b",edge:"#1d7448",shine:"#e8fff0",shape:"hex"},
    purple:{fill:"#c68cff",mid:"#7c49d8",edge:"#46308e",shine:"#f5e8ff",shape:"tall"},
    gold:{fill:"#ffd84d",mid:"#f0a830",edge:"#8e5f10",shine:"#fff6b8",shape:"star"}
  }[g.kind]||{fill:"#59d9ff",mid:"#278edb",edge:"#1d5f93",shine:"#dff8ff",shape:"diamond"};
  const bob=Math.sin(elapsed*5+g.x*.01)*1.2;
  const x=Math.round(g.x),y=Math.round(g.y+bob),r=g.r||6;
  ctx.save();
  ctx.imageSmoothingEnabled=false;
  ctx.lineWidth=2;
  ctx.strokeStyle=style.edge;
  const poly=(pts)=>{ctx.beginPath();ctx.moveTo(x+pts[0][0],y+pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(x+pts[i][0],y+pts[i][1]);ctx.closePath();ctx.fill();ctx.stroke()};
  ctx.fillStyle=style.fill;
  if(style.shape==="chip"){
    poly([[0,-r-1],[r+1,-2],[r-1,r],[-r+1,r],[-r-1,-2]]);
  }else if(style.shape==="hex"){
    poly([[0,-r-2],[r+2,-r*.35],[r+1,r*.55],[0,r+2],[-r-1,r*.55],[-r-2,-r*.35]]);
  }else if(style.shape==="tall"){
    poly([[0,-r-4],[r+2,-1],[r-1,r+4],[-r+1,r+4],[-r-2,-1]]);
  }else if(style.shape==="star"){
    poly([[0,-r-4],[r*.45,-r*.25],[r+4,0],[r*.45,r*.35],[0,r+4],[-r*.45,r*.35],[-r-4,0],[-r*.45,-r*.25]]);
  }else{
    poly([[0,-r-2],[r+1,0],[0,r+2],[-r-1,0]]);
  }
  ctx.fillStyle=style.mid;
  ctx.globalAlpha=.62;
  ctx.beginPath();
  ctx.moveTo(x,y-r*.55);
  ctx.lineTo(x+r*.45,y);
  ctx.lineTo(x,y+r*.65);
  ctx.lineTo(x-r*.35,y);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha=1;
  ctx.fillStyle=style.shine;
  ctx.fillRect(x-2,y-r+1,3,3);
  if(g.kind==="gold"||g.kind==="purple"){
    ctx.globalAlpha=.35+.18*Math.sin(elapsed*7);
    ctx.strokeStyle=style.fill;
    ctx.beginPath();ctx.arc(x,y,r+7,0,Math.PI*2);ctx.stroke();
  }
  ctx.restore();
}
function drawEffect(e){
  ctx.save();ctx.globalAlpha=Math.max(.15,e.t);
  if(e.delay>0){ctx.restore();return}
  if(e.kind==="hitSpark"){
    const p=clamp(1-e.t/e.maxT,0,1);
    const fade=(1-p)*(1-p);
    const radius=(e.r||24)*(.35+p*.85);
    ctx.translate(e.x,e.y);
    ctx.rotate(e.angle||0);
    ctx.globalCompositeOperation="lighter";
    ctx.lineCap="round";
    ctx.globalAlpha=fade*(e.heavy?.9:.7);
    ctx.strokeStyle=colorToRgba(e.color||"#fff1b8",.95);
    ctx.lineWidth=e.heavy?3:2;
    ctx.beginPath();
    ctx.ellipse(0,0,radius*.72,radius*.42,0,0,Math.PI*2);
    ctx.stroke();
    const rays=e.heavy?7:4;
    for(let i=0;i<rays;i++){
      const spread=(i-(rays-1)/2)/(rays-1);
      const a=spread*1.7+Math.sin((e.seed||0)+i*8.13)*.12;
      const inner=radius*(.08+(i%2)*.06);
      const outer=radius*(.72+(i%3)*.2);
      ctx.globalAlpha=fade*(.48+(i%3)*.16);
      ctx.strokeStyle=i%3===0?"rgba(255,255,255,.98)":colorToRgba(e.color||"#fff1b8",.9);
      ctx.lineWidth=(e.heavy?2.8:1.7)*(1-p*.35);
      ctx.beginPath();
      ctx.moveTo(Math.cos(a)*inner,Math.sin(a)*inner);
      ctx.lineTo(Math.cos(a)*outer,Math.sin(a)*outer);
      ctx.stroke();
    }
    ctx.globalAlpha=fade*.85;
    ctx.fillStyle="rgba(255,255,255,.95)";
    ctx.beginPath();ctx.arc(0,0,(e.heavy?5:3.2)*(1-p*.45),0,Math.PI*2);ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="hominBubbleShield"){
    const fade=clamp(e.t/.35,0,1),p=1-e.t/e.maxT;
    const hominFloat=hominUltimateFloatMotion();
    ctx.globalAlpha=.32*fade;
    for(let i=0;i<7;i++){
      const a=elapsed*1.4+i*Math.PI*2/7;
      drawTranslucentBubble(player.x+hominFloat.x+Math.cos(a)*64,player.y+hominFloat.y-38+Math.sin(a*1.2)*30,8+3*Math.sin(p*8+i),hominBubbleColor(i),.38,i);
    }
    ctx.restore();return;
  }
  if(e.kind==="hominBubbleBurst"){
    const p=clamp(1-e.t/e.maxT,0,1),alpha=clamp(e.t/e.maxT,0,1);
    const burst=1-(1-p)*(1-p)*(1-p);
    const radius=e.r||90,seed=e.seed||0;
    ctx.translate(e.x,e.y);
    ctx.globalCompositeOperation="lighter";
    const flash=clamp(1-p/.24,0,1);
    ctx.globalAlpha=flash*.28;
    ctx.fillStyle="rgba(255,255,255,.9)";
    ctx.beginPath();ctx.arc(0,0,radius*(.18+.18*burst),0,Math.PI*2);ctx.fill();
    ctx.lineCap="round";
    for(let i=0;i<10;i++){
      const a=seed+i*Math.PI*2/10+Math.sin(seed+i*4.7)*.12;
      const rr=radius*(.22+.78*burst)*(i%3===0?1.05:.92);
      const arc=.2+(i%4)*.055;
      ctx.globalAlpha=alpha*(.58+(i%3)*.11);
      ctx.strokeStyle=i%2?"rgba(255,255,255,.9)":colorToRgba(e.color||"#ff8fd7",.94);
      ctx.lineWidth=Math.max(1.2,6.5-4.8*p+(i%2));
      ctx.beginPath();ctx.arc(0,0,rr,a-arc,a+arc);ctx.stroke();
    }
    for(let i=0;i<18;i++){
      const a=seed*.7+i*Math.PI*2/18+Math.sin(i*7.1)*.1;
      const inner=radius*(.16+.25*burst);
      const outer=radius*(.26+(.62+(i%5)*.055)*burst);
      const bend=Math.sin(seed+i*2.3)*.16;
      ctx.globalAlpha=alpha*(.35+(i%4)*.1);
      ctx.strokeStyle=i%3===0?"rgba(255,255,255,.88)":colorToRgba(hominBubbleColor(i),.88);
      ctx.lineWidth=1.4+(i%3)*.7;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a)*inner,Math.sin(a)*inner*.88);
      ctx.quadraticCurveTo(Math.cos(a+bend)*(inner+outer)*.5,Math.sin(a+bend)*(inner+outer)*.43,Math.cos(a)*outer,Math.sin(a)*outer*.88);
      ctx.stroke();
      const bead=2.2+(i%4)*1.15;
      ctx.fillStyle=i%3===0?"rgba(255,255,255,.92)":colorToRgba(hominBubbleColor(i),.9);
      ctx.beginPath();ctx.arc(Math.cos(a)*outer,Math.sin(a)*outer*.88,bead,0,Math.PI*2);ctx.fill();
    }
    for(let i=0;i<7;i++){
      const a=seed+i*Math.PI*2/7+p*.32;
      const rr=radius*(.2+burst*(.45+(i%3)*.1));
      drawTranslucentBubble(Math.cos(a)*rr,Math.sin(a)*rr*.88,4+(i%3)*2,hominBubbleColor(i),alpha*.55,i);
    }
    ctx.restore();return;
  }
  if(e.kind==="seoyulCompanion"){
    const rowMap={down:0,sideL:1,sideR:2,up:3};
    const row=rowMap[e.dir]??0;
    const col=Math.floor(elapsed*5)%4;
    const fade=clamp(e.t/.35,0,1);
    ctx.globalAlpha=fade;
    ctx.save();
    ctx.translate(e.x,e.y);
    ctx.imageSmoothingEnabled=false;
    if(seoyulSprite.complete&&seoyulSprite.naturalWidth){
      const fw=Math.floor(seoyulSprite.naturalWidth/4),fh=Math.floor(seoyulSprite.naturalHeight/4);
      ctx.drawImage(seoyulSprite,fw*col,fh*row,fw,fh,-25,-48,50,50);
    }else{
      ctx.fillStyle="#f6bfd8";ctx.fillRect(-12,-30,24,30);ctx.fillStyle="#1f2024";ctx.fillRect(-16,-42,32,14);
    }
    ctx.restore();
    ctx.font='700 18px "Malgun Gothic",sans-serif';
    ctx.textAlign="center";ctx.textBaseline="middle";
    ctx.shadowColor="#64ff82";
    for(let i=0;i<9;i++){
      const p=(elapsed*.82+i/9)%1;
      const a0=i*Math.PI*2/9+elapsed*.9;
      const radius=18+30*p;
      const x=player.x+Math.cos(a0)*radius;
      const y=player.y-28+Math.sin(a0)*radius*.42-p*42;
      const alpha=fade*Math.sin(p*Math.PI)*.9;
      const size=16+8*(1-p);
      ctx.globalAlpha=alpha*.55;
      const grad=ctx.createRadialGradient(x,y,1,x,y,18);
      grad.addColorStop(0,"rgba(120,255,145,.55)");
      grad.addColorStop(1,"rgba(120,255,145,0)");
      ctx.fillStyle=grad;
      ctx.beginPath();ctx.arc(x,y,18*(1-p*.35),0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=alpha;
      ctx.shadowBlur=10*(1-p);
      ctx.font=`700 ${size}px "Malgun Gothic",sans-serif`;
      ctx.strokeStyle="rgba(5,45,18,.72)";ctx.lineWidth=4;ctx.strokeText("+",x,y);
      ctx.fillStyle=`rgba(104,255,132,${.82+.18*(1-p)})`;ctx.fillText("+",x,y);
    }
    ctx.shadowBlur=0;
    ctx.restore();return;
  }
  if(e.kind==="droneCharge"){
    syncDroneEffect(e);
    const p=1-e.t/e.maxT;
    const pulse=Math.sin(p*Math.PI);
    ctx.translate(e.x,e.y);
    ctx.rotate(e.angle);
    ctx.globalAlpha=.35+.55*pulse;
    ctx.shadowColor=e.color||"#72f6ff";
    ctx.shadowBlur=16*pulse;
    ctx.strokeStyle="rgba(130,255,255,.9)";
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.arc(0,0,(e.r||18)*(1-p*.35),0,Math.PI*2);
    ctx.stroke();
    ctx.fillStyle="rgba(220,255,255,.85)";
    ctx.beginPath();
    ctx.arc(10+12*p,0,4+6*pulse,0,Math.PI*2);
    ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="droneEvolve"){
    syncDroneEffect(e);
    const p=1-e.t/e.maxT;
    const pulse=Math.sin(p*Math.PI);
    ctx.translate(e.x,e.y);
    ctx.globalAlpha=.18+.5*pulse;
    ctx.shadowColor=e.color||"#72f6ff";
    ctx.shadowBlur=22*pulse;
    const core=18+22*pulse;
    const grad=ctx.createRadialGradient(0,0,4,0,0,core);
    grad.addColorStop(0,"rgba(255,255,255,.9)");
    grad.addColorStop(.38,"rgba(105,240,255,.42)");
    grad.addColorStop(1,"rgba(105,240,255,0)");
    ctx.fillStyle=grad;
    ctx.beginPath();ctx.arc(0,0,core,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle=`rgba(156,250,255,${.42*pulse})`;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.arc(0,0,34+18*pulse,0,Math.PI*2);
    ctx.stroke();
    ctx.fillStyle="rgba(225,255,255,.82)";
    for(let i=0;i<10;i++){
      const a=i*Math.PI*2/10-p*2.6;
      const r=24+p*44+(i%3)*5;
      ctx.beginPath();
      ctx.arc(Math.cos(a)*r,Math.sin(a)*r,1.4+2.2*pulse,0,Math.PI*2);
      ctx.fill();
    }
    ctx.restore();return;
  }
  if(e.kind==="barrierHit"||e.kind==="barrierBreak"||e.kind==="barrierRestore"){
    const p=1-e.t/e.maxT;
    const restore=e.kind==="barrierRestore";
    const broken=e.kind==="barrierBreak";
    const x=restore?player.x:e.x,y=restore?player.y:e.y;
    ctx.translate(x,y-10);
    ctx.globalCompositeOperation="lighter";
    const fade=1-p;
    const pulse=Math.sin(p*Math.PI);
    ctx.globalAlpha=(restore ? .45 : broken ? .58 : .42)*fade;
    ctx.strokeStyle=restore?"rgba(170,255,255,.95)":broken?"rgba(255,160,190,.95)":"rgba(180,240,255,.95)";
    ctx.lineWidth=broken?3:2;
    ctx.beginPath();ctx.ellipse(0,0,(e.r||58)*(.55+p*.55),(e.r||58)*(.62+p*.5),0,0,Math.PI*2);ctx.stroke();
    ctx.globalAlpha=(restore ? .2 : .12)*fade;
    ctx.fillStyle=restore?"rgba(160,245,255,.55)":broken?"rgba(255,120,170,.5)":"rgba(180,240,255,.45)";
    ctx.beginPath();ctx.ellipse(0,0,(e.r||58)*(.4+.25*p),(e.r||58)*(.45+.22*p),0,0,Math.PI*2);ctx.fill();
    if(broken){
      ctx.fillStyle="rgba(255,210,230,.9)";
      for(let i=0;i<12;i++){
        const a=i*Math.PI*2/12+(e.x+e.y)*.01;
        const d=(e.r||58)*(.28+p*.76);
        ctx.globalAlpha=.55*fade;
        ctx.save();ctx.translate(Math.cos(a)*d,Math.sin(a)*d*.88);ctx.rotate(a);ctx.fillRect(-2,-1,9,2);ctx.restore();
      }
    }else if(restore){
      ctx.globalAlpha=.36*pulse;
      ctx.strokeStyle="rgba(230,255,255,.9)";
      ctx.lineWidth=1.5;
      ctx.beginPath();ctx.arc(0,0,(e.r||58)*(.38+.18*pulse),0,Math.PI*2);ctx.stroke();
    }
    ctx.restore();return;
  }
  if(e.kind==="shieldBreak"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.globalCompositeOperation="lighter";
    ctx.globalAlpha=.7*(1-p);
    ctx.strokeStyle=e.color||"#a8d8ff";
    ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(0,0,(e.r||26)*(.4+p*.75),0,Math.PI*2);ctx.stroke();
    ctx.fillStyle=e.color||"#a8d8ff";
    for(let i=0;i<7;i++){
      const a=i*Math.PI*2/7+(e.x+e.y)*.01;
      const d=(e.r||26)*(.24+p*.78);
      ctx.save();ctx.translate(Math.cos(a)*d,Math.sin(a)*d);ctx.rotate(a);ctx.fillRect(-2,-2,5,5);ctx.restore();
    }
    ctx.restore();return;
  }
  if(e.kind==="orbitShieldEvolve"){
    const p=1-e.t/e.maxT;
    const pulse=Math.sin(p*Math.PI);
    ctx.translate(player.x,player.y);
    ctx.globalCompositeOperation="lighter";
    ctx.globalAlpha=.2+.48*pulse;
    ctx.shadowColor=e.color||"#8fffff";
    ctx.shadowBlur=22*pulse;
    ctx.strokeStyle="rgba(170,255,255,.9)";
    ctx.lineWidth=3;
    for(let i=0;i<3;i++){
      ctx.beginPath();ctx.arc(0,0,52+i*17+pulse*18,0,Math.PI*2);ctx.stroke();
    }
    ctx.fillStyle="rgba(225,255,255,.85)";
    for(let i=0;i<10;i++){
      const a=elapsed*5+i*Math.PI*2/10;
      const r=62+pulse*24;
      ctx.save();ctx.translate(Math.cos(a)*r,Math.sin(a)*r);ctx.rotate(a);ctx.fillRect(-5,-7,10,14);ctx.restore();
    }
    ctx.restore();return;
  }
  if(e.kind==="droneBeam"){
    syncDroneEffect(e);
    const p=1-e.t/e.maxT;
    const alpha=e.t<.16?e.t/.16:e.t>.18?1:e.t/.18;
    const flicker=.92+Math.sin(elapsed*42)*.08;
    ctx.translate(e.x,e.y);
    ctx.rotate(e.angle);
    ctx.globalAlpha=alpha;
    ctx.shadowColor="#63f7ff";
    ctx.shadowBlur=16*flicker;
    ctx.lineCap="round";
    ctx.strokeStyle="rgba(54,205,255,.32)";
    ctx.lineWidth=(e.wide||42)*.9*flicker;
    ctx.beginPath();
    ctx.moveTo(-12,0);
    ctx.lineTo(e.len||1600,0);
    ctx.stroke();
    ctx.shadowBlur=10;
    ctx.strokeStyle="rgba(126,246,255,.78)";
    ctx.lineWidth=(e.wide||42)*.38;
    ctx.beginPath();
    ctx.moveTo(-8,0);
    ctx.lineTo((e.len||1600)-20,0);
    ctx.stroke();
    ctx.shadowBlur=5;
    ctx.strokeStyle="rgba(255,255,255,.94)";
    ctx.lineWidth=Math.max(4,(e.wide||42)*.12);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo((e.len||1600)-34,0);
    ctx.stroke();
    ctx.shadowBlur=0;
    ctx.fillStyle="rgba(198,255,255,.78)";
    ctx.beginPath();ctx.arc(-10,0,(e.wide||42)*.22,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle="rgba(93,238,255,.28)";
    ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(-10,0,(e.wide||42)*(.34+.04*Math.sin(p*Math.PI*6)),0,Math.PI*2);ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="dragonEvolve"){
    syncDragonEffect(e);
    const p=1-e.t/e.maxT;
    const pulse=Math.sin(p*Math.PI);
    ctx.translate(e.x,e.y);
    ctx.globalCompositeOperation="lighter";
    ctx.globalAlpha=.18+.55*pulse;
    ctx.shadowColor=e.color||"#ffb23a";
    ctx.shadowBlur=26*pulse;
    ctx.strokeStyle="#fff0a8";
    ctx.lineWidth=3;
    for(let i=0;i<5;i++){
      const a=elapsed*4.5+i*Math.PI*2/5;
      ctx.beginPath();
      ctx.ellipse(Math.cos(a)*10,Math.sin(a)*8,24+54*pulse+i*4,12+26*pulse+i*2,a+p*2,0,Math.PI*2);
      ctx.stroke();
    }
    ctx.fillStyle="rgba(255,245,180,.55)";
    ctx.beginPath();ctx.arc(0,0,16+42*pulse,0,Math.PI*2);ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="iceBirdEvolve"){
    const s=active("freezerBird");
    if(s&&s.level){
      const slot=iceBirdSlot(s.level,true,nearest(920));
      e.x=slot.x;e.y=slot.y;
    }
    const p=1-e.t/e.maxT;
    const pulse=Math.sin(p*Math.PI);
    ctx.translate(e.x,e.y);
    ctx.globalCompositeOperation="lighter";
    ctx.globalAlpha=.16+.5*pulse;
    ctx.shadowColor=e.color||"#bff8ff";
    ctx.shadowBlur=24*pulse;
    ctx.strokeStyle="#dffbff";
    ctx.lineWidth=3;
    for(let i=0;i<5;i++){
      const a=elapsed*4.8+i*Math.PI*2/5;
      ctx.beginPath();
      ctx.ellipse(Math.cos(a)*8,Math.sin(a)*7,22+48*pulse+i*4,11+24*pulse+i*2,a-p*2,0,Math.PI*2);
      ctx.stroke();
    }
    ctx.fillStyle="rgba(210,250,255,.5)";
    ctx.beginPath();ctx.arc(0,0,14+38*pulse,0,Math.PI*2);ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="iceBallImpact"){
    const p=clamp(1-e.t/e.maxT,0,1);
    ctx.translate(e.x,e.y);
    ctx.imageSmoothingEnabled=false;
    if(iceBallImpactSprite.complete&&iceBallImpactSprite.naturalWidth){
      const fw=iceBallImpactSprite.naturalWidth/3,fh=iceBallImpactSprite.naturalHeight/2;
      const frame=Math.min(5,Math.floor(p*6)),col=frame%3,row=Math.floor(frame/3);
      const size=(e.r||46)*2.55;
      ctx.globalAlpha=1-p*.12;
      ctx.drawImage(iceBallImpactSprite,col*fw,row*fh,fw,fh,-size/2,-size/2,size,size);
    }else{
      ctx.globalCompositeOperation="lighter";ctx.globalAlpha=1-p;
      ctx.fillStyle="#bff8ff";ctx.beginPath();ctx.arc(0,0,(e.r||46)*(.25+p*.75),0,Math.PI*2);ctx.fill();
    }
    ctx.restore();return;
  }
  if(e.kind==="dragonFireballSplash"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.imageSmoothingEnabled=false;
    if(dragonFireballSplashSprite.complete&&dragonFireballSplashSprite.naturalWidth){
      const frames=6;
      const fw=dragonFireballSplashSprite.naturalWidth/frames;
      const fh=dragonFireballSplashSprite.naturalHeight;
      const frame=Math.min(frames-1,Math.floor(p*frames));
      const size=(e.r||64)*1.34;
      ctx.globalAlpha=1-p*.12;
      ctx.drawImage(dragonFireballSplashSprite,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
    }else{
      const r=(e.r||64)*(.18+.55*Math.sin(p*Math.PI));
      ctx.globalCompositeOperation="lighter";
      ctx.globalAlpha=1-p*.65;
      ctx.fillStyle="rgba(255,245,165,.9)";
      ctx.beginPath();ctx.arc(0,0,r*.34,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle="rgba(255,118,28,.85)";
      ctx.lineWidth=3;
      ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.stroke();
    }
    ctx.restore();return;
  }
  if(e.kind==="seunggwanIronImpact"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.imageSmoothingEnabled=false;
    if(seunggwanIronBallSprite.complete&&seunggwanIronBallSprite.naturalWidth){
      const fw=Math.floor(seunggwanIronBallSprite.naturalWidth/8),fh=seunggwanIronBallSprite.naturalHeight;
      const frame=4+Math.min(3,Math.floor(p*4));
      const size=(e.r||72)*2.05;
      ctx.globalAlpha=1-p*.1;
      ctx.drawImage(seunggwanIronBallSprite,fw*frame,0,fw,fh,-size/2,-size,size,size*2);
    }else{
      ctx.globalAlpha=.62*(1-p*.25);
      ctx.fillStyle="#b8a27c";
      ctx.beginPath();ctx.arc(0,0,(e.r||72)*(.25+p*.72),0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=.9*(1-p);
      ctx.fillStyle="#3d3c42";
      for(let i=0;i<18;i++){
        const a=i*Math.PI*2/18+(e.seed||0);
        const d=(e.r||72)*p*(.45+(i%5)*.08);
        ctx.save();ctx.translate(Math.cos(a)*d,Math.sin(a)*d*.58);ctx.rotate(a);ctx.fillRect(-4,-2,8,4);ctx.restore();
      }
    }
    ctx.restore();return;
  }
  if(e.kind==="dragonExplosion"||e.kind==="dragonMeteorExplosion"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=1-p*.25;
    ctx.translate(e.x,e.y);
    if(e.kind==="dragonMeteorExplosion")ctx.rotate(e.angle||0);
    ctx.imageSmoothingEnabled=false;
    if(dragonExplosionSprite.complete&&dragonExplosionSprite.naturalWidth){
      const frames=6;
      const fw=Math.floor(dragonExplosionSprite.naturalWidth/frames);
      const fh=dragonExplosionSprite.naturalHeight;
      const frame=Math.min(frames-1,Math.floor(p*frames));
      const drawH=(e.r||72)*1.82;
      const drawW=e.kind==="dragonMeteorExplosion"?drawH*(fw/fh):drawH;
      ctx.drawImage(dragonExplosionSprite,fw*frame,0,fw,fh,-drawW/2,-drawH/2,drawW,drawH);
    }else{
      const grad=ctx.createRadialGradient(0,0,0,0,0,e.r*(.65+p*.5));
      grad.addColorStop(0,"rgba(255,245,190,.95)");
      grad.addColorStop(.28,"rgba(255,134,42,.7)");
      grad.addColorStop(1,"rgba(255,74,24,0)");
      ctx.fillStyle=grad;
      ctx.beginPath();ctx.arc(0,0,e.r*(.65+p*.5),0,Math.PI*2);ctx.fill();
    }
    ctx.restore();return;
  }
  if(e.kind==="emotionPullField"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.16+.14*Math.sin(p*Math.PI*5)**2;
    ctx.fillStyle=e.color||"#69d7ff";
    ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=.85;
    ctx.strokeStyle="#e7fbff";ctx.lineWidth=4;
    ctx.beginPath();ctx.arc(e.x,e.y,e.damageR,0,Math.PI*2);ctx.stroke();
    for(let i=0;i<18;i++){
      const a=i*Math.PI*2/18-p*3,r=e.r-18-(i%3)*15;
      ctx.strokeStyle=i%2?"#b8f3ff":"#ffffff";
      ctx.lineWidth=3;
      ctx.beginPath();
      ctx.moveTo(e.x+Math.cos(a)*r,e.y+Math.sin(a)*r);
      ctx.lineTo(e.x+Math.cos(a)*(r-34),e.y+Math.sin(a)*(r-34));
      ctx.stroke();
    }
    ctx.restore();return;
  }
  if(e.kind==="emotionPushWarn"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.18+.18*Math.sin(p*Math.PI*6)**2;
    ctx.fillStyle=e.color||"#ff4865";
    ctx.beginPath();
    if(e.arena)ctx.rect(e.arena.x,e.arena.y,e.arena.w,e.arena.h);
    else ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
    ctx.arc(e.x,e.y,e.safe,0,Math.PI*2,true);
    ctx.fill("evenodd");
    ctx.globalAlpha=.75;
    ctx.strokeStyle="#ff9ead";ctx.lineWidth=4;
    if(e.arena)ctx.strokeRect(e.arena.x,e.arena.y,e.arena.w,e.arena.h);
    else{ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.stroke()}
    ctx.strokeStyle="#8fffd8";ctx.lineWidth=5;
    ctx.beginPath();ctx.arc(e.x,e.y,e.safe,0,Math.PI*2);ctx.stroke();
    ctx.globalAlpha=.18;
    ctx.fillStyle="#8fffd8";
    ctx.beginPath();ctx.arc(e.x,e.y,e.safe*.96,0,Math.PI*2);ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="emotionPushBlast"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=(1-p)*.58;
    ctx.strokeStyle=e.color||"#69d7ff";
    ctx.lineWidth=7;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*(.28+p*.9),0,Math.PI*2);ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="fartCloud"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.globalAlpha=p<.16?p/.16:e.t<.5?e.t/.5:.72;
    ctx.imageSmoothingEnabled=false;
    if(gymFartCloudSprite.complete&&gymFartCloudSprite.naturalWidth){
      const frames=4,fw=gymFartCloudSprite.naturalWidth/frames,fh=gymFartCloudSprite.naturalHeight;
      const frame=clamp(Math.floor(p*4),0,3);
      const size=e.r*2.15;
      ctx.drawImage(gymFartCloudSprite,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
    }else{
      ctx.fillStyle="rgba(210,225,86,.6)";
      ctx.beginPath();ctx.arc(0,0,e.r,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();return;
  }
  if(e.kind==="enemyTapeWhip"){
    const p=1-e.t/e.maxT;
    const frame=clamp(Math.floor(p*4),0,3);
    ctx.translate(e.x,e.y);
    ctx.rotate(e.angle);
    ctx.globalAlpha=p<.15?p/.15:e.t<.08?e.t/.08:1;
    ctx.imageSmoothingEnabled=false;
    if(enemyTapeWhipSprite.complete&&enemyTapeWhipSprite.naturalWidth){
      const fw=enemyTapeWhipSprite.naturalWidth/4,fh=enemyTapeWhipSprite.naturalHeight;
      ctx.drawImage(enemyTapeWhipSprite,fw*frame,0,fw,fh,0,-44,166,88);
    }else{
      ctx.strokeStyle="#f4d48b";ctx.lineWidth=12;
      ctx.beginPath();ctx.arc(28,0,70,-.45,.45);ctx.stroke();
    }
    ctx.restore();return;
  }
  if(e.kind==="sangilSlash"){
    if(e.delay>0){ctx.restore();return}
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.rotate(e.angle);
    ctx.globalAlpha=p<.18?p/.18:e.t<.06?e.t/.06:1;
    ctx.imageSmoothingEnabled=false;
    if(sangilSlashEffectSprite.complete&&sangilSlashEffectSprite.naturalWidth){
      const fw=sangilSlashEffectSprite.naturalWidth/4,fh=sangilSlashEffectSprite.naturalHeight;
      const frame=clamp(Math.floor(p*4),0,3);
      ctx.drawImage(sangilSlashEffectSprite,fw*frame,0,fw,fh,-26,-78,166,156);
    }
    ctx.restore();return;
  }
  if(e.kind==="seunggwanFamilySlam"){
    const p=1-e.t/e.maxT;
    const land=clamp((p-.58)/.18,0,1);
    const exit=clamp((p-.82)/.18,0,1);
    const dx=e.dx||0,dy=e.dy||0;
    const sx=1,sy=0;
    const impactX=0,impactY=0;
    ctx.translate(e.x,e.y);
    ctx.globalAlpha=1;

    const drawKick=(side,row,scale,phase)=>{
      const useSons=seunggwanSonsUltimateSprite.complete&&seunggwanSonsUltimateSprite.naturalWidth;
      const img=useSons?seunggwanSonsUltimateSprite:seunggwanUltimateSprite;
      if(!(img.complete&&img.naturalWidth))return;
      const fw=Math.floor(img.naturalWidth/4),fh=useSons?Math.floor(img.naturalHeight/2):img.naturalHeight;
      const q=clamp(p+phase,0,.999);
      const intro=clamp(q/.18,0,1);
      const localFly=clamp((q-.18)/.38,0,1);
      const vanish=clamp((q-.82)/.18,0,1);
      const col=q<.2?0:q<.42?1:q<.7?2:3;
      const startX=sx*side-dx*34;
      const startY=sy*side-dy*34;
      const endX=impactX+sx*(side>0?32:-32);
      const endY=impactY+sy*(side>0?32:-32);
      const x=(startX*intro)*(1-localFly)+endX*localFly-dx*vanish*42;
      const y=(startY*intro)*(1-localFly)+endY*localFly-dy*vanish*42;
      const lift=Math.sin(clamp((q-.08)/.64,0,1)*Math.PI)*92*(1-vanish*.35);
      ctx.save();
      ctx.translate(x,y-lift);
      ctx.scale(scale*(.72+.28*intro),scale*(.72+.28*intro));
      ctx.imageSmoothingEnabled=false;
      ctx.globalAlpha=.98*intro*(1-vanish);
      ctx.drawImage(img,fw*col,fh*row,fw,fh,-54,-70,108,108);
      ctx.restore();
    };
    drawKick(112,0,.72,.00);
    drawKick(-112,1,.68,.04);
    if(seunggwanUltimateSprite.complete&&seunggwanUltimateSprite.naturalWidth){
      const fw=Math.floor(seunggwanUltimateSprite.naturalWidth/4),fh=seunggwanUltimateSprite.naturalHeight;
      const q=clamp(p,0,.999);
      const intro=clamp(q/.12,0,1);
      const localFly=smoothstep(clamp((q-.12)/.46,0,1));
      const vanish=clamp((q-.9)/.1,0,1);
      const col=q<.2?0:q<.42?1:q<.7?2:3;
      const x=impactX*localFly;
      const y=impactY*localFly;
      const lift=Math.sin(clamp((q-.04)/.66,0,1)*Math.PI)*132*(1-vanish*.35);
      ctx.save();
      ctx.translate(x,y-lift);
      ctx.imageSmoothingEnabled=false;
      ctx.globalAlpha=.98*intro*(1-vanish);
      ctx.drawImage(seunggwanUltimateSprite,fw*col,0,fw,fh,-58,-116,116,116);
      ctx.restore();
    }
    const impactBurst=clamp((p-.72)/.16,0,1);
    if(impactBurst>0){
      ctx.save();
      ctx.translate(impactX,impactY);
      ctx.globalAlpha=.5*(1-exit*.35);
      ctx.fillStyle="rgba(255,224,116,.34)";
      ctx.beginPath();
      ctx.arc(0,12,(e.r||220)*(.2+impactBurst*.22),0,Math.PI*2);
      ctx.fill();
      ctx.globalAlpha=.75*(1-impactBurst)*(1-exit);
      ctx.fillStyle="#fff0a8";
      for(let i=0;i<24;i++){
        const a=i*Math.PI*2/24;
        const d=(e.r||220)*impactBurst*(.22+(i%5)*.035);
        ctx.save();
        ctx.translate(Math.cos(a)*d,12+Math.sin(a)*d*.56);
        ctx.rotate(a);
        ctx.fillRect(-7,-2,14,4);
        ctx.restore();
      }
      ctx.restore();
    }
    ctx.restore();return;
  }
  if(e.kind==="sangilWhirlwind"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.globalAlpha=.78;
    ctx.imageSmoothingEnabled=false;
    if(sangilWhirlwindSlashSprite.complete&&sangilWhirlwindSlashSprite.naturalWidth){
      const fw=sangilWhirlwindSlashSprite.naturalWidth/6,fh=sangilWhirlwindSlashSprite.naturalHeight;
      const frame=Math.floor(elapsed*18)%6;
      ctx.drawImage(sangilWhirlwindSlashSprite,fw*frame,0,fw,fh,-132,-118,264,236);
    }
    ctx.restore();return;
  }
  if(e.kind==="cultHandsWarn"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.18+.2*Math.sin(p*Math.PI*6)**2;
    ctx.fillStyle=e.color;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=.55;
    ctx.strokeStyle="#ff9ead";ctx.lineWidth=4;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.stroke();
    ctx.globalAlpha=.36;
    ctx.strokeStyle=e.color;ctx.lineWidth=6;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*p,0,Math.PI*2);ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="cultHandsZone"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.24+.2*Math.sin(elapsed*8)**2;
    ctx.fillStyle="#7e58d6";
    ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=.86;
    ctx.translate(e.x,e.y);
    ctx.imageSmoothingEnabled=false;
    if(cultHandsZoneSprite.complete&&cultHandsZoneSprite.naturalWidth){
      const fw=cultHandsZoneSprite.naturalWidth/4,fh=cultHandsZoneSprite.naturalHeight;
      const frame=Math.floor((elapsed*7+p*2)%4);
      const drawW=e.r*2.05,drawH=e.r*1.38;
      ctx.drawImage(cultHandsZoneSprite,fw*frame,0,fw,fh,-drawW/2,-drawH*.72,drawW,drawH);
    }else{
      ctx.strokeStyle="#efe3ff";ctx.lineWidth=5;
      for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(-36+i*18,18);ctx.lineTo(-28+i*18,-16-Math.sin(elapsed*7+i)*8);ctx.stroke()}
    }
    ctx.restore();return;
  }
  if(e.kind==="cultHeal"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=(1-p)*.65;
    ctx.strokeStyle=e.color||"#b56cff";
    ctx.lineWidth=4;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*(.45+p*.7),0,Math.PI*2);ctx.stroke();
    ctx.fillStyle="rgba(255,240,168,.22)";
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*(.2+p*.35),0,Math.PI*2);ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="bossCircleTelegraph"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.16+.2*Math.sin(p*Math.PI*5)**2;
    ctx.fillStyle=e.color;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=.42;
    ctx.strokeStyle=e.color;ctx.lineWidth=4;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*p,0,Math.PI*2);ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="cheonHeatTelegraph"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.12+.16*Math.sin(p*Math.PI*6)**2;
    ctx.fillStyle=e.color;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=.5;
    ctx.strokeStyle="#ff9ead";ctx.lineWidth=4;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.stroke();
    ctx.globalAlpha=.36;
    ctx.strokeStyle=e.color;ctx.lineWidth=6;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*p,0,Math.PI*2);ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="cheonHeatPuff"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=(1-p)*.28;
    ctx.fillStyle=e.color;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*p,0,Math.PI*2);ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="cheonBellyImpact"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=(1-p)*.55;
    ctx.fillStyle="#f4c14f";
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*(.45+p*.72),0,Math.PI*2);ctx.fill();
    ctx.strokeStyle="#5a3216";ctx.lineWidth=5;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*(.35+p*.9),0,Math.PI*2);ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="gossipTriangleFence"){
    const pts=e.points||[];
    const p=1-e.t/e.maxT;
    if(pts.length>=3){
      ctx.save();
      ctx.globalAlpha=.24+.18*Math.sin(elapsed*16)**2;
      ctx.fillStyle="rgba(255,79,143,.12)";
      ctx.strokeStyle=e.color||"#ff4f8f";
      ctx.lineWidth=5;
      ctx.setLineDash([14,9]);
      ctx.beginPath();
      ctx.moveTo(pts[0].x,pts[0].y);
      for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i].x,pts[i].y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha=.72*(1-p);
      ctx.lineWidth=2;
      ctx.strokeStyle="#fff0ff";
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();return;
  }
  if(e.kind==="gossipRumorWarn"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.imageSmoothingEnabled=false;
    ctx.globalAlpha=.32+.28*Math.sin(p*Math.PI*6)**2;
    if(gossipProjectileSprite.complete&&gossipProjectileSprite.naturalWidth){
      const count=6;
      for(let i=0;i<count;i++){
        const a=(e.spin||0)+i*Math.PI*2/count+p*.8;
        const rr=(e.r||48)*(.35+p*.48)+Math.sin(elapsed*8+i)*3;
        const size=28+(i%2)*6;
        ctx.save();
        ctx.translate(Math.cos(a)*rr,Math.sin(a)*rr);
        ctx.rotate(a+Math.PI/2);
        ctx.drawImage(gossipProjectileSprite,-size/2,-size/2,size,size);
        ctx.restore();
      }
    }else{
      ctx.fillStyle=e.color||"#ff4f8f";
      ctx.beginPath();ctx.arc(0,0,e.r,0,Math.PI*2);ctx.fill();
    }
    ctx.font='900 18px "Black Han Sans","Jua","Arial Black",sans-serif';
    ctx.textAlign="center";ctx.textBaseline="middle";
    ctx.lineWidth=5;ctx.strokeStyle="#211020";ctx.strokeText(e.text||"??",0,0);
    ctx.fillStyle="#fff0ff";ctx.fillText(e.text||"??",0,0);
    ctx.restore();return;
  }
  if(e.kind==="gossipRumorBlast"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.imageSmoothingEnabled=false;
    ctx.globalAlpha=(1-p)*.9;
    if(gossipProjectileSprite.complete&&gossipProjectileSprite.naturalWidth){
      for(let i=0;i<10;i++){
        const a=i*Math.PI*2/10+p*2.2;
        const rr=(e.r||48)*(.18+p*.96);
        const size=30+(i%3)*5;
        ctx.save();
        ctx.translate(Math.cos(a)*rr,Math.sin(a)*rr);
        ctx.rotate(a+Math.sin(elapsed*9+i)*.18);
        ctx.drawImage(gossipProjectileSprite,-size/2,-size/2,size,size);
        ctx.restore();
      }
    }else{
      ctx.fillStyle=e.color||"#ff4f8f";
      ctx.beginPath();ctx.arc(0,0,e.r*(.45+p*.72),0,Math.PI*2);ctx.fill();
    }
    ctx.restore();return;
  }
  if(e.kind==="gossipFrameWarn"){
    const p=1-e.t/e.maxT;
    const locked=(e.followT||0)<=0;
    ctx.translate(e.x,e.y);
    ctx.globalAlpha=locked?.72:.36+.18*Math.sin(elapsed*24);
    ctx.fillStyle=locked?"rgba(255,48,79,.18)":"rgba(255,48,79,.1)";
    ctx.fillRect(-(e.w||138)/2,-(e.h||108)/2,e.w||138,e.h||108);
    ctx.strokeStyle=locked?"#ff304f":"#ff9ead";
    ctx.lineWidth=6;
    ctx.strokeRect(-(e.w||138)/2,-(e.h||108)/2,e.w||138,e.h||108);
    ctx.strokeStyle="#fff0ff";
    ctx.lineWidth=2;
    ctx.strokeRect(-(e.w||138)*(.32+p*.18),-(e.h||108)*(.32+p*.18),(e.w||138)*(.64+p*.36),(e.h||108)*(.64+p*.36));
    ctx.font='900 20px "Black Han Sans","Jua","Arial Black",sans-serif';
    ctx.textAlign="center";ctx.textBaseline="middle";
    ctx.lineWidth=5;ctx.strokeStyle="#211020";ctx.strokeText("모함",0,0);
    ctx.fillStyle="#fff0ff";ctx.fillText("모함",0,0);
    ctx.restore();return;
  }
  if(e.kind==="gossipFrameBlast"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    ctx.globalAlpha=(1-p)*.78;
    ctx.fillStyle="rgba(255,48,79,.42)";
    ctx.fillRect(-(e.w||138)/2,-(e.h||108)/2,e.w||138,e.h||108);
    ctx.strokeStyle="#fff0ff";ctx.lineWidth=5;
    for(let i=0;i<4;i++){
      const sx=i<2?-1:1,sy=i%2?-1:1;
      ctx.beginPath();
      ctx.moveTo(sx*(e.w||138)*.18,sy*(e.h||108)*.18);
      ctx.lineTo(sx*((e.w||138)*.58+p*28),sy*((e.h||108)*.46+p*22));
      ctx.stroke();
    }
    ctx.strokeStyle=e.color||"#ff304f";ctx.lineWidth=6;
    ctx.strokeRect(-(e.w||138)*(.5+p*.12),-(e.h||108)*(.5+p*.12),(e.w||138)*(1+p*.24),(e.h||108)*(1+p*.24));
    ctx.restore();return;
  }
  if(e.kind==="bossConeTelegraph"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.18+.18*Math.sin(p*Math.PI*5)**2;
    ctx.fillStyle=e.color;
    ctx.beginPath();ctx.moveTo(e.x,e.y);
    ctx.arc(e.x,e.y,e.range,e.angle-e.arc/2,e.angle+e.arc/2);
    ctx.closePath();ctx.fill();
    ctx.globalAlpha=.32;
    ctx.beginPath();ctx.moveTo(e.x,e.y);
    ctx.arc(e.x,e.y,e.range*p,e.angle-e.arc/2,e.angle+e.arc/2);
    ctx.closePath();ctx.fill();
    ctx.strokeStyle="#ff9ead";ctx.lineWidth=3;ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="bossLineTelegraph"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);ctx.rotate(e.angle);
    ctx.globalAlpha=.18+.18*Math.sin(p*Math.PI*5)**2;
    ctx.fillStyle=e.color;ctx.fillRect(0,-e.wide/2,e.len,e.wide);
    ctx.globalAlpha=.32;ctx.fillRect(0,-e.wide/2,e.len*p,e.wide);
    ctx.strokeStyle="#ff9ead";ctx.lineWidth=3;ctx.strokeRect(0,-e.wide/2,e.len,e.wide);
    ctx.restore();return;
  }
  if(e.kind==="bossNagBlast"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);ctx.rotate(e.angle);
    if(bossNagEffectSprite.complete&&bossNagEffectSprite.naturalWidth){
      const frames=6,fw=bossNagEffectSprite.naturalWidth/frames,fh=bossNagEffectSprite.naturalHeight;
      const frame=frames-1;
      const box=bossNagFrames[frame];
      const drawX=BOSS_NAG_SKILL.imgX;
      const drawY=BOSS_NAG_SKILL.imgY;
      ctx.globalAlpha=.9*(1-p*.25);
      ctx.imageSmoothingEnabled=false;
      ctx.drawImage(bossNagEffectSprite,fw*frame+box.x,box.y,box.w,box.h,drawX,drawY,BOSS_NAG_SKILL.imgW,BOSS_NAG_SKILL.imgH);
      ctx.restore();return;
    }
    ctx.globalAlpha=.24*(1-p)+.55;
    for(let i=0;i<9;i++){
      const x=30+i*34+p*80,y=Math.sin(i*1.7+p*8)*18;
      ctx.fillStyle=i%2?"#ff5d7a":"#fff1a8";
      ctx.fillRect(x,y-7,30+i%3*8,14);
    }
    ctx.globalAlpha=.25;
    ctx.fillStyle=e.color;
    ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,e.range,e.arc/-2,e.arc/2);ctx.closePath();ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="bossStampBurst"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);ctx.rotate(e.angle);
    ctx.globalAlpha=.45*(1-p);
    ctx.strokeStyle=e.color;ctx.lineWidth=3;
    for(let i=-2;i<=2;i++){
      const a=i*(BOSS_NAG_SKILL.arc*.9/4);
      ctx.save();ctx.rotate(a);
      ctx.beginPath();ctx.moveTo(28,0);ctx.lineTo(290+p*35,0);ctx.stroke();
      ctx.restore();
    }
    ctx.restore();return;
  }
  if(e.kind==="bossKickTrail"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);ctx.rotate(e.angle);
    ctx.globalAlpha=.5*(1-p);
    ctx.fillStyle="#fff1a8";ctx.fillRect(10,-8,260,16);
    ctx.fillStyle="#ff6b78";for(let i=0;i<7;i++)ctx.fillRect(26+i*34,-28+i%2*16,24,10);
    ctx.restore();return;
  }
  if(e.kind==="bossIntro"){
    const p=1-e.t/e.maxT;
    ctx.globalAlpha=.8*(1-p);
    ctx.strokeStyle=e.color;ctx.lineWidth=6;
    ctx.beginPath();ctx.arc(e.x,e.y,e.r*p,0,Math.PI*2);ctx.stroke();
    ctx.globalAlpha=.28*(1-p);ctx.fillStyle=e.color;ctx.beginPath();ctx.arc(e.x,e.y,e.r*p*.7,0,Math.PI*2);ctx.fill();
    ctx.restore();return;
  }
  if(e.kind==="bossDeath"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    for(let i=0;i<18;i++){
      const a=i*Math.PI*2/18+p*2,d=p*e.r*(.35+i%4*.18);
      ctx.fillStyle=i%2?"#ff5c78":"#fff1a8";
      ctx.globalAlpha=(1-p)*.9;
      ctx.fillRect(Math.cos(a)*d-5,Math.sin(a)*d-5,10,10);
    }
    ctx.strokeStyle=e.color;ctx.lineWidth=5;ctx.globalAlpha=.7*(1-p);
    ctx.beginPath();ctx.arc(0,0,e.r*p,0,Math.PI*2);ctx.stroke();
    ctx.restore();return;
  }
  if(e.kind==="bossFall"){
    const p=1-e.t/e.maxT;
    ctx.translate(e.x,e.y);
    if(e.bossId==="parkSejunFamily"&&parkSejunPhase2Sprite.complete&&parkSejunPhase2Sprite.naturalWidth){
      const fw=parkSejunPhase2Sprite.naturalWidth/4,fh=parkSejunPhase2Sprite.naturalHeight/3,col=clamp(Math.floor(p*4),0,3),size=132;
      ctx.imageSmoothingEnabled=false;ctx.globalAlpha=.98;ctx.drawImage(parkSejunPhase2Sprite,fw*col,fh*2,fw,fh,-size/2,-size*.68,size,size);ctx.restore();return;
    }
    const deathSprite=e.bossId==="emotionCeo"?emotionCeoSprite:e.bossId==="cultFanatic"?cultFanaticDeathSprite:e.bossId==="cheonSangmu"?cheonSangmuDeathSprite:juDaeriDeathSprite;
    const drawSize=e.bossId==="emotionCeo"?126:e.bossId==="cheonSangmu"?132:e.bossId==="cultFanatic"?156:116;
    if(deathSprite.complete&&deathSprite.naturalWidth){
      const fw=deathSprite.naturalWidth/4;
      let fh=deathSprite.naturalHeight/2;
      const col=clamp(Math.floor(p*4),0,3);
      const row=e.bossId==="emotionCeo"?0:(e.row||0);
      let sx=fw*col,sy=fh*row;
      if(e.bossId==="emotionCeo"){
        const r=EMOTION_CEO_FRAMES.death[col]||EMOTION_CEO_FRAMES.death[0];
        sx=r.x;sy=r.y;fh=r.h;
        const drawW=drawSize*(r.w/r.h);
        ctx.imageSmoothingEnabled=false;
        ctx.globalAlpha=.95;
        ctx.drawImage(deathSprite,sx,sy,r.w,r.h,-drawW/2,-drawSize*.68,drawW,drawSize);
        ctx.restore();return;
      }
      const drawW=e.bossId==="cultFanatic"?drawSize*(fw/fh):drawSize;
      ctx.imageSmoothingEnabled=false;
      ctx.globalAlpha=.95;
      ctx.drawImage(deathSprite,sx,sy,fw,fh,-drawW/2,-drawSize*.68,drawW,drawSize);
      ctx.restore();return;
    }
    ctx.restore();return;
  }
  if(e.kind==="bossQuote"){
    const p=1-e.t/e.maxT,alpha=p<.18?p/.18:e.t<.18?e.t/.18:1;
    ctx.globalAlpha=alpha;ctx.translate(e.x,e.y);
    ctx.scale(.72+.12*Math.sin(p*Math.PI),.72+.12*Math.sin(p*Math.PI));
    drawComicShoutText(e.text,0,0);
    ctx.restore();return;
  }
  if(e.kind==="ultimateBall"){
    const frame=Math.floor((elapsed*18)%8);
    const angle=Math.atan2(e.dy,e.dx);
    ctx.translate(e.x,e.y);
    ctx.rotate(angle);
    if(geontaekUltimateVortexSprite.complete&&geontaekUltimateVortexSprite.naturalWidth){
      const fw=geontaekUltimateVortexSprite.naturalWidth/4;
      const fh=geontaekUltimateVortexSprite.naturalHeight/2;
      const col=frame%4,row=Math.floor(frame/4);
      ctx.globalCompositeOperation="lighter";
      ctx.imageSmoothingEnabled=false;
      ctx.globalAlpha=.84;
      ctx.drawImage(geontaekUltimateVortexSprite,col*fw,row*fh,fw,fh,-395,-230,460,460);
    }
    ctx.globalCompositeOperation="source-over";
    ctx.globalAlpha=1;
    if(ultimateBallSprite.complete&&ultimateBallSprite.naturalWidth){
      const fw=ultimateBallSprite.naturalWidth/8,fh=ultimateBallSprite.naturalHeight;
      ctx.imageSmoothingEnabled=false;
      ctx.globalAlpha=.95;
      ctx.drawImage(ultimateBallSprite,fw*frame,0,fw,fh,-96,-48,192,96);
    }else{
      ctx.fillStyle="#eef8ff";
      ctx.beginPath();ctx.arc(22,0,28,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle="#9ee8ff";ctx.lineWidth=6;
      for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(-18-i*10,0,22+i*7,-1.8,1.8);ctx.stroke()}
    }
    ctx.restore();
    return;
  }
  if(e.kind==="ultimate"){
    const p=e.maxT?1-e.t/e.maxT:.5;
    const pulse=Math.sin(p*Math.PI);
    const len=700,wide=60+pulse*64;
    ctx.translate(e.x,e.y);
    ctx.rotate(Math.atan2(e.dy,e.dx));
    ctx.globalAlpha=.2+.22*pulse;
    ctx.fillStyle="#f1c85b";
    for(let i=0;i<24;i++){
      const x=30+i*26;
      const h=wide*(.28+((i%4)*.09));
      ctx.fillRect(x,-h/2+i%2*4,22,h);
    }
    ctx.globalAlpha=.92;
    ctx.fillStyle="#fff7d2";
    for(let i=0;i<34;i++){
      const x=16+i*19;
      const h=i%2===0?12:7;
      ctx.fillRect(x,-h/2,17,h);
    }
    ctx.fillStyle="#aeb9c4";
    for(let i=0;i<24;i++){
      const x=38+i*25;
      const y=((i*17)%Math.max(16,Math.floor(wide)))-wide/2;
      const s=i%3===0?10:5;
      ctx.fillRect(x,y,s,s);
      if(i%4===0)ctx.fillRect(x+6,-y*.5,4,4);
    }
    ctx.globalAlpha=.82;
    ctx.strokeStyle="#ffffff";
    ctx.lineWidth=2;
    for(let i=0;i<4;i++){
      ctx.beginPath();
      ctx.moveTo(22+i*4,-wide*.24+i*5);
      ctx.lineTo(len*.9, -wide*.12+i*7);
      ctx.stroke();
    }
    ctx.globalAlpha=1;
    ctx.save();
    ctx.rotate(pulse*.9);
    ctx.fillStyle="#111821";
    ctx.fillRect(4,-5,62,10);
    ctx.fillStyle="#dfe7ef";
    ctx.fillRect(7,-3,56,6);
    ctx.fillStyle="#8e9aa6";
    ctx.fillRect(58,-16,24,18);
    ctx.fillRect(74,-24,13,12);
    ctx.fillStyle="#fff4ba";
    ctx.fillRect(62,-12,10,4);
    ctx.restore();
  }
  if(e.kind==="satelliteBeam"){
    const p=1-e.t/e.maxT;
    const impact=e.impactAt||.55;
    const warm=clamp(p/impact,0,1);
    const after=clamp((p-impact)/(1-impact),0,1);
    const pulse=Math.sin(warm*Math.PI);
    ctx.translate(e.x,e.y);
    ctx.globalCompositeOperation="lighter";
    if(!e.boom){
      ctx.imageSmoothingEnabled=false;
      if(satelliteWarningSprite.complete&&satelliteWarningSprite.naturalWidth){
        const frames=6;
        const fw=Math.floor(satelliteWarningSprite.naturalWidth/frames),fh=satelliteWarningSprite.naturalHeight;
        const frame=Math.min(frames-1,Math.floor(warm*frames));
        const size=e.r*2.05;
        ctx.globalAlpha=.52+.36*pulse;
        ctx.drawImage(satelliteWarningSprite,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
      }else{
        const rr=e.r*(.72+.08*pulse);
        ctx.globalAlpha=.45+.18*pulse;
        ctx.strokeStyle="rgba(255,235,120,.85)";
        ctx.lineWidth=2;
        ctx.beginPath();ctx.arc(0,0,rr,0,Math.PI*2);ctx.stroke();
      }
    }else{
      const fade=1-after;
      const beamW=(e.r*.34)*(1+.16*Math.sin(elapsed*34));
      const beamH=760;
      const grad=ctx.createLinearGradient(0,-beamH,0,36);
      grad.addColorStop(0,"rgba(255,255,255,0)");
      grad.addColorStop(.18,"rgba(130,230,255,.28)");
      grad.addColorStop(.58,"rgba(255,255,220,.92)");
      grad.addColorStop(1,"rgba(255,238,100,.18)");
      ctx.globalAlpha=.86*fade;
      ctx.fillStyle=grad;
      ctx.beginPath();
      ctx.moveTo(-beamW*.32,-beamH);ctx.lineTo(beamW*.32,-beamH);ctx.lineTo(beamW,28);ctx.lineTo(-beamW,28);ctx.closePath();ctx.fill();
      ctx.globalAlpha=.55*fade;
      ctx.fillStyle="rgba(255,255,255,.95)";
      ctx.fillRect(-beamW*.22,-beamH*.82,beamW*.44,beamH*.86);
      ctx.strokeStyle="rgba(255,248,145,.9)";
      ctx.lineWidth=3;
      for(let i=0;i<3;i++){
        const x=Math.sin(elapsed*18+i*1.7)*beamW*(.45+i*.08);
        ctx.globalAlpha=(.25+.1*i)*fade;
        ctx.beginPath();ctx.moveTo(x,-beamH*(.82-.08*i));ctx.lineTo(x*.25,30);ctx.stroke();
      }
      ctx.imageSmoothingEnabled=false;
      if(satelliteImpactSprite.complete&&satelliteImpactSprite.naturalWidth){
        const frames=6;
        const fw=Math.floor(satelliteImpactSprite.naturalWidth/frames),fh=satelliteImpactSprite.naturalHeight;
        const frame=Math.min(frames-1,Math.floor(after*frames));
        const size=e.r*2.35*(1+after*.1);
        ctx.globalAlpha=.92*fade;
        ctx.drawImage(satelliteImpactSprite,fw*frame,0,fw,fh,-size/2,-size/2,size,size);
      }else{
        ctx.globalAlpha=.35*fade;
        ctx.fillStyle="rgba(255,245,130,.8)";ctx.beginPath();ctx.arc(0,0,e.r*(.45+after*.18),0,Math.PI*2);ctx.fill();
      }
    }
    ctx.globalCompositeOperation="source-over";
    ctx.restore();return;
  }
  if(e.kind==="zone"){ctx.strokeStyle=e.color;ctx.lineWidth=3;ctx.beginPath();ctx.arc(e.x,e.y,e.r*(e.boom?1.2:1),0,Math.PI*2);ctx.stroke();ctx.fillStyle=e.color;ctx.globalAlpha=.08;ctx.fill()}
  if(e.kind==="pulse"||e.kind==="pop"){ctx.strokeStyle=e.color;ctx.lineWidth=4;ctx.beginPath();ctx.arc(e.x,e.y,e.r*(1-e.t*.45),0,Math.PI*2);ctx.stroke()}
  ctx.restore();
}
function drawText(f){ctx.fillStyle=f.color;ctx.font="13px Malgun Gothic";ctx.textAlign="center";ctx.fillText(f.text,f.x,f.y)}
const activeSkillIconIndex={droneBot:0,orbitShield:1,barrier:2,littleDragon:3,freezerBird:4,satelliteBeam:5,damageAura:6};
const passiveSkillIconIndex={moveSpeed:0,xpGain:1,maxHealth:2,cooldownDown:3,attackSpeed:4,defenseUp:5,basicDamage:6,ultimateDodge:7};
function skillIconHtml(s){
  const isPassive=s.type==="passive";
  if(s.id==="golf"||s.id==="magnetRange"){
    if(s.id==="golf"&&player.characterId==="jiin")return `<b class="skill-icon basic" style="background-image:url('assets/skill_icon_jiin_heart.png');background-size:cover;background-position:center;background-repeat:no-repeat">${s.icon}</b>`;
    if(s.id==="golf"&&player.characterId==="homin")return `<b class="skill-icon basic" style="background-image:url('assets/skill_icon_homin_bubble.png');background-size:cover;background-position:center;background-repeat:no-repeat">${s.icon}</b>`;
    if(s.id==="golf"&&player.characterId==="seunggwan"){
      return `<b class="skill-icon basic" style="background-image:url('assets/seunggwan_iron_ball_icon.png');background-size:contain;background-position:center;background-repeat:no-repeat">${s.icon}</b>`;
    }
    const idx=s.id==="magnetRange"?2:(player.characterId==="sangil"?1:0);
    return `<b class="skill-icon basic" style="background-image:url('assets/player_basic_skill_icons.png');background-size:300% 100%;background-position:${idx*50}% 0">${s.icon}</b>`;
  }
  const idx=isPassive?passiveSkillIconIndex[s.id]:activeSkillIconIndex[s.id];
  if(idx===undefined)return `<b class="skill-symbol">${s.icon}</b>`;
  const col=idx%4,row=Math.floor(idx/4);
  return `<b class="skill-icon${isPassive?" passive":""}" style="background-position:${col*100/3}% ${row*100}%">${s.icon}</b>`;
}

function levelUpCandidates(allChoiceMode=false){
  const activeOwned=ownedActiveSkills().length;
  const passiveOwned=skills.filter(s=>s.type==="passive"&&s.level>0).length;
  return skills.filter(s=>{
    if(!allChoiceMode){
      if(s.type==="active"&&s.level<=0&&activeOwned>=3)return false;
      if(s.type==="passive"&&s.level<=0&&passiveOwned>=4)return false;
    }
    if(s.id==="littleDragon"&&s.level<=0&&active("freezerBird").level>0)return false;
    if(s.id==="freezerBird"&&s.level<=0&&active("littleDragon").level>0)return false;
    if(s.level<s.max)return true;
    return s.level>=s.max&&!s.evolved;
  });
}
levelUp=function(){
  const allChoiceMode=!!testLevelAllChoices;
  testLevelAllChoices=false;
  const available=levelUpCandidates(allChoiceMode);
  if(!available.length){
    player.skillsMastered=true;
    player.xp=0;
    levelChoices=[];
    selectedChoice=0;
    choicesEl.innerHTML="";
    choicesEl.classList.remove("test-all-choices");
    levelOverlay.classList.add("hidden");
    paused=false;
    last=performance.now();
    return;
  }
  player.xp-=player.next;
  player.level++;
  player.next=levelXpRequirement(player.level);
  paused=true;
  const picks=[];
  if(allChoiceMode){
    picks.push(...available.sort((a,b)=>{
      const order={basic:0,active:1,passive:2};
      return (order[a.type]??9)-(order[b.type]??9)||skillDisplayName(a).localeCompare(skillDisplayName(b),"ko");
    }));
  }else{
    while(picks.length<3&&available.length){
      const s=available.splice(Math.floor(Math.random()*available.length),1)[0];
      picks.push(s);
    }
  }
  if(!picks.length){
    player.skillsMastered=true;
    player.xp=0;
    levelChoices=[];
    selectedChoice=0;
    choicesEl.innerHTML="";
    choicesEl.classList.remove("test-all-choices");
    levelOverlay.classList.add("hidden");
    paused=false;
    last=performance.now();
    return;
  }
  levelChoices=picks;
  selectedChoice=0;
  choicesEl.classList.toggle("test-all-choices",allChoiceMode);
  choicesEl.innerHTML=picks.map((s,i)=>{
    const isEvolve=s.level>=s.max&&!s.evolved;
    const next=isEvolve?"\uC9C4\uD654":s.level?`Lv.${s.level+1}`:"\uD68D\uB4DD";
    const cardClass=isEvolve?"evolve-card":s.type==="active"||s.type==="basic"?"active-card":"passive-card";
    return `<button class="choice ${cardClass}" data-index="${i}" data-id="${s.id}"><div class="choice-art">${skillIconHtml(s)}</div><strong>${skillDisplayName(s)}${next?` ${next}`:""}</strong><p>${skillDisplayDesc(s)}</p></button>`;
  }).join("");
  updateChoiceSelection();
  levelOverlay.classList.remove("hidden");
};
confirmLevelChoice=function(){
  const s=levelChoices[selectedChoice];
  if(!s)return;
  if(s.level>=s.max&&!s.evolved){
    s.evolved=true;
    if(s.id==="droneBot")effects.push({kind:"droneEvolve",x:player.x,y:player.y-48,t:1.55,maxT:1.55,r:78,color:"#72f6ff",followDrone:true});
    if(s.id==="littleDragon")effects.push({kind:"dragonEvolve",x:player.x+62,y:player.y-58,t:1.85,maxT:1.85,r:90,color:"#ffb23a",followDragon:true});
    if(s.id==="freezerBird")effects.push({kind:"iceBirdEvolve",x:player.x+62,y:player.y-58,t:1.85,maxT:1.85,r:90,color:"#bff8ff",followIceBird:true});
    if(s.id==="orbitShield"){s.shieldMaxSeen=undefined;ensureOrbitShieldState(s);effects.push({kind:"orbitShieldEvolve",x:player.x,y:player.y,t:1.35,maxT:1.35,r:88,color:"#8fffff"});}
    if(s.id==="damageAura")effects.push({kind:"basicEvolve",x:player.x,y:player.y-38,t:1.25,maxT:1.25,r:96,color:"#ffe47a"});
    if(s.id==="barrier"){player.skillBarrierMax=barrierMaxValue(s);player.skillBarrier=player.skillBarrierMax;player.barrierRegenT=0;effects.push({kind:"barrierRestore",x:player.x,y:player.y,t:.75,maxT:.75,r:76,color:"#9ee9ff"});}
    if(s.id==="golf")effects.push({kind:"basicEvolve",x:player.x,y:player.y-48,t:1.35,maxT:1.35,r:76,color:player.characterId==="jiin"?"#ff7ab6":player.characterId==="homin"?"#ff8fd7":player.characterId==="seunggwan"?"#d8d2c2":player.characterId==="sangil"?"#f7d889":"#d7e0e8"});
  }else{
    s.level++;
    if(s.id==="barrier"){
      player.skillBarrierMax=barrierMaxValue(s);
      player.skillBarrier=player.skillBarrierMax;
      player.barrierRegenT=0;
      effects.push({kind:"barrierRestore",x:player.x,y:player.y,t:.55,maxT:.55,r:66,color:"#9ee9ff"});
    }
    if(s.id==="maxHealth"){
      const before=player.maxHp;
      updatePassiveSystems(0);
      player.hp=Math.min(player.maxHp,player.hp+Math.max(8,player.maxHp-before));
    }
  }
  if(!levelUpCandidates(false).length){
    player.skillsMastered=true;
    player.xp=0;
  }
  levelChoices=[];
  choicesEl.classList.remove("test-all-choices");
  levelOverlay.classList.add("hidden");
  paused=false;
  last=performance.now();
  if(!player.skillsMastered&&player.xp>=player.next){
    levelUp();
    return;
  }
};
skillDisplayName=function(s){
  if(s.id==="golf"&&player.characterId==="sangil")return "등산스틱 클로";
  if(s.id==="golf"&&player.characterId==="seunggwan")return "철공 포환";
  if(s.id==="golf"&&player.characterId==="jiin")return "하트 연발";
  if(s.id==="golf"&&player.characterId==="homin")return "소울 버블";
  return s.name;
};
skillDisplayDesc=function(s){
  if(player.characterId==="sangil"&&s.id==="golf")return "투사체 없이 전방 근접 범위만 공격합니다.";
  if(player.characterId==="seunggwan"&&s.id==="golf")return "철공을 포물선으로 던져 낙하지점 주변에 스플래시 피해를 줍니다.";
  if(player.characterId==="jiin"&&s.id==="golf")return "\uB808\uBCA8\uC5D0 \uB530\uB77C \uCD5C\uB300 3\uBA85\uC758 \uC801\uC5D0\uAC8C \uD558\uD2B8\uB97C \uB2E4\uC911 \uC5F0\uBC1C\uD569\uB2C8\uB2E4. \uC9C4\uD654\uD558\uBA74 3\uBA85\uC744 \uD5A5\uD55C 6\uBC1C \uC5F0\uBC1C\uB85C \uAC15\uD654\uB418\uBA70, \uD544\uC0B4\uAE30 \uC911\uC5D0\uB294 \uAC19\uC740 \uBC1C\uC218\uB97C \uB354 \uBE60\uB974\uAC8C \uC5F0\uC0AC\uD569\uB2C8\uB2E4.";
  if(player.characterId==="homin"&&s.id==="golf")return "주변 적을 향해 투명한 소울 버블을 발사합니다. 터지면 범위 피해와 연쇄로 튕기는 작은 버블을 뿌립니다.";
  return s.desc;
};
renderSkillHud=function(){
  const basic=active("golf");
  const basicHud=basic?`<div class="basic-skill-hud"><div class="slot skill-mini">${skillIconHtml(basic)}<small>${basic.evolved?"E":basic.level}</small></div><small>${skillDisplayName(basic)}</small></div>`:"";
  const renderGroup=(type)=>{
    const limit=type==="passive"?4:3;
    const owned=skills.filter(s=>s.type===type&&s.level>0).slice(0,limit);
    const slots=[];
    for(let i=0;i<limit;i++){
      const s=owned[i];
      slots.push(s
        ?`<div class="slot skill-mini">${skillIconHtml(s)}<small>${s.evolved?"E":s.level}</small></div>`
        :`<div class="slot empty"></div>`);
    }
    return `<div class="skill-group ${type}">${slots.join("")}</div>`;
  };
  skillHud.innerHTML=basicHud+renderGroup("active")+renderGroup("passive");
};

const __mobileUltimateIconCache={};
const __mobileUltimateIconPending={};
let __mobileUltimateLastCharacter="";
let __mobileUltimateLastCooling=false;
function __setMobileUltimateIcon(characterId){
  const hasMobile=typeof mobileUltimateBtn!=="undefined"&&mobileUltimateBtn;
  const hasPc=typeof ultimateBtn!=="undefined"&&ultimateBtn;
  if(!hasMobile&&!hasPc)return;
  const src=characterId==="sangil"?"assets/ultimate_icon_sangil.png":characterId==="seunggwan"?"assets/ultimate_icon_seunggwan_chroma.png":characterId==="jiin"?"assets/ultimate_icon_jiin.png":characterId==="homin"?"assets/skill_icon_homin_bubble.png":"assets/ultimate_icon_geontaek_chroma.png";
  const rawUrl=`url("${src}")`;
  if(hasMobile)mobileUltimateBtn.style.setProperty("--ultimate-icon-url",rawUrl);
  if(hasPc)ultimateBtn.style.setProperty("--ultimate-icon-url",rawUrl);
  if(__mobileUltimateLastCharacter===characterId&&__mobileUltimateIconCache[src]){
    const url=`url("${__mobileUltimateIconCache[src]}")`;
    if(hasMobile)mobileUltimateBtn.style.setProperty("--ultimate-icon-url",url);
    if(hasPc)ultimateBtn.style.setProperty("--ultimate-icon-url",url);
    return;
  }
  __mobileUltimateLastCharacter=characterId;
  if(__mobileUltimateIconCache[src]){
    const url=`url("${__mobileUltimateIconCache[src]}")`;
    if(hasMobile)mobileUltimateBtn.style.setProperty("--ultimate-icon-url",url);
    if(hasPc)ultimateBtn.style.setProperty("--ultimate-icon-url",url);
    return;
  }
  if(__mobileUltimateIconPending[src])return;
  __mobileUltimateIconPending[src]=true;
  const img=new Image();
  img.onload=()=>{
    try{
      const srcCanvas=document.createElement("canvas");
      srcCanvas.width=img.naturalWidth||img.width;
      srcCanvas.height=img.naturalHeight||img.height;
      const srcCtx=srcCanvas.getContext("2d");
      srcCtx.imageSmoothingEnabled=false;
      srcCtx.drawImage(img,0,0);
      const pixels=srcCtx.getImageData(0,0,srcCanvas.width,srcCanvas.height);
      const data=pixels.data;
      let minX=srcCanvas.width,minY=srcCanvas.height,maxX=0,maxY=0;
      for(let i=0;i<data.length;i+=4){
        const r=data[i],g=data[i+1],b=data[i+2];
        if(src!=="assets/ultimate_icon_jiin.png"&&g>140&&r<125&&b<125)data[i+3]=0;
        if(data[i+3]>8){
          const px=(i/4)%srcCanvas.width;
          const py=Math.floor((i/4)/srcCanvas.width);
          if(px<minX)minX=px;if(px>maxX)maxX=px;if(py<minY)minY=py;if(py>maxY)maxY=py;
        }
      }
      srcCtx.putImageData(pixels,0,0);
      const canvas=document.createElement("canvas");
      canvas.width=160;canvas.height=160;
      const ctx=canvas.getContext("2d");
      ctx.imageSmoothingEnabled=false;
      const hasBox=maxX>minX&&maxY>minY;
      const bw=hasBox?maxX-minX+1:srcCanvas.width;
      const bh=hasBox?maxY-minY+1:srcCanvas.height;
      const side=Math.max(bw,bh);
      const sx=hasBox?minX-(side-bw)/2:0;
      const sy=hasBox?minY-(side-bh)/2:0;
      ctx.drawImage(srcCanvas,sx,sy,side,side,8,8,144,144);
      __mobileUltimateIconCache[src]=canvas.toDataURL("image/png");
      if(hasMobile&&mobileUltimateBtn.dataset.character===characterId){
        mobileUltimateBtn.style.setProperty("--ultimate-icon-url",`url("${__mobileUltimateIconCache[src]}")`);
      }
      if(hasPc&&ultimateBtn.dataset.character===characterId){
        ultimateBtn.style.setProperty("--ultimate-icon-url",`url("${__mobileUltimateIconCache[src]}")`);
      }
    }catch(err){}finally{
      __mobileUltimateIconPending[src]=false;
    }
  };
  img.onerror=()=>{__mobileUltimateIconPending[src]=false;};
  img.src=src;
}
const __hanFightUpdateUltimateButton=updateUltimateButton;
updateUltimateButton=function(){
  __hanFightUpdateUltimateButton();
  if(typeof mobileUltimateBtn==="undefined"||!mobileUltimateBtn)return;
  const characterId=typeof player!=="undefined"&&player&&player.characterId==="sangil"?"sangil":typeof player!=="undefined"&&player&&player.characterId==="seunggwan"?"seunggwan":typeof player!=="undefined"&&player&&player.characterId==="jiin"?"jiin":typeof player!=="undefined"&&player&&player.characterId==="homin"?"homin":"geontaek";
  let ratio=1;
  if(typeof ultimateChargeRatio==="function"){
    ratio=Math.max(0,Math.min(1,ultimateChargeRatio()));
  }
  const cooling=Math.max(0,1-ratio);
  mobileUltimateBtn.dataset.character=characterId;
  mobileUltimateBtn.textContent="";
  mobileUltimateBtn.setAttribute("aria-label","필살기");
  __setMobileUltimateIcon(characterId);
  const isCooling=cooling>.01;
  if(isCooling!==__mobileUltimateLastCooling){
    __mobileUltimateLastCooling=isCooling;
    mobileUltimateBtn.style.setProperty("--cooldown-opacity",isCooling?"1":"0");
    mobileUltimateBtn.classList.toggle("is-cooling",isCooling);
  }
};
const __hanFightUpdateUltimateButtonPc=updateUltimateButton;
updateUltimateButton=function(){
  __hanFightUpdateUltimateButtonPc();
  if(typeof ultimateBtn==="undefined"||!ultimateBtn)return;
  const characterId=typeof player!=="undefined"&&player&&player.characterId==="sangil"?"sangil":typeof player!=="undefined"&&player&&player.characterId==="seunggwan"?"seunggwan":typeof player!=="undefined"&&player&&player.characterId==="jiin"?"jiin":typeof player!=="undefined"&&player&&player.characterId==="homin"?"homin":"geontaek";
  const ratio=typeof ultimateChargeRatio==="function"?Math.max(0,Math.min(1,ultimateChargeRatio())):1;
  const isCooling=1-ratio>.01;
  const src=characterId==="sangil"?"assets/ultimate_icon_sangil.png":characterId==="seunggwan"?"assets/ultimate_icon_seunggwan_chroma.png":characterId==="jiin"?"assets/ultimate_icon_jiin.png":characterId==="homin"?"assets/skill_icon_homin_bubble.png":"assets/ultimate_icon_geontaek_chroma.png";
  const rawUrl=`url("${src}")`;
  ultimateBtn.style.setProperty("--ultimate-icon-url",rawUrl);
  ultimateBtn.dataset.character=characterId;
  ultimateBtn.textContent="";
  ultimateBtn.setAttribute("aria-label","필살기 SPACE");
  ultimateBtn.classList.toggle("is-cooling",isCooling);
  ultimateBtn.style.setProperty("--cooldown-opacity",isCooling?"1":"0");
  if(__mobileUltimateIconCache[src])ultimateBtn.style.setProperty("--ultimate-icon-url",`url("${__mobileUltimateIconCache[src]}")`);
  else __setMobileUltimateIcon(characterId);
};
/* CrossFit stage late overrides: BGM, dragon charge, emotion CEO redesign */
(function(){
  if(typeof stageBgmSources!=="undefined"){
    stageBgmSources.gym={normal:"assets/bgm/cross_gym_normal.mp3",boss:"assets/bgm/cross_gym_boss.mp3"};
  }

  function hfAngleToPlayer(from){
    return Math.atan2((player?.y||0)-from.y,(player?.x||0)-from.x);
  }
  function hfDamagePlayer(amount){
    if(!player||player.dead)return;
    if(typeof testInvincible!=="undefined"&&testInvincible)return;
    if(characterUltimateInvincible())return;
    if(typeof player.invuln==="number"&&player.invuln>0)return;
    player.hp=Math.max(0,(player.hp||0)-amount);
    player.hitFlash=.25;
    player.invuln=Math.max(player.invuln||0,.18);
    if(player.hp<=0&&typeof gameOver==="function")gameOver();
  }
  function hfArenaClampX(x,pad=58){
    if(typeof arenaFence==="undefined"||!arenaFence)return x;
    return Math.max(arenaFence.x+pad,Math.min(arenaFence.x+arenaFence.w-pad,x));
  }
  function hfArenaClampY(y,pad=58){
    if(typeof arenaFence==="undefined"||!arenaFence)return y;
    return Math.max(arenaFence.y+pad,Math.min(arenaFence.y+arenaFence.h-pad,y));
  }
  function hfClearCeoEffects(){
    if(typeof effects==="undefined")return;
    for(let i=effects.length-1;i>=0;i--){
      if(["emotionDashWarn","emotionSlamWarn","emotionSlamImpact","emotionRoarWarn","emotionRoarBlast","cognacBottle","cognacThrow"].includes(effects[i].kind))effects.splice(i,1);
    }
  }
  function hfBossScale(b){
    const current=typeof currentStage!=="undefined"?currentStage:1;
    const s=Math.max(1,b.stage||current||1);
    return {dmg:1+(s-1)*.17,cd:Math.max(.68,1-(s-1)*.055),speed:1+(s-1)*.045};
  }
  function hfBeginCeoDash(b){
    const sc=hfBossScale(b);
    const a=hfAngleToPlayer(b);
    const len=250+(b.stage||1)*16;
    b.ceoMode="dashWarn";
    b.state="pullCast";
    b.stateT=.46*sc.cd;
    b.dashAngle=a;
    b.dashLen=len;
    b.dashStartX=b.x;
    b.dashStartY=b.y;
    b.dashEndX=hfArenaClampX(b.x+Math.cos(a)*len);
    b.dashEndY=hfArenaClampY(b.y+Math.sin(a)*len);
    effects.push({kind:"emotionDashWarn",x:b.x,y:b.y,angle:a,len:len,w:58,t:b.stateT,maxT:b.stateT});
    if(typeof showBossQuote==="function")showBossQuote(b,"사장님 간다아아!",1.15);
  }
  function hfBeginCeoRoar(b){
    const sc=hfBossScale(b);
    b.ceoMode="roarCharge";
    b.state="pushCast";
    b.stateT=3.15*sc.cd;
    b.roarThrowT=.95;
    b.roarChargeT=b.stateT-b.roarThrowT;
    b.roarHit=false;
    b.cognacBottles=[];
    const cx=(typeof arenaFence!=="undefined"&&arenaFence)?arenaFence.x+arenaFence.w/2:b.x;
    const cy=(typeof arenaFence!=="undefined"&&arenaFence)?arenaFence.y+arenaFence.h/2:b.y;
    const radius=(typeof arenaFence!=="undefined"&&arenaFence)?Math.min(arenaFence.w,arenaFence.h)*.32:230;
    const base=Math.atan2(player.y-b.y,player.x-b.x)+Math.PI*.15;
    for(let i=0;i<3;i++){
      const a=base+i*Math.PI*2/3;
      const bottle={x:hfArenaClampX(cx+Math.cos(a)*radius,70),y:hfArenaClampY(cy+Math.sin(a)*radius,70)};
      const throwT=.72+i*.12;
      b.cognacBottles.push(bottle);
      effects.push({kind:"cognacThrow",fromX:b.x,fromY:b.y,x:bottle.x,y:bottle.y,t:throwT,maxT:throwT});
      effects.push({kind:"cognacBottle",x:bottle.x,y:bottle.y,t:b.stateT+1.1+throwT,maxT:b.stateT+1.1+throwT,delay:throwT});
    }
    effects.push({kind:"emotionRoarWarn",x:b.x,y:b.y,t:b.roarChargeT,maxT:b.roarChargeT,boss:b,delay:b.roarThrowT,bottles:b.cognacBottles});
    if(typeof showBossQuote==="function")showBossQuote(b,"사장은 너무 외로워 ㅠㅠ",1.25);
  }
  function hfPlayerBehindBottle(b){
    const dx=player.x-b.x,dy=player.y-b.y;
    const dist=Math.hypot(dx,dy);
    if(dist<1)return false;
    const ux=dx/dist,uy=dy/dist;
    const bottles=b.cognacBottles||[];
    for(const bottle of bottles){
      const bx=bottle.x-b.x,by=bottle.y-b.y;
      const along=bx*ux+by*uy;
      if(along<42||along>dist-18)continue;
      const side=Math.abs(bx*uy-by*ux);
      if(side<118)return true;
    }
    return false;
  }
  function hfUpdateEmotionCeo(b,dt){
    const sc=hfBossScale(b);
    b.hit=Math.max(0,(b.hit||0)-dt);
    b.slow=Math.max(0,(b.slow||0)-dt);
    b.inv=Math.max(0,(b.inv||0)-dt);
    if(!Number.isFinite(b.x)||!Number.isFinite(b.y)){
      b.x=(typeof arenaFence!=="undefined"&&arenaFence)?arenaFence.x+arenaFence.w/2:player.x+220;
      b.y=(typeof arenaFence!=="undefined"&&arenaFence)?arenaFence.y+120:player.y-220;
    }
    if(b.state==="intro"){
      b.stateT=(b.stateT||0)-dt;
      if(b.stateT<=0){b.state="idle";b.ceoMode="idle";b.patternCd=1.35*sc.cd;b.attackCd=.65*sc.cd}
      return;
    }
    if(b.ceoMode==="dashWarn"){
      b.stateT-=dt;
      if(b.stateT<=0){
        b.ceoMode="dashMove";
        b.state="idle";
        b.stateT=.24;
        b.dashMoveT=b.stateT;
      }
      return;
    }
    if(b.ceoMode==="dashMove"){
      b.stateT-=dt;
      const p=1-Math.max(0,b.stateT)/(b.dashMoveT||1);
      const ease=1-Math.pow(1-p,2);
      b.x=b.dashStartX+(b.dashEndX-b.dashStartX)*ease;
      b.y=b.dashStartY+(b.dashEndY-b.dashStartY)*ease;
      b.dir={x:Math.cos(b.dashAngle||0),y:Math.sin(b.dashAngle||0)};
      if(Math.hypot(player.x-b.x,player.y-b.y)<64)hfDamagePlayer((22+(b.stage||1)*5)*sc.dmg);
      if(b.stateT<=0){
        b.x=b.dashEndX;b.y=b.dashEndY;
        b.ceoMode="slamJump";
        b.state="pullCast";
        b.stateT=.48*sc.cd;
        b.slamJumpT=b.stateT;
        b.slamR=132+(b.stage||1)*4;
        effects.push({kind:"emotionSlamWarn",x:b.x,y:b.y,r:b.slamR,t:b.stateT,maxT:b.stateT});
      }
      return;
    }
    if(b.ceoMode==="slamJump"){
      b.stateT-=dt;
      b.jumpLift=Math.sin((1-Math.max(0,b.stateT)/(b.slamJumpT||.48))*Math.PI)*56;
      if(b.stateT<=0){
        const r=b.slamR||140;
        b.jumpLift=0;
        effects.push({kind:"emotionSlamImpact",x:b.x,y:b.y,r:r,t:.56,maxT:.56});
        if(Math.hypot(player.x-b.x,player.y-b.y)<r)hfDamagePlayer((34+(b.stage||1)*7)*sc.dmg);
        b.ceoMode="idle";
        b.state="idle";
        b.patternCd=2.1*sc.cd;
        b.attackCd=.55*sc.cd;
      }
      return;
    }
    if(b.ceoMode==="roarCharge"){
      b.stateT-=dt;
      if(b.stateT<.38&&!b.roarHit){
        b.roarHit=true;
        effects.push({kind:"emotionRoarBlast",x:b.x,y:b.y,t:.7,maxT:.7,boss:b,bottles:b.cognacBottles});
        if(!hfPlayerBehindBottle(b))hfDamagePlayer((46+(b.stage||1)*9)*sc.dmg);
      }
      if(b.stateT<=0){
        hfClearCeoEffects();
        b.ceoMode="idle";
        b.state="idle";
        b.patternCd=2.35*sc.cd;
        b.attackCd=.7*sc.cd;
      }
      return;
    }
    const dx=player.x-b.x,dy=player.y-b.y,d=Math.hypot(dx,dy)||1;
    b.dir={x:dx/d,y:dy/d};
    const keep=260;
    const moveSpeed=b.speed||b.spd||82;
    if(d>keep+40){b.x+=dx/d*moveSpeed*dt*.55*sc.speed;b.y+=dy/d*moveSpeed*dt*.55*sc.speed}
    else if(d<keep-50){b.x-=dx/d*moveSpeed*dt*.35;b.y-=dy/d*moveSpeed*dt*.35}
    b.attackCd=(b.attackCd||0)-dt;
    if(b.attackCd<=0){
      if(typeof beginEmotionTearBurst==="function")beginEmotionTearBurst(b,5+Math.min(3,Math.floor((b.stage||1)/2)));
      b.attackCd=(1.15-.04*Math.min(5,(b.stage||1)))*sc.cd;
    }
    b.patternCd=(b.patternCd||0)-dt;
    if(b.patternCd<=0){
      b.ceoPattern=(b.ceoPattern||0)+1;
      if(b.ceoPattern%2)hfBeginCeoDash(b); else hfBeginCeoRoar(b);
    }
  }
  if(typeof updateEmotionCeoV2==="function")updateEmotionCeoV2=hfUpdateEmotionCeo;

  if(typeof drawEffect==="function"){
    const originalDrawEffect=drawEffect;
    drawEffect=function(e){
      if(e.kind==="dragonCharge"){
        if(e.followDragon&&typeof dragonSlot==="function"&&typeof active==="function"){
          const s=active("littleDragon");
          if(s&&s.level){
            const slot=dragonSlot(s.level,false,null);
            e.x=slot.x+Math.cos(e.angle||0)*24;
            e.y=slot.y+Math.sin(e.angle||0)*24;
          }
        }
        const p=1-e.t/e.maxT;
        ctx.save();
        ctx.translate(e.x,e.y);
        ctx.rotate(e.angle||0);
        const r=(e.r||18)*(.55+p*.75);
        ctx.globalAlpha=.25+.45*Math.sin(p*Math.PI);
        ctx.fillStyle="#ff7a1a";
        ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();
        ctx.globalAlpha=.85;
        ctx.strokeStyle="#fff4aa";ctx.lineWidth=3;
        ctx.beginPath();ctx.arc(0,0,r*.72,-p*5,p*5);ctx.stroke();
        ctx.strokeStyle="#ffcc45";ctx.lineWidth=2;
        for(let i=0;i<4;i++){
          const a=i*Math.PI/2+p*5;
          ctx.beginPath();ctx.moveTo(Math.cos(a)*r*1.2,Math.sin(a)*r*1.2);ctx.lineTo(Math.cos(a)*r*.48,Math.sin(a)*r*.48);ctx.stroke();
        }
        ctx.restore();
        return;
      }
      if(e.kind==="emotionDashWarn"){
        const p=1-e.t/e.maxT;
        ctx.save();ctx.translate(e.x,e.y);ctx.rotate(e.angle||0);
        ctx.globalAlpha=.2+.35*Math.sin(p*Math.PI*3);
        ctx.fillStyle="#ff3957";ctx.fillRect(0,-e.w/2,e.len,e.w);
        ctx.globalAlpha=.85;ctx.strokeStyle="#ffb6c1";ctx.lineWidth=3;ctx.strokeRect(0,-e.w/2,e.len,e.w);
        ctx.restore();return;
      }
      if(e.kind==="emotionSlamWarn"){
        const p=1-e.t/e.maxT;
        ctx.save();ctx.globalAlpha=.18+.22*Math.sin(p*Math.PI*4);ctx.fillStyle="#8f1f27";
        ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();
        ctx.globalAlpha=.75;
        ctx.fillStyle="#ff6842";
        const dots=28;
        const rr=e.r*(.9+.08*Math.sin(p*Math.PI*6));
        for(let i=0;i<dots;i++){
          const a=i*Math.PI*2/dots+p*1.8;
          const w=i%3===0?10:6;
          ctx.save();
          ctx.translate(e.x+Math.cos(a)*rr,e.y+Math.sin(a)*rr);
          ctx.rotate(a);
          ctx.fillRect(-w/2,-3,w,6);
          ctx.restore();
        }
        ctx.restore();return;
      }
      if(e.kind==="emotionSlamImpact"){
        const p=1-e.t/e.maxT;
        ctx.save();
        const r=e.r||140;
        ctx.globalAlpha=.36*(1-p);
        ctx.fillStyle="#b7272d";
        ctx.beginPath();
        ctx.arc(e.x,e.y,r*(.72+p*.25),0,Math.PI*2);
        ctx.fill();
        ctx.globalAlpha=.9*(1-p);
        for(let i=0;i<42;i++){
          const a=i*Math.PI*2/42+(e.seed||0);
          const spread=r*(.18+p*.82)*(0.72+((i*17)%23)/40);
          const w=i%4===0?16:i%3===0?11:7;
          const h=i%4===0?8:5;
          ctx.save();
          ctx.translate(e.x+Math.cos(a)*spread,e.y+Math.sin(a)*spread*.72);
          ctx.rotate(a);
          ctx.fillStyle=i%5===0?"#5a2d25":i%3===0?"#ff823b":"#d93631";
          ctx.fillRect(-w/2,-h/2,w,h);
          ctx.restore();
        }
        ctx.globalAlpha=.75*(1-p);
        ctx.strokeStyle="#6b2521";
        ctx.lineWidth=3;
        for(let i=0;i<11;i++){
          const a=i*Math.PI*2/11+.18;
          ctx.beginPath();
          ctx.moveTo(e.x+Math.cos(a)*18,e.y+Math.sin(a)*13);
          ctx.lineTo(e.x+Math.cos(a)*r*(.55+p*.22),e.y+Math.sin(a)*r*(.38+p*.16));
          ctx.stroke();
        }
        ctx.restore();return;
      }
      if(e.kind==="cognacBottle"){
        if(e.delay>0)return;
        ctx.save();ctx.translate(e.x,e.y);ctx.rotate(-.18);
        if(typeof emotionCognacSprite!=="undefined"&&emotionCognacSprite.complete&&emotionCognacSprite.naturalWidth){
          ctx.drawImage(emotionCognacSprite,-82,-118,164,164);
        }else{
          ctx.fillStyle="#6b3a16";ctx.fillRect(-22,-74,44,126);
          ctx.fillStyle="#d2a35b";ctx.fillRect(-30,-26,60,58);
          ctx.fillStyle="#2e1a0d";ctx.fillRect(-14,-106,28,40);
          ctx.strokeStyle="#f6d08d";ctx.lineWidth=5;ctx.strokeRect(-30,-26,60,58);
        }
        ctx.restore();return;
      }
      if(e.kind==="cognacThrow"){
        const p=1-e.t/e.maxT;
        const x=e.fromX+(e.x-e.fromX)*p,y=e.fromY+(e.y-e.fromY)*p-90*Math.sin(p*Math.PI);
        ctx.save();ctx.translate(x,y);ctx.rotate(p*8);
        if(typeof emotionCognacSprite!=="undefined"&&emotionCognacSprite.complete&&emotionCognacSprite.naturalWidth){
          ctx.drawImage(emotionCognacSprite,-56,-80,112,112);
        }else{
          ctx.fillStyle="#6b3a16";ctx.fillRect(-14,-45,28,80);ctx.fillStyle="#d2a35b";ctx.fillRect(-22,-14,44,38);
        }
        ctx.restore();return;
      }
      if(e.kind==="emotionRoarWarn"){
        if(e.delay>0)return;
        const p=1-e.t/e.maxT;
        const bottles=e.bottles||e.boss?.cognacBottles||[];
        ctx.save();
        const zone=typeof arenaFence!=="undefined"&&arenaFence
          ?arenaFence
          :{x:e.x-420,y:e.y-320,w:840,h:640};
        const maxR=Math.hypot(zone.w,zone.h)*.72;
        const spread=Math.min(1,p*1.08);
        const waveR=80+maxR*spread;
        const isHidden=(x,y)=>{
          for(const bottle of bottles){
            const a=Math.atan2(bottle.y-e.y,bottle.x-e.x);
            const dx=x-e.x,dy=y-e.y;
            const along=dx*Math.cos(a)+dy*Math.sin(a);
            const side=Math.abs(dx*(-Math.sin(a))+dy*Math.cos(a));
            if(along>Math.hypot(bottle.x-e.x,bottle.y-e.y)-22&&side<76+along*.12)return true;
          }
          return false;
        };
        ctx.beginPath();
        ctx.rect(zone.x,zone.y,zone.w,zone.h);
        ctx.clip();
        ctx.globalAlpha=.09+.04*Math.sin(p*Math.PI*5);
        ctx.fillStyle="#d82135";
        ctx.fillRect(zone.x,zone.y,zone.w,zone.h);
        const grad=ctx.createRadialGradient(e.x,e.y,Math.max(12,waveR-110),e.x,e.y,waveR);
        grad.addColorStop(0,"rgba(216,33,53,0)");
        grad.addColorStop(.72,"rgba(255,68,54,.16)");
        grad.addColorStop(1,"rgba(255,178,76,.34)");
        ctx.globalAlpha=1;
        ctx.fillStyle=grad;
        ctx.beginPath();
        ctx.arc(e.x,e.y,waveR,0,Math.PI*2);
        ctx.fill();
        ctx.globalCompositeOperation="destination-out";
        for(const bottle of bottles){
          const a=Math.atan2(bottle.y-e.y,bottle.x-e.x);
          const d=Math.hypot(bottle.x-e.x,bottle.y-e.y);
          const far=Math.hypot(zone.w,zone.h)*1.35;
          const nearW=64,farW=190;
          const nx=-Math.sin(a),ny=Math.cos(a);
          const sx=e.x+Math.cos(a)*(d-18);
          const sy=e.y+Math.sin(a)*(d-18);
          const ex=e.x+Math.cos(a)*far;
          const ey=e.y+Math.sin(a)*far;
          ctx.beginPath();
          ctx.moveTo(sx+nx*nearW,sy+ny*nearW);
          ctx.lineTo(ex+nx*farW,ey+ny*farW);
          ctx.lineTo(ex-nx*farW,ey-ny*farW);
          ctx.lineTo(sx-nx*nearW,sy-ny*nearW);
          ctx.closePath();
          ctx.fill();
        }
        ctx.globalCompositeOperation="source-over";
        ctx.globalAlpha=.36+.16*Math.sin(p*Math.PI*6);
        ctx.fillStyle="#ff5a43";
        for(let i=0;i<88;i++){
          const seed=i*97.13;
          const x=zone.x+((seed*37+elapsed*12)%zone.w);
          const y=zone.y+((seed*53+Math.sin(elapsed+i)*18)%zone.h);
          if(isHidden(x,y))continue;
          ctx.fillRect(x,y,8+(i%3)*4,3);
        }
        ctx.globalAlpha=.72;
        ctx.fillStyle="#ffd07a";
        const dashes=56;
        for(let i=0;i<dashes;i++){
          const a=i*Math.PI*2/dashes+elapsed*.9;
          const x=e.x+Math.cos(a)*waveR;
          const y=e.y+Math.sin(a)*waveR;
          if(x<zone.x||x>zone.x+zone.w||y<zone.y||y>zone.y+zone.h||isHidden(x,y))continue;
          ctx.save();
          ctx.translate(x,y);
          ctx.rotate(a+Math.PI/2);
          ctx.fillRect(-8,-2,16,4);
          ctx.restore();
        }
        for(const bottle of bottles){
          const a=Math.atan2(bottle.y-e.y,bottle.x-e.x);
          ctx.globalAlpha=.55+.2*Math.sin(elapsed*8);
          ctx.fillStyle="#ffc85a";
          ctx.save();
          ctx.translate(bottle.x,bottle.y);
          ctx.rotate(a);
          ctx.fillRect(18,-5,48,10);
          ctx.restore();
        }
        ctx.restore();return;
      }
      if(e.kind==="emotionRoarBlast"){
        const bottles=e.bottles||e.boss?.cognacBottles||[];
        const p=1-e.t/e.maxT;
        ctx.save();
        const zone=typeof arenaFence!=="undefined"&&arenaFence
          ?arenaFence
          :{x:e.x-420,y:e.y-320,w:840,h:640};
        const isHidden=(x,y)=>{
          for(const bottle of bottles){
            const a=Math.atan2(bottle.y-e.y,bottle.x-e.x);
            const dx=x-e.x,dy=y-e.y;
            const along=dx*Math.cos(a)+dy*Math.sin(a);
            const side=Math.abs(dx*(-Math.sin(a))+dy*Math.cos(a));
            if(along>Math.hypot(bottle.x-e.x,bottle.y-e.y)-22&&side<82+along*.13)return true;
          }
          return false;
        };
        ctx.beginPath();
        ctx.rect(zone.x,zone.y,zone.w,zone.h);
        ctx.clip();
        ctx.globalAlpha=.28*(1-p*.25);
        ctx.fillStyle="#e12a35";
        ctx.fillRect(zone.x,zone.y,zone.w,zone.h);
        ctx.globalCompositeOperation="destination-out";
        for(const bottle of bottles){
          const a=Math.atan2(bottle.y-e.y,bottle.x-e.x);
          const d=Math.hypot(bottle.x-e.x,bottle.y-e.y);
          const far=Math.hypot(zone.w,zone.h)*1.35;
          const nearW=70,farW=210;
          const nx=-Math.sin(a),ny=Math.cos(a);
          const sx=e.x+Math.cos(a)*(d-18);
          const sy=e.y+Math.sin(a)*(d-18);
          const ex=e.x+Math.cos(a)*far;
          const ey=e.y+Math.sin(a)*far;
          ctx.beginPath();
          ctx.moveTo(sx+nx*nearW,sy+ny*nearW);
          ctx.lineTo(ex+nx*farW,ey+ny*farW);
          ctx.lineTo(ex-nx*farW,ey-ny*farW);
          ctx.lineTo(sx-nx*nearW,sy-ny*nearW);
          ctx.closePath();
          ctx.fill();
        }
        ctx.globalCompositeOperation="source-over";
        ctx.globalAlpha=.86*(1-p);
        for(let i=0;i<120;i++){
          const seed=i*61.7;
          const x=zone.x+((seed*29+elapsed*80)%zone.w);
          const y=zone.y+((seed*41+Math.sin(elapsed*5+i)*22)%zone.h);
          if(isHidden(x,y))continue;
          ctx.fillStyle=i%5===0?"#ffb45b":i%3===0?"#7d1f24":"#ff413a";
          ctx.fillRect(x,y,10+(i%4)*4,4);
        }
        for(const bottle of bottles){
          const a=Math.atan2(bottle.y-e.y,bottle.x-e.x);
          ctx.globalAlpha=.72*(1-p);
          ctx.fillStyle="#ffcf58";
          ctx.save();
          ctx.translate(bottle.x,bottle.y);
          ctx.rotate(a);
          ctx.fillRect(18,-7,64,14);
          ctx.restore();
          for(let i=0;i<12;i++){
            const sa=a+(i-5.5)*.18;
            const dist=26+(i%4)*9+p*34;
            ctx.globalAlpha=.8*(1-p);
            ctx.fillStyle=i%3===0?"#f8e2a2":i%2===0?"#a7652a":"#5a3219";
            ctx.save();
            ctx.translate(bottle.x+Math.cos(sa)*dist,bottle.y+Math.sin(sa)*dist);
            ctx.rotate(sa);
            ctx.fillRect(-3,-2,6+(i%3)*3,4);
            ctx.restore();
          }
        }
        ctx.restore();return;
      }
      originalDrawEffect(e);
    };
  }
})();
if("serviceWorker" in navigator && location.protocol.startsWith("http")){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).catch(()=>{}));
}
