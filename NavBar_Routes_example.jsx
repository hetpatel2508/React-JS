import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import './NavBar_Routes_example.css'
import Home from "./assets/Home"
import About from "./assets/About"
import Contact from "./assets/Contact"



function Navbar() {
  return <div className='flex flex-row gap-4'>
    <div><Link to="/home">Home </Link></div>
    <div><Link to="/about">About </Link></div>
    <div><Link to="/contact">Contact </Link></div>
  </div>
}

function NavBar_Routes_example() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />  {/* it will be default page */}
            <Route path='/about' element={<About />} />   {/*this page will after click or something*/}
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default NavBar_Routes_example