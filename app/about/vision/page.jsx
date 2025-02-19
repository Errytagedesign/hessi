import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Herosection from "../Herosection";
import styles from "../About.module.scss";

function Vision() {
  return (
    <main
      className={`${styles.about} d-flex flex-column justify-content-center `}
    >
      <Herosection styles={styles} title=" Our Vision" />

      <article
        className={` container d-flex flex-column flex-lg-row justify-content-between  mt-5 col-12 col-lg-6 ${styles.vision}`}
      >
        <div className="col-12 col-lg-6">
          <h3 className="mb-3 mt-4"> Vision</h3>
          <p>
            {" "}
            To be known as the premier educational institute for advancing
            health and healthcare.
          </p>
        </div>
        <div className="col-12 col-lg-6">
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
        </div>
      </article>
    </main>
  );
}

export default Vision;
