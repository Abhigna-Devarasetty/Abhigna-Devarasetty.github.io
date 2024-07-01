import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about_img.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p style={{ marginBottom: "20px" }}>
                Hi, I'm Abhigna Devarasetty! 🌟 Currently, I'm diving deep into
                the world of Data Science at Indiana University Bloomington. My
                toolkit includes Java, Python, SQL, and React, which I use to
                craft data-driven solutions that make a difference. 💻📊
              </p>
              <p>
                With my background in data science, analytics, and machine
                learning, I can help your organization unlock the power of data
                to drive insightful decisions and create meaningful impacts.
                📈🔍 Whether it's developing advanced machine learning models,
                enhancing data visualization techniques, or optimizing system
                efficiencies, I'm here to contribute to impactful projects that
                advance the field. Let's make data magic happen! 🚀✨
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
