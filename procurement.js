function procurement()
    {
      var count=0;

      var PI21=document.getElementById("pi21a").value;
      var PI22=document.getElementById("pi22a").value;
      var PI23=document.getElementById("pi23a").value;
      var PI24=document.getElementById("pi24a").value;
      var PJ14=document.getElementById("pj14a").value;
      var PB6=document.getElementById("inlineradio1").checked;
      var PB7=document.getElementById("inlineradio2").checked;
      var PB8=document.getElementById("inlineradio3").checked;
      var PB9=document.getElementById("inlineradio4").checked;
      var PB10=document.getElementById("inlineradio5").checked;
      var PB11=document.getElementById("inlineradio6").checked;
      var PB12=document.getElementById("inlineradio7").checked;
      var PB13=document.getElementById("inlineradio8").checked;
      var PB16=document.getElementById("inlineradio9").checked;
      var PB17=document.getElementById("inlineradio10").checked;

      if (PB6===true)
      {
        PC18=0;
      }
      else
      {
      if (PB7===true)
      {
        count=count+1;
      }

      if (PB8===true)
      {
        count=count+1;
      }

      if (PB9===true)
      {
        count=count+1;
      }

      if (PB10===true)
      {
        count=count+1;
      }

      if (PB11===true)
      {
        count=count+1;
      }

      if (PB12===true)
      {
        count=count+1;
      }

      if (PB13===true)
      {
        count=count+1;
      }

      if (PB16===true)
      {
        count=count+1;
      }

      if (PB17===true)
      {
        count=count+1;
      }

      var PC18=Math.round((count/9)*100);
      }
      document.getElementById("pc18a").innerHTML = PC18+" %";

      var PJ21=PI21*10;
      var PJ22=PI22*10;
      var PJ23=PI23*10;
      var PJ24=PI24*10;

      var PJ25=Math.round((PJ21+PJ22+PJ23+PJ24)/4);
      document.getElementById("pj21a").innerHTML=PJ21+" %";
      document.getElementById("pj22a").innerHTML=PJ22+" %";
      document.getElementById("pj23a").innerHTML=PJ23+" %";
      document.getElementById("pj24a").innerHTML=PJ25+" %";
      document.getElementById("pj25a").innerHTML=PJ25+" %";
      
      if (PB6===true)
      {
        PJ2=0;
      }
      else
      {
        PJ2=Math.round(((Number(PC18)+Number(PJ14)+Number(PJ25))/3));
      }
      document.getElementById("pj2a").innerHTML=PJ2+" %";

      localStorage.setItem("proItem",PJ2);
    }