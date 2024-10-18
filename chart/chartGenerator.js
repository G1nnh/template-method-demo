// chartGenerator.js
export class ChartGenerator {
    constructor() {
        this.chartContainer = document.getElementById('chartContainer');
    }

    generateChart() {
        this.prepareData();
        this.clearChart();
        this.drawChart();
        this.showChart();
    }

    prepareData() {
        console.log("Preparando los datos...");
    }

    clearChart() {
        this.chartContainer.innerHTML = '';
        this.chartContainer.style.opacity = 0;
        this.chartContainer.style.transform = 'translateY(20px)';
    }

    showChart() {
        setTimeout(() => {
            this.chartContainer.style.opacity = 1;
            this.chartContainer.style.transform = 'translateY(0)';
        }, 300);
    }

    drawChart() {
        throw new Error("Método 'drawChart()' debe ser implementado por subclases.");
    }
}
