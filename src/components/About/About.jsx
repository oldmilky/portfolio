import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import about from "../../assets/images/about.svg";
import "./About.css";

function About() {
  const { t } = useTranslation();

  const topToDownAnimation = {
    hidden: {
      y: -50,
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
      y: 50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <Element name="aboutme">
    <motion.section
      className="about"
      initial="hidden"
      whileInView="visible"
      id="aboutme"
    >
      <div className="about__container">
        <motion.h1
          className="about__title"
          custom={1}
          variants={topToDownAnimation}
        >
          <span className="about__span">{t("aboutme.about")} </span>
          {t("aboutme.me")}
        </motion.h1>
        <div className="about__wrap">
          <motion.img
            className="about__image"
            src={about}
            alt="about"
            custom={2}
            variants={topToDownAnimation}
          />
          <div className="about__wrapper">
            <div className="about__texts">
              <motion.p
                className="about__text"
                custom={2}
                variants={topToDownAnimation}
              >
                {t("aboutme.text1")} <span className="about__span">2</span>{" "}
                {t("aboutme.text2")} <span className="about__span">25</span>{" "}
                {t("aboutme.text3")}
              </motion.p>
              <motion.p
                className="about__text"
                custom={3}
                variants={topToDownAnimation}
              >
                {t("aboutme.text4")}{" "}
                <span className="about__span">{t("aboutme.latest")}</span>{" "}
                {t("aboutme.text5")}{" "}
              </motion.p>
              <motion.p
                className="about__text"
                custom={4}
                variants={topToDownAnimation}
              >
                {t("aboutme.text6")}{" "}
                <span className="about__span">{t("aboutme.technologies")}</span>{" "}
                {t("aboutme.text7")}
              </motion.p>
            </div>
            <div className="about__buttons">
              <motion.button
                className="about__cv"
                custom={4}
                variants={downToTopAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              >
                {t("aboutme.download")} CV
              </motion.button>
              <motion.div custom={4} variants={downToTopAnimation}>
                <Link className="about__link" to="/projects">
                  <motion.button
                    className="about__projects"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ easeInOut: "linear" }}
                  >
                    {t("header.projects")}
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
    </Element>
  );
}

export default About;
