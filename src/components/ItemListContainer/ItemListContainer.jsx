import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import db from "../../services/firebase";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  const getData = async (categoria) => {
    try {
      const document = categoria
        ? query(collection(db, "Items"), where("categoria", "==", categoria))
        : collection(db, "Items");
      const col = await getDocs(document);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(categoria);
  }, [categoria]);

  return (
    <div className="container1">
      {productos.length ? (
        <ItemList productos={productos} className="container1" />
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
