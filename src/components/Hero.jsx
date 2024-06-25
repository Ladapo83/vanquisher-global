import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-section">
      <img className="hero-image" src="./images/arch5.jpg" alt="" />
      <div className="hero-banner">
        <div className="hero-logo-wrapper">
          <img className="hero-logo" src="./images/udulogo.png" alt="" />
          <div className="hero-logo-name" hidden>
            <h2>VANQUISHER</h2>
            <p>GLOBAL PROPERTIES</p>
          </div>
        </div>
        <div className="hero-text">
          <h2>A.E.C/B.M.I</h2>
          <p>Architecture - Engineering - Construction</p>
          <p>Building Modelling Information</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
