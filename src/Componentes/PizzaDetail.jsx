import React, { useContext } from "react";
import { PizzaContext } from "./PizzaContext";

const PizzaDetail = () => {
  const { selectedPizza, buyPizza } = useContext(PizzaContext);

  if (!selectedPizza) return null;

  return (
    <div className="pizza-detail">
      <h2>{selectedPizza.name}</h2>
      <img src={selectedPizza.img} alt={selectedPizza.name} />
      <p>{selectedPizza.desc}</p>
      <p>Ingredientes: {selectedPizza.ingredients.join(", ")}</p>
      <p>Precio: ${selectedPizza.price}</p>
      <button onClick={() => buyPizza(selectedPizza.id)}>Comprar</button>
    </div>
  );
};

export default PizzaDetail;
