function Footer() {
  return (
    <footer>
    <div className="footer-grid">
      <div className="footer-brand">
        <span className="logo">La Bella Cucina</span>
        <p>Bringing the soul of Italy to Pakistan since 1998. Every meal, a masterpiece. Every guest, family.</p>
        <div className="social-links">
          <a href="#" className="social-link">f</a>
          <a href="#" className="social-link">in</a>
          <a href="#" className="social-link">ig</a>
          <a href="#" className="social-link">yt</a>
        </div>
      </div>

      <div className="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#reserve">Reservations</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Hours</h4>
        <ul>
          <li><a href="#">Mon – Thu: 12pm – 11pm</a></li>
          <li><a href="#">Fri – Sat: 12pm – 12am</a></li>
          <li><a href="#">Sunday: 1pm – 10pm</a></li>
        </ul>
      </div>

      <div className="footer-col footer-contact">
        <h4>Contact</h4>
        <p><span>Address</span>14-C, MM Alam Road, Gulberg III, Lahore</p>
        <p><span>Phone</span>+92 42 3571 0000</p>
        <p><span>Email</span>info@labellacucina.pk</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 La Bella Cucina. All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></p>
    </div>
  </footer>
  )
}

export default Footer;
