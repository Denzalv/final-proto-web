import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import ImageOne from "../../assets/images/Carousel/img1.png"
import ImageTwo from "../../assets/images/Carousel/img2.png"
import ImageThree from "../../assets/images/Carousel/img3.jpeg"
import ImageFour from "../../assets/images/Carousel/img4.png"
import ImageFive from "../../assets/images/Carousel/img5.jpeg"
import ImageSix from "../../assets/images/Carousel/img6.jpeg"
import ImageSeven from "../../assets/images/Carousel/img7.jpeg"
import ImageEight from "../../assets/images/Carousel/img8.jpeg"

const Carousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
        <section className="carousel-text">
          <h1>
            Telah <span className="orange">Dipercaya</span> lebih dari 100++
            Perusahaan
          </h1>
        </section>
        <section className="carousel-img">
          <Slider {...settings}>
            <div>
              <img
                src={ImageOne}
                alt="a"
              />
            </div>
            <div>
              <img
                src={ImageTwo}
                alt="b"
              />
            </div>
            <div>
              <img
                src={ImageThree}
                alt="c"
              />
            </div>
            <div>
              <img
                src={ImageFour}
                alt="d"
              />
            </div>
            <div>
              <img
                src={ImageFive}
                alt="e"
              />
            </div>
            <div>
              <img
                src={ImageSix}
                alt="f"
              />
            </div>
            <div>
              <img
                src={ImageSeven}
                alt="g"
              />
            </div>
            <div>
              <img
                src={ImageEight}
                alt="h"
              />
            </div>
          </Slider>
        </section>
      </div>
    </>
  );
};
export default Carousel;
