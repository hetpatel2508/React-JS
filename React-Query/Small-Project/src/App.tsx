import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Product from './Components/Product'
import Paginated from './Components/Paginated'
import Parallel from './Components/Parallel'
import Optimistic from './Components/Optimistic'
import InfiniteScrolling from './Components/InfiniteScrolling'

function App() {

  return (
    <>
        <div>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/paginated' element={<Paginated />}/>
              <Route path='/parallel' element={<Parallel />}/>
              <Route path='/optimistic' element={<Optimistic />}/>
              <Route path='/InfiniteScrolling' element={<InfiniteScrolling />}/>
              <Route path='/products/:id' element={<Product />}/>
            </Routes>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
