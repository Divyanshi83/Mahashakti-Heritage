import "./Hero.css";
import dress from "../assets/main.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tagline">
          ❖ WHERE ROYAL TRADITIONS COME ALIVE
        </span>

        <h1>
          MAHASHAKTI
          <br />
          HERITAGE
        </h1>

        <p className="hero-description">
          Discover handcrafted Rajputi Poshaks that celebrate timeless
          elegance, royal heritage and exquisite craftsmanship.
          Every creation reflects luxury, culture and tradition.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Shop Collection
          </button>

          <button className="secondary-btn">
            Customize Poshak
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-card">

          <img
            src={dress}
            alt="Mahashakti Heritage"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;