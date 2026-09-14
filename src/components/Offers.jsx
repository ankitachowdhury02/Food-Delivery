import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import "./Offers.css";


const offers = [
  {
    image: food1,
    discount: "15",
    title: "Flat Hill Slingback",
    days: "6 Days Remaining",
  },
  {
    image: food2,
    discount: "10",
    title: "Ocean Switch",
    days: "6 Days Remaining",
  },
  {
    image: food3,
    discount: "25",
    title: "Normal Loaded",
    days: "7 Days Remaining",
  },
  {
    image: food4,
    discount: "20",
    title: "Fastfood Special",
    days: "8 Days Remaining",
  },
];

function Offers() {
  return (
    <section className="offers">
      <div className="offers-container">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            {/* Image Box */}
            <div className="offer-image">
              <img src={offer.image} alt={offer.title} />

              {/* Figma Curved Discount Badge */}
              <div className="discount-badge-banner">
                <span className="discount-value">{offer.discount}</span>
                <div className="discount-meta">
                  <span className="discount-pct">%</span>
                  <span className="discount-sub">Off</span>
                </div>
              </div>
            </div>

            {/* Offer Details */}
            <div className="offer-info">
              <h3 className="offer-title">{offer.title}</h3>
              <span className="remaining-pill">{offer.days}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Offers;