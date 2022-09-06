import logo from '../images/logo.jpg';
import '../../App.css';
import Cart from '../Cart/Cart'

function NavBar() {
    return (
        <div className='nav'>
            <div className='tamanio'>
                <img className='logo' src={logo} ></img>
                <h1 className='titulo'>Electrolandia</h1>
                <div className='links'>
                    <a className='etiqueta' href="#">Inicio</a>
                    <a className='etiqueta' href="#">Notebooks</a>
                    <a className='etiqueta' href="#">Celulares</a>
                    <a className='etiqueta' href="#">Audio</a>
                    <a className='etiqueta' href="#">Hogar</a>
                </div>
                <Cart />
            </div>
        </div>
    );
}

export default NavBar;
