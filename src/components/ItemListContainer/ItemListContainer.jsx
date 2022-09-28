import React from "react";
import '../ItemCount/itemCount'
import products from "../utils/products"
import ItemList from "../itemList/itemList.jsx"
import customFetch from '../utils/customFetch';
//import ItemCount from "../ItemCount/ItemCount";//
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"


function ItemListContainer() {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { category } = useParams()


  useEffect(() => {
    setLoading(true)
    customFetch(products)
      .then(res => {
        if (category) {
          setLoading(false)
          setListProduct(res.filter(prod => prod.category === category))
        } else {
          setLoading(false)
          setListProduct(res)
        }
      })
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