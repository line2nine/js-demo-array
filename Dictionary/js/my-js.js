function translateAuto() {
    let dictionaryEng = ["apple", "keyboard", "mouse", "cat", "dog", "buffalo"];
    let dictionaryVie = ["quả táo", "bàn phím", "chuột", "con mèo", "con chó", "con trâu"];
    let transFrom = document.getElementById("inputFrom").value;
    for (let i = 0; i < dictionaryEng.length; i++) {
        if (transFrom === dictionaryEng[i]) {
            document.getElementById("outputTo").value = dictionaryVie[i];
            break;
        }
    }
}