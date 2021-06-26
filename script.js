var xOrO = 1;

function startGame() {
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("restartButton").style.visibility = "visible";
    document.getElementById("gameBoard").style.visibility = "visible";
    document.getElementById("player").innerHTML = "It is player X turn!";
    document.getElementById("player").style.visibility = "visible";
}

function checkBox(id) {
    var sign = document.getElementById(id).innerHTML;
    if (sign == "") {
        if (xOrO % 2 == 0) {
            document.getElementById(id).innerHTML = "O";
            document.getElementById(id).style.color = "red";
            document.getElementById("player").innerHTML = "It is player X turn!";
            checkWin();
        } else {
            document.getElementById(id).innerHTML = "X";
            document.getElementById(id).style.color = "blue";
            document.getElementById("player").innerHTML = "It is player O turn!";
            checkWin();
        }
        ++xOrO;
    }
}

function checkWin() {
    if (document.getElementById("1").innerHTML == "X" && document.getElementById("2").innerHTML == "X" && document.getElementById("3").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("4").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("6").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("7").innerHTML == "X" && document.getElementById("8").innerHTML == "X" && document.getElementById("9").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("1").innerHTML == "X" && document.getElementById("4").innerHTML == "X" && document.getElementById("7").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("2").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("8").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("3").innerHTML == "X" && document.getElementById("6").innerHTML == "X" && document.getElementById("9").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("1").innerHTML == "O" && document.getElementById("2").innerHTML == "O" && document.getElementById("3").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("4").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("6").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("7").innerHTML == "O" && document.getElementById("8").innerHTML == "O" && document.getElementById("9").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("1").innerHTML == "O" && document.getElementById("4").innerHTML == "O" && document.getElementById("7").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("2").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("8").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("3").innerHTML == "O" && document.getElementById("6").innerHTML == "O" && document.getElementById("9").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("1").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("9").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("3").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("7").innerHTML == "X") {
        document.getElementById("winner").innerHTML = "X won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("1").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("9").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    } else if (document.getElementById("3").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("7").innerHTML == "O") {
        document.getElementById("winner").innerHTML = "O won!!!";
        document.getElementById("player").style.visibility = "hidden";
    }
    if (xOrO == 9) {
        document.getElementById("winner").innerHTML = "It is a draw! Play again!";
        document.getElementById("player").style.visibility = "hidden";
    }
}

function restartGame() {
   location.reload();
}