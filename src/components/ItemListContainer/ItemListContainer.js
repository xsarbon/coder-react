import React from "react";
import '../ItemCount/ItemCount'

import ItemCount from "../ItemCount/ItemCount";


function ItemListContainer() {
    return (
      <>
        <ItemCount stock={10} initial={1} onAdd={() => { }}/>
      </>
    )
  }


export default ItemListContainer