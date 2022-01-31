    function discrimination()
    {
      var count=0;

      var DK11=document.getElementById("dk11a").value;
      var DK12=document.getElementById("dk12a").value;

      var DC6=document.getElementById("inlineradio1").checked;
      var DC7=document.getElementById("inlineradio2").checked;
      var DC8=document.getElementById("inlineradio3").checked;
      var DC9=document.getElementById("inlineradio4").checked;
      var DC10=document.getElementById("inlineradio5").checked;
      var DC14=document.getElementById("inlineradio6").checked;
      var DC15=document.getElementById("inlineradio7").checked;
      var DC16=document.getElementById("inlineradio8").checked;
      var DC17=document.getElementById("inlineradio9").checked;
      var DC18=document.getElementById("inlineradio10").checked;
      var DC19=document.getElementById("inlineradio11").checked;
      var DC20=document.getElementById("inlineradio12").checked;
      
      if (DC6===true)
      {
        DC21=100;
      }
      else if(DC7===true)
      {
        DC21=0;
      }
      else
      {
      if (DC8===true)
      {
        count=count+1;
      }

      if (DC9===true)
      {
        count=count+1;
      }

      if (DC10===true)
      {
        count=count+1;
      }

      if (DC14===true)
      {
        count=count+1;
      }

      if (DC15===true)
      {
        count=count+1;
      }

      if (DC16===true)
      {
        count=count+1;
      }

      if (DC17===true)
      {
        count=count+1;
      }

      if (DC18===true)
      {
        count=count+1;
      }

      if (DC19===true)
      {
        count=count+1;
      }

      if (DC20===true)
      {
        count=count+1;
      }

      DC21=Math.round((count/10)*100);
      }
      
      document.getElementById("dc21a").innerHTML=DC21+" %";

      if (DC6===true) 
      {
        DK2=100;
      }
      else if (DC7===true) 
      {
        DK2=0;
      }
      else
      {
        A=Number(DK11)/0.5;
        DK2=Math.round((Number(A)+Number(DK12)+Number(DC21))/3);
      }

      document.getElementById("dk2a").innerHTML=DK2+" %";  
      localStorage.setItem("disItem",DK2);

    }