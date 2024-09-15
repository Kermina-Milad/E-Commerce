// CartContext.js
import { createContext, useState } from 'react';

const CartContext = createContext({
  cartCount: 0,
  cartItems: [],
  setCartCount: () => {},
  setCartItems: () => {},
  addProductToCart: () => {},
  updateCart: () => {}, // Add this function to the context
});

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setCartCount((prevCartCount) => prevCartCount + 1); // Increment the cart count
  };

  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
    setCartCount(newCartItems.length); // Update the cart count
  };
  const handleRemoveFromCart = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    updateCart(newCartItems);
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, setCartCount, setCartItems, addProductToCart, updateCart, handleRemoveFromCart,  }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };