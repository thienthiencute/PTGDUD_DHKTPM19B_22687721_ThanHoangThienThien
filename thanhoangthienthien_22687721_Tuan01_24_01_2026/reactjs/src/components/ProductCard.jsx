import "./ProductCard.css";
import iphone15 from "../assets/iphone15.jpg";

function ProductCard() {
  return (
    <div className="product-card">
      <img src={iphone15} alt="Iphone 15" className="product-image" />
      <h3 className="product-name">Iphone 15</h3>
      <p className="product-price">Price: 21.000.000 VND</p>
      <button className="add-btn">Add to cart</button>
    </div>
  );
}

export default ProductCard;