function findByKeyword(eng, keyword, vie) {
    for (let i = 0; i < eng.length; i++) {
        if (keyword === eng[i]) {
            return vie[i];
        }
    }
    return null;
}

function translateAuto() {
    let dictionaryEng = ["apple", "keyboard", "mouse", "cat", "dog", "buffalo"];
    let dictionaryVie = ["quả táo", "bàn phím", "chuột", "con mèo", "con chó", "con trâu"];
    let transFrom = document.getElementById("inputFrom").value;
    document.getElementById("outputTo").value = findByKeyword(dictionaryEng, transFrom, dictionaryVie);
}