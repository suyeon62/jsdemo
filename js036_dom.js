let myNode = document.querySelector("#p2");

//parentNode 부모
let ptNode = myNode.parentNode;
//<div id="wrap"></div>
console.log(ptNode);

//[object HTMLDivElement]
console.log(`${ptNode}`);
/////////////////////////////////////////////
//previousSibling
let prevNode = myNode.previousSibling;
console.log(prevNode); //#text

prevNode = prevNode.previousSibling;
console.log(prevNode); //<p id=​"p1">​content1​</p>​
//prevNode:[object HTMLParagraphElement]
console.log(`prevNode:${prevNode}`);

/////////////////////////////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
//nextNode:[object Text]
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling;
//nextNode:[object HTMLParagraphElement], content3
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);

/////////////////////////////////////////////
//previousElementSibling
let prevEleNode = myNode.previousElementSibling;
//prevEleNode:[object HTMLParagraphElement], content1
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerText}`);

/////////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
//nextEleNode:[object HTMLParagraphElement], content3
console.log(`nextEleNode:${nextEleNode}, ${nextEleNode.innerText}`);

/////////////////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
//divNode:[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
//divChildesNode:[object NodeList]
console.log(`divChildesNode:${divChildesNode}`);
//NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(divChildesNode);

/////////////////////////////////////////////
//children
let divChildren = divNode.children;
//divChildren:[object HTMLCollection]
console.log(`divChildren:${divChildren}`);

console.log(divChildren); //HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(divChildren[0]); //<p id="p1">content1</p>
console.log(divChildren.item(0)); //<p id="p1">content1</p>
console.log(divChildren.namedItem("p1")); //<p id="p1">content1</p>

/////////////////////////////////////////////
//firstChild,  firstElementChild
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우 고수" />
console.log(aNode);

/////////////////////////////////////////////
//객체.getAttibute("속성명"),  객체.setAttribute("속성명","값")
//객체.속성명 , 객체.속성명="값"
let aAttrNode = aNode.getAttribute("src");
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute("title", "스타배우");
console.log(aNode.getAttribute("title")); //스타배우

aNode.id = "imgGosu";
console.log(aNode.id); //imgGosu
