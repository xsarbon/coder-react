import { useCartContext } from "../../context/CartContext"

const Cart = () => {
    const { cartList, totalPrice } = useCartContext()
    const itemsList = cartList.map(prod =>
        <li key={prod.id}>
            <div>
                <img src={prod.image}></img>
                <h2>{prod.product}</h2>
                <p><b>${prod.price}</b></p>
                <p>{prod.quantity} en carrito</p>
            </div>
        </li>
    )
    const priceTotal = <li>{totalPrice}</li>
    return (
        <ul>
            {itemsList}
            {priceTotal}
        </ul>
    )
}

export default Cart