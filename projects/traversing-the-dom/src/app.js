export function getElementFromDom(element, data) {
    if (!element || !element.length || !Array.isArray(data)) return;

    const row = element[0].parentElement;
    row.innerHTML = data.map(deal => {
        return `
            <div class="col">
                <div class="card w-100">
                    <img src="${deal.url}" class="card-img-top img-fluid" alt="${deal.title}">
                    <div class="card-body">
                        <h5 class="card-title mb-3">${deal.title}</h5>
                        <h6>${deal.suptitle}</h6>
                        <h6><i class="bi bi-geo-alt-fill"></i> ${deal.location}</h6>
                        <hr />
                        <div class="row g-0">
                            <div class="col col-sm-8">
                                <h6 class="price">$${deal.price.toLocaleString('es-CL')}</h6>
                            </div>
                            <div class="col col-sm-4">
                                <h5 class="offer">$${deal.offer.toLocaleString('es-CL')}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
