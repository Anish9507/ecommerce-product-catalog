import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  // Display top 3 products as featured (by rating)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container flex-between" style={{ flexWrap: 'wrap-reverse', gap: '2rem' }}>
          <div className="hero-content">
            <span className="hero-subtitle">New Collection</span>
            <h1 className="hero-title">Elevate Your Lifestyle Aesthetics</h1>
            <p className="hero-description">
              Discover a curated collection of premium design electronics, apparel, and home essentials. Designed for those who value style, precision, and performance.
            </p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn btn-primary">
                Explore Catalog <ArrowRight size={18} />
              </Link>
              <Link to="/catalog?category=Electronics" className="btn btn-secondary">
                Shop Gadgets
              </Link>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '1',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-glow)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
                alt="Premium aesthetic items"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid hsl(var(--border-color))', borderBottom: '1px solid hsl(var(--border-color))', backgroundColor: 'hsl(var(--bg-secondary) / 0.3)' }}>
        <div className="container grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div className="flex-center" style={{ gap: '1.25rem', justifyContent: 'flex-start' }}>
            <div className="btn-icon" style={{ backgroundColor: 'hsl(var(--color-primary) / 0.1)', color: 'hsl(var(--color-primary))', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <Truck size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Free Standard Shipping</h3>
              <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.875rem' }}>On all orders above $100.00</p>
            </div>
          </div>

          <div className="flex-center" style={{ gap: '1.25rem', justifyContent: 'flex-start' }}>
            <div className="btn-icon" style={{ backgroundColor: 'hsl(var(--color-accent) / 0.1)', color: 'hsl(var(--color-accent))', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Security Guaranteed</h3>
              <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.875rem' }}>256-bit encrypted checkout system</p>
            </div>
          </div>

          <div className="flex-center" style={{ gap: '1.25rem', justifyContent: 'flex-start' }}>
            <div className="btn-icon" style={{ backgroundColor: 'hsl(var(--color-success) / 0.1)', color: 'hsl(var(--color-success))', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <RotateCcw size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>30-Day Free Return</h3>
              <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.875rem' }}>No questions asked return window</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Featured Creations</h2>
              <p style={{ color: 'hsl(var(--text-secondary))' }}>Our highest-rated customer favorites, handpicked for you.</p>
            </div>
            <Link to="/catalog" className="btn btn-secondary">
              View All Products
            </Link>
          </div>

          <div className="grid-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
