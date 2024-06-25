import "./ProjectHome.css";
import { LASTPROJECTS } from "../data/data.js";
import { useState } from "react";
import Slider from "react-slick";

const ProjectsHome = () => {
  const [selectedProject, setSelectedProject] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (data) => {
    setOpenModal(true);
    setSelectedProject(data);
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingPop = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="project-home-section">
        <div className="project-header">
          <h1>
            <span>Latest </span>Projects
          </h1>

          <button>All Projects</button>
        </div>
        <div className="project-wrapper">
          <Slider {...settings}>
            {LASTPROJECTS.map((item, index) => (
              <div key={index} className="project-card ">
                <div onClick={() => handleClick(item)} className="spacex">
                  <img
                    src={item.coverImg}
                    alt={item.name}
                    className="project-image "
                  />

                  <div className="project-text ">
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {openModal && (
        <>
          <div className="pop-main">
            <div className="expand-img">
              <div onClick={() => setOpenModal(false)} className="close-modal">
                <p>Close</p>
              </div>

              <Slider {...settingPop}>
                {selectedProject.images.map((item, index) => (
                  <div key={index}>
                    <div className="project-pop">
                      <img src={item.photo} alt={item.photoname} />
                      <div className="photo-name">
                        <h3>{item.photoname}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* <img src={selectedProject.coverImg} alt="" /> */}
          </div>
        </>
      )}
    </>
  );
};

export default ProjectsHome;
