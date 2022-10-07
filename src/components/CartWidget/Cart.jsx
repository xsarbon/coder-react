import React from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

function Cart() {
    const { totalQuantity, cartList } = useCartContext()
    const showQuantity = cartList.length === 0 ? <p></p> : <p className="totalQuantity">{totalQuantity()}</p>
    return (
        <NavLink to="/Cart">
            <ShoppingCartRoundedIcon className="cart" color="primary" fontSize="large" />
            {showQuantity}
        </NavLink>
    );
}

export default Cart;