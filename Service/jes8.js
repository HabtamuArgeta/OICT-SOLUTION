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

let id001 = setInterval(countClient,10);
 let num1 = 0;
 function countClient(){
  if(num1 == 330){clearInterval(id001)}
  else{num1++;document.getElementById('client').innerText = num1 + "+";}
 }

 let id002 = setInterval(projDone,5);
 let num = 0;
 function projDone(){
  if(num == 850){clearInterval(id002)}
  else{num++;document.getElementById('projDone').innerText = num + "+";}
 }

 let id003 = setInterval(Advisors,60);
 let num3 = 0;
 function Advisors(){
  if(num3 == 25){clearInterval(id003)}
  else{num3++;document.getElementById('advisors').innerText = num3 + "+";}
 }

 let id004 = setInterval(year,100);
 let num4 = 0;
 function year(){
  if(num4 == 10){clearInterval(id004)}
  else{num4++;document.getElementById('year').innerText = num4 + "+";}
 }

 let elem1 = document.getElementsByClassName('HiddenSlide');
 let badge = document.getElementsByClassName('badge');
let nomOfslide = 0;
showHiddenSlide(nomOfslide);

 function showHiddenSlide(){
  for(let i=0;i<elem1.length;i++){
    elem1[i].style.display = "none";
    badge[i].className =  badge[i].className.replace(" w3-black","");
  } 
  elem1[nomOfslide].style.display = "block";
  badge[nomOfslide].className += " w3-black";
  nomOfslide++;
  if(nomOfslide>=4){nomOfslide = 0;}   
}
setInterval(showHiddenSlide,10000);