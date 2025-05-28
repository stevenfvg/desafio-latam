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
 */
function changeElementColor() {
    const box = document.getElementsByClassName('.container');
    box.style.backgroundColor = 'lightblue'; // changes the background color of the element.
    box.style.color = 'white'; // changes the text color.
    box.style.padding = '10px';
    box.style.borderRadius = '5px';
}


```