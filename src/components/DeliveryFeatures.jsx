import discountIcon from "../assets/Discount.png";
import trackingIcon from "../assets/Livelocation.png";
import deliveryIcon from "../assets/Quick Delivery.png";

import appImage from "../assets/app.png";
import googlePlay from "../assets/Google Play logo.png";
import appStore from "../assets/Apple logo.png";
import "./DeliveryFeatures.css";

function DeliveryFeatures() {
  return (
    <section className="delivery-features">
      {/*FEATURE BOX*/}

      <div className="features-box">
        {/* Daily Discounts */}
        <div className="feature-item">
          <img src={discountIcon} alt="Daily Discounts" />

          <h3>
            Daily
            <br />
            Discounts
          </h3>
        </div>

        {/* Divider */}
        <div className="feature-divider"></div>

        {/* Live Tracking */}
        <div className="feature-item">
          <img src={trackingIcon} alt="Live Tracking" />

          <h3>
            Live
            <br />
            Tracking
          </h3>
        </div>

        {/* Divider */}
        <div className="feature-divider"></div>

        {/* Quick Delivery */}
        <div className="feature-item">
          <img src={deliveryIcon} alt="Quick Delivery" />

          <h3>
            Quick
            <br />
            Delivery
          </h3>
        </div>
      </div>

      {/*INSTALL APP SECTION*/}

      <div className="install-app">
        {/* Left - Mobile Images */}
        <div className="app-images">
          <img src={appImage} alt="FoodWagon Mobile App" />
        </div>

        {/* Right - Content */}
        <div className="app-content">
          <h2>Install the app</h2>

          <p>
            It's never been easier to order food. Look for the finest discounts
            and you'll be lost in a world of delectable food.
          </p>

          {/* Store Buttons */}
          <div className="store-buttons">
            <img src={googlePlay} alt="Get it on Google Play" />

            <img src={appStore} alt="Download on the App Store" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryFeatures;
