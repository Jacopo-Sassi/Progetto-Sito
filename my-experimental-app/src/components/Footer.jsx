function Footer() {
  return (
    <footer className="travel-footer">
      <div className="footer-container">
        {/* Sezione Link Veloci */}
        <div className="footer-section">
          <h3 className="footer-title">Discover</h3>
          <ul className="footer-links">
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Guided Tours</a></li>
            <li><a href="#">Cruises</a></li>
            <li><a href="#">Packages</a></li>
          </ul>
        </div>

        {/* Sezione Contatti */}
        <div className="footer-section">
          <h3 className="footer-title">Contacts</h3>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> Via Roma 123, Milano</p>
            <p><i className="fas fa-phone"></i> +39 123 456789</p>
            <p><i className="fas fa-envelope"></i> info@agencytravel.com</p>
          </div>
        </div>

        {/* Sezione Newsletter */}
        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Iscriviti</button>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Agency Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;