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
var CSE28=Math.round((Number(ESGE11)+Number(ESGE12)+Number(ESGE13)+Number(ESGE14)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18))/8);
var CSF28=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE20)+Number(ESGE21)+Number(ESGE22))/5);
var CSG28=Math.round((Number(ESGE11)+Number(ESGE23))/2);
var CSE29=Math.round((Number(CSE28)+Number(CSF28)+Number(CSG28))/3);
var CSE31=Math.round(Number(CSE29)+Number(ESGE25));

var chartData = [CSE28,CSF28,CSG28];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Natural Capital','Human Capital','Social Capital'],
        datasets: [{
            label: 'Non-Financial Capital Scores',
            data: chartData,
            backgroundColor: [
                'rgba(6, 102, 35, 0.4)',
                'rgba(39, 70, 132, 0.4)',
                'rgba(3, 62, 90, 0.6)'
            ],
            borderColor: [
                'rgba(6, 102, 35, 0.5)',
                'rgba(39, 70, 132, 0.5)',
                'rgba(3, 62, 90, 0.5)'
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


var overallChartData = [CSE29,ESGE25,CSE31];
const osd = document.getElementById('myOverallChart').getContext('2d');
const myOverallChart = new Chart(osd, {
    type: 'bar',
    data: {
        labels: ['Average Performance', '+ Positive Impacts Bonus', 'Overall Score'],
        datasets: [{
            label: 'Summary Scores',
            data: overallChartData,
            backgroundColor: [
                'rgba(82, 35, 100, 0.4)'
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