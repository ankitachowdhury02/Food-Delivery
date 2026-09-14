import footerImage from "../assets/footer.jpg";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import "./Footer.css";

function Footer() {
  /*Proceed button*/
  const handleProceed = () => {
    const popularSection = document.querySelector(".popular");

    if (popularSection) {
      popularSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  /* Subscribe button */
  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();

    if (email === "") {
      alert("Please enter your email address");

      return;
    }

    alert(`Thank you! ${email} has been subscribed.`);

    e.target.reset();
  };

  return (
    <footer className="footer">
      <section className="footer-cta">
        <img
          className="footer-cta-image"
          src={footerImage}
          alt="Delicious food"
        />

        <div className="footer-cta-overlay"></div>

        <div className="footer-cta-content">
          <h2>
            Are you ready to order with
            <br />
            the best deals?
          </h2>

          <button
            className="footer-proceed-btn"
            type="button"
            onClick={handleProceed}
          >
            <span>PROCEED TO ORDER</span>

            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <polyline
                points="9 18 15 12 9 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Main Footer */}

      <section className="footer-main">
        <div className="footer-container">
          {/* city er jonno*/}

          <div className="footer-cities">
            <h3>Our top cities</h3>

            <div className="cities-grid">
              <div>
                <p>San Francisco</p>
                <p>Miami</p>
                <p>San Diego</p>
                <p>East Bay</p>
                <p>Long Beach</p>
              </div>

              <div>
                <p>Los Angeles</p>
                <p>Washington DC</p>
                <p>Seattle</p>
                <p>Portland</p>
                <p>Nashville</p>
              </div>

              <div>
                <p>New York City</p>
                <p>Orange County</p>
                <p>Atlanta</p>
                <p>Charlotte</p>
                <p>Denver</p>
              </div>

              <div>
                <p>Chicago</p>
                <p>Phoenix</p>
                <p>Las Vegas</p>
                <p>Sacramento</p>
                <p>Oklahoma City</p>
              </div>

              <div>
                <p>Columbus</p>
                <p>New Mexico</p>
                <p>Albuquerque</p>
                <p>Sacramento</p>
                <p>New Orleans</p>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-links-area">
            <div className="footer-column">
              <h3>Company</h3>

              <p>About us</p>
              <p>Team</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>

            <div className="footer-column">
              <h3>Contact</h3>

              <p>Help & Support</p>
              <p>Partner with us</p>
              <p>Ride with us</p>
            </div>

            <div className="footer-column">
              <h3>Legal</h3>

              <p>Terms & Conditions</p>
              <p>Refund & Cancellation</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>

            <div className="footer-social">
              <h4>FOLLOW US</h4>

              <div className="social-icons">
                <a
                  href="#"
                  aria-label="Instagram"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={instagram} alt="Instagram" />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={facebook} alt="Facebook" />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={twitter} alt="Twitter" />
                </a>
              </div>

              <p className="subscribe-title">
                Receive exclusive offers in your mailbox
              </p>

              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <div className="email-input-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <path
                      d="M3 7L12 13L21 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your email"
                  />
                </div>

                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-divider bottom-divider"></div>

          <div className="footer-bottom">
            <p>
              All rights Reserved
              <span className="copyright-symbol">©</span>
              <strong>Your Company, 2021</strong>
            </p>

            <p>
              Made with{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="footer-heart-icon"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>{" "}
              by <strong>Themewagon</strong>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
