import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Ajay Binay Institute of Technology
        </h1>

        <h2>
          Approved by AICTE | Affiliated to BPUT | Cuttack, Odisha
        </h2>

        <p>
          Empowering students with quality technical education, innovation,
          research, and industry-ready skills since inception.
        </p>

        <div className="hero-buttons">
          <a href="/admission" className="btn primary">
            Admissions Open
          </a>
          <a href="/brochure.pdf" className="btn secondary">
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
