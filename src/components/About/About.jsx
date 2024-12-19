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
                Hi, I'm Abhigna Devarasetty! 🌟 Data scientist with four years
                of experience leveraging machine learning and analytics;
                recognized for developing predictive models that achieved up to
                75\% accuracy while optimizing data pipelines that cut report
                generation time by 30\%. Led cross-functional teams to implement
                data visualization strategies and automated processes that
                reduced manual entry time by over 50 hours monthly. Promoted
                within a year at Mu Sigma Business Solutions for driving
                significant improvements in model performance and operational
                efficiency.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
