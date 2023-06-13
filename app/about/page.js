import React from "react";

function About() {
  return (
    <main
      className={`${styles.about} d-flex flex-column justify-content-center `}
    >
      {/* Hero section */}
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroTitle}>
          <h2 data-aos="fade-up-right" data-aos-duration="1500">
            {" "}
            Unlock Your Potential with our curated courses{" "}
          </h2>
        </div>
      </section>
    </main>
  );
}

export default About;
