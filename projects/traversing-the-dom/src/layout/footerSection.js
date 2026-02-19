import logoBlack from '../assets/images/logo-black.png';

export default function footerSection() {
    return `
        <div class="container-fluid mt-2 pt-4 px-0 pb-0">
            <div class="footer">
                <div class ="text-center">
                    <h5 class="text-white pb-3 pt-5">Recibe cupones en tu correo</h5>
                    <form class="px-xs-0 px-md-5 mx-md-5 mx-5 pb-3">
                        <input class="form-control mb-2" type="text" placeholder="Nombre">
                        <input class="form-control mb-4" type="email" placeholder="Correo electronico">
                        <button type="button" class="btn btn-light mb-3">Enviar</button>
                    </form> 
                </div> 
                <div class="bg-white text-center pt-4 pb-4">
                    <img src="${logoBlack}" alt="logo-black" width="100px">
                    <h6>&copy; 2022 Cuppon Latam. Todos los derechos reservados</h6>
                </div>
            </div>
        </div> 
    `;
}
