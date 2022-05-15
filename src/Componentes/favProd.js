import { useContext } from "react";
import { FavProdContext } from "../../context/favRobotsContext";

const FavProd = () => {
  const { favorites } = useContext(FavProdContext);

  return <div>FavProd: {favorites.join(",")}</div>;
};
export default FavProd;
