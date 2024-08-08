import React, { useContext } from "react";
import { PizzaContext } from "../Componentes/PizzaContext";
import logo from "../assets/img/logopizza.svg";

function Barra() {
  const { cart, getTotalPrice } = useContext(PizzaContext);
  return (
    <>
      <div className="contenedor">
        <div className="LogoPizza">
          <img src={logo}></img>
        </div>
        <div className="totalventa">
          <p>Pizzas en el carrito: {cart.length}</p>
          <p>Total: ${getTotalPrice()}</p>
        </div>
      </div>
      <div className="encabezado">
        <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg"></img>
      </div>
    </>
  );
}

export default Barra;
