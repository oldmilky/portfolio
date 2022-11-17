import React from "react";
import "./About.css";
import sites from "../../images/about__sites.svg";
import app from "../../images/about__app.svg";
import design from "../../images/about__design.svg";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">About me</h1>
      <div className="about__wrap">
        <p className="about__subtitle">
          I am engaged in frontend web development. Skills training experience
          is more than 1.5 years, and my freelance experience is more than 8
          months.
        </p>
        <p className="about__subtitle">
          Due to fairly frequent orders, quickly understand other people's code.
          In my free time I learn English and develop my own pet-projects, where
          I practice my knowledge and skills.
        </p>
      </div>
      <div className="about__container">
        <div className="about__wrapper">
          <img className="about__logo" src={sites} alt="Site development" />
          <h2 className="about__wrapper_title">Site development</h2>
        </div>
        <div className="about__wrapper">
          <img className="about__logo" src={app} alt="Application" />
          <h2 className="about__wrapper_title">Application Development</h2>
        </div>
        <div className="about__wrapper">
          <img className="about__logo" src={design} alt="Web Design" />
          <h2 className="about__wrapper_title">Web Design</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
