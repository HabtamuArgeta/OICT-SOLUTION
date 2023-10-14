let elem02 = document.getElementsByClassName('animated-image');
   let num2 = elem02.length; let j=0;
   showHidden02();
   function showHidden02(){
    let firstElem = elem02[0].innerHTML;
    for(let i=0;i<num2;i++){
      if(i==num2-1){
        elem02[i].innerHTML = firstElem;
        break;
      }
      elem02[i].innerHTML = elem02[i+1].innerHTML;  
    } 
   }
   
   setInterval(showHidden02,5000);