    function ethicalprac()
    {
      var count=0;

      var EPC6=document.getElementById("inlineradio1").checked;
      var EPC7=document.getElementById("inlineradio2").checked;
      var EPC8=document.getElementById("inlineradio3").checked;
      var EPC9=document.getElementById("inlineradio4").checked;
      var EPC10=document.getElementById("inlineradio5").checked;
      var EPC11=document.getElementById("inlineradio6").checked;
      var EPC12=document.getElementById("inlineradio7").checked;
    
      if (EPC6===true)
      {
        EPC13=0;
      }
      else
      {
      if (EPC7===true)
      {
        count=count+1;
      }

      if (EPC8===true)
      {
        count=count+1;
      }

      if (EPC9===true)
      {
        count=count+1;
      }

      if (EPC10===true)
      {
        count=count+1;
      }

      if (EPC11===true)
      {
        count=count+1;
      }

      if (EPC12===true)
      {
        count=count+1;
      }

      EPC13=Math.round((count/6)*100);
      }
      
      document.getElementById("epc13a").innerHTML=EPC13+" %";
      document.getElementById("epk2a").innerHTML=EPC13+" %";

      localStorage.setItem("epItem",EPC13);
     } 