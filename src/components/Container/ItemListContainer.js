import React from "react";
import { useState } from "react";
import './styles.css'

function ItemListContainer({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);
    const [countS, setCountS] = useState(stock - 1);
    const aumentar = () => count >= stock ? console.log("supera el stock disponible") : setCount(count + 1);
    const restar = () => count <= 0 ? console.log("es muy chico") : setCount(count - 1);
    console.log(count)
    const bajarStock = () => count >= stock ? console.log("supera el stock disponible") : setCountS(countS - 1)
    const aumentarStock = () => countS >= stock ? console.log("agregue cantidades") : setCountS(countS + 1);
    console.log(countS)

    return (
        <div className="container">
            <div className="card">
                <p className="image"></p>
                <div className="buttons">
                    <button onClick={() => {
                        restar();
                        aumentarStock();
                    }}>-</button>
                    <p>{count}</p>
                    <p>de {countS} disponible</p>
                    <button onClick={() => {
                        aumentar();
                        bajarStock();
                    }}>+</button>
                </div>
                <button className="add">Agregar al carrito</button>
            </div>
        </div >
    );
}


export default ItemListContainer