import React from "react";
import { useState } from "react";
import './styles.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'


function ItemCount({ product }) {

    const [count, setCount] = useState(product.initial);
    const [countS, setCountS] = useState(product.stock - 1);
    const aumentar = () => count >= product.stock ? console.log("supera el stock disponible") : setCount(count + 1);
    const restar = () => count <= 1 ? console.log("es muy chico") : setCount(count - 1);
    console.log(count)
    const bajarStock = () => count >= product.stock ? console.log("supera el stock disponible") : setCountS(countS - 1)
    const aumentarStock = () => countS >= product.stock - 1 ? console.log("agregue cantidades") : setCountS(countS + 1);
    console.log(countS)


    const alerta = () => {
        Swal.fire({
            title: 'Felicidades!',
            text: 'Agregaste los productos al carrito',
            icon: 'success',
            confirmButtonText: 'Genial!'
        })
    }
    return (

        <div className="containerbtns">
            <div className="buttons">
                <button className="restar" onClick={() => {
                    restar();
                    aumentarStock();
                }}>-</button>
                <p>{count}</p>
                <p>de {countS} disponible</p>
                <button className="aumentar" onClick={() => {
                    aumentar();
                    bajarStock();
                }}>+</button>
            </div>
            <button className="itemAdd">Agregar al carrito</button>
        </div>

    );
}


export default ItemCount