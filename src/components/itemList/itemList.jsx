import Item from '../item/item'
import ItemCount from '../ItemCount/ItemCount'
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemList = ({ listProduct }) => {
    return (
        <div className='main'>
            {listProduct.map(product => <Item key={product.id} product={product} stock={product.stock} initial={product.initial} />)}
        </div>
    )
}
export default ItemList
