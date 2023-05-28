import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import project1 from "../../assets/images/project1.svg";
import project2 from "../../assets/images/project2.svg";
import "./Projects.css";

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

  const projects = [
    { id: 1, title: "BGHack", image: project1 },
    { id: 2, title: "Shineex", image: project2 },
    { id: 3, title: "BroFood", image: project1 },
    { id: 4, title: "Millex", image: project2 },
    { id: 5, title: "Arayas", image: project1 },
    { id: 6, title: "Simple Tracker", image: project2 },
  ];

  const projectsLearn = [
    { id: 1, title: "BGHack", image: project1 },
    { id: 2, title: "Shineex", image: project2 },
    { id: 3, title: "BroFood", image: project1 },
    { id: 4, title: "Millex", image: project2 },
    { id: 5, title: "Arayas", image: project1 },
    { id: 6, title: "Simple Tracker", image: project2 },
  ];

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
        <div className="projects__wrap">
          <motion.h2
            className="projects__subtitle"
            custom={2}
            variants={topToDownAnimation}
          >
            {t("projects.work")}
          </motion.h2>
          <div className="projects__wrapper">
            {projects.map((p, i) => (
              <motion.div
                custom={3 + i * 0.4}
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
          </div>
          <div className="projects__wrap">
            <motion.h2
              className="projects__subtitle"
              custom={2}
              variants={topToDownAnimation}
            >
              {t("projects.educational")}
            </motion.h2>
            <div className="projects__wrapper">
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
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
