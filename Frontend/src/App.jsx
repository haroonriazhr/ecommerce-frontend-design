import React from "react";
import Home from "./components/home/Home";
import Listview from "./components/listview/Listview";
import Gridview from "./components/gridview/Gridview";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/detail/Detail";
import Cart from "./components/cart/Cart";
import Footer from './components/home/footer/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Listview />} />
        <Route path="/grid-list" element={<Gridview />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
