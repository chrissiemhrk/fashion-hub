import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <div className="grid-container">
      <Header />
      <main>
        <ul>
          <li>item one</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
