function init() {

    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var startGame = false;
    var firstTry = true;
    var score = 0;

    //Score Add to Boundary Example
    document.getElementsByClassName("example")[0].style.textAlign = "center";
    document.getElementsByClassName("example")[0].innerHTML = score;


    //Start of Start Div Section
    start.onmouseenter = function () {
        startGame = true;
        //Remove Status if first time starting the game
        if (firstTry) {
            status.innerHTML = "<br/>";
        }
        firstTry = false;
        //Start of Lose Section
        for (var i = 0; i < boundaries.length; i++) {
            //Do not add listener to Boundary Example
            if (boundaries[i].classList.contains("example"))
                continue
            //Add listener on boundaries to change color to red
            boundaries[i].onmouseover = function () {
                for (var i = 0; i < boundaries.length; i++) {
                    //Do not change color of Boundary Example
                    if (boundaries[i].classList.contains("example"))
                        continue
                    boundaries[i].style.backgroundColor = "red";
                }
                //Change score once then change status to You Lose
                if (status.innerHTML != "You Lose") {
                    score = score - 10;
                    document.getElementsByClassName("example")[0].innerHTML = score;
                }
                status.innerHTML = "You Lose"
            };
        }
    };
    //Reset colors and status in case of play again
    start.onclick = function playAgain() {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = "#eeeeee";
        }
        status.innerHTML = "<br/>";
    };
    //End of Start Div Section

    //Start of End Div Section
    end.onmouseenter = function () {
        //Do not win if game not started
        if (!startGame)
            return
        //Check if boundaries are red by checking one boundary color only
        var boundary = document.getElementById("boundary1");
        if (boundary.style.backgroundColor != "red") {
            //Change score once then change status to You Win
            if (status.innerHTML != "You Win") {
                score = score + 5;
                document.getElementsByClassName("example")[0].innerHTML = score;
            }
            status.innerHTML = "You Win";
            //Remove listeners on boundaries if endgame
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].onmouseover = function () {
                };
            }
        }
    }
    //End of End Div Section

    //Start of Reset Button Section
    //Create Reset Button, add onclick, and append button to body
    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "reset";
    resetBtn.onclick = function () {
        //reset everything to initial values
        score = 0;
        document.getElementsByClassName("example")[0].innerHTML = score;
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = "#eeeeee";
        }
        status.innerHTML = 'Begin by moving your mouse over the "S".';
        startGame = false;
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = function () {
            };
        }
        firstTry = true;
    }
    document.body.append(resetBtn)
    //End of Reset Button Section
};

//Solution for JS Link in HTML Head
document.addEventListener("DOMContentLoaded", () => init());

