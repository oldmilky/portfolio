import React from "react";
import "./Title.css";
import avatar from "../../images/title__avatar.svg";

function Title() {
  return (
    <main className="title">
      <div className="title__container">
        <div className="title__wrapper">
          <p className="title__title">Hi, I am <br /> Rodion Strelkov</p>
          <p className="title__subtitle">Frontend Developer</p>
          <div className="title__wrap">
            <button className="title__button">My Projects</button>
            <button className="title__button">Contacts</button>
          </div>
        </div>
        <img className="title__image" src={avatar} alt="avatar" />
      </div>
    </main>
  );
}

export default Title;
