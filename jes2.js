let elem = document.getElementsByClassName('homeImg');
    let nomOfPhote = 0;
    showHidden(nomOfPhote);

    function showHidden(){
      for(let i=0;i<elem.length;i++){
        elem[i].style.display = "none";
      } 
      
      if(nomOfPhote>=3){nomOfPhote = 0;}
       nomOfPhote++;
       elem[nomOfPhote-1].style.display = "block";
       
    }
     setInterval(showHidden,13000);
    function chenge(num){
      nomOfPhote = nomOfPhote + num -1 ;
      if(nomOfPhote >= 3){nomOfPhote = 0;}
     else if(nomOfPhote < 0){nomOfPhote = 2;}

       showHidden(nomOfPhote);
       
     }
   let elem01 = document.getElementsByClassName('hiddin');
   let num = elem01.length; 
   showHidden01();
   function showHidden01(){
    let firstElem = elem01[0].innerHTML;
    for(let i=0;i<num;i++){
      if(i==num-1){
        elem01[i].innerHTML = firstElem;
        break;
      }
      elem01[i].innerHTML = elem01[i+1].innerHTML;
      
    }  
   }
   
   setInterval(showHidden01,12000);