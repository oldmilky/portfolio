import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Notfound.css";

function Notfound() {
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
    <motion.section className="notfound" initial="hidden" whileInView="visible">
      <motion.h1
        className="notfound__smile"
        custom={1}
        variants={topToDownAnimation}
      >
        (^_^)
      </motion.h1>
      <motion.h2
        className="notfound__code"
        custom={1.5}
        variants={topToDownAnimation}
      >
        404
      </motion.h2>
      <motion.p
        className="notfound__text"
        custom={2}
        variants={topToDownAnimation}
      >
        {t("notfound.text")}
      </motion.p>
      <NavLink className="notfound__link" to="/">
        <motion.button
          className="notfound__button"
          custom={2.5}
          variants={topToDownAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ easeInOut: "linear" }}
        >
          {t("notfound.home")}
        </motion.button>
      </NavLink>
    </motion.section>
  );
}

export default Notfound;
