import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import discord from "../../assets/images/discord.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import telegram from "../../assets/images/telegram.svg";
import "./Contacts.css";

function Contacts() {
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

  const [clickText, setClickText] = useState(false);

  return (
    <motion.section
      className="contacts"
      initial="hidden"
      whileInView="visible"
      id="contacts"
    >
      <div className="contacts__container">
        <motion.h1
          className="contacts__title"
          custom={1}
          variants={topToDownAnimation}
        >
          <span className="contacts__span">{t("contacts.get")} </span>
          {t("contacts.touch")}
        </motion.h1>
        <div className="contacts__wrap">
          <div className="contacts__wrapper">
            <motion.h2
              className="contacts__subtitle"
              custom={1.5}
              variants={topToDownAnimation}
            >
              {t("contacts.connect")}
            </motion.h2>
            <div className="contacts__connect">
              <a
                className="contacts__link"
                href="https://t.me/rodion914"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className="contacts__connect_wrap"
                  custom={1.8}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  <div className="contacts__connect_wrapper">
                    <img
                      className="contacts__logo"
                      src={telegram}
                      alt="linked"
                    />
                  </div>
                  <p className="contacts__text">TELEGRAM</p>
                </motion.div>
              </a>
              <motion.div
                className="contacts__connect_wrap"
                custom={2.1}
                variants={topToDownAnimation}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
                onClick={() => setClickText(!clickText)}
              >
                <div className="contacts__connect_wrapper">
                  <img className="contacts__logo" src={discord} alt="linked" />
                </div>
                <p className="contacts__text">
                  {clickText ? "rod9#0520" : "discord"}
                </p>
              </motion.div>
              <a
                className="contacts__link"
                href="https://github.com/oldmilky"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className="contacts__connect_wrap"
                  custom={2.4}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  <div className="contacts__connect_wrapper">
                    <img className="contacts__logo" src={github} alt="linked" />
                  </div>
                  <p className="contacts__text">GITHUB</p>
                </motion.div>
              </a>
              <a
                className="contacts__link"
                href="https://linkedin.com/in/родион-стрелков-959953239"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className="contacts__connect_wrap"
                  custom={2.7}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  <div className="contacts__connect_wrapper">
                    <img
                      className="contacts__logo"
                      src={linkedin}
                      alt="linked"
                    />
                  </div>
                  <p className="contacts__text">LINKEDIN</p>
                </motion.div>
              </a>
            </div>
          </div>
          <div className="contacts__wrapper">
            <motion.h2
              className="contacts__subtitle"
              custom={2.9}
              variants={topToDownAnimation}
            >
              {t("contacts.send")}
            </motion.h2>
            <div className="contacts__send_wrap">
              <motion.div
                className="contacts__send_wrapper"
                custom={3.2}
                variants={topToDownAnimation}
              >
                <motion.input
                  whileTap={{ scale: 0.93 }}
                  transition={{ easeInOut: "linear" }}
                  className="contacts__input contacts__input_name"
                  placeholder={t("contacts.name")}
                />
                <motion.input
                  whileTap={{ scale: 0.93 }}
                  transition={{ easeInOut: "linear" }}
                  className="contacts__input contacts__input_email"
                  placeholder={t("contacts.email")}
                />
              </motion.div>
              <motion.input
                whileTap={{ scale: 0.95 }}
                transition={{ easeInOut: "linear" }}
                custom={3.5}
                variants={topToDownAnimation}
                className="contacts__input contacts__input_title"
                placeholder={t("contacts.title")}
              />
              <motion.div
                className="contacts__inputs"
                custom={3.8}
                variants={topToDownAnimation}
                whileTap={{ scale: 0.95 }}
                transition={{ easeInOut: "linear" }}
              >
                <input
                  className="contacts__input contacts__input_message"
                  placeholder={t("contacts.message")}
                />
              </motion.div>
              <motion.button
                className="contacts__button"
                custom={4.1}
                variants={downToTopAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              >
                {t("contacts.button")}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contacts;
