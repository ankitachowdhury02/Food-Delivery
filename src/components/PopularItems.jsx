import { useRef, useState } from "react";

import burger from "../assets/burger.png";
import pancake from "../assets/pancake.png";
import sandwich from "../assets/sandwitch.png";
import soup from "../assets/soup.png";
import dancake from "../assets/dancake.png";
import "./PopularItems.css";

const foods = [
  {
    image: burger,
    name: "Cheese Burger",
    restaurant: "Burger Arena",
    price: "$3.88",
  },
  {
    image: pancake,
    name: "Toffe's Cake",
    restaurant: "Top Sticks",
    price: "$4.00",
  },
  {
    image: dancake,
    name: "Dancake",
    restaurant: "Cake World",
    price: "$1.99",
  },
  {
    image: sandwich,
    name: "Crispy Sandwitch",
    restaurant: "Fastfood Dine",
    price: "$3.00",
  },
  {
    image: soup,
    name: "Thai Soup",
    restaurant: "Foody man",
    price: "$2.79",
  },
];

function LocationIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C16 17 19 13.5 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 13.5 8 17 12 21Z"
        fill="#FFB30E"
      />

      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  );
}

function PopularItems() {
  const containerRef = useRef(null);

  const [selectedFood, setSelectedFood] = useState(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 260;

      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,

        behavior: "smooth",
      });
    }
  };

  /* Order Fuc er jnno */

  const handleOrder = (food) => {
    setSelectedFood(food);
  };

  return (
    <section className="popular">
      {/* Section Title */}

      <h2 className="section-title">Popular Items</h2>

      <div className="popular-wrapper">
        {/* Left Arrow Section */}

        <button
          className="carousel-arrow arrow-left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Food Items Section */}

        <div className="items-container" ref={containerRef}>
          {foods.map((food, index) => (
            <div key={index} className="item-card">
              {/* Food Image */}

              <div className="item-image-wrapper">
                <img src={food.image} alt={food.name} />
              </div>

              {/* Food Details */}

              <div className="item-details">
                {/* Food Name */}

                <h3 className="item-name">{food.name}</h3>

                {/* Restaurant */}

                <p className="item-restaurant">
                  <LocationIcon />

                  <span>{food.restaurant}</span>
                </p>

                {/* Price */}

                <p className="item-price">{food.price}</p>

                {/* Order Button */}

                <button
                  className="order-btn"
                  type="button"
                  onClick={() => handleOrder(food)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Section */}

        <button
          className="carousel-arrow arrow-right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Select Food Section */}

      {selectedFood && (
        <div className="selected-food">
          <p>
            Selected: <strong>{selectedFood.name}</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default PopularItems;
