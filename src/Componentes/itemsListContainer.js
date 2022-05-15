import React from "react";
import { useEffect, useState } from "react";
import { productos as itemsData } from "./itemsData";
import listCard from "./listCard";
import favProd from "./favProd";

function ItemsListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsData);
        // reject('error en la promesa')
      }, 2000);
    });

    getProductos
      .then((result) => {
        console.log("Se completó la promesa", result);
        setProductos(result);
        // }, (err) => {
        //   console.log('hubo un error', err);
        // }
      })
      .catch((err) => {
        console.log("hubo un error", err);
      });

    console.log("Se terminó el efecto");
  }, []);

  return (
    <>
      <favProd />
      <button className="btn" onClick={addCounterHandler}>
        Aumentar contador
      </button>
      {<strong>Contador: {counter}</strong>}
      {loading && <h1 className="text-3xl">loading ...</h1>}

      <favProd />
    </>
  );
}

export default ItemsListContainer;
