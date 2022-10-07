import React from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

function Cart() {
    const { totalQuantity } = useCartContext()
    return (
        <NavLink to="/Cart">
            <ShoppingCartRoundedIcon className="cart" color="primary" fontSize="large" />
            <p className="totalQuantity">{totalQuantity()}</p>
        </NavLink>
    );
}

export default Cart;