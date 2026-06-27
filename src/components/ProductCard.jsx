import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, name, category, price, rating, reviewCount, image } = product;

  const renderStars = (ratingValue) => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={14} className="star-filled" />);
      } else {
        stars.push(<Star key={i} size={14} style={{ color: 'hsl(var(--text-secondary) / 0.3)' }} />);
      }
    }
    return stars;
  };

  return (
    <article className="product-card animate-fade-in">
      <div className="product-image-container">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="product-img" loading="lazy" />
        </Link>
        <span className="badge badge-category product-badge-abs">{category}</span>
      </div>

      <div className="product-card-body">
        <Link to={`/product/${id}`}>
          <h3 className="product-card-title">{name}</h3>
        </Link>

        <div className="rating-container">
          {renderStars(rating)}
          <span className="rating-text">({reviewCount})</span>
        </div>

        <p className="product-card-desc">{product.tagline}</p>

        <div className="product-card-footer flex-between">
          <span className="product-price">${price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product, 1)}
            className="btn btn-primary btn-sm btn-icon"
            aria-label={`Add ${name} to cart`}
            title="Add to Cart"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
