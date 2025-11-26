export interface DailyMix {
    date: string;
    averages: Record<string, number>;
    cleanEnergyPercent: number;
}

export interface OptimalWindow {
    start: string;
    end: string;
    averageCleanEnergy: number;
}
