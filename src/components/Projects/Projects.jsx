import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProject } from "../../redux/slices/projectSlice";
import "./Projects.css";
import ProjectsEmpty from "./ProjectsEmpty";
import Skeletons from "./Skeletons";

function Projects() {
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

  const items = useSelector(state => state.project.items);
  const status = useSelector(state => state.project.status);

  const dispatch = useDispatch();

  const getProject = async () => {
    dispatch(fetchProject());

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const workSkeletons = [...new Array(7)].map((_, index) => (
    <Skeletons key={index} />
  ));
  const educationalSkeletons = [...new Array(3)].map((_, index) => (
    <Skeletons key={index} />
  ));

  const workProjects = items.filter(project => project.workProject);
  const educationalProjects = items.filter(project => project.learnProject);

  const renderProjects = projects => {
    return projects.map((obj, i) => (
      <motion.div
        key={obj.id}
        custom={i}
        variants={topToDownAnimation}
        initial={i < 0 ? "visible" : "hidden"}
        animate="visible"
        transition={{
          easeInOut: "linear",
          delay: i >= 3 ? (i - 2) * 0.3 : 0,
          duration: 0.3,
        }}
      >
        <motion.div
          className="projects__project_tap"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ easeInOut: "linear" }}
        >
          <div className="projects__project">
            <Link className="projects__link" to={`/projects/${obj.id}`}>
              <div
                className="projects__project_image"
                style={{
                  backgroundImage: `url(${obj.image1})`,
                }}
              >
                <div className="projects__project_wrap">
                  <p className="projects__project_title">{obj.name}</p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    ));
  };

  const workProjectsJSX = renderProjects(workProjects);
  const educationalProjectsJSX = renderProjects(educationalProjects);

  return (
    <motion.section className="projects" initial="hidden" whileInView="visible">
      <div className="projects__container">
        <motion.h1
          className="projects__title"
          custom={1}
          variants={topToDownAnimation}
        >
          {t("services.my")}{" "}
          <span className="projects__span">{t("header.projects")}</span>
        </motion.h1>
        <motion.h2 className="projects__title_text" custom={1} variants={topToDownAnimation}>
          {t("projects.text")}{" "}
          <a
            className="projects__title_link"
            href="https://github.com/oldmilky"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          {t("projects.text2")}
        </motion.h2>
        {status === "error" ? (
          <ProjectsEmpty />
        ) : (
          <>
            <div className="projects__wrap">
              <motion.h2
                className="projects__subtitle"
                custom={2}
                variants={topToDownAnimation}
              >
                {t("projects.work")}
              </motion.h2>
              <motion.div custom={3} variants={topToDownAnimation}>
                <div className="projects__wrapper">
                  {status === "loading" ? workSkeletons : workProjectsJSX}
                </div>
              </motion.div>
            </div>
            <div className="projects__wrap">
              <motion.h2
                className="projects__subtitle"
                custom={2}
                variants={topToDownAnimation}
              >
                {t("projects.educational")}
              </motion.h2>
              <motion.div custom={4} variants={topToDownAnimation}>
                <div className="projects__wrapper">
                  {status === "loading"
                    ? educationalSkeletons
                    : educationalProjectsJSX}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
}

export default Projects;
