import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {
    const addToCart = (listProduct, quantity) => {
        if (isInCart(listProduct.id)) {
            const newCart = cartList.map(prod => {
                if (prod.id === listProduct.id) {
                    const newQuantity = prod.quantity + quantity
                    return { ...prod, quantity: newQuantity }
                } else {
                    return prod
                }
            })
            setCartList(newCart)
        } else {
            const newProduct = { ...listProduct, quantity: quantity }
            setCartList([...cartList, newProduct])
        }
    }

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.find(prod => prod.id === id)



    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id != id))

    const cleanCart = () => setCartList([])

    const totalPrice = () => {
        return cartList.reduce((acc, product) => acc += (product.price * product.quantity), 0)
    }

    const totalQuantity = () => {
        return cartList.reduce((acc, product) => acc += product.quantity, 0)
    }


    return (
        <CartContext.Provider value={{
            removeProduct,
            cleanCart,
            totalPrice,
            totalQuantity,
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )

}