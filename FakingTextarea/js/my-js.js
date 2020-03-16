let str = ["Can you see me?", "Now you see me!"];

let text = document.getElementById("fakeTxt");
let letter = str[0];
let lenStr = str.length;
//var on = false;
text.onkeydown = function (e) {
    let lenTxt = text.value.length % lenStr + 1;
    // if (e.keyCode === 9) {
    //     letter = str[(on = !on) | 0];
    //     len = str.length;
    // }
    text.value = letter.substr(0,lenTxt);
    e.preventDefault();
};

// //use tab key to prank someone
// var strs = [
//     "I'm fool!",
//     "I'm cool!"
// ];
//
// var t = $('#txt'),
//     str = strs[0],
//     len = str.length,
//     on = false;
//
// t.keydown(function(e){
//     var l = t.val().length%len+1;
//
//     if(e.which == 9){
//         str = strs[(on = !on)|0];
//         len = str.length;
//     }
//
//     t.val(str.substr(0,l));
//     e.preventDefault();
// })

// var strs = [
//     "I'm fool!",
//     "I'm cool!"
// ]; // khai báo 2 cái string để hiển thị ra.
//
// var t = document.getElementById("fakeTxt"), //tìm đến cái thằng text area
//     str = strs[0],// khai báo string gốc là cái đầu tiên
//     len = str.length,//khai báo độ dài string gốc
//     on = false;//tắt cái đéo gì chưa biết
//
// t.onkeydown = function(e){
//     var l = t.value.length%len+1;//khai báo lờ là độ dài của text đã nhập chia hết cho text định hiển thị lấy số dư, đại khái nó để đếm xem đang gõ đến chữ số mấy rồi.
//
//     if(e.which == 9){ // nếu ấn tab
//         str = strs[(on = !on)|0]; // thì thay đổi string thành cái kia cái này viết tắt 1 kiểu if else
//         len = str.length;// khai báo lại độ dài đoạn string gốc phòng trường hợp 2 cái của nợ này độ dài khác nhau
//     }
//
//     t.value = str.substr(0,l);// gắn text lại vào text area được cắt theo từ 0 đến số phím đã được bấm
//     e.preventDefault(); // xóa không nhận kí tự đc nhập vào.
// }