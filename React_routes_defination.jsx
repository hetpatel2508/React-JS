import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './React_routes_defination.css'
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"

function React_routes_defination() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page1 />}></Route>  {/* it will be default page */}
          <Route path='/page2' element={<Page2 />}></Route>   {/*this page will after click or something*/}
          <Route path='/page3' element={<Page3 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default React_routes_defination