import Buttons from "@/utils/Button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main
      className={`${styles.main} d-flex flex-column align-items-center justify-content-center `}
    >
      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1 data-aos="fade-up-right" data-aos-duration="1500">
            {" "}
            Unlock Your Potential with our curated courses{" "}
          </h1>
          <p data-aos="fade-right" data-aos-duration="1500">
            Are you looking to take your career to the next level? Do you want
            to gain the skills and knowledge you need to succeed in your field?
            Look no further.
          </p>
          <Buttons className="main-btn" text="Resgister Now" />
        </div>
      </section>
    </main>
  );
}
