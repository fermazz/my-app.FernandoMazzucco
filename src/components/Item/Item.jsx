import React, {useState, useEffect} from "react";

const items = [
  { id: "1", nombre: "Delux", marca: "Nike", precio: "10.000", stock: "5" },
  { id: "2", nombre: "Valtimor", marca: "Fila", precio: "15.000", stock: "7" },
  { id: "3", nombre: "Goodplace", marca: "Reebook", precio: "14.000", stock: "3", },
  { id: "4", nombre: "Sportline", marca: "Adidas", precio: "13.000", stock: "4", },
  { id: "5", nombre: "Backall", marca: "Convers", precio: "11.000", stock: "10", },
];



function consultarPromesa(confirmacion) {

    return new Promise ((res,rej) => {
        if(confirmacion) {
            res(items)
        }else{
            rej("Incorrecto")
        }
    })
}

const Item = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
    .then(data => {
        // parámetros del .map: objeto e índice
        const itemsJSX = data.map((items, id) => 

            <div className="card text-white bg-dark mb-3" key={items.id} style={{ maxWidth: "18rem", margin: "0.5rem" }}>
              <div className="card-header">{items.nombre}</div>
              <div className="card-body">
                <p className="card-text">Marca: {items.marca} </p>
                <p className="card-text">Precio: ${items.precio} </p>
                <p className="card-text">Stock: {items.stock} </p>
              </div>
            </div>

        )
        console.log(itemsJSX)
        setItems(itemsJSX)
    })
    .catch(error => {
        console.error(error)
    })
    }, []);

   
    

    return (

        <div className='row'>
        {items}

        </div>
    )
}

export default Item;








