import { useState } from "react";
import ramen from "../assets/food.png";
import "./Hero.css";

function Hero() {
  // Delivery / Pickup কোনটা active সেটা রাখবে
  const [deliveryType, setDeliveryType] = useState("delivery");

  // Address input-এর value রাখবে
  const [address, setAddress] = useState("");

  // Find Food button click করলে এই function চলবে
  const handleFindFood = (e) => {
    e.preventDefault();

    // যদি address না লেখা হয়
    if (address.trim() === "") {
     // alert("Please enter your address");
      return;
    }

    // Address লেখা থাকলে
    // alert(
     // `Finding ${deliveryType} food near ${address}`
   // );
  };

  return (
    <section className="hero">

      <div className="hero-content">

        {/*LEFT CONTENT*/}
        <div className="hero-text">

          <h1>Are you starving?</h1>

          <p>
            Within a few clicks, find meals that are accessible near you
          </p>


          {/*SEARCH CARD*/}
          <div className="food-search">


            {/*  DELIVERY / PICKUP  */}
            <div className="delivery-tabs">

              {/* Delivery Button */}
              <button
                type="button"
                className={
                  deliveryType === "delivery"
                    ? "active-tab"
                    : ""
                }
                onClick={() => setDeliveryType("delivery")}
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-4-4zm-12 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>

                <span>Delivery</span>

              </button>


              {/* Pickup Button */}
              <button
                type="button"
                className={
                  deliveryType === "pickup"
                    ? "active-tab"
                    : ""
                }
                onClick={() => setDeliveryType("pickup")}
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
                </svg>

                <span>Pickup</span>

              </button>

            </div>


            {/* ADDRESS SEARCH*/}
            <form
              className="search-area"
              onSubmit={handleFindFood}
            >

              {/* Address Input */}
              <div className="search-input-box">

                <svg
                  className="input-location-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21C16 17 19 13.5 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 13.5 8 17 12 21Z"
                    fill="#FF642F"
                  />

                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    fill="white"
                  />

                </svg>


                <input
                  type="text"
                  placeholder="Enter Your Address"
                  aria-label="Enter Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

              </div>


              {/* Find Food Button */}
              <button
                className="find-food"
                type="submit"
              >

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                  />

                  <path
                    d="M16 16L21 21"
                    strokeLinecap="round"
                  />

                </svg>

                <span>Find Food</span>

              </button>

            </form>

          </div>

        </div>


        {/*FOOD IMAGE */}
        <div className="hero-image">

          <img
            src={ramen}
            alt="Delicious meal bowl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;