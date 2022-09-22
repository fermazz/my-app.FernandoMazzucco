import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
// import { products } from "../../mock/products";
import { useParams, } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import { getDoc, doc } from 'firebase/firestore';
import db from '../../services/firebase';


const ItemDetailContainer = () => {

    const {id} = useParams ()

    const [item, setItem] = useState();
    // const [cantidad, setCantidad] = useState(1);

    // const getProduct = () => new Promise((resolve, reject) => {

    //     setTimeout(() => resolve(products.find(product => product.id === Number(id))), 2000);
    // })

    // useEffect(() => {
    //     getProduct()
    //     .then(response => setItem(response))
     
    // }, []);

    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setItem(result)
            
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(() => {
        getSelected(id)
    
    }, [id]);

    return (

        <>
        {        
        item ? <ItemDetail item={item} setItem={setItem}/> : <h1>Cargando...</h1>
        }
        </>
    )
}

export default ItemDetailContainer;

