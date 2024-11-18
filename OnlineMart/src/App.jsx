import Home from './pages/Home'
import './css/App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setToken('');
    setIsLoggedIn(false);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
