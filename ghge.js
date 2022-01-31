    function ghg()
    {
      var count=0;

      var GHGEK8=document.getElementById("ghgek8a").value;
      var GHGEC6=document.getElementById("inlineradio1").checked;
      var GHGEC7=document.getElementById("inlineradio2").checked;
      var GHGEC10=document.getElementById("inlineradio3").checked;
      var GHGEC11=document.getElementById("inlineradio4").checked;
      var GHGEC12=document.getElementById("inlineradio5").checked;

      if (GHGEC6===true)
      {
        GHGEC13=0;
      }
      else
      {
      if (GHGEC7===true)
      {
        count=count+1;
      }

      if (GHGEC10===true)
      {
        count=count+1;
      }

      if (GHGEC11===true)
      {
        count=count+1;
      }

      if (GHGEC12===true)
      {
        count=count+1;
      }

      GHGEC13=(count/4)*100;
      }
      
      document.getElementById("ghgec13a").innerHTML=GHGEC13+" %";

      count = 0;
      var GHGEK18=document.getElementById("ghgek18a").value;
      var GHGEC16=document.getElementById("inlineradio6").checked;
      var GHGEC17=document.getElementById("inlineradio7").checked;
      var GHGEC20=document.getElementById("inlineradio8").checked;
      var GHGEC21=document.getElementById("inlineradio9").checked;
      var GHGEC22=document.getElementById("inlineradio10").checked;

      if (GHGEC16===true)
      {
        GHGEC23=0;
      }
      else
      {
      if (GHGEC17===true)
      {
        count=count+1;
      }

      if (GHGEC20===true)
      {
        count=count+1;
      }

      if (GHGEC21===true)
      {
        count=count+1;
      }

      if (GHGEC22===true)
      {
        count=count+1;
      }

      GHGEC23=(count/4)*100;
      }
      
      document.getElementById("ghgec23a").innerHTML=GHGEC23+" %";

      count=0;
      var GHGEK46=document.getElementById("ghgek46a").value;
      var GHGEC27=document.getElementById("inlineradio11").checked;
      var GHGEC28=document.getElementById("inlineradio12").checked;
      var GHGEC45=document.getElementById("inlineradio28").checked;
      var GHGEC49=document.getElementById("inlineradio29").checked;
      var GHGEC50=document.getElementById("inlineradio30").checked;
      var GHGEC51=document.getElementById("inlineradio31").checked;

      if (GHGEC27===true)
      {
        GHGEC52=0;
      }
      else
      {
      if (GHGEC28===true)
      {
        count=count+1;
      }

      if (GHGEC45===true)
      {
        count=count+1;
      }

      if (GHGEC49===true)
      {
        count=count+1;
      }

      if (GHGEC50===true)
      {
        count=count+1;
      }
      if (GHGEC51===true)
      {
        count=count+1;
      }
      GHGEC52=(count/5)*100;
      }
      
      document.getElementById("ghgec52a").innerHTML=GHGEC52+" %";

      var GHGEL29=document.getElementById("inlineradio13").checked;
      var GHGEL30=document.getElementById("inlineradio14").checked;
      var GHGEL31=document.getElementById("inlineradio15").checked;
      var GHGEL32=document.getElementById("inlineradio16").checked;
      var GHGEL33=document.getElementById("inlineradio17").checked;
      var GHGEL34=document.getElementById("inlineradio18").checked;
      var GHGEL35=document.getElementById("inlineradio19").checked;
      var GHGEL36=document.getElementById("inlineradio20").checked;
      var GHGEL37=document.getElementById("inlineradio21").checked;
      var GHGEL38=document.getElementById("inlineradio22").checked;
      var GHGEL39=document.getElementById("inlineradio23").checked;
      var GHGEL40=document.getElementById("inlineradio24").checked;
      var GHGEL41=document.getElementById("inlineradio25").checked;
      var GHGEL42=document.getElementById("inlineradio26").checked;
      var GHGEL43=document.getElementById("inlineradio27").checked;

      count=0;

      if (GHGEL29===true)
      {
        count=count+1;
      }
      
      if (GHGEL30===true)
      {
        count=count+1;
      }

      if (GHGEL31===true)
      {
        count=count+1;
      }

      if (GHGEL32===true)
      {
        count=count+1;
      }

      if (GHGEL33===true)
      {
        count=count+1;
      }
      
      if (GHGEL34===true)
      {
        count=count+1;
      }
      
      if (GHGEL35===true)
      {
        count=count+1;
      }
      
      if (GHGEL36===true)
      {
        count=count+1;
      }
      
      if (GHGEL37===true)
      {
        count=count+1;
      }
      
      if (GHGEL38===true)
      {
        count=count+1;
      }
      
      if (GHGEL39===true)
      {
        count=count+1;
      }
      
      if (GHGEL40===true)
      {
        count=count+1;
      }
      
      if (GHGEL41===true)
      {
        count=count+1;
      }
      
      if (GHGEL42===true)
      {
        count=count+1;
      }
      
      if (GHGEL43===true)
      {
        count=count+1;
      }
      
      GHGEL44=count;
      document.getElementById("ghgel44a").innerHTML=GHGEL44;

      if (GHGEL44===0)
      {
        GHGEK47=0;
      }
      else
      {
        GHGEK47=Math.round((GHGEK46/GHGEL44)*100);
      }
      document.getElementById("ghgek47a").innerHTML=GHGEK47;

      if (GHGEC6===true)
      {
        A=0;
      }
      else
      {
        A=(Number(GHGEC13)+Number(GHGEK8))/2;
      }
      if(GHGEC16===true)
      {
        B=0;
      }
      else
      {
        B=(Number(GHGEC23)+Number(GHGEK18))/2;
      }
      if (GHGEC27===true)
      {
        C=0;
      }
      else
      {
        C=(Number(GHGEC52)+Number(GHGEK47))/2;
      }
      GHGEK2=Math.round((Number(A)+Number(B)+Number(C))/3);

      document.getElementById("ghgek2a").innerHTML=GHGEK2 + " %";
      localStorage.setItem("ghgItem",GHGEK2);
    }