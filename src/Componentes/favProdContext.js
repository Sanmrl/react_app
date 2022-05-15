import { children, createContext, useState } from "react";

export const favProdContext = createContext({
  favorites: [99],
  addToFavorites: () => {},
  deleteFromFavorites: () => {},
});

const favProdProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (prodId) => {
    setFavorites((currentFavorites) => {
      return currentFavorites.concat(prodId);
    });
  };

  const context = {
    favorites,
    addToFavorites,
  };

  return (
    <favProdContext.Provider value={context}>
      {children}
    </favProdContext.Provider>
  );
};
export default favProdProvider;
