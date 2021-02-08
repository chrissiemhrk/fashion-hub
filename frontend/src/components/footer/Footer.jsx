import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="logo">
          <Link to="/">FH</Link>
        </div>
        <nav>
          <ul className="shopping-category">
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
          <ul className="contact">
            <li>
              <p>(000) 000 000 000</p>
            </li>
            <li>
              <p>info@fashionhub.com</p>
            </li>
          </ul>
        </nav>
        <ul className="social-media">
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://pinterest.com">Pinterest</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          Made by <a href="https://twitter.com/chrissiemhrk">Chrissie</a>
        </p>
      </div>
    </footer>
  );
}
