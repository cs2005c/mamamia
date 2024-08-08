import React, { useContext, useState } from "react";
import { PizzaContext } from "./PizzaContext";
import PizzaDetail from "./PizzaDetail";

const PizzaCard = ({ pizza }) => {
  const { buyPizza, selectPizza } = useContext(PizzaContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleBuy = () => {
    buyPizza(pizza.id);
    setShowMessage(true);
    selectPizza(pizza.id);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      {pizza.ingredients.map((ingredient, index) => (
        <li>{ingredient}</li>
      ))}
      ;<p>Precio: ${pizza.price}</p>
      <button onClick={handleBuy}>Comprar</button>
      <button onClick={<PizzaDetail />}>Más información</button>
      {showMessage && <p className="MensajeComprado">¡Agregado al carrito!</p>}
    </div>
  );
};

export default PizzaCard;
