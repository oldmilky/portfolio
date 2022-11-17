import React from "react";
import "./Skills.css";
import html from "../../images/skills__html.svg";
import css from "../../images/skills__css.svg";
import js from "../../images/skills__js.svg";
import react from "../../images/skills__react.svg";
import redux from "../../images/skills__redux.svg";

function Skills() {
  return (
    <div className="skills">
      <h1 className="skills__title">Main Skills</h1>
      <div className="skills__container">
        <div className="skills__wrapper">
          <img className="skills__logo" src={html} alt="HTML" />
          <p className="skills__text">HTML</p>
        </div>
        <div className="skills__wrapper">
          <img className="skills__logo" src={css} alt="HTML" />
          <p className="skills__text">CSS</p>
        </div>
        <div className="skills__wrapper">
          <img className="skills__logo" src={js} alt="HTML" />
          <p className="skills__text">JavaScript</p>
        </div>
        <div className="skills__wrapper">
          <img className="skills__logo" src={react} alt="HTML" />
          <p className="skills__text">React</p>
        </div>
        <div className="skills__wrapper">
          <img className="skills__logo" src={redux} alt="HTML" />
          <p className="skills__text">Redux</p>
        </div>
      </div>
      <h2 className="skills__subtitle">Additional skills</h2>
      <div className="skills__container">
        <p className="skills__text_mini">GIT</p>
        <p className="skills__text_mini">Figma</p>
        <p className="skills__text_mini">MobX</p>
        <p className="skills__text_mini">Final-Form</p>
        <p className="skills__text_mini">Redux-Toolkits</p>
      </div>
      <div className="skills__container">
        <p className="skills__text_mini">Axios</p>
        <p className="skills__text_mini">i18n</p>
        <p className="skills__text_mini">React-Hook-Form</p>
        <p className="skills__text_mini">BEM</p>
        <p className="skills__text_mini">Material UI</p>
        <p className="skills__text_mini">Tailwind</p>
      </div>
    </div>
  );
}

export default Skills;
