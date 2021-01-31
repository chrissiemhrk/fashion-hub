export default function Header() {
  return (
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
  );
}
