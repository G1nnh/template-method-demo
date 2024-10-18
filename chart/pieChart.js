// pieChart.js
import { ChartGenerator } from './chartGenerator.js';

export class PieChartGenerator extends ChartGenerator {
    drawChart() {
        const chart = document.createElement('div');
        chart.innerHTML = "<img src='assets/pie-chart.png' alt='Gráfico de Torta'>";
        this.chartContainer.appendChild(chart);
        console.log("Generando gráfico de torta...");
    }
}
