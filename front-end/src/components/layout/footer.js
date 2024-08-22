import "./footer.css"; // Optional: Import a CSS file for styling
import Link from "./link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Rouletech Website. All Rights Reserved.</p>
        <nav className="footer-nav">
          <ul>
            <Link href="/privacy-policy" title="Privacy Policy" />
            <Link href="/terms-of-service" title="Terms of Service" />
            <Link href="/contact" title="Contact" />
            {/* <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
