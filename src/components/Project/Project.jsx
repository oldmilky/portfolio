import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  default as imagess,
  default as project3,
} from "../../assets/images/project3.png";
import "./Project.css";

function Project() {
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

  const [projectPopup, setProjectPopup] = useState(false);

  const dropInPopup = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };

  return (
    <motion.section className="project" initial="hidden" whileInView="visible">
      <div className="project__container">
        <motion.h1
          className="project__title"
          custom={1}
          variants={topToDownAnimation}
        >
          PROJECT
        </motion.h1>
        <div className="project__wrap">
          <div className="project__wrap_text">
            <div className="project__wrapper">
              <motion.h2
                className="project__subtitle"
                custom={1.3}
                variants={topToDownAnimation}
              >
                {t("project.desc")}
              </motion.h2>
              <motion.p
                className="project__text"
                custom={1.6}
                variants={topToDownAnimation}
              >
                Website store for the sale of in-game software.
              </motion.p>
            </div>

            <div className="project__wrapper">
              <motion.h2
                className="project__subtitle"
                custom={1.9}
                variants={topToDownAnimation}
              >
                {t("project.done")}
              </motion.h2>
              <motion.p
                className="project__text"
                custom={2.2}
                variants={topToDownAnimation}
              >
                The site was developed from scratch from design to go into
                production. Layout design in Figma, layout layout, slider
                layout, getting data from the backend and linking between
                products, rendering popups, language change, animations of page
                appearance and change.
              </motion.p>
            </div>

            <div className="project__wrapper">
              {" "}
              <motion.h2
                className="project__subtitle"
                custom={2.5}
                variants={topToDownAnimation}
              >
                {t("tech.technologies")}
              </motion.h2>
              <motion.div
                className="project__buttons"
                custom={2.8}
                variants={topToDownAnimation}
              >
                <button className="project__button_tech">HTML</button>
                <button className="project__button_tech">CSS</button>
                <button className="project__button_tech">JavaScript</button>
                <button className="project__button_tech">React</button>
                <button className="project__button_tech">Redux Toolkit</button>
                <button className="project__button_tech">React-Redux</button>
                <button className="project__button_tech">Framer motion</button>
                <button className="project__button_tech">i18n</button>
                <button className="project__button_tech">Figma</button>
              </motion.div>
            </div>

            <div className="project__wrapper">
              <motion.h2
                className="project__subtitle"
                custom={3.1}
                variants={topToDownAnimation}
              >
                {t("project.view")}
              </motion.h2>
              <motion.a
                className="project__text_link"
                href="https://asdf.com/"
                target="_blank"
                rel="noreferrer"
                custom={3.4}
                variants={topToDownAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              >
                BGHACK.XYZ
              </motion.a>
            </div>
          </div>
          <div className="project__images">
            <motion.h2
              className="project__subtitle"
              custom={2}
              variants={topToDownAnimation}
            >
              {t("project.images")}
            </motion.h2>
            <div className="project__image_wrap">
              <motion.div
                className="project__image_size"
                custom={2.3}
                variants={topToDownAnimation}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ easeInOut: "linear" }}
              >
                <img
                  className="project__image"
                  src={project3}
                  alt="project3"
                  onClick={() => setProjectPopup(true)}
                />
              </motion.div>
              <div className="project__image_wrapper">
                <motion.div
                  className="project__image_size-mini"
                  custom={2.6}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ easeInOut: "linear" }}
                >
                  <img
                    className="project__image_mini"
                    src={project3}
                    alt="project3"
                    onClick={() => setProjectPopup(true)}
                  />
                </motion.div>
                <motion.div
                  className="project__image_size-mini"
                  custom={2.9}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ easeInOut: "linear" }}
                >
                  <img
                    className="project__image_mini"
                    src={project3}
                    alt="project3"
                    onClick={() => setProjectPopup(true)}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence initial={false} onExitComplete={() => null}>
          {projectPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={
                projectPopup ? "project-popup__opened" : "project-popup"
              }
              onClick={() => setProjectPopup(false)}
            >
              <motion.div
                onClick={e => e.stopPropagation()}
                variants={dropInPopup}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img
                  className="project-popup__image"
                  src={imagess}
                  alt={"ssss"}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Project;
