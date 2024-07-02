import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:vdevaras@iu.edu">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="mailto:vdevaras@iu.edu">
            <p>vdevaras@iu.edu</p>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/abhignadevarasetty/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/abhignadevarasetty/">
            <p>linkedin.com/in/abhignadevarasetty</p>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Abhigna-Devarasetty">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
          <a href="https://github.com/Abhigna-Devarasetty">
            <p>github.com/Abhigna-Devarasetty</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};
