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