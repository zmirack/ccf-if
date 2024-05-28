// src/lib/storage-model/index.ts
import { IImpactModelInterface, StorageData, ImpactResult } from '../IImpactModelInterface';

class StorageModel implements IImpactModelInterface {
    calculateImpact(storageData: StorageData): ImpactResult {
        const { allocatedStorageTB, isHDD, replicationFactor } = storageData;
        const energyUsagePerTBHr = isHDD ? 0.65 : 1.2;

        // Calculate total energy consumption considering replication factor
        const totalEnergyUsageWh = allocatedStorageTB * energyUsagePerTBHr * replicationFactor;

        // Convert energy usage to kWh (since energy usage is per hour)
        const totalEnergyUsageKWh = totalEnergyUsageWh / 1000;

        // Calculate CO2 emissions
        const co2EmissionsKg = totalEnergyUsageKWh * 0.251;

        return {
            energyConsumptionWh: totalEnergyUsageWh,
            co2EmissionsKg: co2EmissionsKg,
        };
    }
}

export { StorageModel };
