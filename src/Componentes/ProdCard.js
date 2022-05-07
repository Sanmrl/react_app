const ProdCard = ({ ProdData }) => {
  return (
    <div style={{ border: "solid green 5px", margin: "10px", padding: "5px" }}>
      <strong>{ProdData.name}</strong>
      <div>{ProdData.Color}</div>
    </div>
  );
};
export default ProdCard;
