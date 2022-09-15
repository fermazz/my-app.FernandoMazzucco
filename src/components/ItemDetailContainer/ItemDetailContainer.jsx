import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import { products } from "../../mock/products";
import { useParams, } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';


const ItemDetailContainer = () => {

    const {id} = useParams ()

    const [item, setItem] = useState();
    // const [cantidad, setCantidad] = useState(1);

    const getProduct = () => new Promise((resolve, reject) => {

        setTimeout(() => resolve(products.find(product => product.id === Number(id))), 2000);
    })

    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
     
    }, []);

    // const agregarAlCarrito = (product) => {
    //     const productoCarrito = {id: product.id, cantidad: }
    
    //   }

    return (

        <>
        {        
        item ? <ItemDetail item={item}/> : <h1>Cargando...</h1>
        }
        </>
    )
}

export default ItemDetailContainer;

