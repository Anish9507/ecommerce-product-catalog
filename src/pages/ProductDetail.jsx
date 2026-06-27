import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Check, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  // Find product by id
  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.image);
      setQuantity(1); // Reset qty on product change
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container flex-center animate-fade-in" style={{ flexDirection: 'column', minHeight: '60vh', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.75rem' }}>Product Not Found</h2>
        <p style={{ color: 'hsl(var(--text-secondary))' }}>The product you are looking for does not exist or has been removed.</p>
        <Link to="/catalog" className="btn btn-primary">
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleQtyChange = (type) => {
    if (type === 'dec' && quantity > 1) {
      setQuantity((q) => q - 1);
    } else if (type === 'inc') {
      setQuantity((q) => q + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const renderStars = (ratingValue) => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={16} className="star-filled" />);
      } else {
        stars.push(<Star key={i} size={16} style={{ color: 'hsl(var(--text-secondary) / 0.3)' }} />);
      }
    }
    return stars;
  };

  return (
    <div className="container detail-page animate-fade-in">
      {/* Back button link */}
      <div style={{ marginBottom: '2.5rem' }}>
        <Link to="/catalog" className="btn-secondary btn btn-sm" style={{ display: 'inline-flex', gap: '0.5rem' }}>
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
      </div>

      <div className="detail-grid">
        {/* Left Column: Image Gallery */}
        <div className="gallery-container">
          <div className="main-image-wrapper">
            <img src={activeImage} alt={product.name} className="main-image" />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="thumbnails-grid">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`thumbnail-btn ${activeImage === img ? 'active' : ''}`}
                >
                  <img src={img} alt={`${product.name} gallery ${index + 1}`} className="thumbnail-img" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information Panel */}
        <div className="detail-info">
          <span className="badge badge-category detail-category" style={{ alignSelf: 'flex-start' }}>
            {product.category}
          </span>
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-tagline">{product.tagline}</p>

          <div className="rating-container" style={{ marginBottom: '1.5rem' }}>
            {renderStars(product.rating)}
            <span className="rating-text" style={{ fontSize: '0.95rem' }}>
              {product.rating} ({product.reviewCount} customer reviews)
            </span>
          </div>

          <div className="detail-price">${product.price.toFixed(2)}</div>

          <p className="detail-desc">{product.description}</p>

          {/* Action Row: Qty Select & Add to Cart */}
          <div className="action-row">
            <div className="qty-selector">
              <button onClick={() => handleQtyChange('dec')} className="qty-btn" aria-label="Decrease quantity">
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button onClick={() => handleQtyChange('inc')} className="qty-btn" aria-label="Increase quantity">
                +
              </button>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary" style={{ flexGrow: 1 }}>
              <ShoppingCart size={18} /> Add to Cart
            </button>

            <button
              onClick={() => setLiked((l) => !l)}
              className="btn btn-secondary btn-icon"
              style={{ color: liked ? 'hsl(var(--color-danger))' : 'inherit' }}
              aria-label="Add to wishlist"
              title="Add to Wishlist"
            >
              <Heart size={20} style={{ fill: liked ? 'currentColor' : 'none' }} />
            </button>
          </div>

          {/* Key Features Bullet List */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Key Features</h3>
            <ul className="features-list">
              {product.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="feature-icon-wrapper">
                    <Check size={16} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div>
              <h3 className="specs-title">Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key}>
                      <td className="spec-name">{key}</td>
                      <td className="spec-val">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section style={{ marginTop: '6rem', borderTop: '1px solid hsl(var(--border-color))', paddingTop: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>Related Products</h2>
          <div className="grid-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
