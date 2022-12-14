/* Realizamos todas las importaciones que necesitaremos */
import { useCartContext } from "../../context/CartContext"
import "../Cart/CartStyles.css"
import { NavLink } from "react-router-dom"


const Cart = () => {
    /* Importamos las funciones a utilizar desde el CartContext */
    const { cartList, totalPrice, removeProduct, cleanCart, savePPP } = useCartContext()


    /* Guardamos Product Per Product en LocalStorage */
    savePPP(cartList)


    /* Mapeamos cartList y por cada producto devolvemos un codigo HTML dinamico con las propiedades de cada prod, y al hacer click en uno de los productos, lleva al usuario al detalle de ese producto */
    const itemsList = cartList.map(prod =>
        <li className="containerProd" key={prod.id}>
            <div className="containerMainProd" >
                <NavLink className="link" to={`/product/${prod.id}`}>
                    <img className="imgProd" src={prod.image}></img>
                    <div className="container">
                        <div><h2 className="nameProd" >{prod.product}</h2></div>
                        <div className="containerPrice">
                            <p className="priceProd" ><b>${prod.price + ''}</b> </p>
                            <p className="quantityProd" >{prod.quantity} en carrito</p>
                            <p className="pricePerProd"><b>${prod.quantity * prod.price}</b></p>
                        </div>
                    </div>
                </NavLink >
                <div className="containerRemove"><button className="removerProd" onClick={() => removeProduct(prod.id)}>X</button></div>
            </div>
        </li>

    )


    /* Declaramos el priceTotal, donde mostraremos el precio total del carrito de compras del usuario, daremos opcion para borrar el carrito y para avanzar al formulario de pago */
    const priceTotal =
        <li className="priceTotal" >
            <div className="price">
                <h2 className="priceTotal">Total: ${totalPrice()}</h2>
            </div>
            <div className="clearCart">
                <button className="cleanCart" onClick={(cleanCart)}>Borrar Carrito</button>
            </div>
            <div className="startBuy">
                <NavLink to={"/formulario"}>
                    <button className="starBuy">Pagar</button>
                </NavLink>
            </div>
        </li>


    /* En caso de que el carrito de compras este Vacio, mostraremos un mensaje alentando al cliente a realizar una compra y facilitandole la lista de productos */
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


    /* En caso de haber productos, Cart mostrara producto por producto, con sus cantidades, precio unitario y precio total por producto, ademas el cliente podra quitar el producto que desee, dicho cambio se vera reflejado en el precio total del carrito y la lista de productos. En caso de no haber productos en el carrito, no se mostraran productos, sino, se mostrara un mensaje dandole aviso al usuario, ademas, se mostrara un boton el cual redirige al usuario a la lista de productos, alentando asi al usuario a realizar una compra */
    return (
        <ul className="ListaProductos">
            {itemsList}
            {cartList.length === 0 ? noProducts : priceTotal}
        </ul>
    )
}

export default Cart