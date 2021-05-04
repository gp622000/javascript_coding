// let btn = document.getElementById('btn');
// btn.addEventListener('click',function(){
//     alert('the button has been clicked')
// })

console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.children) // child element of current document
console.log(document.children)// no of child element of current document.
console.log(document.fonts)
console.log(document.forms)
console.log(document.images)
console.log(document.links)

// id selector //
console.log(document.getElementById('btn'));
var htitle = document.getElementById('header-title')
// htitle.textContent = 'Welcome to the world of Gyan';
// htitle.innerText = 'Welcome Gyan'
// difference between innerText and textContent is the matter of styling.
// console.log(htitle.innerText) // shows style.
// console.log(htitle.textContent) // don't show style
// htitle.innerHTML = '<h3>Hello</h3>'
//htitle.style.borderBottom = 'solid 3px #000'

// GETELEMENTBYCLASSNAME// 
// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';

// // we can't do like items.style.backgroundColor = 'green';
// // items.style.backgroundColor = 'green' // gives error.

// for(let item of items){
//     item.style.backgroundColor = 'green';
// }

// GETELEMENTBYTAGNAME //
// var li = document.getElementsByTagName('li')
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold';


// QUERYSELECTOR //
var header = document.querySelector('#header-title')
header.style.borderBottom = 'solid 4px #000';

var input = document.querySelector('input');
input.value = 'Hello '

var item = document.querySelector('.list-group-item')
item.style.color = 'red';// select the 1st one

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue';

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for(let odds of odd){
    odds.style.backgroundColor = '#f4f4f4';
}

for(let evens of even){
    evens.style.backgroundColor = '#ccc';
}


// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentnode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement same as parentNode.
// console.log(itemList.parentElement)
// itemLIst.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes
// console.log(itemList.childNodes);
// list with all the child nodes.

// children
// console.log(itemList.children).

// document.querySelector('#items').childNodes
// NodeList(11) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]
// 0: text
// // 1: li.list-group-item
// 2: text
// 3: li.list-group-item
// 4: text
// 5: li.list-group-item
// 6: text
// 7: li.list-group-item
// 8: text
// 9: li.list-group-item
// 10: text
// length: 11
// __proto__: NodeList
// document.querySelector('#items').children
// HTMLCollection(5) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
// 0: li.list-group-item
// 1: li.list-group-item
// 2: li.list-group-item
// 3: li.list-group-item
// 4: li.list-group-item
// length: 5
// __proto__: HTMLCollection

// firstChild

// console.log(itemList.firstChild)
// firstElementChild
// console.log(itemList.firstElementChild)

//lastChild
// console.log(itemList.lastChild)
// lastElementChild
// console.log(itemList.lastElementChild);

// nextSibling
// console.log(itemList.nextSibling)
// listItems.firstElementChild.nextElementSibling
{/* <li class=​"list-group-item" style=​"background-color:​ rgb(204, 204, 204)​;​">​::marker​"Item 2"</li>​ */}

// previousSibling
// console.log(itemList.previousSibling)

// createElement

// create a div 
var newDiv = document.createElement('div');

// add class to newDiv
newDiv.className = 'newDiv';


// add id to newDiv
newDiv.id = 'newDivId'

// Add attr
newDiv.setAttribute('title','Hello Div');

// create ttext node
var newDivText = document.createTextNode("Hello from Div");

// Add text to div.
newDiv.appendChild(newDivText);
console.log(newDiv);

// insert this into our dom

var headeer = document.querySelector('div #items');

var container = document.querySelector('.container');

container.insertBefore(newDiv,headeer);



// DOM
// 