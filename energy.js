	function energy()
			{
			var count=0;
      var EK8=document.getElementById("ek8a").value;
      var EK9=document.getElementById("ek9a").value;
      var EC6=document.getElementById("inlineradio1").checked;
      var EC7=document.getElementById("inlineradio2").checked;
      var EC11=document.getElementById("inlineradio3").checked;
      var EC12=document.getElementById("inlineradio4").checked;
      var EC13=document.getElementById("inlineradio5").checked;

      if (EC6===true)
      {
        EC14=0;
      }
      else
      {
      if (EC7===true)
      {
        count=count+1;
      }

      if (EC11===true)
      {
        count=count+1;
      }

      if (EC12===true)
      {
        count=count+1;
      }

      if (EC13===true)
      {
        count=count+1;
      }

      var EC14=Math.round((count/4)*100);
      }
      document.getElementById("ec14a").innerHTML = EC14+" %";
      if (EC6===true)
      {
        EK2=0;
      }
      else
      {
        EK2=Math.round(((Number(EK8)+Number(EK9)+Number(EC14))/3));
      }
      document.getElementById("ek2a").innerHTML=EK2+" %";
      localStorage.setItem("eneItem",EK2);
    }