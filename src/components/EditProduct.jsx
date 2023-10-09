import React from "react";
import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();

  const navigate = useNavigate();

  const id = useParams();

  const getProductByID = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      console.log(product);
      setTitle(product.data().title);
      setDescription(product.data().description);
      setQuantity(product.data().quantity);
    } else {
      console.log("producto no existe");
    }
  };

  return <div>hola</div>;
};
