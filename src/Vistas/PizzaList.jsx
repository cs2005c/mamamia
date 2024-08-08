import React, { useContext } from "react";
import { PizzaContext } from "../Componentes/PizzaContext";
import PizzaCard from "../Componentes/PizzaCard";

const PizzaList = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="pizza-list">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
