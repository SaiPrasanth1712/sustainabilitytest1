var ESGE11=localStorage.getItem("govItem");
var ESGE12=localStorage.getItem("eneItem");
var ESGE13=localStorage.getItem("watItem");
var ESGE14=localStorage.getItem("proItem");
var ESGE15=localStorage.getItem("ghgItem");
var ESGE16=localStorage.getItem("nghgItem");
var ESGE17=localStorage.getItem("wasItem");
var ESGE18=localStorage.getItem("encItem");
var ESGE19=localStorage.getItem("wagItem");
var ESGE20=localStorage.getItem("hItem");
var ESGE21=localStorage.getItem("termItem");
var ESGE22=localStorage.getItem("disItem");
var ESGE23=localStorage.getItem("epItem");
var ESGE25=localStorage.getItem("piItem");
var ESGE24=Math.round((Number(ESGE11)+Number(ESGE12)+Number(ESGE13)+Number(ESGE14)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18)+Number(ESGE19)+Number(ESGE20)+Number(ESGE21)+Number(ESGE22)+Number(ESGE23))/15);
var ESGE26=Math.round(Number(ESGE24)+ Number(ESGE25));

var chartData = [ESGE11,ESGE12,ESGE13,ESGE14,ESGE15,ESGE16,ESGE17,ESGE18,ESGE19,ESGE20,ESGE21,ESGE22,ESGE23];

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Governance', 'Energy', 'Water', 'Procurement', 'GHG Emissions', 'Non-GHG Emissions','Waste','Encroachment','Employee Wages','Employee Health', 'Employement Terms','Discrimination','Ethical Practices'],
        datasets: [{
            label: 'ESG Performance Scores',
            data: chartData,
            backgroundColor: [
                'rgba(82, 35, 100, 0.4)',
                'rgba(6, 102, 35, 0.5)',
                'rgba(6, 102, 35, 0.5)',
                'rgba(6, 102, 35, 0.5)',
                'rgba(6, 102, 35, 0.5)',
                'rgba(6, 102, 35, 0.5)',
                'rgba(6, 102, 35, 0.5)',
                'rgba(6, 102, 35, 0.5)',
                'rgba(39, 70, 132, 0.5)',
                'rgba(39, 70, 132, 0.5)',
                'rgba(39, 70, 132, 0.5)',
                'rgba(39, 70, 132, 0.5)',
                'rgba(39, 70, 132, 0.8)'

            ],
            borderColor: [
                'rgba(82, 35, 100, 1)',
                'rgba(6, 102, 35, 1)',
                'rgba(6, 102, 35, 1)',
                'rgba(6, 102, 35, 1)',
                'rgba(6, 102, 35, 1)',
                'rgba(6, 102, 35, 1)',
                'rgba(6, 102, 35, 1)',
                'rgba(6, 102, 35, 1)',
                'rgba(39, 70, 132, 1)',
                'rgba(39, 70, 132, 1)',
                'rgba(39, 70, 132, 1)',
                'rgba(39, 70, 132, 1)',
                'rgba(39, 70, 132, 1)'


            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                min: 0
               
            }
        }
    }
});




var overallChartData = [ESGE24, ESGE25, ESGE26]
const osd = document.getElementById('myOverallChart').getContext('2d');
const myOverallChart = new Chart(osd, {
    type: 'bar',
    data: {
        labels: ['Average Performance', '+ Positive Impacts Bonus', 'Overall Score'],
        datasets: [{
            label: 'Overall Scores',
            data: overallChartData,
            backgroundColor: [
                'rgba(82, 35, 100, 0.5)',
            ],
            borderColor: [
                'rgba(82, 35, 100, 0.5)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                min: 0
               
            }
        }
    }
});