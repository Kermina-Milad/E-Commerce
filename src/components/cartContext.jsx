// CartContext.js
import { createContext, useState } from 'react';

const CartContext = createContext({
  cartCount: 0,
  cartItems: [],
  setCartCount: () => {},
  setCartItems: () => {},
  addProductToCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

 const addProductToCart = (product) => {
  setCartItems((prevCartItems) => [...prevCartItems, product]);
  setCartCount((prevCartCount) => prevCartCount + 1); // Increment the cart count
};

  return (
    <CartContext.Provider value={{ cartCount, cartItems, setCartCount, setCartItems, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };