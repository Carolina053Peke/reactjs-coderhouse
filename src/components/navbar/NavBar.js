import {CartWidget} from '../cartwidget/CartWidget'

export function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <a className="navbar-brand" href="/#">Mi E-Commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item active">
                    <a className="nav-link" href="/#">Inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Contacto</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Productos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/#">Anteojos de sol</a>
                    <a className="dropdown-item" href="/#">Anteojos Vintage</a>
                    <a className="dropdown-item" href="/#">Armazones</a>
                    </div>
                </li>
                </ul>
            </div>
            <div className="cart-container">
            <CartWidget />
            </div>
            </nav>
        </div>
    );
}
