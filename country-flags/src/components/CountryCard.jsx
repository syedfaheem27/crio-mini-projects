const Card = ({ flag, name, alt }) => {
  return (
    <div className="card">
      <img src={flag} alt={alt ?? `Flag of ${name}`} />
      <h4>{name}</h4>
    </div>
  );
};

export default Card;
