import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, Plus, Minus, CheckCircle, Tag, Ticket } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  // Checkout Success Modal State
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  // Promo Code State
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');

  // Constants
  const SHIPPING_THRESHOLD = 100;
  const SHIPPING_COST = 15.0;
  const TAX_RATE = 0.085; // 8.5%

  // Calculations
  const shipping = cartTotal >= SHIPPING_THRESHOLD || cartTotal === 0 ? 0 : SHIPPING_COST;
  const discountAmount = cartTotal * (discountPercent / 100);
  const taxableSubtotal = Math.max(0, cartTotal - discountAmount);
  const tax = taxableSubtotal * TAX_RATE;
  const grandTotal = taxableSubtotal + shipping + tax;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'AURA10') {
      setAppliedPromo('AURA10');
      setDiscountPercent(10);
      setPromoCode('');
    } else {
      setPromoError('Invalid promo code. Try "AURA10" for 10% off.');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo('');
    setDiscountPercent(0);
  };

  const handleCheckout = () => {
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessModalOpen(false);
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="container cart-page animate-fade-in">
        <div className="empty-cart-state">
          <ShoppingBag size={48} className="empty-cart-icon" style={{ strokeWidth: 1.5 }} />
          <h2 className="empty-cart-title">Your shopping cart is empty</h2>
          <p className="empty-cart-desc">
            Looks like you haven't added anything to your cart yet. Explore our curated collections to find your premium creations.
          </p>
          <Link to="/catalog" className="btn btn-primary">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container cart-page animate-fade-in">
      <h1 style={{ fontSize: '2.25rem', marginBottom: '2.5rem' }}>Your Shopping Cart</h1>

      <div className="cart-layout">
        {/* Left Column: Cart Items List */}
        <div className="cart-items-panel">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card animate-fade-in">
              <div className="cart-item-thumb">
                <img src={item.image} alt={item.name} className="cart-item-img" />
              </div>

              <div className="cart-item-details">
                <Link to={`/product/${item.id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <span className="cart-item-category">{item.category}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>

              <div className="cart-item-actions">
                <div className="qty-selector" style={{ transform: 'scale(0.9)' }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="qty-btn"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="qty-btn"
                    aria-label="Increase quantity"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn-icon"
                  style={{ color: 'hsl(var(--color-danger))' }}
                  aria-label={`Remove ${item.name} from cart`}
                  title="Remove Item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <button onClick={clearCart} className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
            Clear Entire Cart
          </button>
        </div>

        {/* Right Column: Order Summary */}
        <div className="cart-summary-panel">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span style={{ color: 'hsl(var(--text-primary))', fontWeight: '500' }}>${cartTotal.toFixed(2)}</span>
          </div>

          {appliedPromo && (
            <div className="summary-row" style={{ color: 'hsl(var(--color-success))' }}>
              <span className="flex-center" style={{ gap: '0.25rem' }}>
                <Ticket size={14} /> Discount ({appliedPromo})
              </span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}

          <div className="summary-row">
            <span>Shipping</span>
            <span style={{ color: 'hsl(var(--text-primary))', fontWeight: '500' }}>
              {shipping === 0 ? (
                <span style={{ color: 'hsl(var(--color-success))', fontWeight: '600' }}>FREE</span>
              ) : (
                `$${shipping.toFixed(2)}`
              )}
            </span>
          </div>

          <div className="summary-row">
            <span>Estimated Tax (8.5%)</span>
            <span style={{ color: 'hsl(var(--text-primary))', fontWeight: '500' }}>${tax.toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span>Order Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>

          {/* Promo Code Input Section */}
          <div className="promo-wrapper">
            <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>Have a Promo Code?</h4>
            {!appliedPromo ? (
              <form onSubmit={handleApplyPromo} className="promo-form">
                <input
                  type="text"
                  placeholder="Code (e.g. AURA10)"
                  className="input-text btn-sm"
                  style={{ textTransform: 'uppercase' }}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary btn-sm">
                  Apply
                </button>
              </form>
            ) : (
              <div className="flex-between" style={{ padding: '0.5rem 0.75rem', backgroundColor: 'hsl(var(--color-success) / 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--color-success) / 0.3)' }}>
                <span className="flex-center" style={{ gap: '0.5rem', fontSize: '0.85rem', color: 'hsl(var(--color-success))', fontWeight: '600' }}>
                  <Tag size={14} /> {appliedPromo} Applied
                </span>
                <button onClick={handleRemovePromo} className="btn-icon" style={{ padding: '0.2rem', color: 'hsl(var(--text-secondary))', fontSize: '0.75rem' }}>
                  Remove
                </button>
              </div>
            )}
            {promoError && (
              <p style={{ color: 'hsl(var(--color-danger))', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: '500' }}>
                {promoError}
              </p>
            )}
          </div>

          <button onClick={handleCheckout} className="btn btn-primary checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Checkout Success Modal Overlay */}
      {isSuccessModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade-in">
            <CheckCircle className="modal-icon" size={56} style={{ strokeWidth: 1.5 }} />
            <h2 className="modal-title">Order Confirmed!</h2>
            <p className="modal-desc">
              Thank you for shopping at AuraStore. Your order has been placed successfully. A receipt will be sent to your email.
            </p>
            <div style={{ padding: '1rem', backgroundColor: 'hsl(var(--bg-primary))', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', textAlign: 'left', border: '1px solid hsl(var(--border-color))' }}>
              <div className="flex-between" style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'hsl(var(--text-secondary))' }}>Order Number:</span>
                <span style={{ fontWeight: '600' }}>AS-{Math.floor(Math.random() * 90000) + 10000}</span>
              </div>
              <div className="flex-between" style={{ fontSize: '0.85rem' }}>
                <span style={{ color: 'hsl(var(--text-secondary))' }}>Amount Paid:</span>
                <span style={{ fontWeight: '700', color: 'hsl(var(--color-primary))' }}>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <button onClick={handleCloseSuccess} className="btn btn-primary" style={{ width: '100%' }}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
