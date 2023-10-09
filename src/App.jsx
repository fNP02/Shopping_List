import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {ProductList} from './components/ProductList.jsx'
import { EditProduct } from "./components/EditProduct";
import { CreateProduct } from "./components/CreateProduct";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/edit-id:/:id" element={<EditProduct/>}/>
          <Route path="/create-new-product" element={<CreateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
