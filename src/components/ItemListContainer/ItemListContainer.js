import React from "react";
import '../ItemCount/ItemCount'
import products from "../utils/products"
import ItemList from "../itemList/itemList.jsx"
import customFetch from '../utils/customFetch';
//import ItemCount from "../ItemCount/ItemCount";//
import { useState, useEffect } from 'react'


function ItemListContainer() {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(listProduct)

  useEffect(() => {
    setLoading(true)
    customFetch(products)
      .then(res => {
        setLoading(false)
        setListProduct(res)
      })
  }, [])

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