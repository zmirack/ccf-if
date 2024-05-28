// src/config/config.ts
export const CONFIG = {
    MODEL_IDS: {
        STORAGE_MODEL: 'org.storage.model',
        BOAVIZTA_CPU: 'org.boavizta.cpu.sci',
        BOAVIZTA_CLOUD: 'org.boavizta.cloud.sci',
        AMADEUS_MEM: 'org.amadeus.mem',
        SHELL_IMPACT: 'org.shell.impact',
        SCI_MODEL: 'org.sci.model',
        SCIO_MODEL: 'org.scio.model'
    },
    PROMETHEUS: {
        SCRAPE_INTERVAL: '15s',
        STORAGE_JOB_NAME: 'storage'
    },
    GRAFANA: {
        ADMIN_USER: 'admin',
        ADMIN_PASSWORD: 'admin'
    }
};