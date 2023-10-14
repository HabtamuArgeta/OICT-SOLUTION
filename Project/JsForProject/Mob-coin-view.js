let elem = document.getElementsByClassName('animated');
   let badges = document.getElementsByClassName('badges')
    let nomOfPhote = 0;
    showHidden();
    function showHidden(){
        for(let i =0;i<badges.length;i++){
          badges[i].className =  badges[i].className.replace(" w3-black","");
         }
      for(let i=0;i<elem.length;i++){
        elem[i].style.display = "none";
      } 
      
      if(nomOfPhote>=3){nomOfPhote = 0;}
       nomOfPhote++;
       elem[nomOfPhote-1].style.display = "block";
       badges[nomOfPhote-1].className += ' w3-black'; 
       
    }
     setInterval(showHidden,7000);