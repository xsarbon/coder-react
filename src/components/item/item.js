import products from "../utils/products"
import ItemCount from "../ItemCount/ItemCount"

const item = ({ product }) => {
    return (
        <div className="container">
            <div className="card">
                <img src={product.image} className="image"></img>
                <div className="buttons">
                    <h2>{product.product}</h2>
                </div>
                <div className="buttons">
                    <button className="restar">-</button>
                    <p></p>
                    <p>{product.stock}</p>
                    <button className="aumentar">+</button>
                </div>
                <button className="add">Agregar al carrito</button>
            </div>
        </div>
    )
}
export default item