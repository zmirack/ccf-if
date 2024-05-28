# exporter/storage_exporter.py
from prometheus_client import start_http_server, Gauge
import random
import time

# Define metrics
energy_consumption_gauge = Gauge('storage_energy_consumption', 'Energy consumption of the storage')
co2_emissions_gauge = Gauge('storage_co2_emissions', 'CO2 emissions of the storage')

def collect_metrics():
    while True:
        # Dummy data generation
        energy_consumption_gauge.set(random.uniform(50, 150))
        co2_emissions_gauge.set(random.uniform(0.01, 0.05))
        time.sleep(15)

if __name__ == '__main__':
    start_http_server(8000)
    collect_metrics()
