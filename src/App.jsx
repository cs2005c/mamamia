import { useState } from "react";
import { PizzaProvider } from "./Componentes/PizzaContext";
import PizzaList from "./Vistas/PizzaList";
import "./App.css";
import Barra from "./Vistas/Barra";

function App() {
  return (
    <>
      <PizzaProvider>
        <Barra />
        <div className="App">
          <h1>Pizzería MamaMía</h1>
          <PizzaList />
        </div>
      </PizzaProvider>
    </>
  );
}

export default App;
