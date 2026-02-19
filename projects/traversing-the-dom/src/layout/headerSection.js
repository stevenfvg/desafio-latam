import logoWhite from '../assets/images/logo-white.png';

export default function headerSection() {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-green mb-4">
            <div class="container-fluid mx-md-5 mx-3">
                <img src="${logoWhite}" alt="logo-white" width="100px">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Nosotros</a>
                        <a class="nav-link" href="#">Servicios</a>
                        <a class="nav-link" href="#">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}
