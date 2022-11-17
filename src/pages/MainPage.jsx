import React from "react";
import "./MainPage.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

const MainPage = () => (
  <ReactFullpage
    navigation
    sectionsColor={["#171717"]}
    render={({ state, fullpageApi }) => {
      return (
        <>
          <div className="section">
            <div className="page__background">
              <Header />
              <Title />
            </div>
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Skills />
            <div className="section__div" />
          </div>
        </>
      );
    }}
  />
);

export default MainPage;
