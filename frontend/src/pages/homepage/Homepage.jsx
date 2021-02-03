import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <div className="grid-container">
      <Header />
      <main className="content">
        <img
          src="https://res.cloudinary.com/chrissiemhrk/image/upload/v1612353748/fashion-hub/alyssa-strohmann-TS--uNw-JqE-unsplash_1_xf15ic.jpg"
          alt="clothes and shoes neatly arranged on a dark gray background"
        />
        <div className="banner">
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
