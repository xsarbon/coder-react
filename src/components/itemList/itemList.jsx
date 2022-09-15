import Item from '../item/item'
import ItemCount from '../ItemCount/ItemCount'

const ItemList = ({ listProduct }) => {
    return (
        <>
            {listProduct.map(product => <Item key={product.id} product={product} stock={product.stock} initial={product.initial} />)}
        </>
    )
}
export default ItemList