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
var SDGG58=Math.round((Number(ESGE11)+Number(ESGE12))/2);
var SDGH58=Math.round((Number(ESGE11)+Number(ESGE15))/2);
var SDGI58=Math.round((Number(ESGE11)+Number(ESGE13))/2);
var SDGJ58=Math.round((Number(ESGE11)+Number(ESGE14)+Number(ESGE16)+Number(ESGE17))/4);
var SDGK58=Math.round((Number(ESGE11)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18))/5);
var SDGL58=Math.round((Number(ESGE11)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18))/5);
var SDGG67=Math.round((Number(ESGE11)+Number(ESGE19))/2);
var SDGH67=Math.round((Number(ESGE11)+Number(ESGE19))/2);
var SDGI67=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE20))/3);
var SDGJ67=Math.round((Number(ESGE11)+Number(ESGE22))/2);
var SDGK67=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE21))/3);
var SDGL67=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE21))/3);
var SDGG73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
var SDGH73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
var SDGI73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
var SDGJ73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
var SDGK73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
var SDGG39=Math.round((Number(SDGG58)+Number(SDGH58)+Number(SDGI58)+Number(SDGJ58)+Number(SDGK58)+Number(SDGL58)+Number(SDGG67)+Number(SDGH67)+Number(SDGI67)+Number(SDGJ67)+Number(SDGK67)+Number(SDGL67)+Number(SDGG73)+Number(SDGH73)+Number(SDGI73)+Number(SDGJ73)+Number(SDGK73))/17);
var SDGG41=Math.round(Number(SDGG39)+Number(ESGE25));


var chartData = [SDGG67,SDGH67,SDGI67,SDGK67,SDGJ67,SDGI58,SDGG58,SDGL67,SDGG73,SDGH73,SDGI73,SDGJ58,SDGH58,SDGK58,SDGL58,SDGJ73,SDGK73];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['No Poverty', 'Zero hunger', 'Good health and wellbeing', 'Quality education', 'Gender equality', 'Clean water and sanitation','Affordable and clean energy','Decent work and economic growth','Industry innovation and infrastructure','Reduced inequalities', 'Sustainable cities and communities','Responsible consumption and production','Climate action','Life below water','Life on land','Peace, justice and stong institutions','Patnerships for the goals'],
        datasets: [{
            label: 'SDG Performance Scores',
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
                beginAtZero: true,
                max: 100,
                min: 0
            }
        }
    }
});


var overallChartData = [SDGG39,ESGE25 ,SDGG41 ];
const osd = document.getElementById('myOverallChart').getContext('2d');
const myOverallChart = new Chart(osd, {
    type: 'bar',
    data: {
        labels: ['Average Performance', '+ Positive Impacts Bonus', 'Overall Score'],
        datasets: [{
            label: 'Summary Scores',
            data: overallChartData,
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
                beginAtZero: true,
                max: 100,
                min: 0
               
            }
        }
    }
});