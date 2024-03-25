const Card = ({ flag, name, alt }) => {
  return (
    <div className="card">
      <img src={flag} alt={alt ?? `Flag of ${name}.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, aspernatur aut inventore iure quae veritatis minus possimus ratione itaque tempora similique cumque? Pariatur aliquid incidunt eum, dolor nisi facilis expedita.`} />
      <h4>{name}</h4>
    </div>
  );
};

export default Card;
