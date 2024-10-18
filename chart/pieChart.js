import { ChartGenerator } from './chartGenerator.js';

export class PieChartGenerator extends ChartGenerator {
    drawChart() {
        console.log("Generando gráfico de torta...");
        const ctx = document.getElementById('myChart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: this.labels,
                datasets: [{
                    label: 'Datos 2023',
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(199, 199, 199, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(199, 199, 199, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }
}