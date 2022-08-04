import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Router>
  )
};

export default App;
