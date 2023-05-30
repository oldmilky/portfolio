import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Projects.css";

function ProjectsEmpty() {
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

  const { t } = useTranslation();

  return (
    <motion.section className="empty" initial="hidden" whileInView="visible">
      <motion.h1
        className="empty__title"
        custom={1}
        variants={topToDownAnimation}
      >
        {t("empty.title")}
      </motion.h1>
      <motion.h1
        className="empty__subtitle"
        custom={1.5}
        variants={topToDownAnimation}
      >
        {t("empty.subtitle")}
      </motion.h1>
      <motion.h1
        className="empty__subtitle"
        custom={2}
        variants={topToDownAnimation}
      >
        {t("empty.subtitle2")}
      </motion.h1>
    </motion.section>
  );
}

export default ProjectsEmpty;
