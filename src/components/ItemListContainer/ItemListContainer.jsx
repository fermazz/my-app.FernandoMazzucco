import React from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({title,subtitle}) => {

    function onAdd(count){

        console.log(`Se han seleccionado ${count} productos`)
    }


    return(
        <div>
        <h1>{title}</h1>
        <ItemCount stock={5} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer