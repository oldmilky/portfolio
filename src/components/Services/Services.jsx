import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Services.css";

function Services() {
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

  return (
    <motion.section className="services" initial="hidden" whileInView="visible">
      <div className="services__container">
        <motion.h1
          className="services__title"
          custom={1}
          variants={topToDownAnimation}
        >
          {t("services.my")}{" "}
          <span className="services__span">{t("services.services")}</span>
        </motion.h1>
        <div className="services__wrap">
          <div className="services__wrapper">
            <motion.h3
              className="services__subtitle"
              custom={1.5}
              variants={topToDownAnimation}
            >
              <span className="services__subtitle_span">
                {t("services.every")}{" "}
              </span>
              {t("services.everyday")}
            </motion.h3>
            <motion.p
              custom={2}
              variants={topToDownAnimation}
              className="services__text"
            >
              {t("services.text")}
            </motion.p>
          </div>
          <div className="services__wrap_skill">
            <motion.div
              className="services__skill skill_1"
              custom={2}
              variants={topToDownAnimation}
            >
              <div className="services__skill_container">
                <p className="services__skill_title">
                  {t("services.frontend")}{" "}
                  <span className="services__span_deleted">
                    {t("services.development")}
                  </span>
                </p>
                <button className="services__interest">55%</button>
              </div>
              <div className="services__skill_line" />
            </motion.div>
            <motion.div
              className="services__skill skill_2"
              custom={3}
              variants={topToDownAnimation}
            >
              <div className="services__skill_container">
                <p className="services__skill_title">
                  {t("services.backend")}{" "}
                  <span className="services__span_deleted">
                    {t("services.development")}
                  </span>
                </p>
                <button className="services__interest">25%</button>
              </div>
              <div className="services__skill_line" />
            </motion.div>
            <motion.div
              className="services__skill skill_3"
              custom={4}
              variants={topToDownAnimation}
            >
              <div className="services__skill_container">
                <p className="services__skill_title">
                  <span className="services__span_deleted">
                    {t("services.web")}
                  </span>{" "}
                  {t("services.design")}
                </p>
                <button className="services__interest">20%</button>
              </div>
              <div className="services__skill_line" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
