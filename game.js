function init() {
    
    var boundaries = document.getElementsByClassName("boundary");
    var score = 0;
    var startGame=false;
    var firstTry=true;

    document.getElementsByClassName("example")[0].style.textAlign = "center";
    document.getElementsByClassName("example")[0].innerHTML = score;

    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "reset";
    resetBtn.onclick = function(){
        score = 0;
        document.getElementsByClassName("example")[0].innerHTML = score;
        for (var i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "#eeeeee";
        }
        status.innerHTML='Begin by moving your mouse over the "S".';
        startGame = false;

        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = function () {
            };
        }
        firstTry = true;
    }

    document.body.append(resetBtn)

    var start = document.getElementById("start");
    var status=document.getElementById("status");
    
    start.onmouseenter = function () {
        startGame=true;
        if (firstTry){
            status.innerHTML="<br/>";
        }
        firstTry=false;
        for (var i = 0; i < boundaries.length; i++) {
            if(boundaries[i].classList.contains("example"))
                continue
            boundaries[i].onmouseover = function () {
                for (var i = 0; i < boundaries.length; i++){
                    if(boundaries[i].classList.contains("example"))
                    continue
                    boundaries[i].style.backgroundColor = "red";
                }
                if(status.innerHTML!="You Lose"){
                    score = score - 10;
                    document.getElementsByClassName("example")[0].innerHTML = score;
                }
                status.innerHTML="You Lose"

            };
        }

    };
    start.onclick = function reset() {
        for (var i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "#eeeeee";
        }
        status.innerHTML="<br/>";
    };

    var end=document.getElementById("end");
    end.onmouseenter = function(){
        if(!startGame)
            return
        var boundary=document.getElementById("boundary1");
        if(boundary.style.backgroundColor!="red"){
            
            if(status.innerHTML != "You Win"){
                score = score + 5;
                document.getElementsByClassName("example")[0].innerHTML = score;
            }
            status.innerHTML="You Win";

            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].onmouseover = function () {
                };
            }
        }
    }

};
document.addEventListener("DOMContentLoaded", () => init());

