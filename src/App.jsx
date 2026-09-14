import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import HowItWorks from "./components/HowItWorks";
import PopularItems from "./components/PopularItems";
import ResturantsFeatures from "./components/ResturantsFeatures";
import SearchByFood from "./components/SearchByFood";
import DeliveryFeatures from "./components/DeliveryFeatures";
import SpecialOffers from "./components/Middle";
import Footer from "./components/Footer";

function App() {

  // Navbar থেকে যে food search করা হবে
  const [searchFood, setSearchFood] = useState("");


  return (
    <div>

      {/* Navbar */}
      <Navbar
        searchFood={searchFood}
        setSearchFood={setSearchFood}
      />


      {/* Hero */}
      <Hero />


      {/* Offers */}
      <Offers />


      {/* How It Works */}
      <HowItWorks />


      {/* Popular Items */}
      <PopularItems />


      {/* Restaurants */}
      <ResturantsFeatures />


      {/* Search By Food */}
      <SearchByFood
        searchFood={searchFood}
      />


      {/* Delivery Features */}
      <DeliveryFeatures />


      {/* Special Offers */}
      <SpecialOffers />

      <Footer />

    </div>
  );
}

export default App;