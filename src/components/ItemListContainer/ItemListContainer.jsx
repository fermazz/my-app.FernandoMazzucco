import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
// import { products } from "../../mock/products";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import db from "../../services/firebase";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  // const [load, setLoad] = useState(true); //Flag que me permite mostrar un spinner mientras cargo los datos


  const { categoria } = useParams();

  // const getProducts = () =>
  //   new Promise((resolve, reject) => {
  //     if (categoria) {
  //       setTimeout(() => {
  //         resolve(products.filter((item) => item.categoria === categoria));
  //       }, 2000);
  //     } else {
  //       setTimeout(() => resolve(products), 2000);
  //     }
  //   });

  // useEffect(() => {
  //   getProducts()
  //     .then((products) => setProductos(products))
  //     .catch((error) => console.error(error));
  //     return () => {
  //       setProductos([])
  //     }
  // }, [categoria]);

  const getData = async (categoria) => {
    try {        
    const document = categoria? query(collection(db, "Items"),where("categoria", "==", categoria)) : collection(db, "Items")
    const col = await getDocs(document)
    // console.log("col.docs", col.docs)
    const result = col.docs.map((doc) => doc ={id:doc.id,...doc.data()})
    setProductos(result)
    // setLoad(false)
  } catch (error) {
      console.log(error)
  }
  }

  // const getDataCategory = async (categoria) => {
  //   try {        
  //   const document = query(collection(db, "Items"),where("categoria", "==", categoria))
  //   const col = await getDocs(document)
  //   console.log("col.docs", col.docs)
  //   const result = col.docs.map((doc) => doc ={id:doc.id,...doc.data()})
  //   setProductos(result)
  //   // setLoad(false)
  // } catch (error) {
  //     console.log(error)
  // }
  // }

  useEffect(() => {
    getData(categoria) 
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
