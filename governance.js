function governance()
  	{
  	 	var GO5A=document.getElementById("inlineradio1").checked;
  		var GO5B=document.getElementById("inlineradio2").checked;
  		var GO5C=document.getElementById("inlineradio3").checked;

  		if (GO5A===true){
  			var A = 0;
  		}
  		else if (GO5B===true) {
  			A = 50;
  		}
  		else if (GO5C===true) {
  			A = 100;
  		}

  		var GO10A=document.getElementById("inlineradio4").checked;
  		var GO10B=document.getElementById("inlineradio5").checked;
  		var GO10C=document.getElementById("inlineradio6").checked;

  		if (GO10A===true){
  			var B = 0;
  		}
  		else if (GO10B===true) {
  			B = 50;
  		}
  		else if (GO10C===true) {
  			B = 100;
  		}

      var GO11A=document.getElementById("inlineradio7").checked;
      var GO11B=document.getElementById("inlineradio8").checked;
      var GO11C=document.getElementById("inlineradio9").checked;

      if (GO11A===true){
        var C = 0;
      }
      else if (GO11B===true) {
        C = 50;
      }
      else if (GO11C===true) {
        C = 100;
      }

      var GO12A=document.getElementById("inlineradio10").checked;
      var GO12B=document.getElementById("inlineradio11").checked;
      var GO12C=document.getElementById("inlineradio12").checked;

      if (GO12A===true){
        var D = 0;
      }
      else if (GO12B===true) {
        D = 50;
      }
      else if (GO12C===true) {
        D = 100;
      }

      var GO13A=document.getElementById("inlineradio13").checked;
      var GO13B=document.getElementById("inlineradio14").checked;
      var GO13C=document.getElementById("inlineradio15").checked;

      if (GO13A===true){
        var E = 0;
      }
      else if (GO13B===true) {
        E = 50;
      }
      else if (GO13C===true) {
        E = 100;
      }

      var GO14A=document.getElementById("inlineradio16").checked;
      var GO14B=document.getElementById("inlineradio17").checked;
      var GO14C=document.getElementById("inlineradio18").checked;

      if (GO14A===true){
        var F = 0;
      }
      else if (GO14B===true) {
        F = 50;
      }
      else if (GO14C===true) {
        F = 100;
      }

      var GO15A=document.getElementById("inlineradio19").checked;
      var GO15B=document.getElementById("inlineradio20").checked;
      var GO15C=document.getElementById("inlineradio21").checked;

      if (GO15A===true){
        var G = 0;
      }
      else if (GO15B===true) {
        G = 50;
      }
      else if (GO15C===true) {
        G = 100;
      }

      var GO16A=document.getElementById("inlineradio22").checked;
      var GO16B=document.getElementById("inlineradio23").checked;
      var GO16C=document.getElementById("inlineradio24").checked;

      if (GO16A===true){
        var H = 0;
      }
      else if (GO16B===true) {
        H = 50;
      }
      else if (GO16C===true) {
        H = 100;
      }

  		var ovsc=Math.round(((A+B+C+D+E+F+G+H)/8));

  		document.getElementById("oi17").innerHTML = ovsc+ " %";
  		document.getElementById("ok2").innerHTML = ovsc+ " %";

      localStorage.setItem("govItem",ovsc);
  	}