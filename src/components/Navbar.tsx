import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GlowButton from './GlowButton';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import useTheme from '../hooks/useTheme';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Ritual Oils', path: '/ritual-oils' },
  { label: 'Spells', path: '/spells' },
  { label: 'About', path: '/about' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar sticky">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">☾</span>
          Moonlit Oracle
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <GlowButton href={buildWhatsAppUrl('Hello%20Moonlit%20Oracle')} variant="outlined">
            WhatsApp
          </GlowButton>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
