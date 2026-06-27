import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              <Sparkles size={22} className="star-filled" style={{ fill: 'currentColor' }} />
              <span>AuraStore</span>
            </Link>
            <p className="footer-desc">
              Your curated catalog for premium devices, apparel, and lifestyle accessories. Designed with absolute precision and styling.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Shop</h4>
            <ul className="footer-links">
              <li>
                <Link to="/catalog" className="footer-link">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=Electronics" className="footer-link">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=Apparel" className="footer-link">
                  Apparel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Stay Connected</h4>
            <p className="footer-desc">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form onSubmit={handleSubscribe} className="promo-form">
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type="email"
                  placeholder={subscribed ? "Subscribed successfully!" : "Enter your email"}
                  className="input-text btn-sm"
                  style={{ width: '100%', paddingRight: '2.5rem' }}
                  value={email}
                  disabled={subscribed}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn-icon"
                  style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '0.25rem',
                    color: subscribed ? 'hsl(var(--color-success))' : 'inherit'
                  }}
                  disabled={subscribed}
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom flex-between">
          <span>&copy; {new Date().getFullYear()} AuraStore Inc. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/" className="footer-link">Privacy Policy</Link>
            <Link to="/" className="footer-link">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
