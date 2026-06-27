import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Sync state from query parameters on load / param changes
  useEffect(() => {
    const q = searchParams.get('q');
    const category = searchParams.get('category');
    
    if (q !== null) {
      setSearchQuery(q);
    } else {
      setSearchQuery('');
    }
    
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  // Handle category button click
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setMinPrice('');
    maxPrice !== '' && setMaxPrice('');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filter and Sort Logic using useMemo
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Min Price
    if (minPrice !== '' && !isNaN(minPrice)) {
      result = result.filter((p) => p.price >= parseFloat(minPrice));
    }

    // Filter by Max Price
    if (maxPrice !== '' && !isNaN(maxPrice)) {
      result = result.filter((p) => p.price <= parseFloat(maxPrice));
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, selectedCategory, minPrice, maxPrice, sortBy]);

  return (
    <div className="container catalog-page animate-fade-in">
      <div className="flex-between" style={{ marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.25rem' }}>Product Catalog</h1>
          <p style={{ color: 'hsl(var(--text-secondary))' }}>
            Discover our premium product line, styled for design perfection.
          </p>
        </div>

        <div className="flex-center" style={{ gap: '0.75rem' }}>
          <label htmlFor="sort-select" style={{ fontSize: '0.9rem', color: 'hsl(var(--text-secondary))', fontWeight: '500' }}>
            Sort By
          </label>
          <select
            id="sort-select"
            className="input-text btn-sm"
            style={{ width: '180px', cursor: 'pointer' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="catalog-layout">
        {/* Sidebar Filters */}
        <aside className="sidebar-filters">
          <div className="flex-between" style={{ marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border-color))', paddingBottom: '0.75rem' }}>
            <span className="flex-center" style={{ gap: '0.5rem', fontWeight: '700', fontSize: '0.95rem' }}>
              <SlidersHorizontal size={16} /> Filters
            </span>
            <button
              onClick={resetFilters}
              className="btn-icon flex-center"
              style={{ fontSize: '0.8rem', color: 'hsl(var(--text-secondary))', gap: '0.25rem' }}
              title="Reset Filters"
            >
              <RefreshCw size={12} /> Reset
            </button>
          </div>

          {/* Search Query Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Search</h4>
            <div className="search-wrapper">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search catalog..."
                className="input-text search-input"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  const newParams = new URLSearchParams(searchParams);
                  if (e.target.value) {
                    newParams.set('q', e.target.value);
                  } else {
                    newParams.delete('q');
                  }
                  setSearchParams(newParams);
                }}
              />
            </div>
          </div>

          {/* Categories List */}
          <div className="filter-section">
            <h4 className="filter-title">Category</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.625rem 1rem'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Price Range</h4>
            <div className="range-inputs">
              <input
                type="number"
                placeholder="Min"
                className="input-text btn-sm"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span style={{ color: 'hsl(var(--text-secondary))' }}>-</span>
              <input
                type="number"
                placeholder="Max"
                className="input-text btn-sm"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </aside>

        {/* Catalog Grid Output */}
        <section style={{ width: '100%' }}>
          <div className="results-count" style={{ marginBottom: '1.5rem', fontWeight: '500' }}>
            Showing {filteredProducts.length} of {products.length} products
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-cart-state" style={{ padding: '6rem 2rem' }}>
              <div className="empty-cart-icon">🔍</div>
              <h2 className="empty-cart-title">No Products Found</h2>
              <p className="empty-cart-desc">
                We couldn't find any products matching your current search criteria. Try modifying your filters or search terms.
              </p>
              <button onClick={resetFilters} className="btn btn-primary">
                Clear All Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
