// src/lib/IImpactModelInterface.ts
export interface IImpactModelInterface {
    calculateImpact(storageData: StorageData): ImpactResult;
}

export interface StorageData {
    allocatedStorageTB: number;
    isHDD: boolean;
    replicationFactor: number;
}

export interface ImpactResult {
    energyConsumptionWh: number;
    co2EmissionsKg: number;
}
