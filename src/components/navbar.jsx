import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar container">
        <div className="logo">
          <a href="#">Elementum</a>
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <button className="hamburger" aria-label="Toggle menu">
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;