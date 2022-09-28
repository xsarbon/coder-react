import ItemCount from "../ItemCount/itemCount"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const ItemDetail = ({ listProduct }) => {
    console.log(listProduct)
    const [isAdded, setIsAdded] = useState(false)
    const onAdd = () => {
        setIsAdded(true)
    }

    return (
        <div className="itemDetail">
            <div className="itemDetailContainer">
                <img className="imagenDetail" src={listProduct.image} />
                <section className="detalles">
                    <h2 className="producto">{listProduct.product}</h2>
                    <p className="description">{listProduct.description}</p>
                    <h3 className="precio">${listProduct.price}</h3>
                    {
                        isAdded ?
                            <NavLink to="/Cart"><button className="irAlCarrito">Ir al Carrito</button></NavLink>
                            : <ItemCount product={listProduct} onAdd={onAdd} />
                    }

                </section>
            </div>

        </div>
    )
}
export default ItemDetail