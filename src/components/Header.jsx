import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Sun, Moon, Search, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aurastore_theme') || 'dark';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('aurastore_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <Sparkles size={24} className="star-filled" style={{ fill: 'currentColor' }} />
          <span>AuraStore</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <form onSubmit={handleSearchSubmit} className="search-wrapper" style={{ display: 'none' }}>
            {/* Kept header search template for desktop nav if desired, hidden here to prioritize page-level filters */}
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="input-text search-input btn-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle theme" title="Toggle Light/Dark Mode">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/cart" className="btn-icon cart-button-container" aria-label="View shopping cart" title="View Shopping Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
