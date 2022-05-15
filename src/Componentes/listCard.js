import React from "react";
import { Link } from "react-router-dom";
import { favProdContext } from "./favProdContext";

const listCard = ({ itemsData }) => {
  return (
    <div style={{ border: "pink 5px", margin: "10px", padding: "5px" }}>
      <strong>{itemsData.name}</strong>
      <div>{itemsData.precio}</div>
    </div>
    
    const { addToFavorites } = useContext(favProdContext)

  
    useEffect(() => {
      console.log('hay render de listCard');
    })
    
    return (
      <div>
          
          <div>{data.name}</div>
          <div>{data.precio}</div>
          <button onClick={ () => { addToFavorites(data.id) }} className="btn">Agregar a favoritos</button>
        
      </div>
    )
  
  
};
export default listCard;
