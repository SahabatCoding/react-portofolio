import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutImage} src={getImageUrl("about/Trophy.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                A Fullstack Developer with a strong academic background and a
                strong interest in software development, supported by various training 
                programs and intensive courses in software engineering.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutImage} src={getImageUrl("about/Pin.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <p>
                Experienced in backend and frontend development, database management,
                and building efficient and scalable applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
