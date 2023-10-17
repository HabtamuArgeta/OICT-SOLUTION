function closeSbar(){
    document.getElementById('sidebar01').style.display = "none";
    document.getElementById('overlaybody').style.display = "none";
     }
   function openSbar(){
    document.getElementById('sidebar01').style.display = "block";
    document.getElementById('overlaybody').style.display = "block";
     }
     function makeMeActive(evt){
      let active = document.getElementsByClassName('active1');
        let i;
        for(i=0;i<active.length;i++){
          active[i].className = active[i].className.replace(' w3-pale-green','');
        }
        evt.currentTarget.className += " w3-pale-green";
      }
  
      function showHiddenOySideBr(evt,id){
        let elem = document.getElementById(id);
        if(elem.className.indexOf('w3-show') == -1){
           elem.className += 'w3-show';
           
        }
        else{
           elem.className = elem.className.replace('w3-show','');
        }
        let active = document.getElementsByClassName('active');
        let i;
        for(i=0;i<active.length;i++){
          active[i].className = active[i].className.replace(' w3-green','');
        }
        evt.currentTarget.className += " w3-green";
      }
  
      function filterMe(){
        let sidebar =  document.getElementById('sidebar01');
        let filteredElement = sidebar.getElementsByTagName('a');
        let filteringData = document.getElementById('search01').value;
        filteringData = filteringData.toUpperCase();
        let i,dataOfFilteredElement;
         for( i=0;i<filteredElement.length;i++){
           dataOfFilteredElement = filteredElement[i].innerText ;
           if(dataOfFilteredElement.toUpperCase().indexOf(filteringData) != -1){
             filteredElement[i].style.display = "block"
           }
           else{
              filteredElement[i].style.display = "none"
           }
         }
        }