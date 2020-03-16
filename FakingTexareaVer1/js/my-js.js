let text = [];
let area = "";
text[1] = "C";
text[2] = "A";
text[3] = "N";
text[4] = " ";
text[5] = "Y";
text[6] = "O";
text[7] = "U";
text[8] = " ";
text[9] = "S";
text[10] = "E";
text[11] = "E";
text[12] = " ";
text[13] = "M";
text[14] = "E";
text[15] = "?";

function fakeTyping() {
    let txt = document.fake.text.value;
    if (txt.length > 0) {
        for (let i = 1; i <= txt.length; i++) {
            area += text[i];
            if (i === 16) {
                document.fake.text.value = "";
                area = "";
            }
        }
    }
    document.fake.text.value = area;
    area = "";
    setTimeout('fakeTyping()', 1);
}