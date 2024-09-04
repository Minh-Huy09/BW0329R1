import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <CartProvider>
    {<Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/search" element={<SearchResults />} /> */}
      </Routes>
    </Router>}
  </CartProvider>
  );
}

export default App;
