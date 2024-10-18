// barChart.js
import { ChartGenerator } from './chartGenerator.js';

export class BarChartGenerator extends ChartGenerator {
    drawChart() {
        const chart = document.createElement('div');
        chart.innerHTML = "<img src='assets/bar-chart.png' alt='Gráfico de Barras'>";
        this.chartContainer.appendChild(chart);
        console.log("Generando gráfico de barras...");
    }
}
