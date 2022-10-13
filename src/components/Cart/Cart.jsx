import { useCartContext } from "../../context/CartContext"
import "../Cart/CartStyles.css"
import { NavLink } from "react-router-dom"
import { db } from "../firebase/firebase"
import { getDocs, collection } from "firebase/firestore"

const Cart = () => {
    const productsCollection = collection(db, 'listProducts')
    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    const itemsList = cartList.map(prod =>
        <li className="containerProd" key={prod.id}>
            <div className="containerMainProd" >
                <img className="imgProd" src={prod.image}></img>
                <div className="container">
                    <div><h2 className="nameProd" >{prod.product}</h2></div>
                    <div className="containerPrice">
                        <p className="priceProd" ><b>${prod.price + ''}</b> </p>
                        <p className="quantityProd" >{prod.quantity} en carrito</p>
                        <p className="pricePerProd"><b>${prod.quantity * prod.price}</b></p>
                    </div>
                </div>
                <div className="containerRemove"><button className="removerProd" onClick={() => removeProduct(prod.id)}>X</button></div>

            </div>
        </li>
    )
    console.log(typeof cartList);
    const priceTotal =
        <li className="priceTotal" >
            <div className="price">
                <h2 className="priceTotal">Total: ${totalPrice()}</h2>
            </div>
            <div className="clearCart">
                <button className="cleanCart" onClick={cleanCart}>Borrar Carrito</button>
            </div>
            <div className="startBuy">
                <NavLink to={"/formulario"}>
                    <button className="starBuy">Pagar</button>
                </NavLink>
            </div>
        </li>

    const noProducts = <li className="priceTotal">
        <div className="price">
            <h2 className="pricetotal"> No hay productos en el carrito</h2>
        </div>
        <div className="clearCart">
            <NavLink to={"/"}>
                <button className="inicio">Agregar Productos</button>
            </NavLink >
        </div>
    </li>


    return (
        <ul className="ListaProductos">
            {itemsList}
            {cartList.length === 0 ? noProducts : priceTotal}
        </ul>

    )
}

export default Cart