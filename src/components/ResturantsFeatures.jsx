import { useState } from "react";

import food1 from "../assets/Rfood.png";
import food2 from "../assets/Rfood1.png";
import food3 from "../assets/Rfood2.png";
import food4 from "../assets/Rfood3.png";
import food5 from "../assets/Rfood4.png";
import food6 from "../assets/Rfood5.png";
import food7 from "../assets/Rfood6.png";
import food8 from "../assets/Rfood7.png";

import logo1 from "../assets/Friends.png";
import logo2 from "../assets/PizzaPino.png";
import logo3 from "../assets/Dunkin.png";
import logo4 from "../assets/subway.png";
import logo5 from "../assets/Ruby.png";
import logo6 from "../assets/KFC.png";
import logo7 from "../assets/RedSquare.png";
import logo8 from "../assets/Taco Bell.png";
import "./ResturantsFeatures.css";

const restaurants = [
  {
    image: food1,
    logo: logo1,
    discount: "20% off",
    name: "Foodworld",
    rating: "46",
    status: "Opens tomorrow",
    open: false,
    description: "Fresh and delicious meals prepared with quality ingredients.",
  },

  {
    image: food2,
    logo: logo2,
    discount: "15% off",
    name: "Pizzahub",
    rating: "40",
    status: "Opens tomorrow",
    open: false,
    description: "Hot and cheesy pizzas with a variety of delicious toppings.",
  },

  {
    image: food3,
    logo: logo3,
    discount: "10% off",
    name: "Donuts hut",
    rating: "20",
    status: "Open Now",
    open: true,
    description:
      "Fresh donuts, sweet treats and delicious snacks for everyone.",
  },

  {
    image: food4,
    logo: logo4,
    discount: "15% off",
    name: "Subway",
    rating: "50",
    status: "Open Now",
    open: true,
    description:
      "Freshly made sandwiches with your choice of vegetables and sauces.",
  },

  {
    image: food5,
    logo: logo5,
    discount: "10% off",
    name: "Ruby Tuesday",
    rating: "26",
    status: "Open Now",
    open: true,
    description:
      "A casual restaurant serving tasty meals and satisfying dishes.",
  },

  {
    image: food6,
    logo: logo6,
    discount: "25% off",
    name: "Kuakata Fried Chicken",
    rating: "53",
    status: "Open Now",
    open: true,
    description: "Crispy fried chicken with delicious flavors and tasty sides.",
  },

  {
    image: food7,
    logo: logo7,
    discount: "10% off",
    name: "Red Square",
    rating: "45",
    status: "Open Now",
    open: true,
    description:
      "Delicious food, refreshing drinks and a comfortable dining experience.",
  },

  {
    image: food8,
    logo: logo8,
    discount: "10% off",
    name: "Taco Bell",
    rating: "35",
    status: "Open Now",
    open: true,
    description:
      "Tasty Mexican-inspired food with bold flavors and fresh ingredients.",
  },
];

function TagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M20 13L13 20L4 11V4H11L20 13Z" fill="currentColor" />

      <circle cx="8" cy="8" r="1.5" fill="white" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />

      <path
        d="M12 7V12L15 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResturantsFeatures() {
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  const [showAll, setShowAll] = useState(false);

  const handleImageClick = (index) => {
    if (activeRestaurant === index) {
      setActiveRestaurant(null);
    } else {
      setActiveRestaurant(index);
    }
  };

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const visibleRestaurants = showAll ? restaurants : restaurants.slice(0, 4);

  return (
    <section className="featured-restaurants">
      <h2 className="section-title">Featured Restaurants</h2>

      <div className="restaurant-grid">
        {visibleRestaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <div
              className="restaurant-image"
              onClick={() => handleImageClick(index)}
            >
              <img src={restaurant.image} alt={restaurant.name} />

              <div
                className={`restaurant-description ${
                  activeRestaurant === index ? "description-active" : ""
                }`}
              >
                <h4>{restaurant.name}</h4>

                <p>{restaurant.description}</p>
              </div>

              <div className="restaurant-badges">
                <div className="discount-badge">
                  <TagIcon />

                  <span>{restaurant.discount}</span>
                </div>

                <div className="fast-badge">
                  <ClockIcon />

                  <span>Fast</span>
                </div>
              </div>
            </div>

            <div className="restaurant-info">
              <img
                className="restaurant-logo"
                src={restaurant.logo}
                alt={`${restaurant.name} logo`}
              />

              <div className="restaurant-details">
                <h3>{restaurant.name}</h3>

                <p className="rating">
                  <span className="star">★</span>

                  <span>{restaurant.rating}</span>
                </p>
              </div>
            </div>

            <div
              className={
                restaurant.open ? "restaurant-status open" : "restaurant-status"
              }
            >
              {restaurant.status}
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <button className="view-all-btn" type="button" onClick={handleViewAll}>
          <span>{showAll ? "Show Less" : "View All"}</span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ResturantsFeatures;
