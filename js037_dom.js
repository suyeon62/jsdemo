let pNode = document.getElementById("wrap");

//1 P null
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);

//속성명
let pAttr = pNode.attributes;
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr);
console.log(pAttr[0]); //id="wrap"
console.log(pAttr.id); //id="wrap"
console.log(pAttr.length); //2

//2 id wrap
console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`);

let pIdAttr = pNode.getAttribute("id");
//wrap
console.log(pIdAttr);

let textNode = pNode.firstChild;

//"content"
console.log(textNode);

//3, #text, content
console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
);

///////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠

let bodyNode = document.getElementsByTagName("body")[0];
//content
console.log(bodyNode.innerText);

console.log(bodyNode.innerHTML);

//////////////////////////////////
//value
let fname = document.querySelector("#fname");
console.log(fname.value); //홍길동
