import React from "react";
import styles from "./About.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import Herosection from "./herosection";

function About() {
  return (
    <main
      className={`${styles.about} d-flex flex-column justify-content-center `}
    >
      {/* Hero section */}
      <Herosection styles={styles} title=" About HESSI" />

      {/* Who we are section */}
      <section className={`d-flex flex-column container ${styles.whoWeAre}`}>
        <div className={styles.whoTitle}>
          <h3 className="mb-3"> Who we are</h3>
          <p>
            {" "}
            Founded in 2018, HESSI Inc. is an educational institution delivering
            innovative, portable, reliable just-in-time education to healthcare
            leaders, professionals, and caregivers to advance health and
            healthcare for the best outcomes. HESSI Iinc faculty are primarily
            doctoral-prepared college faculty, academic leaders, administrators,
            lawyers, and experts in their teaching domains. These faculty are
            devoted to optimizing health and healthcare outcomes through
            teaching and learning. They have a unique understanding of diverse
            teaching pedagogies that are applied to meet the unique needs of
            HESSI customers. Educational programs focus on equipping
            interprofessional healthcare team members with tools and skills to
            facilitate health through preventive measures, health promotion,
            risk reduction, support, and mitigation of system vulnerabilities.
          </p>
        </div>

        <article
          className={`d-flex flex-column flex-lg-row mt-5 justify-content-between`}
        >
          <article className={` col-12 col-lg-5 `}>
            <h3 className="mb-3 mt-4"> Vision</h3>
            <p>
              {" "}
              To be known as the premier educational institute for advancing
              health and healthcare.
            </p>

            <h3 className="mb-3 mt-4"> Core Values</h3>
            <ul className="">
              <li>
                {" "}
                <FaCheckCircle
                  className={styles.checkMark}
                  color="var(--secColor)"
                />{" "}
                Accountability
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Collaboration
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Competence
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Equity
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Excellence
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Inclusion
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Integrity
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Reliability
              </li>
              <li>
                {" "}
                <FaCheckCircle
                  color="var(--secColor)"
                  className={styles.checkMark}
                />
                Respect{" "}
              </li>
            </ul>
          </article>
          <article className={`col-12 col-lg-6 ${styles.vision}`}>
            <h3 className="mb-3 mt-4"> Mission</h3>
            <p>
              {" "}
              HESSI&apos;s mission is to strengthen the capacity of leaders,
              professionals, and caregivers to lead and improve clinical and
              support services to patients, individuals, and communities through
              a comprehensive yet holistic approach to teaching and life-long
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
                - Consideration of individuals&apos; neurodiversity and
                differences in system structures in curriculum development,
                adaption, and delivery{" "}
              </li>
              <li>- Leveraging just-in-time educational approaches. </li>
              <li>
                - Conducting need assessment of individuals, employee groups,
                and organizations to identify areas of opportunities.{" "}
              </li>
              <li>
                - Equipping those who support individuals with intellectual and
                developmental disabilities with tools to mitigate risk and
                maximize their potentiality.
              </li>
              - Creating responsive educational programs to address areas of
              opportunities.
              <li>
                - Customization of programs to address individual and
                organizational developmental needs and facilitate compliance
                with regulatory, accreditory requirements and legal mandates.
              </li>
            </ul>
          </article>
        </article>
      </section>
    </main>
  );
}

export default About;
