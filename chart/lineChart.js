// lineChart.js
import { ChartGenerator } from './chartGenerator.js';

export class LineChartGenerator extends ChartGenerator {
    drawChart() {
        const chart = document.createElement('div');
        chart.innerHTML = "<img src='assets/line-chart.png' alt='Gráfico de Líneas'>";
        this.chartContainer.appendChild(chart);
        console.log("Generando gráfico de líneas...");
    }
}
