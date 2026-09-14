import { useRef, useState } from "react";

import pizza from "../assets/pizza.png";
import burger from "../assets/burger.png";
import noodles from "../assets/noodles.png";
import sandwich from "../assets/sandwitch.png";
import chowmein from "../assets/chowmin.png";
import steak from "../assets/steak.png";
import "./SearchByFood.css";


const foods = [
  {
    image: pizza,
    name: "Pizza",
  },
  {
    image: burger,
    name: "Burger",
  },
  {
    image: noodles,
    name: "Noodles",
  },
  {
    image: sandwich,
    name: "Sub-sandwich",
  },
  {
    image: chowmein,
    name: "Chowmein",
  },
  {
    image: steak,
    name: "Steak",
  },
];


function SearchByFood({ searchFood = "" }) {

  // Food container-এর reference
  const containerRef = useRef(null);

  // কোন food select করা হয়েছে
  const [selectedFood, setSelectedFood] = useState(null);

  // View All click করার জন্য
  const [showAll, setShowAll] = useState(false);


 

  const scroll = (direction) => {

    if (containerRef.current) {

      const scrollAmount = 200;

      containerRef.current.scrollBy({
        left:
          direction === "left"
            ? -scrollAmount
            : scrollAmount,

        behavior: "smooth",
      });
    }
  };




  const handleFoodClick = (food) => {

    setSelectedFood(food);

  
  };


  const handleViewAll = () => {

    setShowAll(!showAll);

    if (!showAll && containerRef.current) {

      containerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });

    }
  };



  const searchText = searchFood.trim().toLowerCase();


  // Search-এর সাথে match করা food
  const matchedFood = foods.find((food) =>
    food.name.toLowerCase().includes(searchText)
  );


  return (

    <section className="search-by-food">


      

      <div className="search-food-header">

        <h2 className="section-title">
          Search by Food
        </h2>


        <div className="search-food-right">


          

          <button
            className="view-food-btn"
            type="button"
            onClick={handleViewAll}
          >

            <span>
              {showAll ? "Show Less" : "View All"}
            </span>


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


       

          <button
            className="food-arrow"
            onClick={() => scroll("left")}
            aria-label="Previous foods"
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


          <button
            className="food-arrow"
            onClick={() => scroll("right")}
            aria-label="Next foods"
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

      </div>


      

      {searchText && !matchedFood && (

        <div className="no-food-found">

          <h3>
            No items found
          </h3>

          <p>
            We couldn't find "{searchFood}"
          </p>

        </div>

      )}


      {/*  Food Categories Section  */}

      {(!searchText || matchedFood) && (

        <div
          className="food-category-container"
          ref={containerRef}
        >

          {foods.map((food, index) => {

            // এই food search-এর সাথে match করছে কিনা
            const isHighlighted =
              searchText &&
              food.name.toLowerCase().includes(searchText);


            return (

              <div
                className={`food-category ${
                  isHighlighted ? "food-highlight" : ""
                }`}
                key={index}
                onClick={() => handleFoodClick(food)}
              >

                <div className="food-category-image">

                  <img
                    src={food.image}
                    alt={food.name}
                  />

                </div>


                <h3 className="food-category-name">
                  {food.name}
                </h3>

              </div>

            );

          })}

        </div>

      )}


      {/* Food Select ert jnno */}

      {selectedFood && (

        <div className="selected-food">

          <p>

            Selected Food:{" "}

            <strong>
              {selectedFood.name}
            </strong>

          </p>

        </div>

      )}


    </section>

  );
}


export default SearchByFood;