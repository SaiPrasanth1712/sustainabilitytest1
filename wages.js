    function wages()
    {
      var count=0;

      var WAGK9=document.getElementById("wagk9a").value;
      var WAGK11=document.getElementById("wagk11a").value;

      var WAGC6=document.getElementById("inlineradio1").checked;
      var WAGC7=document.getElementById("inlineradio2").checked;
      var WAGC8=document.getElementById("inlineradio3").checked;
      var WAGC10=document.getElementById("inlineradio4").checked;
      var WAGC13=document.getElementById("inlineradio5").checked;
      var WAGC14=document.getElementById("inlineradio6").checked;
      var WAGC15=document.getElementById("inlineradio7").checked;

      if (WAGC6===true)
      {
        WAGC16=100;
      }
      else if(WAGC7===true)
      {
        WAGC16=0;
      }
      else
      {
      if (WAGC8===true)
      {
        count=count+1;
      }

      if (WAGC10===true)
      {
        count=count+1;
      }

      if (WAGC13===true)
      {
        count=count+1;
      }

      if (WAGC14===true)
      {
        count=count+1;
      }

      if (WAGC15===true)
      {
        count=count+1;
      }

      WAGC16=Math.round((count/5)*100);
      }
      
      document.getElementById("wagc16a").innerHTML=WAGC16+" %";

      if (WAGC6===true) 
      {
        WAGK2=100;
      }
      else if (WAGC7===true) 
      {
        WAGK2=0;
      }
      else
      {
        WAGK2=Math.round((Number(WAGC16)+Number(WAGK9)+Number(WAGK11))/3);
      }

      document.getElementById("wagk2a").innerHTML=WAGK2+" %"; 
      localStorage.setItem("wagItem",WAGK2);     
    }