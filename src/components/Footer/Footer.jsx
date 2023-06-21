import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  const downToTopAnimation = {
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

  return (
    <motion.footer className="footer" initial="hidden" whileInView="visible">
      <div className="footer__container">
        <motion.h1
          className="footer__title"
          custom={1}
          variants={downToTopAnimation}
        >
          © 2023 Rodya. {t("footer.reserved")}
        </motion.h1>
        <a
          className="footer__link"
          href="mailto:oldmilky@yandex.kz"
          target="_blank"
          rel="noreferrer"
        >
          <motion.h1
            className="footer__title"
            custom={1.5}
            variants={downToTopAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            {t("footer.email")}: oldmilky@yandex.kz
          </motion.h1>
        </a>
      </div>
    </motion.footer>
  );
}

export default Footer;
