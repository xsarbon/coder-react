import logo from '../images/logo.jpg';
import '../../App.css';
import Cart from '../Cart/Cart'
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className='nav'>
            <div className='tamanio'>
                <NavLink to="/">
                    <img className='logo' src={logo} ></img>
                </NavLink>

                <h1 className='titulo'>Mi tienda</h1>
                <div className='links'>
                    <NavLink className="etiquetaa" to="/">
                        <a className='etiqueta' href="#">Inicio</a>
                    </NavLink>
                    <NavLink className="etiquetaa" to="category/notebooks">
                        <a className='etiqueta' href="#">Notebooks</a>
                    </NavLink>
                    <NavLink className="etiquetaa" to="category/celulares">
                        <a className='etiqueta' href="#">Celulares</a>
                    </NavLink>
                    <NavLink className="etiquetaa" to="category/audio">
                        <a className='etiqueta' href="#">Audio</a>
                    </NavLink>
                    <NavLink className="etiquetaa" to="category/hogar">
                        <a className='etiqueta' href="#">Hogar</a>
                    </NavLink>
                </div>
                <Cart />
            </div>
        </div >
    );
}

export default NavBar;
