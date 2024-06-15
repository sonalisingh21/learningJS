// (method) Document.getElementById(elementId: string): HTMLElement | null
// Returns a reference to the first object with the specified value of the ID attribute.

document.getElementById('title')
//<h1 id=​"title" class=​"heading">​LEARNING DOM​</h1>​

// method) Element.getAttribute(qualifiedName: string): string | null
// Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.
document.getElementById('title').getAttribute('classname')
null
document.getElementById('title').getAttribute('class')
//'heading'


// (method) Element.setAttribute(qualifiedName: string, value: string): void
// Sets the value of element's first attribute whose qualified name is qualifiedName to value.

document.getElementById('title').setAttribute('class', 'test')
//<h1 id="title" class="test">LEARNING DOM</h1> - result. overrides the class name from heading to test;


//STORING ELEMENTS IN VARIABLES >> const title = document.getElementById('title') , FOR EASY ACCESS

// title.style.backgroundColor ="green" sets bgcolor to green;
// title.style.padding ="40px"

title.innerText - LEARNING DOM' - shows hiddent text irrespective of display property
title.innerHTML-'LEARNING DOM  <span style="display: none;">content xyz</span>'v - shows html between the text
'LEARNING DOM  content xyz'

title.textContent - 'LEARNING DOM  content xyz' - displays all text on webpage


// (method) Document.getElementsByClassName(classNames: string): HTMLCollectionOf<Element>
// Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
document.getElementsByClassName('heading')


// HTMLCollection [h1#title.heading, title: h1#title.heading]
// 0
// : 
// h1#title.heading
// title
// : 
// h1#title.heading
// length
// : 
// 1
// [[Prototype]]
// : 
// HTMLCollection


//IMPORTANT QUERY SELECTORS
document.querySelector('h1')
// (method) ParentNode.querySelector<"h1">(selectors: "h1"): HTMLHeadingElement | null (+4 overloads)
// Returns the first element that is a descendant of node that matches selectors.

document.querySelectorAll('h1')
// (method) ParentNode.querySelectorAll<"h1">(selectors: "h1"): NodeListOf<HTMLHeadingElement> (+4 overloads)
// Returns all element descendants of node that match selectors.


document.querySelector('.heading') - //returns class named as HTMLHeadingElement

document.querySelector('#heading') 
//HTMLHeadingElement
//returns id named as heading

uonorderedlist.querySelector('li') //- return first element of list