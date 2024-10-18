import { BarChartGenerator } from './chart/barChart.js';
import { LineChartGenerator } from './chart/lineChart.js';
import { PieChartGenerator } from './chart/pieChart.js';

document.getElementById('chartForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const chartType = document.getElementById('chartType').value;
    let chartGenerator;

    if (chartType === 'bar') {
        chartGenerator = new BarChartGenerator();
    } else if (chartType === 'line') {
        chartGenerator = new LineChartGenerator();
    } else if (chartType === 'pie') {
        chartGenerator = new PieChartGenerator();
    }

    if (chartGenerator) {
        chartGenerator.generateChart();
    }
});
