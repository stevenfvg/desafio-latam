<div align="center">

# Demonstration Project: Traversing The DOM

</div>

The goal of this example is to dynamically build a Cuppon-like deals grid using JSON data and DOM traversing techniques. Instead of writing all cards directly in HTML, the app first creates a base structure and then navigates the DOM tree to find the correct node where the content will be injected.

**Description**

This project uses `querySelector`, `getElementsByClassName`, and `parentElement` to:

- Render the main layout (`header`, `main`, `footer`) inside `#app`.
- Locate the first `.col` node as a reference point.
- Move up to its parent node (`.row`) and replace its content with all cards generated from `cupponDeals.json`.

## Objective

Render a list of deal cards using external data, applying DOM traversing to locate and update the right container without manually editing each element in HTML.

## Flow Used in This Example

1. Wait for `DOMContentLoaded` to ensure the DOM is ready.
2. Inject the full layout structure into `#app`.
3. Get the collection of elements with the `col` class.
4. Take the first `col` and use `parentElement` to reach the `row`.
5. Replace `row.innerHTML` with a `map(...).join('')` result that generates all deal cards.

## DOM Traversing in the Code

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
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
```

```javascript
export function getElementFromDom(element, data) {
    if (!element || !element.length || !Array.isArray(data)) return;

    const row = element[0].parentElement; // traversing: move from .col to parent .row
    row.innerHTML = data.map(deal => {
        return `<div class="col">...</div>`;
    }).join('');
}
```

## Requirements

1. Have Node.js installed.
2. Install dependencies inside `projects/traversing-the-dom`.
3. Run the project locally using Vite.

## Run the Project

```bash
npm install
npm run dev
```

## Key Learnings

- Traversing lets you move between related nodes (children, parents, siblings) to update the DOM precisely.
- A minimal HTML base structure can become a complete dynamic interface using JavaScript.
- Separating `layout` and `render` logic makes the UI easier to maintain and scale.
