import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div class="flex flex-row bg-red-200 text-emerald-900 ">
      <li>Inicio</li>
      <li>Tazas</li>
      <li>Remeras</li>
      <li>Figuras</li>
      <CartWidget></CartWidget>
    </div>
  );
};

export default NavBar;
