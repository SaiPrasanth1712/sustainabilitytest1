function capscores() 
{
	var ESGE11=localStorage.getItem("govItem");
	document.getElementById("esge11a").innerHTML = ESGE11 + " %";
	document.getElementById("esge40a").innerHTML = ESGE11 + " %";
	document.getElementById("esge41a").innerHTML = ESGE11 + " %";
	document.getElementById("esge42a").innerHTML = ESGE11 + " %";

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
	
	var ESGE16=localStorage.getItem("nghgItem");
	document.getElementById("nghg1").innerHTML = ESGE16 + " %";
	document.getElementById("nghg2").innerHTML = ESGE16 + " %";
	
	var ESGE17=localStorage.getItem("wasItem");
	document.getElementById("waste1").innerHTML = ESGE17 + " %";
	document.getElementById("waste2").innerHTML = ESGE17 + " %";
	
	var ESGE18=localStorage.getItem("encItem");
	document.getElementById("enc1").innerHTML = ESGE18 + " %";
	document.getElementById("enc2").innerHTML = ESGE18 + " %";
	
	var ESGE19=localStorage.getItem("wagItem");
	document.getElementById("wages1").innerHTML = ESGE19 + " %";
	document.getElementById("wages2").innerHTML = ESGE19 + " %";
	
	var ESGE20=localStorage.getItem("hItem");
	document.getElementById("health1").innerHTML = ESGE20 + " %";
	document.getElementById("health2").innerHTML = ESGE20 + " %";
	
	var ESGE21=localStorage.getItem("termItem");
	document.getElementById("terms1").innerHTML = ESGE21 + " %";
	document.getElementById("terms2").innerHTML = ESGE21 + " %";
	
	var ESGE22=localStorage.getItem("disItem");
	document.getElementById("disc1").innerHTML = ESGE22 + " %";
	document.getElementById("disc2").innerHTML = ESGE22 + " %";
	
	var ESGE23=localStorage.getItem("epItem");
	document.getElementById("eprac1").innerHTML = ESGE23 + " %";
	document.getElementById("eprac2").innerHTML = ESGE23 + " %";
	
	var ESGE25=localStorage.getItem("piItem");
	document.getElementById("esge25a").innerHTML = ESGE25 + " %";

	var CSE28=Math.round((Number(ESGE11)+Number(ESGE12)+Number(ESGE13)+Number(ESGE14)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18))/8);
	document.getElementById("cse28a").innerHTML = CSE28 + " %";

	var CSF28=Math.round((Number(ESGE11)+Number(ESGE19)+Number(ESGE20)+Number(ESGE21)+Number(ESGE22))/5);
	document.getElementById("csf28a").innerHTML = CSF28 + " %";

	var CSG28=Math.round((Number(ESGE11)+Number(ESGE23))/2);
	document.getElementById("csg28a").innerHTML = CSG28 + " %";

	var CSE29=Math.round((Number(CSE28)+Number(CSF28)+Number(CSG28))/3);
	document.getElementById("cse29a").innerHTML = CSE29 + " %";

	var CSE31=Math.round(Number(CSE29)+Number(ESGE25));
	document.getElementById("cse31a").innerHTML = CSE31 + " %";
}