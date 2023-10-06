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

   let id001 = setInterval(countClient,10);
 let num1 = 0;
 function countClient(){
  if(num1 == 330){clearInterval(id001)}
  else{num1++;document.getElementById('client').innerText = num1 + "+";}
 }

 let id002 = setInterval(projDone,5);
 let num2 = 0;
 function projDone(){
  if(num2 == 850){clearInterval(id002)}
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

 let id005 = setInterval(incrimentWidth1,100);
 let num5 = 0;
 function incrimentWidth1(){
  if(num5 == 70){clearInterval(id005)}
  else{num5++;document.getElementById('indicator1').style.width = num5 + "%";}
 }
 let id006 = setInterval(incrimentWidth2,100);
 let num6 = 0;
 function incrimentWidth2(){
  if(num6 == 90){clearInterval(id006)}
  else{num6++;document.getElementById('indicator2').style.width = num6 + "%";}
 }
 let id007 = setInterval(incrimentWidth3,100);
 let num7 = 0;
 function incrimentWidth3(){
  if(num7 == 60){clearInterval(id007)}
  else{num7++;document.getElementById('indicator3').style.width = num7 + "%";}
 }