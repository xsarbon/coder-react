import { useCartContext } from "../../context/CartContext"
import "../Cart/CartStyles.css"

const Cart = () => {
    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    const itemsList = cartList.map(prod =>
        <li className="containerProd" key={prod.id}>
            <div className="containerMainProd" >
                <img className="imgProd" src={prod.image}></img>
                <div className="container">
                    <div><h2 className="nameProd" >{prod.product}</h2></div>
                    <div className="containerPrice">
                        <p className="priceProd" ><b>${prod.price}</b></p>
                        <p className="quantityProd" >{prod.quantity} en carrito</p>
                    </div>
                </div>
                <div className="containerRemove"><button className="removerProd" onClick={() => removeProduct(prod.id)}>X</button></div>

            </div>
        </li>
    )
    const priceTotal = <li className="priceTotal" >
        <div className="price"><h2 className="priceTotal">Total: ${totalPrice()}</h2></div>
        <div className="clearCart"><button className="cleanCart" onClick={cleanCart}>Borrar Carrito</button></div>

    </li>

    return (
        <ul className="ListaProductos">
            {itemsList}
            {priceTotal}
        </ul>

    )
}

export default Cart