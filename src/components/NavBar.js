import logo from './images/logo.jpg';
import '../App.css';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

function NavBar() {
    return (
        <div className='nav'>
            <img className='logo' src={logo} ></img>
            <h1 className='titulo'>Electrolandia</h1>
            <div className='links'>
                <a className='etiqueta' href="#">Inicio</a>
                <a className='etiqueta' href="#">Notebooks</a>
                <a className='etiqueta' href="#">Celulares</a>
                <a className='etiqueta' href="#">Audio</a>
                <a className='etiqueta' href="#">Hogar</a>
            </div>
            <ShoppingCartRoundedIcon color="primary" fontSize="large" />
        </div>
    );
}

export default NavBar;
