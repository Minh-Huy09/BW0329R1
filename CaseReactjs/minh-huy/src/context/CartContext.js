import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const currentUsername = 'currentUsername'; // Thay thế bằng username thực tế của người dùng

  const fetchCart = () => {
    axios.get(`http://localhost:5000/api/cart/${currentUsername}`)
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart:', error));
  };

  const addToCart = (product) => {
    axios.post('http://localhost:5000/api/cart', {
      username: currentUsername,
      productId: product.id,
      quantity: 1,
    })
    .then(() => fetchCart())
    .catch(error => console.error('Error adding to cart:', error));
  };

  const updateCartQuantity = (productId, quantity) => {
    axios.put('http://localhost:5000/api/cart', {
      username: currentUsername,
      productId,
      quantity
    })
    .then(() => fetchCart())
    .catch(error => console.error('Error updating cart:', error));
  };

  const removeFromCart = (productId) => {
    axios.delete('http://localhost:5000/api/cart', {
      data: {
        username: currentUsername,
        productId
      }
    })
    .then(() => fetchCart())
    .catch(error => console.error('Error removing from cart:', error));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartQuantity, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
