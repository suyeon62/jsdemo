let hNode = document.getElementById("selector");
console.log(`${hNode}`);
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length);
console.log(pNode[0]);
console.log(pNode.item(0));
console.log(pNode[0].innerText); //content1
console.log(pNode[0].textContent); //content1
pNode[0].style.backgroundColor = "blue";

function process() {
  //alert("click");
  let fname = document.frm.fname;
  console.log(fname, typeof fname);
  console.log(fname.value);
  console.log(fname.defaulValue);
  return false;
}
