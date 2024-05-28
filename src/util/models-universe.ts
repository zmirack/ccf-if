import { StorageModel } from '../lib/storage-model';
import { CpuModel } from '../lib/cpu-model';
import { CloudModel } from '../lib/cloud-model';
// Import other models as needed...

export const models = {
    StorageModel: new StorageModel(),
    CpuModel: new CpuModel(),
    CloudModel: new CloudModel()
    // Other models...
};
