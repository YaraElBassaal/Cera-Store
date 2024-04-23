export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-pic">
        <img src="https://via.placeholder.com/200x200" alt="about-pic" />
      </div>
      <div className="about-info">
        <span className="about-info-data">About Us</span>
        <h2 className="about-info-title">About Us</h2>
        <p className="about-info-text">
          At our online store, we believe that footwear and accessories are not
          just items to wear; they are expressions of style, personality, and
          functionality. We're passionate about providing you with a curated
          selection of shoes and bags that combine quality, comfort, and
          trendsetting designs.
        </p>
        <div className="about-info-targets">
          <div className="about-info-target-one">
            <div className="about-icon">
              <img src="./images/vission-icon.png" alt="" />
            </div>
            <h3 className="target-one-title">OUR VISION</h3>
            <p className="target-one-text">
              At Cera, we envision a world where style meets substance, where
              every step taken and every accessory carried reflects not just
              fashion, but also individuality, confidence, and purpose.
            </p>
          </div>
          <div className="about-info-target-two">
            <div className="about-icon">
              <img src="./images/mission-icon.png" alt="mission-icon" />
            </div>
            <h3 className="target-two-title">OUR MISSION</h3>
            <p className="target-two-text">
              At Cera, our mission is to empower individuals to step into their
              true selves with confidence and style. We are dedicated to
              providing a diverse range of high-quality footwear and accessories
              that not only elevate outfits but also elevate spirits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
