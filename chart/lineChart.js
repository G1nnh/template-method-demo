import { ChartGenerator } from './chartGenerator.js';

export class LineChartGenerator extends ChartGenerator {
    drawChart() {
        console.log("Generando gráfico de líneas...");
        const ctx = document.getElementById('myChart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: [{
                    label: 'Datos 2023',
                    data: this.data,
                    fill: false,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}