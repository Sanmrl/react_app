import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import itemsData from "./Componentes/ItemsData";
import listCard from "./Componentes/listCard";
import NavBar from "./Componentes/NavBar";
import "./App.css";
import ItemsListContainer from "./Componentes/itemsListContainer";
import RemeraDetail from "./Componentes/RemeraDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/Items" element={<ItemsListContainer />} />
        <Route path="/Remera/:RemeraId" element={<RemeraDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
