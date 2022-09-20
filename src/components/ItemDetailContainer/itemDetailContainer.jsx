import { useState, useEffect } from "react"
import products from '../utils/products'
import customFetch from '../utils/customFetch'
import ItemDetail from '../ItemDetail/itemDetail'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.id === 2))
            })
    }, [])


    return (
        <>
            {!loading ? <ItemDetail listProduct={listProduct} /> : <p>Cargando</p>}
        </>
    )
}
export default ItemDetailContainer