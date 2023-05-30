import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Nav from "../Nav/NavProject";
import "./Project.css";

function Project() {
  const [project, setProject] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data } = await axios.get(
          "https://63fb029b7a045e192b6151ab.mockapi.io/projects/" + id
        );
        setProject(data);
      } catch (error) {
        console.log("Ошибка", error);
      }
    }
    fetchProject();
    window.scrollTo(0, 0);
  }, [id]);

  const { t, i18n } = useTranslation();

  const [projectPopup, setProjectPopup] = useState(false);
  const [projectPopup2, setProjectPopup2] = useState(false);
  const [projectPopup3, setProjectPopup3] = useState(false);

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

  if (!project) {
    return <Loader />;
  }

  return (
    <>
      <Nav title={project.name} />
      <motion.section
        className="project"
        initial="hidden"
        whileInView="visible"
      >
        <div className="project__container">
          <motion.h1
            className="project__title"
            custom={1}
            variants={topToDownAnimation}
          >
            {project.name}
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
                  {i18n.language === "en" ? project.descEN : project.descRU}
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
                  {i18n.language === "en" ? project.desc2EN : project.desc2RU}
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
                  {project.tech.map(t => (
                    <button key={t} className="project__button_tech">
                      {t}
                    </button>
                  ))}
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
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  custom={3.4}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  {project.linkName}
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
                    src={project.image1}
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
                      src={project.image2}
                      alt="project3"
                      onClick={() => setProjectPopup2(true)}
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
                      src={project.image3}
                      alt="project3"
                      onClick={() => setProjectPopup3(true)}
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
                    src={project.image1}
                    alt={"ssss"}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {projectPopup2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={
                  projectPopup2 ? "project-popup__opened" : "project-popup"
                }
                onClick={() => setProjectPopup2(false)}
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
                    src={project.image2}
                    alt={"ssss"}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {projectPopup3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={
                  projectPopup3 ? "project-popup__opened" : "project-popup"
                }
                onClick={() => setProjectPopup3(false)}
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
                    src={project.image3}
                    alt={"ssss"}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </>
  );
}

export default Project;
