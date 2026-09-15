import footerImage from "../assets/footer.jpg";
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
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>

              <p className="subscribe-title">
                Receive exclusive offers in your mailbox
              </p>

              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <div className="email-input-box">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your email"
                    autoComplete="email"
                    required
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
              <strong>
                <a
                  href="https://webappssoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-highlight"
                >
                  WASS
                </a>
                , 2026
              </strong>
            </p>

            <p>
              Made with <span className="footer-yellow-heart">💛</span> by{" "}
              <strong>
                <a
                  href="https://webappssoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-highlight"
                >
                  WASS
                </a>
              </strong>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
