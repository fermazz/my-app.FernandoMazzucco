import React from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({title,subtitle}) => {


    return(
        <div>
        <h1>{title}</h1>
        <ItemCount stock={5}/>
        </div>
    )
}

export default ItemListContainer