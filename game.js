function init() {
    var start = document.getElementById("start");
    var boundaries = document.getElementsByClassName("boundary");

    start.onclick = function () {
        reset();
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = function () {
                for (var i = 0; i < boundaries.length; i++)
                    boundaries[i].style.backgroundColor = "red";
            }
        }
    }
    function reset() {
        for (var i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "#eeeeee";
    }
}


document.addEventListener("DOMContentLoaded", () => init());

