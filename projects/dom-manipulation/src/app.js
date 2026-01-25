/**
 * Function to process DOM elements and add functionality to them.
 * @param [string] array of elements.
 */
export function getElementsFromDom(elements) {
    // Destructuring the received elements into individual variables.
    const [
        spinner, // Spinner container (loading or progress).
        productImage, // Product image.
        selectedQuantity, // Input to enter the product quantity.
        selectedColor, // Select to choose the product color.
        priceOfTheProduct, // Product price.
        btnCalculateTotal, // Button to calculate the total.
        totalAmount, // Calculated total amount.
        totalQuantity, // Total selected quantity.
        productColor, // Element with class "rounded-circle" to show the selected product color.
    ] = elements;

    // Get the product price from the element's text.
    const price = priceOfTheProduct.innerText || priceOfTheProduct.textContent;
    // Convert the price to a number by removing symbols like $ and commas.
    const rawPrice = Number(price.replace(/[\$,]/g, ''));

    // Initialize the total amount with 0 in currency format.
    const startingAmount = 0;
    totalAmount.innerHTML = `${startingAmount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    })}`;

    // Initialize the total quantity with a value of 0.
    const startingQuantity = 0;
    totalQuantity.innerHTML = `${startingQuantity}`;

    // Function to load event listeners on the interactive elements.
    const loadEventListeners = () => {
        // Event to hide the spinner and show the image once it's loaded.
        productImage.addEventListener('load', () => {
            spinner.classList.add('d-none'); // Hide the spinner.
            productImage.classList.remove('d-none'); // Show the image.
        });
        // Events to handle user input in the quantity field.
        selectedQuantity.addEventListener('input', handleInputQuantity);
        selectedQuantity.addEventListener('keydown', handleKeydownQuantity);
        // Event to calculate the total when clicking the button.
        btnCalculateTotal.addEventListener('click', calculateTheTotal);
    };

    // Function to handle input in the quantity field.
    const handleInputQuantity = e => {
        let quantityValue = e.target.value;

        // Validate that the entered quantity is a number from 1 to 9.
        if (!/^[1-9]$/.test(quantityValue)) {
            // If the quantity exceeds the allowed limit, show a warning.
            if (quantityValue >= 10) {
                alert('La cantidad excede el stock disponible.');
                // Reset the input field value.
                quantityValue = '';
            }
        }
        // Update the field with the validated value.
        e.target.value = quantityValue;
    };

    // Function to handle key presses in the quantity field.
    const handleKeydownQuantity = e => {
        // Allow certain keys like "Backspace" and arrow keys.
        const controlKeys = ['Backspace', 'ArrowUp', 'ArrowDown'];

        // Allow the event to continue.
        if (controlKeys.includes(e.key)) return;
        // Prevent any key that is not a number from 1 to 9.
        if (!/^[1-9]$/.test(e.key)) e.preventDefault();
    };

    // Function to calculate the total based on the selected quantity and color.
    const calculateTheTotal = e => {
        e.preventDefault(); // Prevent the default form behavior.

        // Get the selected quantity and color.
        const quantity = parseInt(selectedQuantity.value);
        const color = selectedColor.value;

        // Validate if the quantity is not defined or is invalid.
        if (selectedQuantity.value === '' || selectedQuantity.value === NaN) {
            alert('Introduzca la cantidad de producto.');
            return; // Stop function execution.
        }

        // Validate if the color has not been selected.
        if (selectedColor.value === '' || selectedColor.value === 'color' || selectedColor.value === 'Color') {
            alert('Seleccione el color del producto.');
            return;
        } else {
            // Calculate the total by multiplying quantity by price.
            const total = quantity * rawPrice;

            // Display the total and quantity in the respective containers.
            totalAmount.innerHTML = `${total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
            })}`;
            totalQuantity.innerHTML = `${quantity}`;

            // Update the product color visually.
            productColor.classList.remove('bg-secondary');
            productColor.style.backgroundColor = color;
        }
    };

    // Call the function to load all event listeners.
    loadEventListeners();
}
