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
        badges[i].className =  badges[i].className.replace(" w3-black","");
      } 
      elem1[nomOfslide].style.display = "block";
      badges[nomOfslide].className += " w3-black";
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
  

 let id001 = setInterval(countClient,10);
 let num1 = 0;
 function countClient(){
  if(num1 == 330){clearInterval(id001)}
  else{num1++;document.getElementById('client').innerText = num1 + "+";}
 }

 let id002 = setInterval(projDone,30);
 let num2 = 0;
 function projDone(){
  if(num2 == 75){clearInterval(id002)}
  else{num2++;document.getElementById('projDone').innerText = num2 + "+";}
 }

 let id003 = setInterval(projUndone,60);
 let num3 = 0;
 function projUndone(){
  if(num3 == 25){clearInterval(id003)}
  else{num3++;document.getElementById('projUndone').innerText = num3 + "+";}
 }

 let id004 = setInterval(year,100);
 let num4 = 0;
 function year(){
  if(num4 == 4){clearInterval(id004)}
  else{num4++;document.getElementById('year').innerText = num4 + "+";}
 }

 function filter(id,class1){
  let num = document.getElementsByClassName('all');
    let elem = document.getElementsByClassName(class1);
     let allElem = document.getElementsByClassName('project-bar-item');
      for(let i=0;i<allElem.length;i++){
       allElem[i].style.color = "black"
       
    }
    id.style.color = "rgb(57, 96, 249)"
  
    for(let i=0;i<num.length;i++){
        num[i].style.display = "none"
    }
    for(let i=0;i<elem.length;i++){
      elem[i].style.display = "block"
  }

 }

