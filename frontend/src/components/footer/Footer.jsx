export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="logo">
          <a href="/">FH</a>
        </div>
        <nav>
          <ul className="shopping-category">
            <li>
              <a href="/women">Women</a>
            </li>
            <li>
              <a href="/men">Men</a>
            </li>
            <li>
              <a href="/accessories">Accessories</a>
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
