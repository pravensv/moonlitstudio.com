import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-footer">Moonlit Oracle</div>
          <p>Luxury tarot, rituals, and spiritual guidance with a mystical glow.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/ritual-oils">Ritual Oils</Link>
            <Link to="/spells">Spells</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
        <div>
          <h4>Stay Connected</h4>
          <p>WhatsApp: +91 99514 78032</p>
          <p>Email: hello@moonlitoracle.com</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Moonlit Oracle Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
