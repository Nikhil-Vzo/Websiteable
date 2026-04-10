import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="newsletter-box">
          <div className="newsletter-hero-wrapper">
            <div className="deco-wavy-lines-footer" aria-hidden="true">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20C15 5 25 5 35 20C45 35 55 35 65 20C75 5 85 5 95 20" stroke="var(--coral-red)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 30C15 15 25 15 35 30C45 45 55 45 65 30C75 15 85 15 95 30" stroke="var(--coral-red)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <h2>
              Subscribe to<br />
              our newsletter
            </h2>
            <p>
              it <span className="highlight-orange-footer">remains during local</span> doesn't communicate
            </p>
            <button className="subscribe-btn">Subscribe</button>
            
            {/* Decorative semi-circle right */}
            <div className="deco-purple-shape-footer" aria-hidden="true"></div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Overview</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Terms & Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Acceptable Use Structure</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">X (Twitter)</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Address</h4>
            <p>
              123 Street Ave, City, Country, ZIP 12345
              <br /><br />
              +1 234 567 8900
              <br /><br />
              hello@elementum.com
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Elementum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
