import { ChartGenerator } from './chartGenerator.js';

export class BarChartGenerator extends ChartGenerator {
    drawChart() {
        console.log("Generando gráfico de barras...");
        const ctx = document.getElementById('myChart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [{
                    label: 'Datos 2023',
                    data: this.data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
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
