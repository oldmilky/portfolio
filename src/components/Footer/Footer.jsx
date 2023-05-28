import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  const downToTopAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.footer className="footer" initial="hidden" whileInView="visible">
      <div className="footer__container">
        <motion.h1
          className="footer__title"
          custom={1}
          variants={downToTopAnimation}
        >
          © 2023 oldmilky. {t("footer.reserved")}
        </motion.h1>
        <motion.h1
          className="footer__title"
          custom={1.5}
          variants={downToTopAnimation}
        >
          {t("footer.email")}: oldmilky@yandex.kz
        </motion.h1>
      </div>
    </motion.footer>
  );
}

export default Footer;
