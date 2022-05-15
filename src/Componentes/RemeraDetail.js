import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { itemsData } from "./itemsData";

const RemeraDetail = () => {
  const { RemeraId } = useParams();
  const [remera, setRemera] = useState({});

  useEffect(() => {
    (async () => {
      const remeraData = await getRemeraDetail();
      if (remeraData) {
        setRemera(remeraData);
      }
    })();
  }, [RemeraId]);

  const getRemeraDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(remeraData.find((r) => r.id == RemeraId));
      }, 1000);
    });
  };

  return (
    <>
      <div>RemeraDetail - {RemeraId}</div>
      <strong className="p-2">{Remera.id}</strong>
      <strong className="p-2">{Remera.name}</strong>
      <strong className="p-2">{Remera.precio}</strong>
      <div className="m-5">
        <Link to="/itemsListContainer/1">Remera</Link>
      </div>
    </>
  );
};
export default RemeraDetail;
