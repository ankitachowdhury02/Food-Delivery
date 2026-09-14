import locationIcon from "../assets/location.png";
import orderIcon from "../assets/order.png";
import paymentIcon from "../assets/payment.png";
import mealsIcon from "../assets/meals.png";
import "./HowItWorks.css";

function HowItWorks() {

  const steps = [
    {
      icon: locationIcon,
      title: "Select location",
      text: "Choose the location where your food will be delivered."
    },
    {
      icon: orderIcon,
      title: "Choose order",
      text: "Check over hundreds of menus to pick your favorite food."
    },
    {
      icon: paymentIcon,
      title: "Pay advanced",
      text: "It's quick, safe, and simple. Select several methods of payment."
    },
    {
      icon: mealsIcon,
      title: "Enjoy meals",
      text: "Food is made and delivered directly to your home."
    }
  ];

  return (
    <section className="how-it-works">

      <h2 className="section-title">How does it work</h2>

      <div className="steps-container">

        {steps.map((step, index) => (

          <div className="step" key={index}>

            <div className="step-icon">
              <img
                src={step.icon}
                alt={step.title}
              />
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;