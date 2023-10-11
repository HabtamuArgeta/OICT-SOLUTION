tooglMe(1)
    function tooglMe(num){
        var elements = document.getElementsByClassName('showOnToggel');
        var anchor = document.getElementsByClassName('anchor');
        var up = document.getElementsByClassName('up1');
        var down = document.getElementsByClassName('dwn1');
        for(let i = 0;i<elements.length;i++){
            elements[i].style.display = "none"; 
            anchor[i].style.color = 'rgb(25, 24, 24)';
            down[i].style.display ="block";
            up[i].style.display ="none";
        }
        elements[num-1].style.display = "block"; 
        anchor[num-1].style.color = 'blue'
        down[num-1].style.display ="none";
        up[num-1].style.display ="block";
    }

    tooglMe2(1)
    function tooglMe2(num){
        var elements = document.getElementsByClassName('showOnToggel2');
        var anchor = document.getElementsByClassName('anchor2');
        var up = document.getElementsByClassName('up2');
        var down = document.getElementsByClassName('dwn2');
        for(let i = 0;i<elements.length;i++){
            elements[i].style.display = "none"; 
            anchor[i].style.color = 'rgb(25, 24, 24)';
            up[i].style.display ="none";
            down[i].style.display ="block";
        }
        elements[num-1].style.display = "block"; 
        anchor[num-1].style.color = 'blue'
        up[num-1].style.display ="block";
        down[num-1].style.display ="none";
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