import { BrowserRouter, Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import './App.css';
import Home from "./assets/Home";
import About from "./assets/About";
import React, { useEffect } from 'react';

function Navbar() {
  return (
    <div className='flex flex-row gap-4'>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/products">Product</Link></div>
      <div><Link to="/login">Log in</Link></div>
      <div><button onClick={()=>{localStorage.removeItem("login",false)}}>Sign Out</button></div>
    </div>
  );
}

function Product() {
  return (
    <div className='flex flex-row gap-4'>
      <Link to="/products/1">Category1</Link>
      <Link to="/products/2">Category2</Link>
      <Link to="/products/3">Category3</Link>
      <Link to="/products/4">Category4</Link>
      <Link to="/products/5">Category5</Link>
      <Link to="/products/6">Category6</Link>
    </div>
  );
}

function Category() {
  const { category } = useParams(); // Access the category parameter from the URL
  return (
    <center>
      <h1>Hello World! This Page is Category: {category}</h1>
    </center>
  );
}


function Protected({ Component }) {
  const navigate = useNavigate(); // Declare useNavigate directly in the component body

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      // Redirect to the login page if the user is not authenticated
      navigate('/login');
    }
  }, []); // Add navigate as a dependency to useEffect

  // Render the component if the user is authenticated
  return <Component />;
}


function Login(){
  return (
    <center>
      <input type="text" placeholder="Id"/><br />
      <input type="text" placeholder="password"/><br />
      <button onClick={()=>{localStorage.setItem('login',true)}}>Click Me</button>
    </center>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/about' element={<About />} />
        <Route path="/products" element={<Product />}>
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path='/*' element={<><br /><br /><h1>404 Page not found</h1></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
