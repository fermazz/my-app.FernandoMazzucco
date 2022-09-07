import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../mock/products";
import { useParams } from "react-router-dom";

// const itemdata = [
//     { id: "1", nombre: "Delux", marca: "Nike", precio: "10.000", stock: "5" },
//     { id: "2", nombre: "Valtimor", marca: "Fila", precio: "15.000", stock: "7" },
//     { id: "3", nombre: "Goodplace", marca: "Reebook", precio: "14.000", stock: "3" },
//     { id: "4", nombre: "Sportline", marca: "Adidas", precio: "13.000", stock: "4" },
//     { id: "5", nombre: "Backall", marca: "Convers", precio: "11.000", stock: "10" },
//   ];

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const { categoria } = useParams();

  const getProducts = () =>
    new Promise((resolve, reject) => {
      if (categoria) {
        setTimeout(() => {
          resolve(products.filter((item) => item.categoria === categoria));
        }, 2000);
      } else {
        setTimeout(() => resolve(products), 2000);
      }
    });

  useEffect(() => {
    getProducts()
      .then((products) => setProductos(products))
      .catch((error) => console.error(error));
      return () => {
        setProductos([])
      }
  }, [categoria]);

  return (
    <>
      {
      productos.length ? <ItemList productos={productos} /> : <h1>Cargando...</h1>  
      }
    </>
  );
};

export default ItemListContainer;
