import { BrowserRouter, Link, Navigate, Route, Routes, useParams } from "react-router-dom"
import './App.css'
import Home from "./assets/Home"
import About from "./assets/About"
import Contact from "./assets/Contact"
import React from 'react'



function Navbar() {
  return (
    <div className='flex flex-row gap-4'>
      <div><Link to="/home">Home </Link></div>
      <div><Link to="/about">About </Link></div>
      <div><Link to="/about/het">Het </Link></div>
      <div><Link to="/about/urvish">Urvish </Link></div>

    </div>
  );
}

function Myname() {

  const { name } = useParams();
  const validNames = ['het', 'urvish'];
  const validID = [1, 2];


  if (validNames.includes(name)) {

    if (validID.includes(parseInt(id))) {
      return (
        <>
          <br /><br />
          <h1>{name}</h1>
          <h1>{id}</h1>
        </>
      )
    }
    else {

      return <Navigate to='/*' />
    }
  }

  else {
    return <Navigate to='/*' />
  }
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />  {/* it will be default page */}
          <Route path='/about' element={<About />} />   {/*this page will after click or something*/}
          <Route path='/about/:name/:id' element={<Myname />} />
          <Route path='/*' element={<><br /><br /><h1>404 Page not found</h1></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
