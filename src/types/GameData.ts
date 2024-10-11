import { gameStatistic } from "./GameStatistic";
import { PlatformData } from "./PlatformData";
import { PoolData } from "./PoolData";

export interface GameData  {
    gameId: string;
    customer: PlatformData;
    targetRTP: number;
    betLadder: number[];
    basePools: PoolData[];
    primaryPool: { [key: string]: PoolData };
    gameStatistic: gameStatistic;
}