// Import Bootstrap's predefined styles and Icon library.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the Card and Info components for the product.
import Card from './components/productCard.js';
import Info from './components/infoContainer.js';

// Import the getElementsFromDom() function to retrieve DOM elements.
import { getElementsFromDom } from './app.js';

// Wait until the DOM content is fully loaded before executing the code.
document.addEventListener('DOMContentLoaded', () => {
    // Main application element where the components will be rendered.
    const app = document.querySelector('#app');
    // HTML structure inside the main element:
    app.innerHTML = `
        <div class="container-fluid vh-100 py-4 d-flex align-items-center justify-content-center">
            <div class="row w-100">
                <div class="col-sm-12 col-md-7 d-flex justify-content-center justify-content-md-end mb-3 mb-md-0">
                    ${Card()}
                </div>
                <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                    ${Info()}
                </div>
            </div>
        </div>
    `;

    // Array of elements we want to retrieve from the DOM.
    const elements = [
        document.getElementById('spinner-container'), // Spinner container (loading or progress).
        document.getElementById('product-image'), // Product image.
        document.getElementById('selected-quantity'), // Input field to enter the product quantity.
        document.getElementById('selected-color'), // Select dropdown to choose the product color.
        document.getElementById('price'), // Product price.
        document.getElementById('calculate-total'), // Button to calculate the total.
        document.getElementById('total-amount'), // Calculated total amount.
        document.getElementById('quantity'), // Total selected quantity.
        document.querySelector('.rounded-circle'), // Element with "rounded-circle" class to display the selected product color.
    ];

    // Call the getElementsFromDom() function to process the selected elements.
    getElementsFromDom(elements);
});
