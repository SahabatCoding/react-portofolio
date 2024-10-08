import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Trophy.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3> Backend Developer</h3>
              <p>
                I'm a backend developer, my experience developing fast and optimised back-end systems
                and APIs 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Pin.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience frontend developer with experience in building responsive and optimized sites
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
