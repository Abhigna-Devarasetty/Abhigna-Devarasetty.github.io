import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills & Education</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <div className={styles.educationItemDetails}>
                  <h3>{`${educationItem.course} - ${educationItem.university}`}</h3>
                  <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                  {/* <ul>
                    {educationItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
