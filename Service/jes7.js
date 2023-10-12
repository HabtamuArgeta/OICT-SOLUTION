showHidden(1);
    function showHidden(num){
        let hidden = document.getElementsByClassName('hidden');
        let anchors = document.getElementsByClassName('first-anchors');
        for(let i=0;i<hidden.length;i++){
            hidden[i].style.display = "none";
            anchors[i].style.backgroundColor = "aliceblue";
        }
        hidden[num-1].style.display = "block";
        anchors[num-1].style.backgroundColor = "green";
    }