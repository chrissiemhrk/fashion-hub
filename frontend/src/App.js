import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grid-container">
      <Header />
      <main>
        <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
