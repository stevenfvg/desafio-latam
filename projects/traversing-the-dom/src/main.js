// Import CSS custom styles.
import './assets/css/styles.css';

// Import Bootstrap's predefined styles and Icon library.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the data for the cuppon deals.
import cupponDeals from './data/cupponDeals.json';

// Import the layout components.
import HeaderSection from './layout/headerSection.js';
import MainSection from './layout/mainSection.js';
import FooterSection from './layout/footerSection.js';

// Import the app function to process the DOM elements.
import { getElementFromDom } from './app.js';

// Wait until the DOM content is fully loaded before executing the code. This is a good practice to ensure that the DOM is fully loaded before executing the code.
document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    // HTML structure inside the main element:
    app.innerHTML = `
		<div class="container-fluid vh-100 p-0">
			${HeaderSection()}
			${MainSection()}
			${FooterSection()}
		</div>
	`;

    const element = document.getElementsByClassName('col');
    getElementFromDom(element, cupponDeals);
});
