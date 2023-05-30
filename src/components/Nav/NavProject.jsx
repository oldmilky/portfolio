import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import "./Nav.css";

function Nav() {

  const { t } = useTranslation();

  const leftToRightAnimation = {
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

  return (
    <motion.section className="nav" initial="hidden" whileInView="visible">
      <div className="nav__container">
        <motion.div custom={1} variants={leftToRightAnimation}>
          <Link className="nav__link" to="/">
            <motion.p
              className="nav__text"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {t("nav.home")}
            </motion.p>
          </Link>
        </motion.div>
        <motion.img
          custom={1}
          variants={leftToRightAnimation}
          className="nav__arrow"
          src={arrow}
          alt="arrow"
        />
        <motion.div custom={2} variants={leftToRightAnimation}>
          <Link className="nav__link" to="/projects">
            <motion.p
              className="nav__text"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {t("header.projects")}
            </motion.p>
          </Link>
        </motion.div>
        <motion.img
          custom={2}
          variants={leftToRightAnimation}
          className="nav__arrow"
          src={arrow}
          alt="arrow"
        />
        <motion.div custom={3} variants={leftToRightAnimation}>
          <Link className="nav__link" to="/projects">
            <motion.p
              className="nav__text nav__active"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              PROJECT
            </motion.p>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Nav;
