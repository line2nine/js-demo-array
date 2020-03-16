const column = 8;
const row = 8;
let array = [];
let result = "";
let isGameOver = false;

//-----Display Caro Table-----
function caroTable() {
    for (let i = 0; i < row; i++) {
        array[i] = [];
        result += "<tr>";
        for (let j = 0; j < column; j++) {
            result += "<td onclick='clickCell(this, " + i + " , " + j + ")'></td>";
        }
        result += "</tr>";
    }
    document.getElementById("showCaroTable").innerHTML = result;
}

//-----Play the game-----
let turn = 1;

function clickCell(cell, x, o) {
    if (isGameOver) {
        return;
    }
    if (cell.innerHTML === "") {
        if (turn === 1) {
            cell.innerHTML = "X";
            turn = 2;
            array[x][o] = "X";
        } else {
            cell.innerHTML = "O";
            turn = 1;
            array[x][o] = "O";
        }
    } else alert("Wait your turn");
    checkWinner(cell, x, o);
}

//-----Check Winner-----
function checkWinner(cell, x, o) {

    //Horizontal Check
    let i = 1;
    let count = 1;
    let j = 1;
    while ((o + i) < column && array[x][o + i] === cell.innerHTML) {
        i++;
        count++;
    }

    while (o - j >= 0 && array[x][o - j] === cell.innerHTML) {
        j++;
        count++;
    }

    endGame(count);

    //Vertical Check
    while ((x + i) < row && array[x + i][o] === cell.innerHTML) {
        i++;
        count++;
    }

    while (x - j >= 0 && array[x - j][o] === cell.innerHTML) {
        j++;
        count++;
    }

    endGame(count);

    //Diagonal Left to Right

    while ((o + j < column) && (x + i < row) && (array[x + i][o + j] === cell.innerHTML)) {
        i++;
        j++;
        count++;
    }
    endGame(count);

    while ((o - j >= 0) && (x - i >= 0) && (array[x - i][o - j] === cell.innerHTML)) {
        i++;
        j++;
        count++;
    }
    endGame(count);

    while ((o - j >= 0) && (x + i < row) && (array[x + i][o - j] === cell.innerHTML)) {
        i++;
        j++;
        count++;
    }
    endGame(count);

    //Diagonal Right to Left
    while ((o + j < column) && (x - i >= 0) && (array[x - i][o + j] === cell.innerHTML)) {
        i++;
        j++;
        count++;
    }
    endGame(count);

    return true;
}

function endGame(count) {
    if (count === 4) {
        alert("END GAME");
        isGameOver = true;
    }
}