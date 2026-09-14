import { useState } from "react";
import logo from "../assets/Logo.png";
import "./Navbar.css";

function Navbar({ searchFood, setSearchFood }) {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    setShowSearch((prev) => !prev);

    setTimeout(() => {
      const searchSection = document.querySelector(".search-by-food");

      if (searchSection) {
        searchSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleSearchChange = (e) => {
    setSearchFood(e.target.value);
  };

  const handleLogin = () => {
    alert("Login feature coming soon!");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="FoodWagon" />
        </div>

        <div className="location">
          <strong>Deliver to:</strong>

          <svg
            className="location-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21C16 17 19 13.5 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 13.5 8 17 12 21Z"
              fill="currentColor"
            />

            <circle cx="12" cy="9" r="2.5" fill="white" />
          </svg>

          <span>Current Location</span>

          <b>Mohammadpur Bus Stand, Dhaka</b>
        </div>

        <div className="nav-right">
          <button className="search-btn" type="button" onClick={handleSearch}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="2.5"
              />

              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <span>Search Food</span>
          </button>

          {showSearch && (
            <div className="navbar-search-box">
              <input
                type="text"
                placeholder="Search food..."
                value={searchFood}
                onChange={handleSearchChange}
                autoFocus
              />

              <button
                type="button"
                className="search-close-btn"
                onClick={() => setShowSearch(false)}
                aria-label="Close search"
              >
                ✕
              </button>
            </div>
          )}

          {/*  LOGIN */}

          <button className="login-btn" type="button" onClick={handleLogin}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>

            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
