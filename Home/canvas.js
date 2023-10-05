// this is js file that dedfines canvas html

const canvas = document.getElementById("myCanvas");


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
