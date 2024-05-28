// src/lib/storage-model/storageModel.test.ts
import { StorageModel } from './index';
import { StorageData, ImpactResult } from '../IImpactModelInterface';

test('Calculate impact for HDD storage', () => {
    const storageModel = new StorageModel();
    const storageData: StorageData = {
        allocatedStorageTB: 100,
        isHDD: true,
        replicationFactor: 2
    };

    const result: ImpactResult = storageModel.calculateImpact(storageData);
    expect(result.energyConsumptionWh).toBe(130); // 100 TB * 0.65 Wh/TB * 2
    expect(result.co2EmissionsKg).toBeCloseTo(0.03263); // 130 Wh / 1000 * 0.251
});

test('Calculate impact for SSD storage', () => {
    const storageModel = new StorageModel();
    const storageData: StorageData = {
        allocatedStorageTB: 100,
        isHDD: false,
        replicationFactor: 2
    };

    const result: ImpactResult = storageModel.calculateImpact(storageData);
    expect(result.energyConsumptionWh).toBe(240); // 100 TB * 1.2 Wh/TB * 2
    expect(result.co2EmissionsKg).toBeCloseTo(0.06024); // 240 Wh / 1000 * 0.251
});

