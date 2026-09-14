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
  const [searchFood, setSearchFood] = useState("");

  return (
    <div>
      <Navbar searchFood={searchFood} setSearchFood={setSearchFood} />

      <Hero />

      <Offers />

      <HowItWorks />

      <PopularItems />

      <ResturantsFeatures />

      <SearchByFood searchFood={searchFood} />

      <DeliveryFeatures />

      <SpecialOffers />

      <Footer />
    </div>
  );
}

export default App;
