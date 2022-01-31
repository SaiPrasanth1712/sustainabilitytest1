 function water()
      {
      var count=0;
      var WK8=document.getElementById("wk8a").value;
      var WK9=document.getElementById("wk9a").value;
      var WC6=document.getElementById("inlineradio1").checked;
      var WC7=document.getElementById("inlineradio2").checked;
      var WC11=document.getElementById("inlineradio3").checked;
      var WC12=document.getElementById("inlineradio4").checked;
      var WC13=document.getElementById("inlineradio5").checked;

      if (WC6===true)
      {
        WC14=0;
      }
      else
      {
      if (WC7===true)
      {
        count=count+1;
      }

      if (WC11===true)
      {
        count=count+1;
      }

      if (WC12===true)
      {
        count=count+1;
      }

      if (WC13===true)
      {
        count=count+1;
      }

      var WC14=Math.round((count/4)*100);
      }
      document.getElementById("wc14a").innerHTML = WC14+" %";
      if (WC6===true)
      {
        WK2=0;
      }
      else
      {
        WK2=Math.round(((Number(WK8)+Number(WK9)+Number(WC14))/3));
      }
      document.getElementById("wk2a").innerHTML=WK2+" %";
      localStorage.setItem("watItem",WK2);
    }