import { BrowserRouter, Link, Navigate, Route, Routes, useParams, useSearchParams } from "react-router-dom";
import './App.css';
import Home from "./assets/Home";
import About from "./assets/About";
import React from 'react';

function Navbar() {
  return (
    <div className='flex flex-row gap-4'>
      <div><Link to="/home">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/about?name=het&id=1">Het</Link></div>
      <div><Link to="/about?name=urvish&id=2">Urvish</Link></div>
    </div>
  );
}

function Myname() {
  const [searchParams, setSearchParams] = useSearchParams();
  const validNames = ['het', 'urvish'];
  const validID = ['1', '2'];

  const name = searchParams.get("name");
  const id = searchParams.get("id");
  // setSearchParams({name:'dev', id:'69'})

  if (validNames.includes(name) && validID.includes(id)) {
    return (
      <>
        <br /><br />
        <h1>Name: {name}</h1>
        <h1>ID: {id}</h1>
      </>
    );
  } else {
    return <Navigate to='/404' />;
  }
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<Myname />} />
          {/* <Route path='/about?name&id' element={<Myname />} /> */}
          <Route path='/*' element={<><br /><br /><h1>404 Page not found</h1></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
