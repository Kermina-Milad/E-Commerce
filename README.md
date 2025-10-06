# E-Commerce (Vite + React + MUI)

## Project Overview

This is a simple e-commerce web application built using **Vite**, **React**, and **Material-UI (MUI)**. The app connects to a Fake API to display products and supports basic features like **Add to Cart** and **Remove from Cart**. It uses local state management and can be easily connected to any mock API such as `json-server` or `fakestoreapi.com`.

## Features

* Fetch products from a Fake API
* Display product list with a modern MUI interface
* Add products to the cart
* Remove products from the cart
* View cart with item quantity and total price
* Optional: manage cart state using React Context or Redux
* Optional: persist cart data in localStorage

## Technologies Used

* Vite
* React (Functional Components + Hooks)
* Material-UI (MUI)
* Axios or fetch
* json-server (for mock API) or external API like `https://fakestoreapi.com`

## Project Structure

```
my-ecommerce-app/
├─ public/
├─ src/
│  ├─ api/
│  │  └─ products.js        # API calls
│  ├─ components/
│  │  ├─ ProductCard.jsx
│  │  ├─ ProductList.jsx
│  │  ├─ Cart.jsx
│  │  └─ Header.jsx
│  ├─ context/
│  │  └─ CartContext.jsx    # Cart state management
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ db.json                  # Example for json-server
├─ package.json
└─ README.md
```

## Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/Kermina-Milad/E-Commerce.git
cd E-Commerce
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. (Optional) Setup json-server as a Fake API:

* Create `db.json` in the project root:

```json
{
  "products": [
    { "id": 1, "title": "Sneakers", "price": 79.99, "image": "/images/sneakers.jpg" },
    { "id": 2, "title": "T-Shirt", "price": 19.99, "image": "/images/tshirt.jpg" }
  ]
}
```

* Start json-server:

```bash
npx json-server --watch db.json --port 4000
```

> The API will be available at `http://localhost:4000/products`

4. Run the React (Vite) app:

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:5173` (or the Vite dev server address).

## Example Code

**API Call (src/api/products.js)**

```js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const fetchProducts = () => axios.get(`${API_BASE}/products`).then(res => res.data);
```

**Cart Context (src/context/CartContext.jsx)**

```js
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exist = state.find(i => i.id === action.payload.id);
      if (exist) return state.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i);
      return [...state, { ...action.payload, qty: 1 }];
    }
    case 'REMOVE':
      return state.filter(i => i.id !== action.payload.id);
    case 'DECREASE':
      return state.map(i => i.id === action.payload.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
```

**Add to Cart in ProductCard.jsx**

```jsx
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <Card>
      <CardMedia component="img" image={product.image} alt={product.title} />
      <CardContent>
        <Typography>{product.title}</Typography>
        <Typography>{product.price} $</Typography>
        <Button onClick={() => dispatch({ type: 'ADD', payload: product })}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}
```

## Development Tips

* Use React Router for product page, cart page, and checkout page.
* Replace json-server with a real backend or Mock Service Worker (MSW) for testing.
* Add user authentication with JWT if needed.
* Add unit testing with Jest + React Testing Library.
* Optimize performance using `React.lazy` and `Suspense` for lazy loading.

## Deployment

Deploy easily on Vercel or Netlify. Make sure to configure the environment variable `VITE_API_URL` if using an external API.

---

*This README is prepared for your portfolio or educational e-commerce project using Vite, React, and MUI.*
