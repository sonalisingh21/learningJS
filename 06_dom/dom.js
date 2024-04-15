//What is the DOM? The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


//SOME COMMANDS TO TRY IN BROWSER console;



//window.document returns a reference to the document contained in the window. both do same thing

console.log(window.document);
console.log(document); // gives an html doc of webpage;


//if you want to see the properties associated with it; following command is to be executed

console.dir(document);

//EVERYTHING IN DOM IS A NODE- represented as child or siblings; 
//dom tells how to interact with a webpage and it's nodes;


//The baseURI property returns the base URI of the document. The baseURI property is read-only. Syntax
console.log(baseURI);

//HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>
//Retrieves a collection of all a objects that specify the href property and all area objects in the document.
console.log(document.links)

//links are similar to arrays therefore we can access elements of links the way we access array elements
console.log(document.links[2]) // gives 2nd link from HTMLcollection


//HOW TO GET ELEMENTS IN BROWSER CONSOLE VIA ID;
//INSPECT, HOVER AND COPY THE ID of element you want to access for example heading in an html doc;
//Returns a reference to the first object with the specified value of the ID attribute.

document.getElementById('firstHeading')

//if you want to make changes in document / dom manipulation 
//Element: innerHTML property
//The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
document.getElementById('firstHeading').innerHTML = "<H1> SONALI'S DOM MANIPULATION </H1>"

//op= <H1> SONALI'S DOM MANIPULATION </H1> this will be replaced in html document's heading

