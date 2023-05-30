import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import project2 from "../../assets/images/project2.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const skeletons = [...new Array(1)].map((_, index) => (
    <Skeletons key={index} />
  ));

  const projects = items.map((obj, i) => (
    <motion.div
      key={obj.id}
      custom={i}
      variants={topToDownAnimation}
      initial={i < 0 ? "visible" : "hidden"}
      animate="visible"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        easeInOut: "linear",
        delay: i >= 3 ? (i - 2) * 0.5 : 0,
        duration: 0.5,
      }}
    >
      <div className="projects__project">
        <Link className="projects__link" to={`/projects/${obj.id}`}>
          <div
            className="projects__project_image"
            style={{
              backgroundImage: `url(${obj.image1})`,
            }}
          />
          <p className="projects__project_title">{obj.name}</p>
        </Link>
      </div>
    </motion.div>
  ));

  return (
    <motion.section className="projects" initial="hidden" whileInView="visible">
      <div className="projects__container">
        <motion.h1
          className="projects__title"
          // custom={1}
          variants={topToDownAnimation}
        >
          {t("services.my")}{" "}
          <span className="projects__span">{t("header.projects")}</span>
        </motion.h1>
        {status === "error" ? (
          <ProjectsEmpty />
        ) : (
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
                {status === "loading" ? skeletons : projects}
              </div>
            </motion.div>
            <div className="projects__wrap">
              <motion.h2
                className="projects__subtitle"
                custom={2}
                variants={topToDownAnimation}
              >
                {t("projects.educational")}
              </motion.h2>
              {/* <div className="projects__wrapper">
              {projectsLearn.map((p, i) => (
                <motion.div
                  custom={4 + i * 0.5}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ easeInOut: "linear" }}
                  key={p.id}
                >
                  <div className="projects__project">
                    <Link className="projects__link" to="/project">
                      <div
                        className="projects__project_image"
                        style={{
                          backgroundImage: `url(${p.image})`,
                        }}
                      />
                      <p className="projects__project_title">{p.title}</p>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div> */}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default Projects;
