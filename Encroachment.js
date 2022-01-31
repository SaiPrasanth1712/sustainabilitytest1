    function encroachment()
    {
      var count=0;

      var ENCK9=document.getElementById("enck9a").value;

      var ENCC6=document.getElementById("inlineradio1").checked;
      var ENCC7=document.getElementById("inlineradio2").checked;
      var ENCC8=document.getElementById("inlineradio3").checked;
      var ENCC11=document.getElementById("inlineradio4").checked;
      var ENCC12=document.getElementById("inlineradio5").checked;
      var ENCC13=document.getElementById("inlineradio6").checked;

      if (ENCC6===true)
      {
        ENCC14=100;
      }
      else if(ENCC7===true)
      {
        ENCC14=0;
      }
      else
      {
      if (ENCC8===true)
      {
        count=count+1;
      }

      if (ENCC11===true)
      {
        count=count+1;
      }

      if (ENCC12===true)
      {
        count=count+1;
      }

      if (ENCC13===true)
      {
        count=count+1;
      }

      ENCC14=Math.round((count/4)*100);
      }
      
      document.getElementById("encc14a").innerHTML=ENCC14+" %";

      if (ENCC6===true) 
      {
        ENCK2=100;
      }
      else if (ENCC7===true) 
      {
        ENCK2=0;
      }
      else
      {
        ENCK2=Math.round((Number(ENCC14)+Number(ENCK9))/2);
      }

      document.getElementById("enck2a").innerHTML=ENCK2+" %";     
      localStorage.setItem("encItem",ENCK2); 
    }