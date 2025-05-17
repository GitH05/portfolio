import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./Data/hero.js";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Hi there, and welcome!",
        "I'm Santosh Kumar Dhawal,",
        "a passionate Computer Science graduate with a love for building clean, functional, and impactful web applications.",
        "Whether you're here to explore my projects, check out my skills, or just get to know me",
        "I'm glad you're visiting!",
        "I'm actively looking for exciting opportunities",
        "where I can contribute, learn, and grow as a developer.",
        "Feel free to browse around and don't hesitate to reach out!"
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
