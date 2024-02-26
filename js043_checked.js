// //약관 동의
// document.frm.onsubmit = () => {
//     let admin = document.frm.admin;
//     if (!admin.checked) {
//       alert("약관에 동의해야 합니다.");
//       return false;
//     }
//   };

let sum = total.value.valueOf(Number);
console.log(sum);

document.frm.opt1.onclick = function () {
  document.frm.opt1.checked = this.checked;
  let opt1Num = opt1.value.valueOf(Number);
  sum += opt1Num;
};

document.frm.opt2.onclick = function () {
  document.frm.opt2.checked = this.checked;
  let opt2Num = opt2.value.valueOf(Number);
  sum += opt2Num;
};

document.frm.opt3.onclick = function () {
  document.frm.opt3.checked = this.checked;
  let opt2Num = opt3.value.valueOf(Number);
  sum += opt2Num;
};
