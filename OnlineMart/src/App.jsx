import Home from './pages/Home'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
