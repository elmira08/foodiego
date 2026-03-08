import React, { useState, useRef, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { getAllRestaurants, searchRestaurants } from '../services/restaurantService';
import { useDelivery } from '../context/DeliveryContext';
import '../styles/App.css';
import '../styles/Home.css';

const CATEGORIES = [
  { label: 'Breakfast', emoji: '🥞' },
  { label: 'Pizza',     emoji: '🍕' },
  { label: 'Sushi',     emoji: '🍣' },
  { label: 'Italian',   emoji: '🍝' },
  { label: 'Indian',    emoji: '🍛' },
  { label: 'Burgers',   emoji: '🍔' },
  { label: 'Fast Food', emoji: '🍟' },
  { label: 'Korean',    emoji: '🥘' },
  { label: 'Asian',     emoji: '🍜' },
  { label: 'Healthy',   emoji: '🥗' },
  { label: 'Vegan',     emoji: '🥦' },
  { label: 'Desserts',  emoji: '🍰' },
];

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'az',          label: 'Alphabetical order (A-Z)' },
  { value: 'za',          label: 'Alphabetical order (Z-A)' },
  { value: 'distance',    label: 'Distance' },
];

function Home() {
  const { deliveryMode } = useDelivery();

  const [query,          setQuery]          = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [freeDelivery,   setFreeDelivery]   = useState(false);
  const [openNow,        setOpenNow]        = useState(false);
  const [sortBy,         setSortBy]         = useState('recommended');
  const [sortOpen,       setSortOpen]       = useState(false);
  const [pendingSort,    setPendingSort]    = useState('recommended');
  const sortRef = useRef(null);

  // Close sort popup when clicking outside
  useEffect(() => {
    function handler(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
        setPendingSort(sortBy);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [sortBy]);

  // ── Build filtered + sorted list ──────────────────────
  let list = query.trim() ? searchRestaurants(query) : getAllRestaurants();

  // Delivery / Pickup
  list = list.filter((r) =>
    deliveryMode === 'delivery' ? r.supportsDelivery : r.supportsPickup
  );

  // Category pill
  if (activeCategory) {
    list = list.filter((r) =>
      r.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
    );
  }

  // Free delivery toggle
  if (freeDelivery) {
    list = list.filter((r) => r.deliveryFee === 0);
  }

  // Sort
  list = [...list];
  if (sortBy === 'az')       list.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === 'za')       list.sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === 'distance') list.sort((a, b) => a.deliveryFee - b.deliveryFee);

  // ── Handlers ──────────────────────────────────────────
  const toggleCategory = (label) =>
    setActiveCategory((prev) => (prev === label ? null : label));

  const applySort = () => {
    setSortBy(pendingSort);
    setSortOpen(false);
  };

  const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label;

  // ── Render ────────────────────────────────────────────
  return (
    <div className="home">

      {/* Category bar */}
      <div className="home__categories">
        <div className="home__categories-inner container">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              className={
                'home__cat-btn' +
                (activeCategory === cat.label ? ' home__cat-btn--active' : '')
              }
              onClick={() => toggleCategory(cat.label)}
            >
              <span className="home__cat-emoji">{cat.emoji}</span>
              <span className="home__cat-label">
                {activeCategory === cat.label ? '✓ ' : ''}
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="home__body container">

        {/* ── Sidebar ── */}
        <aside className="home__sidebar">
          <div className="home__filter">
            <span className="home__filter-label">Open now</span>
            <div
              className={'home__toggle' + (openNow ? ' home__toggle--on' : '')}
              onClick={() => setOpenNow((v) => !v)}
            >
              <div className="home__toggle-knob" />
            </div>
          </div>

          <div className="home__filter">
            <span className="home__filter-label">Free delivery</span>
            <div
              className={'home__toggle' + (freeDelivery ? ' home__toggle--on' : '')}
              onClick={() => setFreeDelivery((v) => !v)}
            >
              <div className="home__toggle-knob" />
            </div>
          </div>

          <div className="home__filter home__filter--col">
            <span className="home__filter-label">Rating</span>
            <div className="home__stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="home__star">☆</span>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Results ── */}
        <div className="home__results">

          {/* Search + sort */}
          <div className="home__search-row">
            <div className="home__search-wrap">
              <span className="home__search-icon">🔍</span>
              <input
                type="text"
                className="home__search"
                placeholder="What you want to eat today?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* Sort dropdown */}
            <div className="home__sort-wrap" ref={sortRef}>
              <button
                className="home__sort-btn"
                onClick={() => {
                  setSortOpen((o) => !o);
                  setPendingSort(sortBy);
                }}
              >
                {currentSortLabel} ▾
              </button>

              {sortOpen && (
                <div className="home__sort-dropdown">
                  <p className="home__sort-title">Sort by</p>

                  {SORT_OPTIONS.map((opt) => (
                    <label key={opt.value} className="home__sort-option">
                      <input
                        type="radio"
                        name="sort"
                        value={opt.value}
                        checked={pendingSort === opt.value}
                        onChange={() => setPendingSort(opt.value)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}

                  <div className="home__sort-actions">
                    <button
                      className="home__sort-cancel"
                      onClick={() => {
                        setSortOpen(false);
                        setPendingSort(sortBy);
                      }}
                    >
                      Cancel
                    </button>
                    <button className="btn-primary home__sort-apply" onClick={applySort}>
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Count */}
          {!query && !activeCategory && (
            <h2 className="home__count">Order from {list.length} places</h2>
          )}

          {/* List or empty state */}
          {list.length > 0 ? (
            <div className="home__list">
              {list.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
              ))}
            </div>
          ) : (
            <div className="home__empty">
              <div className="home__empty-icon">🔍</div>
              <h3>
                We didn't find a match for "
                {query || activeCategory}"
              </h3>
              <p>Try searching for something else instead</p>
              <button
                className="btn-primary"
                onClick={() => {
                  setQuery('');
                  setActiveCategory(null);
                }}
              >
                Reset search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;