    function terms()
    {
      var count=0;

      var TC6=document.getElementById("inlineradio1").checked;
      var TC7=document.getElementById("inlineradio2").checked;
      var TC8=document.getElementById("inlineradio3").checked;
      var TC9=document.getElementById("inlineradio4").checked;
      var TC10=document.getElementById("inlineradio5").checked;
      var TC11=document.getElementById("inlineradio6").checked;
      var TC12=document.getElementById("inlineradio7").checked;
      var TC13=document.getElementById("inlineradio8").checked;
      var TC14=document.getElementById("inlineradio9").checked;
      var TC15=document.getElementById("inlineradio10").checked;
      var TC16=document.getElementById("inlineradio11").checked;
      var TC17=document.getElementById("inlineradio12").checked;
      var TC18=document.getElementById("inlineradio13").checked;

      if (TC6===true)
      {
        TC19=100;
      }
      else if(TC7===true)
      {
        TC19=0;
      }
      else
      {
      if (TC8===true)
      {
        count=count+1;
      }

      if (TC9===true)
      {
        count=count+1;
      }

      if (TC10===true)
      {
        count=count+1;
      }

      if (TC11===true)
      {
        count=count+1;
      }

      if (TC12===true)
      {
        count=count+1;
      }

      if (TC13===true)
      {
        count=count+1;
      }

      if (TC14===true)
      {
        count=count+1;
      }

      if (TC15===true)
      {
        count=count+1;
      }

      if (TC16===true)
      {
        count=count+1;
      }

      if (TC17===true)
      {
        count=count+1;
      }

      if (TC18===true)
      {
        count=count+1;
      }

      TC19=Math.round((count/11)*100);
      }
      
      document.getElementById("tc19a").innerHTML=TC19+" %";
      document.getElementById("tk2a").innerHTML=TC19+" %";

      localStorage.setItem("termItem",TC19);
     } 