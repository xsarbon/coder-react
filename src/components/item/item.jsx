import { NavLink } from "react-router-dom"
import { db } from "../firebase/firebase"
import { getDocs, collection } from "firebase/firestore"

const Item = ({ product }) => {
    const productsCollection = collection(db, 'listProducts')
    return (
        <div className="card">
            <img src={product.image} className="image"></img>
            <div className="containerBtn">
                <h2 className="producto">{product.product}</h2>
                <p className="stock">Disponibles: <b>{product.stock}</b></p>
                <button className="add">Agregar al carrito</button>
                <NavLink className="add2cont" to={`/product/${product.id}`}><button className="add2">Ver detalle</button></NavLink>

            </div>
        </div>

    )
}
export default Item