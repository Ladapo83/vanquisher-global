import "./ServiceHome.css";

const ServiceHome = () => {
  return (
    <div className="service-home-section">
      <div className="service-header">
        <h1>
          <span>OUR</span> SERVICES
        </h1>
        <button>All Services</button>
      </div>
      <div className="service-main">
        <div className="service-card">
          <div className="icon">
            <h2>01</h2>

            <h3>Design</h3>
            <p>
              Creating the perfect plan is an exciting process for us. We have
              an experienced staff ready to make sure you get the design plan of
              your dreams. We offer complete custom design services that include
              plan development, site planning and consultation. Designing with
              an imaginative blend of styles and modern convenience - that's
              what we're known for. Creating the perfect plan is an exciting
              process for us. We have an experienced staff ready to make sure
              you get the design plan of your dreams.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="icon">
            <h2>02</h2>

            <h3>3D MODELLING</h3>
            <p>
              Using Autodesk Revit, we produce intelligent building information
              models (BIM Models). These models have parametric data and are
              useful for ongoing design changes. The completed BIM model offers
              users a range of data options including 2D CAD drawings, a
              completed 3D model for walkthrough or visualisation, information
              for quantity surveyors such as schedules of information and
              material take-offs.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="icon">
            <h2>03</h2>

            <h3>Build</h3>
            <p>
              Construction Excellence, which is a significant priority with us,
              adds additional levels of project quality. However, our firm
              defines construction Excellence not only in aesthetic terms, but
              considers projects successful when they solve clients' functional
              problems, create environments that are suitable to clients'
              cultures, are kept within budget and are delivered on schedule.
              Our building approach is unique to each project and reflects
              client needs. We are driven by the challenge and desire of
              accomplishing client goals for each project.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="icon">
            <h2>04</h2>

            <h3>Decor</h3>
            <p>
              Our interior design services begin with assessing our clients'
              goals, visions and expected return on investment. With the goal of
              creating the desired atmosphere, an interactive approach is used
              to ensure that from project initiation to occupancy, all goals are
              aesthetically and functionally assessed, financially evaluated and
              incorporated. All aspects of the project - from aesthetics to
              technology, accessibility and environmental concerns - are
              considered during each phase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;
