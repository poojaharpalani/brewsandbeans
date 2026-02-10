import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <h2 className="hero-title">Fresh Coffee. Cozy Vibes.</h2>
        <p className="hero-tagline">
          Your daily dose of handcrafted coffee and comfort.
        </p>

        <div className="hero-actions">
          <a href="tel:+911234567890" className="btn btn-call">
            Call Now
          </a>

          <a
            href="https://wa.me/917792985179"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
