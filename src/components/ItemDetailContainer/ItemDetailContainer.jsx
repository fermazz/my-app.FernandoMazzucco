import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "../../services/firebase";
import "./ItemDetailContainer.css";
import Loading from "../Loading/Loading";



const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState();

  const getSelected = async (idItem) => {
    try {
      const document = doc(db, "Items", idItem);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      setItem(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelected(id);
  }, [id]);

  return (
    <div className="container2">
      {item ? (
        <ItemDetail item={item} setItem={setItem} />
      ) : (
        <div>
        <br />
        <Loading/>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
