import products from "../utils/products"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} className="image"></img>
            <div className="containerBtn">
                <h2 className="producto">{product.product}</h2>
                <p className="stock">Disponibles: <b>{product.stock}</b></p>
                <div className="buttons">
                    <button className="restar">-</button>
                    <p className="initial">{product.initial}</p>
                    <button className="aumentar">+</button>
                </div>
                <button className="add">Agregar al carrito</button>
            </div>
        </div>

    )
}
export default Item