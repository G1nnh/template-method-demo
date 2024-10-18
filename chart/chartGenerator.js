export class ChartGenerator {
    constructor() {
        this.chartContainer = document.getElementById('chartContainer');
        this.chart = null;
    }

    generateChart() {
        this.prepareData();
        this.clearChart();
        this.drawChart();
    }

    prepareData() {
        console.log("Preparando los datos...");
        const table = document.getElementById('dataTable');
        const rowData = Array.from(table.rows[1].cells);
        this.labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
        this.data = rowData.slice(1).map(cell => parseInt(cell.textContent));
    }

    clearChart() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    drawChart() {
        throw new Error("Método 'drawChart()' debe ser implementado por subclases.");
    }
}
