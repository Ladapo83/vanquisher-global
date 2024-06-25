import "./AboutHome.css";

const AboutHome = () => {
  return (
    <div className="about-home-section">
      <div className="about-header">
        <h1>
          <span>ABOUT</span> VANQUISHER
        </h1>
      </div>
      <div className="about-main">
        <div className="about-img">
          <div className="img-about">
            <img src="./images/sir-vic.jpg" alt="" />
            <div className="about-title">
              <h3> Victor C. Uduje</h3>
              <p>Chief Excutive Office</p>
              <p>Bsc. Arch</p>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
            We are an architectural, engineering and construction company,
            focused on achieving client's goals through detailed architectural
            design work, our scope of services ranges from feasibility studies
            and project conception to project execution and management. We offer
            a joined up design and architectural service, which enables the
            client to trust in our ability to deliver the end product which they
            require, to the budget that is required and within the time-frame
            agreed.
          </p>
          <br></br>
          <p>
            Our approach is unique, a disciplined process which is based on
            client input and expectations. We work closely with you to evaluate
            the best delivery method to fit your needs.{" "}
          </p>
          <br></br>
          <p>
            We are a team of professionals across the building industry
            dedicated to providing unparalleled professional services for
            clients from a wide range of sectors; we offer tailor made design,
            engineering and project management solutions needed to support
            modern society. We are passionate about relationships, connecting
            with our clients and their objectives as we are about design and
            creativity. We consider innovation, functionality, as well as cost
            as integral elements in our design solutions. Our approach is
            simple, we listen, respond and deliver what our clients need, want
            and envision.
          </p>
          <br></br>
          <button>Contunue Reading</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
