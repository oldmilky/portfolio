import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import checkbox from "../../assets/images/checkbox.svg";
import closeButton from "../../assets/images/close.svg";
import discord from "../../assets/images/discord.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import telegram from "../../assets/images/telegram.svg";
import wrong from "../../assets/images/wrong.svg";
import "./Contacts.css";

function Contacts() {
  const { t } = useTranslation();

  const [clickText, setClickText] = useState(false);

  const form = useRef();

  const [modalSuccessful, setModalSuccessful] = useState(false);

  useEffect(() => {
    if (modalSuccessful) {
      const timeoutId = setTimeout(() => {
        setModalSuccessful(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [modalSuccessful]);

  const [modalWrong, setModalWrong] = useState(false);

  useEffect(() => {
    if (modalWrong) {
      const timeoutId = setTimeout(() => {
        setModalWrong(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [modalWrong]);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lrzx6nr",
        "template_gq3mo58",
        form.current,
        "LwJ0o4BtnQVsZvPOM"
      )
      .then(
        result => {
          console.log(result.text);
          setModalSuccessful(true);
          form.current.reset();
        },
        error => {
          setModalSuccessful(true);
          console.log(error.text);
        }
      );
  };

  const topToDownAnimation = {
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

  const downToTopAnimation = {
    hidden: {
      y: 40,
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
            <form
              className="contacts__send_wrap"
              ref={form}
              onSubmit={sendEmail}
            >
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
                  type="text"
                  name="user_name"
                />
                <motion.input
                  whileTap={{ scale: 0.93 }}
                  transition={{ easeInOut: "linear" }}
                  className="contacts__input contacts__input_email"
                  placeholder={t("contacts.email")}
                  type="email"
                  name="user_email"
                />
              </motion.div>
              <motion.input
                whileTap={{ scale: 0.95 }}
                transition={{ easeInOut: "linear" }}
                custom={3.5}
                variants={topToDownAnimation}
                className="contacts__input contacts__input_title"
                placeholder={t("contacts.title")}
                name="message1"
                type="text"
              />
              <motion.div
                className="contacts__inputs"
                custom={3.8}
                variants={topToDownAnimation}
                whileTap={{ scale: 0.95 }}
                transition={{ easeInOut: "linear" }}
              >
                <textarea
                  className="contacts__input contacts__input_message"
                  placeholder={t("contacts.message")}
                  name="message2"
                />
              </motion.div>
              <motion.input
                className="contacts__button"
                custom={4.1}
                variants={downToTopAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
                type="submit"
                value={t("contacts.button")}
                placeholder={t("contacts.button")}
              />
            </form>
          </div>
        </div>
        <AnimatePresence initial={false} onExitComplete={() => null}>
          {modalSuccessful && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="alert"
                variants={dropInPopup}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="alert__container succesful">
                  <div className="alert__wrapper">
                    <img
                      className="alert__checkbox"
                      src={checkbox}
                      alt="checkbox"
                    />
                    <div className="alert__wrap">
                      <h1 className="alert__title">{t("alert.alert")}</h1>
                      <h2 className="alert__subtitle">
                        {t("alert.alert2")}
                      </h2>
                    </div>
                  </div>
                  <img
                    className="alert__close"
                    src={closeButton}
                    alt="close"
                    onClick={() => setModalSuccessful(false)}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false} onExitComplete={() => null}>
            {modalWrong && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="alert"
                  variants={dropInPopup}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="alert__container wrong">
                    <div className="alert__wrapper">
                      <img
                        className="alert__checkbox"
                        src={wrong}
                        alt="wrong"
                      />
                      <div className="alert__wrap">
                        <h1 className="alert__title">{t("alert.alert3")}</h1>
                        <h2 className="alert__subtitle">{t("alert.alert4")}</h2>
                      </div>
                    </div>
                    <img
                      className="alert__close"
                      src={closeButton}
                      alt="close"
                      onClick={() => setModalWrong(false)}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Contacts;
