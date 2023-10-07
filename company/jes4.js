let id001 = setInterval(countClient,40);
 let num1 = 0;
 function countClient(){
  if(num1 == 130){clearInterval(id001)}
  else{num1++;document.getElementById('client').innerText = num1 + "+";}
 }

 let id002 = setInterval(projDone,30);
 let num2 = 0;
 function projDone(){
  if(num2 == 150){clearInterval(id002)}
  else{num2++;document.getElementById('projDone').innerText = num2 + "+";}
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
   let num = elem02.length; let j=0;
   showHidden02();
   function showHidden02(){
    for(let i =0;i<badges.length;i++){
      badges[i].className =  badges[i].className.replace(" w3-black","");
    }
    let firstElem = elem02[0].innerHTML;
    for(let i=0;i<num;i++){
      if(i==num-1){
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