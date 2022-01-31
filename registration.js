
		function orgpro() {
		var OC12 = document.getElementById("oc12a").value;
		var OC13 = document.getElementById("oc13a").value;
		var OD13 = Math.round((Number(OC13)/(Number(OC12)+Number(OC13)))*100) + " %";
		document.getElementById("od13a").innerHTML = OD13;
	}