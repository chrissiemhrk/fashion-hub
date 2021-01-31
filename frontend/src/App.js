import "./App.scss";

function App() {
  return (
    <div className="grid-container">
      <header>
        <div className="logo">
          <a href="/">Fashion Hub</a>
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
          <ul className="cart-signin">
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/signin">Sign In</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
        </ul>
      </main>
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
    </div>
  );
}

export default App;
