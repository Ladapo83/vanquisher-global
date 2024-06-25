//import ReactPlayer from "react-player";
import "./ProjectsL.css";
import { LASTPROJECTS } from "../data/data.js";
import { useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";

const ProjectsL = () => {
  const [selectedVid, setSelectedVid] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const sliderRef = useRef();

  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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

  const handleClick = (data) => {
    setOpenModal(true);
    setSelectedVid(data);
    setIsLoading(false);
  };
  return (
    <>
      <div className="film-section">
        <div className="slider">
          <div className="arrows">
            <div className="arrow-left-1" onClick={slideLeft}>
              <span>Prev</span>
            </div>
            <div className="arrow-right-1" onClick={slideRight}>
              <span>Next</span>
            </div>
            <div className="">Films</div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {LASTPROJECTS.map((item, index) => (
              <div key={index} className="film-card">
                <div onClick={() => handleClick(item)} className="image-cover">
                  <div className="film-img">
                    <img src={item.coverImg} alt={item.title} />
                  </div>
                  <p>Click to Play</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {openModal && (
        <>
          <div className="pop-vid">
            <div onClick={() => setOpenModal(false)} className="close-modal">
              Close
            </div>
            <div className="expand-vid">
              {/* {isloading ? (
                <p>Loading video</p>
              ) : (
                <ReactPlayer
                  playing={true}
                  controls={true}
                  width={"1300px"}
                  height={"600px"}
                  url={selectedVid.url}
                /> */}
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectsL;
