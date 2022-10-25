import Item from '../item/Item'

const ItemList = ({ listProduct }) => { 
    return (
        <div className='main'>
            {listProduct.map(product => <Item key={product.id} product={product} stock={product.stock} initial={product.initial} />)}
        </div>
    )
}
export default ItemList
