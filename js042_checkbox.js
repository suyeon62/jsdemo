//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert("약관에 동의해야 합니다.");
    return false;
  }
};

//전체 선택
document.frm.allCheck.onclick = function () {
  //console.log(this.checked);
  //document.frm.subject1.checked = this.checked;
  //document.frm.subject2.checked = this.checked;
  //document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  //console.log(checkgroup);

  let myThis = this;
  /*checkgroup.forEach((element) => {
    //<input type="checkbox" name="subject1" id="subject1" class="checkgroup" />
    //console.log(this);
    element.checked = myThis.checked;
  });*/

  //checkgroup은 NodeList이므로 map을 사용할 수 없다. (map은 배열만 사용 가능)
  //Array.from()을 이용해서 NodeList를 Array로 생성한다.
  /*let myArray = Array.from(checkgroup);
  myArray.map((element) => {
    return (element.checked = myThis.checked);
  });*/

  let iArray = [...checkgroup];
  iArray.map((element) => {
    return (element.checked = myThis.checked);
  });
};
