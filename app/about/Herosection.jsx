import React from "react";

function Herosection({ styles, title }) {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.aboutHeroTitle}>
        <h2 data-aos="fade-up-right" data-aos-duration="1500">
          {" "}
          {title}
        </h2>
      </div>
    </section>
  );
}

export default Herosection;
