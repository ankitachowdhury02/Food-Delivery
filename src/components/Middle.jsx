import sandwich from "../assets/sandwitchmiddle.png";
import chicken from "../assets/momo.png";
import pizza from "../assets/pizzamiddle.png";
import "./Middle.css";

const offers = [
  {
    image: sandwich,

    title: (
      <>
        Best deals <span>Crispy</span>
        <br />
        <span>Sandwiches</span>
      </>
    ),

    description:
      "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",

    reverse: false,
  },

  {
    image: chicken,

    title: (
      <>
        Celebrate parties
        <br />
        with <span>Fried Chicken</span>
      </>
    ),

    description:
      "Get the best fried chicken smeared with a lip smacking lemon chilli flavor. Check out best deals for fried chicken.",

    reverse: true,
  },

  {
    image: pizza,

    title: (
      <>
        Wanna eat hot
        <br />& spicy <span>Pizza?</span>
      </>
    ),

    description:
      "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the tasty deals.",

    reverse: false,
  },
];

function SpecialOffers() {
  // Proceed to Order section suru

  const handleProceed = () => {
    const popularSection = document.querySelector(".popular");

    if (popularSection) {
      popularSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="special-offers">
      <div className="special-offers-container">
        {offers.map((offer, index) => (
          <div
            className={`special-offer-card ${offer.reverse ? "reverse" : ""}`}
            key={index}
          >
            {/* Text er jnno section ta */}

            <div className="special-offer-content">
              <h2>{offer.title}</h2>

              <p>{offer.description}</p>

              {/* Proceed button kora jabe */}

              <button
                className="proceed-btn"
                type="button"
                onClick={handleProceed}
              >
                <span>PROCEED TO ORDER</span>

                <svg
                  width="18"
                  height="18"
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

            {/* image er jnno */}

            <div className="special-offer-image">
              <img src={offer.image} alt="Food offer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;
