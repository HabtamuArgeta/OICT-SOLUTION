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

   var c = document.getElementsByClassName("myCanvas");
   for(let i = 0;i<c.length;i++){
    var ctx1 = c[i].getContext("2d");
    ctx1.beginPath();
    ctx1.arc(180,180,100,Math.PI,Math.PI + Math.PI/2,false);
    ctx1.lineTo(180,180)
    ctx1.fillStyle = "rgb(57, 96, 249)";
    ctx1.strokeStyle = "rgb(57, 96, 249)";
    ctx1.fill()
    ctx1.stroke();
   }

   let initialcountry = 0;
   let id01 = setInterval(countMe1,100);
   function countMe1(){
     if(initialcountry == 15){clearInterval(id01)}
     else{ initialcountry++; document.getElementById('numOfCountry').innerText = initialcountry + "+" }
   }

   let initialCustomer = 0;
   let id02 = setInterval(countMe2,100);
   function countMe2(){
     if(initialCustomer == 23){clearInterval(id02)}
     else{ initialCustomer++; document.getElementById('numOfCustomer').innerText = initialCustomer + "k" }
   }
   
   var c4 = document.getElementsByClassName("myCanvas4");
   for(let i=0;i<c4.length;i++){
   var ctx4 = c4[i].getContext("2d");
   ctx4.beginPath();
   ctx4.moveTo(49,30);
   ctx4.lineTo(77,30);
   ctx4.lineTo(77,60);
   ctx4.lineTo(49,30);
   ctx4.fillStyle = "rgb(109, 135, 243)";
   ctx4.strokeStyle = "rgb(109, 135, 243)";
   ctx4.fill()
   ctx4.stroke();
   }

   let elem02 = document.getElementsByClassName('image-container1');
   let badges = document.getElementsByClassName('badges')
   let num2 = elem02.length; let j=0;
   showHidden02();
   function showHidden02(){
    for(let i =0;i<badges.length;i++){
      badges[i].className =  badges[i].className.replace(" w3-black","");
    }
    let firstElem = elem02[0].innerHTML;
    for(let i=0;i<num2;i++){
      if(i==num2-1){
        elem02[i].innerHTML = firstElem;
        break;
      }
      elem02[i].innerHTML = elem02[i+1].innerHTML;  
    } 
    badges[j].className += ' w3-black'; 
    j++;
    if(j == badges.length){j = 0;}
   }
   
   setInterval(showHidden02,5000);
   