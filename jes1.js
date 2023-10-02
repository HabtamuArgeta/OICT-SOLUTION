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

     let elem1 = document.getElementsByClassName('HiddenSlide');
     let badges = document.getElementsByClassName('badges');
    let nomOfslide = 0;
    showHiddenSlide(nomOfslide);

     function showHiddenSlide(){
      for(let i=0;i<elem1.length;i++){
        elem1[i].style.display = "none";
        badges[i].className =  badges[i].className.replace(" w3-green","");
      } 
      elem1[nomOfslide].style.display = "block";
      badges[nomOfslide].className += " w3-green";
      nomOfslide++;
      if(nomOfslide>=4){nomOfslide = 0;}   
    }
    setInterval(showHiddenSlide,10000);

    let elem01 = document.getElementsByClassName('hiddin01');
  let num = elem01.length; 
  let min = 0;let max = 5;
  showHidden01();
  function showHidden01(){
    for (let i=0;i<=num-1;i++){
      elem01[i].style.display = "none";
    }
    for (let i=min;i<=max;i++){
      elem01[i].style.display = "block";
    }
    min++;
    max ++;
    if(max == num){max = 5;min = 0;}

  }
   
  setInterval(showHidden01,10000);
  

 

