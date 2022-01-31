    function positiveimpact()
    {
      var PIJ12=document.getElementById("pij12a").value;
      var PIK14=document.getElementById("pik14a").value;
      var PIK16=document.getElementById("pik16a").value;
      var PIJ23=document.getElementById("pij23a").value;
      var PIK25=document.getElementById("pik25a").value;
      var PIK27=document.getElementById("pik27a").value;
      
      PIK12=PIJ12/10;
      PIK23=PIJ23/10;
      PIK2=Math.round(Number(PIK12)+Number(PIK14)+Number(PIK16)+Number(PIK23)+Number(PIK25)+Number(PIK27))
      document.getElementById("pik12a").innerHTML=PIK12+" %";
      document.getElementById("pik23a").innerHTML=PIK23+" %";  
      document.getElementById("pik2a").innerHTML=PIK2+" %";      
      localStorage.setItem("piItem",PIK2);
    }