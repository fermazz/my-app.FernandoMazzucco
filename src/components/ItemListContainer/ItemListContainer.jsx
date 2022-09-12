import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../mock/products";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";


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
