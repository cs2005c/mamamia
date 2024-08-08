import React, { createContext, useState, useEffect } from "react";
import pizzasData from "../Data/pizzas.json";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPizzas(pizzasData);
  }, []);

  const buyPizza = (id) => {
    console.log(`Comprando pizza con id: ${id}`);
    // Aquí pagregar la lógica real de compra
  };

  const selectPizza = (id) => {
    const pizzaToBuy = pizzas.find((p) => p.id === id);
    setCart((prevCart) => [...prevCart, pizzaToBuy]);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSelectedPizza(null);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, pizza) => total + pizza.price, 0);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        buyPizza,
        selectPizza,
        selectedPizza,
        showDetail,
        closeDetail,
        cart,
        getTotalPrice,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
