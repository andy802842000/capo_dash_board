export interface PoolData {
    totalBet: number;
    totalWin: number;
    rtp: number;
    totalBalance: number;
    totalRound: number;
    poolIndex: number;
}

export interface ExtendPoolData extends PoolData {
    betAmount?: number;
}
