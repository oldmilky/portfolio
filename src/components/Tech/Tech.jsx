import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import css from "../../assets/images/css.svg";
import html from "../../assets/images/html.svg";
import js from "../../assets/images/js.svg";
import nodejs from "../../assets/images/nodejs.svg";
import react from "../../assets/images/react.svg";
import redux from "../../assets/images/redux.svg";
import "./Tech.css";

function Tech() {

  const { t } = useTranslation();

  const topToDownAnimation = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const downToTopAnimation = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section className="tech" initial="hidden" whileInView="visible">
      <div className="tech__container">
        <motion.h1 className="tech__title" custom={1} variants={topToDownAnimation}>
          <span className="tech__span">{t("tech.key")} </span>{t("tech.technologies")}
        </motion.h1>
        <div className="tech__wrap">
          <motion.div className="tech__wrapper" custom={1.3} variants={topToDownAnimation}>
            <img className="tech__logo" src={html} alt="html" />
            <h2 className="tech__subtitle">HTML</h2>
          </motion.div>
          <motion.div className="tech__wrapper" custom={1.6} variants={topToDownAnimation}>
            <img className="tech__logo" src={css} alt="html" />
            <h2 className="tech__subtitle">CSS</h2>
          </motion.div>
          <motion.div className="tech__wrapper" custom={1.9} variants={topToDownAnimation}>
            <img className="tech__logo" src={js} alt="html" />
            <h2 className="tech__subtitle">JAVASCRIPT</h2>
          </motion.div>
          <motion.div className="tech__wrapper" custom={2.2} variants={topToDownAnimation}>
            <img className="tech__logo" src={react} alt="html" />
            <h2 className="tech__subtitle">REACT</h2>
          </motion.div>
          <motion.div className="tech__wrapper" custom={2.5} variants={topToDownAnimation}>
            <img className="tech__logo" src={redux} alt="html" />
            <h2 className="tech__subtitle">REDUX</h2>
          </motion.div>
          <motion.div className="tech__wrapper" custom={2.8} variants={topToDownAnimation}>
            <img className="tech__logo" src={nodejs} alt="html" />
            <h2 className="tech__subtitle">NODE.JS</h2>
          </motion.div>
        </div>
        <motion.h1 className="tech__title_mini" custom={2.8} variants={topToDownAnimation}>{t("tech.skills")}</motion.h1>
        <div className="tech__wrap">
          <motion.div className="tech__wrapper_mini" custom={3.1} variants={downToTopAnimation}>
            <h2 className="tech__subtitle_mini">TYPESCRIPT</h2>
          </motion.div>
          <motion.div className="tech__wrapper_mini" custom={3.4} variants={downToTopAnimation}>
            <h2 className="tech__subtitle_mini">MOBX</h2>
          </motion.div>
          <motion.div className="tech__wrapper_mini" custom={3.7} variants={downToTopAnimation}>
            <h2 className="tech__subtitle_mini">NEXT.JS</h2>
          </motion.div>
          <motion.div className="tech__wrapper_mini" custom={4} variants={downToTopAnimation}>
            <h2 className="tech__subtitle_mini">
              TAILWIND
              <br />
              SCSS
            </h2>
          </motion.div>
          <motion.div className="tech__wrapper_mini" custom={4.3} variants={downToTopAnimation}>
            <h2 className="tech__subtitle_mini">REACT QUERY</h2>
          </motion.div>
          <motion.div className="tech__wrapper_mini" custom={4.6} variants={downToTopAnimation}>
            <h2 className="tech__subtitle_mini">
              POSTGRESQL <br /> PRISMA
            </h2>
          </motion.div>
          <motion.div className="tech__wrapper_mini" custom={4.9} variants={downToTopAnimation}>
            <h2 className="tech__subtitle_mini">FIGMA</h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Tech;
