function caroTable() {
    let result = "";
    for (let i = 1; i <= 9; i++) {
        result += "<tr>";
        for (let j = 1; j <= 9; j++) {
            result += "<td onclick='clickCell(this)'></td>";
        }
        result += "</tr>";
    }
    document.getElementById("showMultiTable").innerHTML = result;
}

let turn = 1;

function clickCell(cell) {
    if (cell.innerHTML === "") {
        if (turn === 1) {
            cell.innerHTML = "x";
            turn = 2;
        } else {
            cell.innerHTML = "o";
            turn = 1;
        }
    }
}