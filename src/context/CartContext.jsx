import { createContext, useState, useContext } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {

    const totalPrice = () => {
        return cartList.reduce((acc, product) => acc += (product.price * product.quantity), 0)
    }

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.find(prod => prod.id === id)

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartList.map(prod => {
                if (prod.id === item.id) {
                    const newQuantity = prod.quantity + quantity
                    return { ...prod, quantity: newQuantity }
                } else {
                    return prod
                }
            })
            setCartList(newCart)
        } else {
            const newProduct = { ...item, quantity: quantity }
            setCartList([...cartList, newProduct])
        }
    }



    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    const cleanCart = () => setCartList([])




    const totalQuantity = () => {
        return cartList.reduce((acc, product) => acc += product.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            cleanCart,
            totalPrice,
            totalQuantity,
            cartList
        }}>
            {children}
        </CartContext.Provider>
    )

}