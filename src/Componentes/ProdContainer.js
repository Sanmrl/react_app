import { useEffect, useState } from "react";
import { Prod as ProdData } from "./Prod";
import ProdCard from "./ProdCard";

const ProdContainer = () => {
  const [Prod, setProd] = useState([]);

  useEffect(() => {
    const getProd = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProdData);
        // reject('error en la promesa')
      }, 1000);
    });

    getProd
      .then((result) => {
        console.log("Se completó la promesa", result);
        setProd(result);
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
    <div>
      {Prod.map((prod) => (
        <ProdCard key={prod.id} ProdData={prod} />
      ))}
    </div>
  );
};
export default ProdContainer;
