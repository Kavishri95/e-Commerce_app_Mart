import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import ProductPage from '../Pages/ProductPage';
import Cart from '../Pages/Cart';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productpage/:id" element={<ProductPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
     
    </Routes>
    
  );
};

export default Router;