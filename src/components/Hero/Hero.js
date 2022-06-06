import React from "react";
import "./hero.css";
import HeroLogo from "../../assets/images/Hero/heroLogo.png"
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div id="content">
        <article id="hero">
          <section className="hero-text">
            <h1>Cek & Pahami Potensi Masa Depanmu</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              voluptatibus quisquam obcaecati fugit tempore reprehenderit
              aliquid! Nulla nihil magni corrupti, molestiae deleniti enim
              officia nisi iusto, quod, repellendus tempora ratione.
            </p>
             <Link
                as={Link}
                to="/signin"
                className="butt"
              >
                Let's Try
              </Link>
          </section>
          <section className="hero-img">
            <img src={HeroLogo} alt="upload" />
          </section>
        </article>
      </div>
    </>
  );
};

export default Hero;
