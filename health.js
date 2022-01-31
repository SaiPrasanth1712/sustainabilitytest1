    function health()
    {
      var count=0;

      var HK9=document.getElementById("hk9a").value;
      var HK10=document.getElementById("hk10a").value;

      var HC6=document.getElementById("inlineradio1").checked;
      var HC7=document.getElementById("inlineradio2").checked;
      var HC8=document.getElementById("inlineradio3").checked;
      var HC12=document.getElementById("inlineradio4").checked;
      var HC13=document.getElementById("inlineradio5").checked;
      var HC14=document.getElementById("inlineradio6").checked;
      var HC15=document.getElementById("inlineradio7").checked;
      var HC16=document.getElementById("inlineradio8").checked;
      var HC17=document.getElementById("inlineradio9").checked;
      var HC18=document.getElementById("inlineradio10").checked;
      var HC19=document.getElementById("inlineradio11").checked;
      var HC20=document.getElementById("inlineradio12").checked;
      
      if (HC6===true)
      {
        HC21=100;
      }
      else if(HC7===true)
      {
        HC21=0;
      }
      else
      {
      if (HC8===true)
      {
        count=count+1;
      }

      if (HC12===true)
      {
        count=count+1;
      }

      if (HC13===true)
      {
        count=count+1;
      }

      if (HC14===true)
      {
        count=count+1;
      }

      if (HC15===true)
      {
        count=count+1;
      }

      if (HC16===true)
      {
        count=count+1;
      }

      if (HC17===true)
      {
        count=count+1;
      }

      if (HC18===true)
      {
        count=count+1;
      }

      if (HC19===true)
      {
        count=count+1;
      }

      if (HC20===true)
      {
        count=count+1;
      }

      HC21=Math.round((count/10)*100);
      }
      
      document.getElementById("hc21a").innerHTML=HC21+" %";

      if (HC6===true) 
      {
        HK2=100;
      }
      else if (HC7===true) 
      {
        HK2=0;
      }
      else
      {
        if (Number(HK9)>0) 
        {
          A=0;
        }
        else
        {
          A=100;
        }
        if (Number(HK10)>0) 
        {
          B=0;
        }
        else
        {
          B=100;
        }

        HK2=Math.round((Number(A)+Number(B)+Number(HC21))/3);
      }

      document.getElementById("hk2a").innerHTML=HK2+" %";      
      localStorage.setItem("hItem",HK2);
    }