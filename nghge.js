    function nonghg()
    {
      var count=0;

      var NGHGK8=document.getElementById("nghgk8a").value;
      var NGHGK9=document.getElementById("nghgk9a").value;
      var NGHGK10=document.getElementById("nghgk10a").value;

      var NGHGC6=document.getElementById("inlineradio1").checked;
      var NGHGC7=document.getElementById("inlineradio2").checked;
      var NGHGC12=document.getElementById("inlineradio3").checked;
      var NGHGC13=document.getElementById("inlineradio4").checked;
      var NGHGC14=document.getElementById("inlineradio5").checked;

      if (NGHGC6===true)
      {
        NGHGC15=0;
      }
      else
      {
      if (NGHGC7===true)
      {
        count=count+1;
      }

      if (NGHGC12===true)
      {
        count=count+1;
      }

      if (NGHGC13===true)
      {
        count=count+1;
      }

      if (NGHGC14===true)
      {
        count=count+1;
      }

      NGHGC15=(count/4)*100;
      }
      
      document.getElementById("nghgc15a").innerHTML=NGHGC15+" %";

      if (NGHGC6===true) 
      {
        NGHGK2=0;
      }
      else
      {
        NGHGK2=Math.round((Number(NGHGC15)+Number(NGHGK8)+Number(NGHGK9)+Number(NGHGK10))/4);
      }

      document.getElementById("nghgk2a").innerHTML=NGHGK2+" %";    
      localStorage.setItem("nghgItem",NGHGK2);  
    }