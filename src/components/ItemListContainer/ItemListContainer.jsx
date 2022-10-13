import React from "react";
import '../ItemCount/ItemCount'
import ItemList from "../itemList/itemList.jsx"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"


function ItemListContainer() {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { category } = useParams()



  useEffect(() => {
    const productsCollection = collection(db, 'listProducts')

    if (category) {
      const q = query(productsCollection, where('category', '==', `${category}`))
      getDocs(q)
        .then((data) => {
          const list = data.docs.map((prod) => {
            return {
              ...prod.data(),
              id: prod.id
            }
          })

          setListProduct(list)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      getDocs(productsCollection)
        .then((data) => {
          const list = data.docs.map((prod) => {
            return {
              ...prod.data(),
              id: prod.id
            }
          })

          setListProduct(list)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [category])




  return (
    <>
      {!loading
        ?
        <ItemList listProduct={listProduct} />
        :
        <p>Cargando...</p>}
    </>
  )
}


export default ItemListContainer
