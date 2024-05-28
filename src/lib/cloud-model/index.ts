import { IImpactModelInterface, StorageData, ImpactResult } from '../IImpactModelInterface';

class CloudModel implements IImpactModelInterface {
    calculateImpact(storageData: StorageData): ImpactResult {
        // Dummy implementation
        return {
            energyConsumptionWh: 200, // Placeholder value
            co2EmissionsKg: 0.0502  // Placeholder value
        };
    }
}

export { CloudModel };
