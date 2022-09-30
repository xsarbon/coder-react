import React from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavLink } from "react-router-dom"
import CartContextProvider from "../../context/CartContext"

function Cart() {
    return (
        <NavLink to="/Cart">
            <ShoppingCartRoundedIcon className="cart" color="primary" fontSize="large" />

        </NavLink>
    );
}

export default Cart;