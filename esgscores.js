function esg(){

var ESGE11=localStorage.getItem("govItem");
	document.getElementById("esge11a").innerHTML = ESGE11 + " %";

	var ESGE12=localStorage.getItem("eneItem");
	document.getElementById("esge12a").innerHTML = ESGE12 + " %";
	
	var ESGE13=localStorage.getItem("watItem");
	document.getElementById("esge13a").innerHTML = ESGE13 + " %";
	
	var ESGE14=localStorage.getItem("proItem");
	document.getElementById("esge14a").innerHTML = ESGE14 + " %";
	
	var ESGE15=localStorage.getItem("ghgItem");
	document.getElementById("esge15a").innerHTML = ESGE15 + " %";
	
	var ESGE16=localStorage.getItem("nghgItem");
	document.getElementById("esge16a").innerHTML = ESGE16 + " %";
	
	var ESGE17=localStorage.getItem("wasItem");
	document.getElementById("esge17a").innerHTML = ESGE17 + " %";
	
	var ESGE18=localStorage.getItem("encItem");
	document.getElementById("esge18a").innerHTML = ESGE18 + " %";
	
	var ESGE19=localStorage.getItem("wagItem");
	document.getElementById("esge19a").innerHTML = ESGE19 + " %";
	
	var ESGE20=localStorage.getItem("hItem");
	document.getElementById("esge20a").innerHTML = ESGE20 + " %";
	
	var ESGE21=localStorage.getItem("termItem");
	document.getElementById("esge21a").innerHTML = ESGE21 + " %";
	
	var ESGE22=localStorage.getItem("disItem");
	document.getElementById("esge22a").innerHTML = ESGE22 + " %";
	
	var ESGE23=localStorage.getItem("epItem");
	document.getElementById("esge23a").innerHTML = ESGE23 + " %";
	
	var ESGE25=localStorage.getItem("piItem");
	document.getElementById("esge25a").innerHTML = ESGE25 + " %";
	
	 var ESGE24=Math.round((Number(ESGE11)+Number(ESGE12)+Number(ESGE13)+Number(ESGE14)+Number(ESGE15)+Number(ESGE16)+Number(ESGE17)+Number(ESGE18)+Number(ESGE19)+Number(ESGE20)+Number(ESGE21)+Number(ESGE22)+Number(ESGE23))/15);
	 document.getElementById("esge24a").innerHTML = ESGE24 + " %";
	
	 var ESGE26=Math.round(Number(ESGE24)+ Number(ESGE25));
	 document.getElementById("esge26a").innerHTML = ESGE26 + " %";
}


