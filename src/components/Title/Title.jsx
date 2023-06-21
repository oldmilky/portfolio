import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import hi from "../../assets/images/hi.svg";
import "./Title.css";

function Title() {
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
    <motion.section className="title" initial="hidden" whileInView="visible">
      <div className="title__container">
        <div className="title__wrap">
          <motion.h1
            custom={1}
            variants={topToDownAnimation}
            className="title__title"
          >
            {t("title.hello")}
          </motion.h1>
          <motion.h1
            custom={1}
            variants={topToDownAnimation}
            className="title__title_span"
          >
            {t("title.me")}
          </motion.h1>
          <motion.h2
            custom={2}
            variants={topToDownAnimation}
            className="title__subtitle"
          >
            {t("title.frontend")}
          </motion.h2>
          <div className="title__buttons">
            <motion.div custom={2.5} variants={topToDownAnimation}>
              <NavLink className="title__link" to="/projects">
                <motion.button
                  className="title__projects"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  {t("header.projects")}
                </motion.button>
              </NavLink>
            </motion.div>
            <motion.div custom={3} variants={topToDownAnimation}>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <motion.button
                  className="title__contacts"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  {t("header.contacts")}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.img
          custom={2}
          variants={downToTopAnimation}
          className="title__image"
          src={hi}
          alt="HI"
        />
      </div>
    </motion.section>
  );
}

export default Title;
