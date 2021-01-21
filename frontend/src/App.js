import "./App.scss";

function App() {
  return (
    <div className="grid-container">
      <header>
        <div className="logo">
          <a href="/">Fashion Hub</a>
        </div>
        <nav>
          <ul>
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
        <p>All rights reserved 2021</p>
      </footer>
    </div>
  );
}

export default App;
