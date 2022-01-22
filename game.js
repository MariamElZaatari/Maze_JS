function init() {
    var start = document.getElementById("start");
    var boundaries = document.getElementsByClassName("boundary");
    var status=document.getElementById("status");
    var firstTry=true;
    var counter=0;
    start.onmouseenter = function () {
        if (firstTry){
            status.innerHTML="<br/>";
        }
        firstTry=false;
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = function () {
                for (var i = 0; i < boundaries.length; i++){
                    boundaries[i].style.backgroundColor = "red";
                }
                status.innerHTML="Loser"
            };
        }
    };
    start.onclick = function reset() {
        for (var i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "#eeeeee";
        }
        status.innerHTML="<br/>";
    };
};
document.addEventListener("DOMContentLoaded", () => init());

