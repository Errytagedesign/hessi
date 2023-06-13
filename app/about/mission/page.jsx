import React from "react";
import Herosection from "../Herosection";
import styles from "../About.module.scss";

function Mission() {
  return (
    <main
      className={`${styles.about} d-flex flex-column justify-content-center `}
    >
      <Herosection styles={styles} title=" Our Mission" />
      <article className={`col-12 container text-center mt-5 ${styles.vision}`}>
        <h3 className="mb-3 mt-4"> Mission</h3>
        <p>
          {" "}
          HESSI&apos;s mission is to strengthen the capacity of leaders,
          professionals, and caregivers to lead and improve clinical and support
          services to patients, individuals, and communities through a
          comprehensive yet holistic approach to teaching and life-long
          learning.
        </p>
        <ul>
          Strategies include but are not limited to:
          <li>
            - Availability of diverse learning programs for leaders,
            professionals, and caregivers to enhance quality and optimal
            outcomes for patients and individuals in clinical and community
            settings.{" "}
          </li>
          <li>
            - Consideration of individuals&apos; neurodiversity and differences
            in system structures in curriculum development, adaption, and
            delivery{" "}
          </li>
          <li>- Leveraging just-in-time educational approaches. </li>
          <li>
            - Conducting need assessment of individuals, employee groups, and
            organizations to identify areas of opportunities.{" "}
          </li>
          <li>
            - Equipping those who support individuals with intellectual and
            developmental disabilities with tools to mitigate risk and maximize
            their potentiality.
          </li>
          - Creating responsive educational programs to address areas of
          opportunities.
          <li>
            - Customization of programs to address individual and organizational
            developmental needs and facilitate compliance with regulatory,
            accreditory requirements and legal mandates.
          </li>
        </ul>
      </article>
    </main>
  );
}

export default Mission;
