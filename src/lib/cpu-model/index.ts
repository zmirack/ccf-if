import { IImpactModelInterface, StorageData, ImpactResult } from '../IImpactModelInterface';

class CpuModel implements IImpactModelInterface {
    calculateImpact(storageData: StorageData): ImpactResult {
        // Dummy implementation
        return {
            energyConsumptionWh: 100, // Placeholder value
            co2EmissionsKg: 0.0251  // Placeholder value
        };
    }
}

export { CpuModel };
