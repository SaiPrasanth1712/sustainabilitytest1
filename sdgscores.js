function sdg() 
{

//GETTING THE OVERALL SCORES FROM ALL WEBPAGES
	var ESGE11=localStorage.getItem("govItem");
	document.getElementById("esge11a").innerHTML = ESGE11 + " %";
	document.getElementById("esge40a").innerHTML = ESGE11 + " %";
	document.getElementById("esge41a").innerHTML = ESGE11 + " %";
	document.getElementById("esge42a").innerHTML = ESGE11 + " %";
	document.getElementById("esge43a").innerHTML = ESGE11 + " %";
	document.getElementById("esge44a").innerHTML = ESGE11 + " %";
	document.getElementById("esge45a").innerHTML = ESGE11 + " %";

	document.getElementById("esge46a").innerHTML = ESGE11 + " %";
	document.getElementById("esge47a").innerHTML = ESGE11 + " %";
	document.getElementById("esge48a").innerHTML = ESGE11 + " %";
	document.getElementById("esge49a").innerHTML = ESGE11 + " %";
	document.getElementById("esge50a").innerHTML = ESGE11 + " %";
	document.getElementById("esge51a").innerHTML = ESGE11 + " %";
	document.getElementById("esge52a").innerHTML = ESGE11 + " %";

	document.getElementById("esge53a").innerHTML = ESGE11 + " %";
	document.getElementById("esge54a").innerHTML = ESGE11 + " %";
	document.getElementById("esge55a").innerHTML = ESGE11 + " %";
	document.getElementById("esge56a").innerHTML = ESGE11 + " %";
	document.getElementById("esge57a").innerHTML = ESGE11 + " %";
	document.getElementById("esge58a").innerHTML = ESGE11 + " %";

	var ESGE12=localStorage.getItem("eneItem");
	document.getElementById("energy1").innerHTML = ESGE12 + " %";
	document.getElementById("energy2").innerHTML = ESGE12 + " %";

	
	var ESGE13=localStorage.getItem("watItem");
	document.getElementById("water1").innerHTML = ESGE13 + " %";
	document.getElementById("water2").innerHTML = ESGE13 + " %";
	
	var ESGE14=localStorage.getItem("proItem");
	document.getElementById("procurement1").innerHTML = ESGE14 + " %";
	document.getElementById("procurement2").innerHTML = ESGE14 + " %";
	
	var ESGE15=localStorage.getItem("ghgItem");
	document.getElementById("ghg1").innerHTML = ESGE15 + " %";
	document.getElementById("ghg2").innerHTML = ESGE15 + " %";
	document.getElementById("ghg3").innerHTML = ESGE15 + " %";
	document.getElementById("ghg4").innerHTML = ESGE15 + " %";
	
	var ESGE16=localStorage.getItem("nghgItem");
	document.getElementById("nghg1").innerHTML = ESGE16 + " %";
	document.getElementById("nghg2").innerHTML = ESGE16 + " %";
	document.getElementById("nghg3").innerHTML = ESGE16 + " %";
	document.getElementById("nghg4").innerHTML = ESGE16 + " %";
	
	var ESGE17=localStorage.getItem("wasItem");
	document.getElementById("waste1").innerHTML = ESGE17 + " %";
	document.getElementById("waste2").innerHTML = ESGE17 + " %";
	document.getElementById("waste3").innerHTML = ESGE17 + " %";
	document.getElementById("waste4").innerHTML = ESGE17 + " %";
	
	var ESGE18=localStorage.getItem("encItem");
	document.getElementById("enc1").innerHTML = ESGE18 + " %";
	document.getElementById("enc2").innerHTML = ESGE18 + " %";
	document.getElementById("enc3").innerHTML = ESGE18 + " %";
	
	var ESGE19=localStorage.getItem("wagItem");
	document.getElementById("wages1").innerHTML = ESGE19 + " %";
	document.getElementById("wages2").innerHTML = ESGE19 + " %";
	document.getElementById("wages3").innerHTML = ESGE19 + " %";
	document.getElementById("wages4").innerHTML = ESGE19 + " %";
	document.getElementById("wages5").innerHTML = ESGE19 + " %";
	document.getElementById("wages6").innerHTML = ESGE19 + " %";
	
	var ESGE20=localStorage.getItem("hItem");
	document.getElementById("health1").innerHTML = ESGE20 + " %";
	document.getElementById("health2").innerHTML = ESGE20 + " %";
	
	var ESGE21=localStorage.getItem("termItem");
	document.getElementById("terms1").innerHTML = ESGE21 + " %";
	document.getElementById("terms2").innerHTML = ESGE21 + " %";
	document.getElementById("terms3").innerHTML = ESGE21 + " %";
	
	var ESGE22=localStorage.getItem("disItem");
	document.getElementById("disc1").innerHTML = ESGE22 + " %";
	document.getElementById("disc2").innerHTML = ESGE22 + " %";

	var ESGE23=localStorage.getItem("epItem");
	document.getElementById("eprac1").innerHTML = ESGE23 + " %";
	document.getElementById("eprac2").innerHTML = ESGE23 + " %";
	document.getElementById("eprac3").innerHTML = ESGE23 + " %";
	document.getElementById("eprac4").innerHTML = ESGE23 + " %";
	document.getElementById("eprac5").innerHTML = ESGE23 + " %";
	document.getElementById("eprac6").innerHTML = ESGE23 + " %";
	
	var ESGE25=localStorage.getItem("piItem");
	document.getElementById("esge25a").innerHTML = ESGE25 + " %";

// CALCULATIONS FOR FIRST TABLE
	SDGG58=Math.round((Number(ESGE11)+Number(ESGE12))/2);
	document.getElementById("sdgg58a").innerHTML = SDGG58 + " %";						//Affordable and clean energy
	document.getElementById("sdgg58b").innerHTML = SDGG58 + " %";

	SDGH58=Math.round((Number(ESGE11)+Number(ESGE15))/2);
	document.getElementById("sdgh58a").innerHTML = SDGH58 + " %";						//Climate Action
	document.getElementById("sdgh58b").innerHTML = SDGH58 + " %";

	SDGI58=Math.round((Number(ESGE11)+Number(ESGE13))/2);
	document.getElementById("sdgi58a").innerHTML = SDGI58 + " %";						//Clean Water and Sanitation
	document.getElementById("sdgi58b").innerHTML = SDGI58 + " %";

	SDGJ58=Math.round((Number(ESGE11)+Number(ESGE14)+Number(ESGE16)+Number(ESGE17))/4);
	document.getElementById("sdgj58a").innerHTML = SDGJ58 + " %";						//Responsible Consumption and production
	document.getElementById("sdgj58b").innerHTML = SDGJ58 + " %";

	SDGK58=Math.round((Number(ESGE11)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18))/5);
	document.getElementById("sdgk58a").innerHTML = SDGK58 + " %";						//Life below water
	document.getElementById("sdgk58b").innerHTML = SDGK58 + " %";

	SDGL58=Math.round((Number(ESGE11)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18))/5);
	document.getElementById("sdgl58a").innerHTML = SDGL58 + " %";						//Life on Land
	document.getElementById("sdgl58b").innerHTML = SDGL58 + " %";

// CALCULATIONS FOR SECOND TABLE
	SDGG67=Math.round((Number(ESGE11)+Number(ESGE19))/2);
	document.getElementById("sdgg67a").innerHTML = SDGG67 + " %";						//No Poverty
	document.getElementById("sdgg67b").innerHTML = SDGG67 + " %";

	SDGH67=Math.round((Number(ESGE11)+Number(ESGE19))/2);
	document.getElementById("sdgh67a").innerHTML = SDGH67 + " %";						//Zero Hunger
	document.getElementById("sdgh67b").innerHTML = SDGH67 + " %";

	SDGI67=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE20))/3);
	document.getElementById("sdgi67a").innerHTML = SDGI67 + " %";						//Good Health and Wellbeing
	document.getElementById("sdgi67b").innerHTML = SDGI67 + " %";

	SDGJ67=Math.round((Number(ESGE11)+Number(ESGE22))/2);
	document.getElementById("sdgj67a").innerHTML = SDGJ67 + " %";						//Gender equality
	document.getElementById("sdgj67b").innerHTML = SDGJ67 + " %";

	SDGK67=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE21))/3);
	document.getElementById("sdgk67a").innerHTML = SDGK67 + " %";						//Quality Education
	document.getElementById("sdgk67b").innerHTML = SDGK67 + " %";

	SDGL67=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE21))/3);
	document.getElementById("sdgl67a").innerHTML = SDGL67 + " %";						//Decent work and economic growth
	document.getElementById("sdgl67b").innerHTML = SDGL67 + " %";

// CALCULATIONS FOR THIRD TABLE
	SDGG73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
	document.getElementById("sdgg73a").innerHTML = SDGG73 + " %";						//Industry Innovation and infrastructure
	document.getElementById("sdgg73b").innerHTML = SDGG73 + " %";

	SDGH73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
	document.getElementById("sdgh73a").innerHTML = SDGH73 + " %";						//Reduced inequalities
	document.getElementById("sdgh73b").innerHTML = SDGH73 + " %";

	SDGI73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
	document.getElementById("sdgi73a").innerHTML = SDGI73 + " %";						//Sustainable cities and communities
	document.getElementById("sdgi73b").innerHTML = SDGI73 + " %";

	SDGJ73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
	document.getElementById("sdgj73a").innerHTML = SDGJ73 + " %";						//Peace, justice and strong institutions
	document.getElementById("sdgj73b").innerHTML = SDGJ73 + " %";

	SDGK73=Math.floor((Number(ESGE11)+Number(ESGE23))/2);
	document.getElementById("sdgk73a").innerHTML = SDGK73 + " %";						//Partnerships for the goals
    document.getElementById("sdgk73b").innerHTML = SDGK73 + " %";

//CALCULATIONS FOR MAIN TABLE
	SDGG39=Math.round((Number(SDGG58)+Number(SDGH58)+Number(SDGI58)+Number(SDGJ58)+Number(SDGK58)+Number(SDGL58)+Number(SDGG67)+Number(SDGH67)+Number(SDGI67)+Number(SDGJ67)+Number(SDGK67)+Number(SDGL67)+Number(SDGG73)+Number(SDGH73)+Number(SDGI73)+Number(SDGJ73)+Number(SDGK73))/17);
	document.getElementById("sdgg39a").innerHTML = SDGG39 + " %";						//avg performance

	SDGG41=Math.round(Number(SDGG39)+Number(ESGE25));
	document.getElementById("sdgg41a").innerHTML = SDGG41 + " %";						//overall score

}