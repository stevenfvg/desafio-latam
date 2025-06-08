<div align="center">

# Demonstration Project: DOM Manipulation

</div>

The goal is to implement a product card displayed in an online store and add user interaction. To achieve this, we will manipulate the DOM, allowing the user to modify the product's quantity and color.

**Description**

The following methods will be used: `getElementsByClassName`, `getElementById`, and `querySelector` to retrieve DOM elements either by tag name, class, or ID, and to modify styles through the `style` object.

**Objective**

The user should be able to type in the product quantity and color through input elements. Then, upon clicking a button labeled Calculate Total, the total price to be paid, along with the specified quantity and color, should be displayed in a DOM container.

## Requirements

1. Add all the necessary elements within the HTML.
2. Select and store the elements to be modified in variables.
3. Modify the DOM to update the total price to be paid.
4. Modify the DOM to update the product quantity specified in the input.
5. Modify the DOM to change the color of a circle using the color specified by the user.

## DOM Element Access and Style Changes

```javascript
// Get a DOM element by ID
document.getElementById('title');

// Get the DOM element by CSS class name.
document.getElementsByClassName('icon-link');

// You can also use the querySelector method to get an element by ID or class within the DOM. Example:
document.querySelector('.container');
// In this case, you must specify to the method whether it's a class using a . or an ID using a #.

// Gets all <div> elements within the <body>.
document.body.querySelectorAll('div');

/**
 * Changes the style of the element with class '.container'.
 * @function
 */
function changeElementColor() {
    const box = document.getElementsByClassName('.container');
    box.style.backgroundColor = 'lightblue'; // changes the background color of the element.
    box.style.color = 'white'; // changes the text color.
    box.style.padding = '10px';
    box.style.borderRadius = '5px';
}
```
`querySelectorAll`: this is also a method of the Document object, but instead of returning just one element, it returns a collection (NodeList) of all elements that match a given CSS selector. You can use it to select multiple elements and iterate over them. For example:

```javascript
const elements = document.querySelectorAll('.element-class');
elements.forEach(element => {
    // Do something with each element.
});
```
## Generate HTML element from the DOM

```javascript
// Creates a new <p> element in the document.
const hashtag = document.createElement('p');

// Sets the text content of the previously created <p> element.
hashtag.textContent = '#DocumentObjectModel';

// Searches the document for the first element with the class 'container' and stores it in the 'container' variable.
const container = document.querySelector('.container');

// Appends the created <p> element to the end of the 'container' element.
container.appendChild(hashtag);
```
## Remove element from the DOM

```javascript
// Selects the first element with the class 'container' in the HTML document.
const element = document.querySelector('.container');

// Removes the third child element of the previously selected element.
element.removeChild(element.children[2]);
```
## Traversing The DOM

```javascript
// Get the first child element using firstElementChild.
const firstElementChild = document.body.firstElementChild;
console.log('First child element:');
console.log(firstElementChild);

// Get the last child element using lastElementChild.
const lastElementChild = document.body.lastElementChild;
console.log('Last child element:');
console.log(lastElementChild);

// Get all child nodes using childNodes.
const childNodes = document.body.childNodes;
console.log('Child nodes:');
console.log(childNodes);

// Get all child elements using children.
const elementsChildren = document.body.children;
console.log('Child elements:');
console.log(elementsChildren);

// Get the node type of the first child using nodeType.
const firstChildType = document.body.firstElementChild.nodeType;
console.log('First child node type:');
console.log(firstChildType);

// Get the next sibling element using nextElementSibling.
const nextElementSibling = document.head.nextElementSibling;
console.log('Next sibling element:');
console.log(nextElementSibling);
```