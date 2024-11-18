import { Link } from "react-router-dom";
import '../css/ProductCard.css'


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <div className="image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <h4>{product.title}</h4>
        <p>${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
