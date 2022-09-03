import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const itemdata = [
    { id: "1", nombre: "Delux", marca: "Nike", precio: "10.000", stock: "5" },
    { id: "2", nombre: "Valtimor", marca: "Fila", precio: "15.000", stock: "7" },
    { id: "3", nombre: "Goodplace", marca: "Reebook", precio: "14.000", stock: "3" },
    { id: "4", nombre: "Sportline", marca: "Adidas", precio: "13.000", stock: "4" },
    { id: "5", nombre: "Backall", marca: "Convers", precio: "11.000", stock: "10" },
  ];


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      
      const getProductosData = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(itemdata);
          
        }, 2000);
      });
  
      getProductosData
        .then((response) => setProductos(response))
       
        .finally(() => setIsLoading(false));
    }, []);

    function onAdd(count){

        console.log(`Se han seleccionado ${count} productos`)
    }
  
    return isLoading ? <h2>Cargando...</h2> : 
    <div>
    <ItemList list={productos} />;
    <ItemCount stock={5} onAdd={onAdd}/>;
    </div>

  };
  
  export default ItemListContainer;

