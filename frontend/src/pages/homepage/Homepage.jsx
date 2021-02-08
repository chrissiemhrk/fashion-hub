import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <div className="grid-container">
      <Header />
      <main className="content">
        <section className="hero">
          <img
            className="content-image"
            src="https://res.cloudinary.com/chrissiemhrk/image/upload/v1612353748/fashion-hub/alyssa-strohmann-TS--uNw-JqE-unsplash_1_xf15ic.jpg"
            alt="clothes and shoes neatly arranged on a dark gray background"
          />
        </section>
        <section className="banner">
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
          <p className="banner-text">Fashion Hub</p>
        </section>
        <section className="women">
          <div className="women-text">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              praesentium, quidem quo voluptatum ut ad nam a repudiandae
              incidunt vero assumenda libero aperiam optio voluptas non sunt
              facilis laborum quae.
            </p>
            <button>
              <Link to="women"> View Women's Collection</Link>
            </button>
          </div>
          <div className="women-image">
            <img
              src="https://res.cloudinary.com/chrissiemhrk/image/upload/v1612357224/fashion-hub/vladimir-yelizarov-p5SXRTjaPTc-unsplash_1_da0fq3.jpg"
              alt="Woman sitting on a picnic blanket in a garden"
            />
          </div>
        </section>
        <section className="men">
          <div className="men-image">
            <img
              src="https://res.cloudinary.com/chrissiemhrk/image/upload/v1612357224/fashion-hub/vladimir-yelizarov-p5SXRTjaPTc-unsplash_1_da0fq3.jpg"
              alt="Woman sitting on a picnic blanket in a garden"
            />
          </div>
          <div className="men-text">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              praesentium, quidem quo voluptatum ut ad nam a repudiandae
              incidunt vero assumenda libero aperiam optio voluptas non sunt
              facilis laborum quae.
            </p>
            <button>View Men's Collection</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
