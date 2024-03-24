const Card = ({ flag, name }) => {
  return (
    <div className="card">
      <img src={flag} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default Card;
