import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";
import arrow from "../../assets/images/arrow__bottom.svg";
import english from "../../assets/images/english.svg";
import globus from "../../assets/images/globus.svg";
import russian from "../../assets/images/russian.svg";
import "./Header.css";
import "./i18next";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [listActive, setListActive] = useState(false);

  const [selectedBtn, setSelectedBtn] = useState(
    localStorage.getItem("selectedBtn") || "btn1"
  );

  const handleClose = () => {
    setListActive(false);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (lang, btn) => {
    i18n.changeLanguage(lang);
    setSelectedBtn(btn);
    localStorage.setItem("selectedBtn", btn);
    handleClose();
  };

  const navigate = useNavigate();

  const handleAboutMeClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("aboutme", {
          smooth: true,
          offset: 0,
          duration: 500,
        });
      }, 100);
    }
    setMenuActive(false);
  };

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

  const dropInList = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };

  const dropInMenu = {
    hidden: {
      x: 40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: 0,
      opacity: 0,
    },
  };

  return (
    <motion.header className="header" initial="hidden" whileInView="visible">
      <div className="header__container">
        <motion.div custom={1} variants={topToDownAnimation}>
          <NavLink className="header__link" to="/">
            <motion.div
              className="header__logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ easeInOut: "linear" }}
            >
              <p className="header__logo_text">
                <span className="header__logo_span">R.</span> dev
              </p>
            </motion.div>
          </NavLink>
        </motion.div>
        <div className="header__wrap">
          <motion.div custom={2} variants={topToDownAnimation}>
            <NavLink className="header__link" to="/projects">
              <motion.p
                className="header__text"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                {t("header.projects")}
              </motion.p>
            </NavLink>
          </motion.div>
          <motion.div custom={2} variants={topToDownAnimation}>
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleAboutMeClick}
            >
              <motion.p
                className="header__text"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                {t("header.aboutme")}
              </motion.p>
            </Link>
          </motion.div>
          <motion.div custom={2} variants={topToDownAnimation}>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <motion.p
                className="header__text"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                {t("header.contacts")}
              </motion.p>
            </Link>
          </motion.div>
          <div className="header__list">
            <motion.div
              custom={2}
              variants={topToDownAnimation}
              whileTap={{ scale: 0.9 }}
            >
              <motion.button
                className={
                  listActive ? "header__button_active" : "header__button"
                }
                onClick={() => setListActive(!listActive)}
                whileTap={{ scale: 0.9 }}
              >
                <img className="header__globus" src={globus} alt="globus" />
                <img className="header__arrow" src={arrow} alt="arrow" />
              </motion.button>
            </motion.div>

            <AnimatePresence initial={false} onExitComplete={() => null}>
              {listActive && (
                <motion.div
                  className={
                    listActive
                      ? "header__list_wrap-opened"
                      : "header__list_wrap"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="header__list_wrapper"
                    variants={dropInList}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <button
                      className={
                        selectedBtn === "btn1"
                          ? "header__list_button-active"
                          : "header__list_button"
                      }
                      onClick={() => changeLanguage("en", "btn1")}
                    >
                      <img
                        className="header__list_flag"
                        src={english}
                        alt="english"
                      />{" "}
                      English
                    </button>
                    <button
                      className={
                        selectedBtn === "btn2"
                          ? "header__list_button-active"
                          : "header__list_button"
                      }
                      onClick={() => changeLanguage("ru", "btn2")}
                    >
                      <img
                        className="header__list_flag"
                        src={russian}
                        alt="русский"
                      />{" "}
                      Русский
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.div custom={3} variants={topToDownAnimation}>
            <motion.div
              className="header__lines"
              onClick={() => setMenuActive(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.div
                custom={2.3}
                variants={topToDownAnimation}
                className="header__line"
              />
              <motion.div
                custom={2.6}
                variants={topToDownAnimation}
                className="header__line"
              />
              <motion.div
                custom={2.9}
                variants={topToDownAnimation}
                className="header__line"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {menuActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={menuActive ? "header__menu_opened" : "header__menu"}
            onClick={() => setMenuActive(false)}
          >
            <motion.div
              className="header__menu_container"
              onClick={e => e.stopPropagation()}
              variants={dropInMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="header__menu_content">
                <NavLink className="header__link" to="/projects">
                  <motion.p
                    className="header__menu_text"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    PROJECTS
                  </motion.p>
                </NavLink>
                <Link
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <motion.p
                    className="header__menu_text"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={handleAboutMeClick}
                  >
                    ABOUT ME
                  </motion.p>
                </Link>

                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <motion.p
                    className="header__menu_text"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setMenuActive(false)}
                  >
                    CONTACTS
                  </motion.p>
                </Link>
              </div>
              <motion.p
                className="header__menu_author"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                © 2023 rodya dev.{" "}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
