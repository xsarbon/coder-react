const ItemDetail = ({ listProduct }) => {
    console.log(listProduct)
    return (
        <div className="itemDetail">
            <div className="itemDetailContainer">
                <img className="imagenDetail" src={listProduct.image} />
                <section className="detalles">
                    <h2 className="producto">{listProduct.product}</h2>
                    <p className="description">{listProduct.description}</p>
                    <h3 className="precio">${listProduct.price}</h3>
                    <p className="stock"><b>{listProduct.stock}</b> Disponibles</p>
                    <button className="itemAdd">Comprar</button>
                    <button className="itemAdd2">Agregar al carrito</button>
                </section>
            </div>

        </div>
    )
}
export default ItemDetail