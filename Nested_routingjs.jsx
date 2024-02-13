import { BrowserRouter, Link, NavLink, Navigate, Outlet, Route, Routes, useParams, useSearchParams } from "react-router-dom";
import './App.css';
import Home from "./assets/Home";
import About from "./assets/About";
import React from 'react';

function Navbar() {
  return (
    <div className='flex flex-row gap-4'>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/products">Product</Link></div>
    </div>
  );
}

function Product() {
  return <>
    <div className='flex flex-row gap-4'>
      <NavLink to="/products/1">Category1</NavLink>
      <NavLink to="/products/2">Category2</NavLink>
      <NavLink to="/products/3">Category3</NavLink>
      <NavLink to="/products/4">Category4</NavLink>
      <NavLink to="/products/5">Category5</NavLink>
      <NavLink to="/products/6">Category6</NavLink>
    </div>
    <Outlet />
  </>
}

function Category() {
  const { category } = useParams(); // Access the category parameter from the URL
  return (
    <center>
      <h1>Hello World! This Page is Category: {category}</h1>
    </center>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<><br /><br /><h1>404 Page not found</h1></>} />
          <Route path="/products" element={<Product />}>
            <Route path=":category" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
