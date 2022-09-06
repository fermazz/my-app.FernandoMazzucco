import React, {useState, useEffect} from 'react';

import ItemDetail from "../ItemDetail/ItemDetail" 

import { products } from "../../mock/products"



const ItemDetailContainer = () => {

    // const {id} = useParams ()

    const [item, setItem] = useState();

    const getProduct = () => new Promise((resolve, reject) => {

        setTimeout(() => resolve(products.find(product => product.id ===1)), 2000);
    })

    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
     
    }, []);

    return (

        <>

        {
        
        item ? <ItemDetail item={item}/> : <h1>Cargando...</h1>
        
        }


        </>
    )
}

export default ItemDetailContainer;




// const ItemDetailContainer = () => {

//     const [item, setItem] = useState({});
//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products/1')
//         .then(response => response.json())
//         .then(({category, description, id, image, price}) => {
            
//             // console.log(Object.values({category, description, id, image, price}))

//             setItem(Object.entries({category, description, id, image, price}).map((item,indice)=> 
            
//             <div key={indice}>
//                 <p>{item[0]}: {item[1]}</p>
//             </div>
//             ))
//         })
//     }, [{}]);



//     // return (
//     //     <>
//     //         {item}
//     //     </>
//     // );
// }

// export default ItemDetailContainer;
