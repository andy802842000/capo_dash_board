export const ACCESS = "c041033cd77ac3af";
// 測試服
// export const DOMAIN = "https://ben-slotsrv2.depapi.xyz";
// 正式服
export const DOMAIN = "https://node-yule-srv.depapi.xyz";

export const API_ENDPOINT = {
  GET_PLATFORMS: "/api/platform",
  GET_GAMES: "/api/rtp",
  POST_HISTORY: "/api/history",
};

export const NORMAL_GAMES = [
  "CAPO_DIAMOND",
  "CAPO_MAYA",
  "CAPO_NIGHTCLUB",
  "CAPO_TRUCK",
  "CAPO_VENUS",
  "CAPO_MONEY_TREE",
  "CAPO_BEACH",
  "CAPO_ALCHEMIST",
];

export const ADULT_GAMES = [
  "ADULT_DIAMOND",
  "ADULT_MAYA",
  "ADULT_NIGHTCLUB",
  "ADULT_RABBIT_GIRLS_FES",
  "ADULT_TRUCK",
  "ADULT_VENUS",
  "ADULT_SAMURAI",
  "ADULT_BEACH",
  "ADULT_MAGE",
  "ADULT_CATMAIDEN",
  "ADULT_ALCHEMIST",
  "ADULT_GUMMY_BEAR",
  "ADULT_DEMON_DUNGEON",
  "ADULT_WAR_PRINCESS",
  "ADULT_DANCE_LION",
  "ADULT_DEMON_BRICK",
  "ADULT_SPY",
  "ADULT_UNDERWORLD",
];

export const JFW777_GAMES = [
  "ADULT_TRUCK",
  "ADULT_DIAMOND",
  "ADULT_MAYA",
  "ADULT_NIGHTCLUB",
  "ADULT_VENUS",
  "ADULT_WAR_PRINCESS",
  "ADULT_RABBIT_GIRLS_FES",
  "ADULT_ALCHEMIST",
  "ADULT_BEACH",
  "ADULT_GUMMY_BEAR",
  "ADULT_SAMURAI",
  "ADULT_CATMAIDEN",
];
export const SLOTAKU_GAMES = ["ADULT_GUMMY_BEAR"];
export const YULE_GAMES = ["yule_tuitongzi", "yule_mines"];

export const THIRD_GAMES = ["CannonGirl", "AdultAlchemist", "QianJi"];

export const PLATFORM_GAMES: { [key: string]: string[] } = {
  capoweb: NORMAL_GAMES.concat(ADULT_GAMES),
  "kisswin-a": ADULT_GAMES,
  "gilawin-a": NORMAL_GAMES.concat(ADULT_GAMES),
  "royal-a": ADULT_GAMES,
  capoweb970: ["CAPO_PIGGY"],
  capoweb975: ["CAPO_PIGGY"],
  capoweb980: ["CAPO_PIGGY"],
  capoweb985: ["CAPO_PIGGY"],
  capoweb955: ["CAPO_CAPO"],
  yuleweb: YULE_GAMES,
  jfw777: JFW777_GAMES,
  slotaku: SLOTAKU_GAMES,
};

export const GameNameList: { [key: string]: string } = {
  CAPO_DIAMOND: "晶鑽",
  CAPO_MAYA: "瑪雅",
  CAPO_NIGHTCLUB: "夜店",
  CAPO_TRUCK: "公路狂歡",
  CAPO_VENUS: "維納斯花園",
  CAPO_BEACH: "沙灘美少女",
  CAPO_MONEY_TREE: "大富翁搖錢樹",
  CAPO_ALCHEMIST: "煉金術師",
  ADULT_ALCHEMIST: "18X 有問題的是勇者而不是女魔王",
  ADULT_RABBIT_GIRLS_FES: "18X 和服兔女郎",
  ADULT_DIAMOND: "18X 晶鑽寶貝",
  ADULT_MAYA: "18X 瑪雅豔遇",
  ADULT_BEACH: "18X 沙灘比基尼",
  ADULT_NIGHTCLUB: "18X 夜店狂歡",
  ADULT_TRUCK: "18X 卡車女郎",
  ADULT_VENUS: "18X 維納斯女神",
  ADULT_SAMURAI: "18X 腥選組",
  ADULT_MAGE: "18X 魔法師(暫定)",
  ADULT_CATMAIDEN: "18X 放學後的貓學妹",
  ADULT_GUMMY_BEAR: "18X 軟糖味少女",
  ADULT_DEMON_DUNGEON: "18X 魔王的地牢",
  ADULT_WAR_PRINCESS: "18X 千姬三國",
  ADULT_DANCE_LION: "18X 舞獅",
  ADULT_DEMON_BRICK: "18X 魔王磚塊",
  ADULT_SPY: "18X 特務",
  ADULT_UNDERWORLD: "18X 黑道",
  CannonGirl: "18X 炮娘",
  AdultAlchemist: "18X 有問題的是勇者而不是女魔王",
  QianJi: "18X 千姬三國",
  yule_tuitongzi: "18X 推筒子",
  yule_mines: "18X 踩地雷",
};
