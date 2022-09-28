import ItemCount from "../ItemCount/itemCount"

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
                    <ItemCount product={listProduct} />

                </section>
            </div>

        </div>
    )
}
export default ItemDetail