function caroTable() {
    let result = "";
    for (let i = 1; i <= 9; i++) {
        result += "<tr>";
        for (let j = 1; j <= 9; j++) {
            let table = i + j;
            if (table % 2 === 0) {
                result += "<td onclick='clickCell(this)' style='background-color: white'></td>";
            } else {
                result += "<td onclick='clickCell(this)' style='background-color: black; color: white'></td>";
            }
        }
        result += "</tr>";
    }
    document.getElementById("showMultiTable").innerHTML = result;
}

let turn = 1;

function clickCell(cell) {
    if (cell.innerHTML === "") {
        if (turn === 1) {
            cell.innerHTML = "X";
            turn = 2;
        } else {
            cell.innerHTML = "O";
            turn = 1;
        }
    }
}