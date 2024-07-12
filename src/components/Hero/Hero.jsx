import React from "react";
import Typical from "react-typical";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, </h1>
        <h1 className={styles.title}>I'm Abhigna Devarasetty</h1>
        <p className={styles.description}>
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              "Data Scientist",
              3000,
              "Data Analyst",
              3000,
              "Full Stack Developer",
              3000,
              "Frontend Engineer",
              3000,
            ]}
          />
        </p>
        <div className={styles.buttons}>
          <a href="mailto:vdevaras@iu.edu" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="/abhigna_devarasetty_resume.pdf"
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/abhigna_1.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
