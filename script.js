var xOrO = 1;

function startGame() {
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("restartButton").style.visibility = "visible";
    document.getElementById("gameBoard").style.visibility = "visible";
    document.getElementById("player").innerHTML = "It is player 'X' turn!";
    document.getElementById("player").style.visibility = "visible";
}

function checkBox(id) {
    var sign = document.getElementById(id).innerHTML;
    if (sign == "") {
        if (xOrO % 2 == 0) {
            document.getElementById(id).innerHTML = "O";
            document.getElementById(id).style.color = "red";
            document.getElementById("player").innerHTML = "It is player 'X' turn!";
            checkWin("O");
        } else {
            document.getElementById(id).innerHTML = "X";
            document.getElementById(id).style.color = "blue";
            document.getElementById("player").innerHTML = "It is player 'O' turn!";
            checkWin("X");
        }
        ++xOrO;
    }
}

function checkWin(newSign) {
    for (var i = 1, k = 1; i <= 3; i++, k += 3) {
        var counterColumns = 0;
        var counterLines = 0;
        var counterMainDiagonal = 0;
        var counterSecondaryDiagonal = 0;
        for (var j = 1, column = i, line = k, mainDiagonal = 1, secondaryDiagonal = 3; j <= 3; j++, column += 3, line++, mainDiagonal += 4, secondaryDiagonal += 2) {
            if (document.getElementById(column).innerHTML == newSign) {
                counterColumns++;
            } 
            if (document.getElementById(line).innerHTML == newSign) {
                counterLines++;
            } 
            if (document.getElementById(mainDiagonal).innerHTML == newSign) {
                counterMainDiagonal++;
            } 
            if (document.getElementById(secondaryDiagonal).innerHTML == newSign) {
                counterSecondaryDiagonal++;
            } 
            if (counterLines == 3 || counterColumns == 3 || counterMainDiagonal == 3 || counterSecondaryDiagonal == 3) {
                document.getElementById("winner").innerHTML = "Player '" + newSign + "' won the game!";
                document.getElementById("winner").style.color = "red";
                document.getElementById("player").innerHTML = "Press on the 'Restart Game' to play again!";
                document.getElementById("player").style.color = "DarkBlue";
            }
        }
    }
    if (xOrO == 9) {
        document.getElementById("winner").innerHTML = "It is a draw! Play again!";
        document.getElementById("player").style.visibility = "hidden";
    }
}

function restartGame() {
   location.reload();
}