import logo from '../images/logo.jpg';
import '../../App.css';
import Cart from '../CartWidget/Cart'
import { NavLink } from "react-router-dom"

function NavBar() {
    /* La funcion NavBar devuelve la sigueinte estructura */
    return (
        <div className='nav'>
            <div className='tamanio'>
                <NavLink to="/">
                    <img className='logo' src={logo} ></img>
                </NavLink>

                <h1 className='titulo'>Tienda de tecnologia</h1>
                <div className='links'>
                    <NavLink to="/">
                        <button className='etiqueta' href="#">Inicio</button>
                    </NavLink>
                    <NavLink to="category/notebooks">
                        <button className='etiqueta' href="#">Notebooks</button>
                    </NavLink>
                    <NavLink to="category/celulares">
                        <button className='etiqueta' href="#">Celulares</button>
                    </NavLink>
                    <NavLink to="category/audio">
                        <button className='etiqueta' href="#">Audio</button>
                    </NavLink>
                    <NavLink to="category/hogar">
                        <button className='etiqueta' href="#">Hogar</button>
                    </NavLink>
                </div>
                <Cart />
            </div>
        </div >
    );
}

export default NavBar;
