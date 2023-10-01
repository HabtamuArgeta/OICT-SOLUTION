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

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

// Define a new path:
ctx.beginPath();

// Define a start point
ctx.moveTo(16,11);

// Define points
ctx.lineTo(34,22);
ctx.lineTo(16,32);
ctx.lineTo(16,11);
ctx.fillStyle = "white ";
ctx.fill()
ctx.stroke();

var c = document.getElementById("myCanvas1");
var ctx1 = c.getContext("2d");
ctx1.beginPath();
ctx1.lineTo(177,10);
ctx1.arc(150,10,55,89,Math.PI);
ctx1.lineTo(177,10);
ctx1.fillStyle = "rgb(44, 218, 259)";
ctx1.strokeStyle = "rgb(44, 218, 259)";
ctx1.fill()
ctx1.stroke();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.lineTo(177,10);
ctx2.arc(150,10,55,89,Math.PI);
ctx2.lineTo(177,10);
ctx2.fillStyle = "rgb(44, 218, 259)";
ctx2.fill()
ctx2.strokeStyle = "rgb(44, 218, 259)";
ctx2.stroke();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.lineTo(177,10);
ctx3.arc(150,10,55,89,Math.PI);
ctx3.lineTo(177,10);
ctx3.fillStyle = "rgb(44, 218, 259)";
ctx3.fill()
ctx3.strokeStyle = "rgb(44, 218, 259)";
ctx3.stroke();
