import "./index.css"
const ProductCard = ({ title, description, image, className }) => {
    console.log(className)
  return (
    <div className={`product-card ${className}`}>
      <img src={image} alt={title} className="emoji-logo"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
