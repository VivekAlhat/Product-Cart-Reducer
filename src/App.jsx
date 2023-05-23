import { useEffect, useReducer } from "react";
import { storeReducer } from "./lib/reducers";
import { defaultStore } from "./lib/defaults";

import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(storeReducer, defaultStore);

  const fetchListOfProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    dispatch({ type: "ADD_PRODUCTS", payload: { products } });
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="w-full min-h-screen flex">
      <ProductsList state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
