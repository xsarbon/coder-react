import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/itemDetail'
import { useParams } from "react-router-dom"
import { doc, getDoc, collection, } from "firebase/firestore"
import { db } from "../firebase/firebase"

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, 'listProducts')
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc)
            .then((res) => {
                setListProduct(
                    {
                        id: res.id,
                        ...res.data()
                    }
                )
            })
            .finally(() => {
                setLoading(false)
            })




        /*setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.id === parseInt(id)));

    })*/
    }, [])




    return (
        <>
            {!loading ? <ItemDetail listProduct={listProduct} /> : <p>Cargando</p>}
        </>
    )
}
export default ItemDetailContainer