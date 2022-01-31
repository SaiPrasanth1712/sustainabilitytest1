   function waste()
    {
      var count=0;

      var WASK8=document.getElementById("wask8a").value;
      var WASK9=document.getElementById("wask9a").value;

      var WASC6=document.getElementById("inlineradio1").checked;
      var WASC7=document.getElementById("inlineradio2").checked;
      var WASC11=document.getElementById("inlineradio3").checked;
      var WASC12=document.getElementById("inlineradio4").checked;
      var WASC13=document.getElementById("inlineradio5").checked;

      if (WASC6===true)
      {
        WASC14=0;
      }
      else
      {
      if (WASC7===true)
      {
        count=count+1;
      }

      if (WASC11===true)
      {
        count=count+1;
      }

      if (WASC12===true)
      {
        count=count+1;
      }

      if (WASC13===true)
      {
        count=count+1;
      }

      WASC14=(count/4)*100;
      }
      
      document.getElementById("wasc14a").innerHTML=WASC14+" %";

      count=0;

      var WASK19=document.getElementById("wask19a").value;
      var WASK20=document.getElementById("wask20a").value;

      var WASC17=document.getElementById("inlineradio6").checked;
      var WASC18=document.getElementById("inlineradio7").checked;
      var WASC22=document.getElementById("inlineradio8").checked;
      var WASC23=document.getElementById("inlineradio9").checked;
      var WASC24=document.getElementById("inlineradio10").checked;
      var WASC25=document.getElementById("inlineradio11").checked;
      var WASC26=document.getElementById("inlineradio12").checked;
      var WASC27=document.getElementById("inlineradio13").checked;

      if (WASC17===true)
      {
        WASC28=0;
      }
      else
      {
      if (WASC18===true)
      {
        count=count+1;
      }

      if (WASC22===true)
      {
        count=count+1;
      }

      if (WASC23===true)
      {
        count=count+1;
      }

      if (WASC24===true)
      {
        count=count+1;
      }

      if (WASC25===true)
      {
        count=count+1;
      }

      if (WASC26===true)
      {
        count=count+1;
      }

      if (WASC27===true)
      {
        count=count+1;
      }

      WASC28=Math.round((count/7)*100);
      }
      
      document.getElementById("wasc28a").innerHTML=WASC28+" %";

      if (WASC6===true)
      {
        A=0;
      }
      else
      {
        A=Math.round((Number(WASC14)+Number(WASK8)+Number(WASK9))/3);
      }

      if (WASC17===true)
      {
        B=0;
      }
      else
      {
        B=Math.round((Number(WASC28)+Number(WASK19)+Number(WASK20))/3);
      }
      WASK2=Math.round((Number(A)+Number(B))/2);
      document.getElementById("wask2a").innerHTML=WASK2+" %";
      localStorage.setItem("wasItem",WASK2);      
    }