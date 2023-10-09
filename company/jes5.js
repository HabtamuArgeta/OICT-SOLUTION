var c = document.getElementsByClassName("Canvas1");
   for(let i = 0;i<c.length;i++){
    var ctx1 = c[i].getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(40,30)
    ctx1.lineTo(22,45)
    ctx1.lineTo(40,60)
    ctx1.fillStyle = "orangered"
    ctx1.strokeStyle = "orangered"
    ctx1.fill()
    ctx1.stroke();
   }

   var c = document.getElementsByClassName("Canvas2");
   for(let i = 0;i<c.length;i++){
    var ctx1 = c[i].getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(40,30)
    ctx1.lineTo(58,45)
    ctx1.lineTo(40,60)
    ctx1.fillStyle = "orangered"
    ctx1.strokeStyle = "orangered"
    ctx1.fill()
    ctx1.stroke();
   }

