import Item from '../item/item'

const ItemList = ({ listProduct }) => {
    return (
        <>
            {listProduct.map(product => <Item key={product.id} product={product} />)}
        </>
    )
}
export default ItemList