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