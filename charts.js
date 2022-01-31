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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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