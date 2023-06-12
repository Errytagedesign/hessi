import Buttons from "@/utils/Button";
import styles from "./page.module.scss";
import Image from "next/image";
import whyLearn from "../public/assets/images/whyLearnStudent.png";
import register from "../public/assets/images/register.svg";
import complete from "../public/assets/images/complete.svg";
import success from "../public/assets/images/success.svg";
import networking from "../public/assets/images/network.svg";
import review from "../public/assets/images/review.png";
import { FaCheckCircle } from "react-icons/fa";
import Reviews from "@/components/reviews/Reviews";
import Link from "next/link";
// import "./globals.css";

export default function Home() {
  return (
    <main
      className={`${styles.main} d-flex flex-column justify-content-center `}
    >
      {/* Hero section */}
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

      {/* Why Learn section */}
      <section
        className={`${styles.learn} d-flex flex-column flex-lg-row justify-content-between`}
      >
        <figure
          data-aos="fade-up-right"
          className={`${styles.notyet} col-12 col-lg-5`}
        >
          <Image src={whyLearn} alt=" Hessi's Hompage image" />{" "}
        </figure>

        <article
          className={`${styles.whyLearnTitle} d-flex flex-column justify-content-between col-12 col-lg-6`}
        >
          <h3 data-aos="fade-down-left">Why learn from HESSI</h3>
          <p data-aos="fade-left">
            We believe that everyone has the potential to achieve their career
            goals, no matter what industry they&aposre in. That&aposs why we
            offer personalized coaching services to help professionals across
            healthcare and other fields reach their full potential. Our
            experienced career coaches understand the unique challenges that
            professionals face in today&aposs competitive job market. That&aposs
            why we offer tailored coaching services to help you identify your
            strengths, overcome your weaknesses, and achieve your career goals.
          </p>
          <hgroup
            data-aos="fade-left"
            className="d-flex flex-wrap mt-3 mb-3 justify-content-between"
          >
            <h6>
              {" "}
              <FaCheckCircle color="var(--mainColor)" /> Reliable{" "}
            </h6>
            <h6>
              {" "}
              <FaCheckCircle color="var(--mainColor)" /> Affordable{" "}
            </h6>
            <h6>
              {" "}
              <FaCheckCircle color="var(--mainColor)" /> Flexible{" "}
            </h6>
            <h6>
              {" "}
              <FaCheckCircle color="var(--mainColor)" /> Just-in-time{" "}
            </h6>
          </hgroup>
          <div>
            <Buttons className="main-btn" text="Resgister Now" />
          </div>
        </article>
      </section>

      {/* How it works section */}
      <section
        className={`${styles.howItWorks} d-flex flex-column justify-content-between align-items-center`}
      >
        <div>
          <h3 className="mb-3"> How it works</h3>
          <p>
            {" "}
            With these few simple steps, you’re closer to being a certified
            professionals{" "}
          </p>
        </div>

        <article
          className={`${styles.cardsContainer} col-12 col-lg-10 d-flex flex-column flex-lg-row justify-content-center `}
        >
          <article
            data-aos="zoom-in"
            className={`${styles.Cards} d-flex flex-column justify-content-between col-12 col-lg-3`}
          >
            <figure>
              <Image src={register} alt="hessi's how it works icons" />
            </figure>
            <p>
              Register and subscribe to Course to gain access to our
              comprehensive course materials.
            </p>
          </article>
          <article
            data-aos="zoom-in"
            className={`${styles.Cards} d-flex flex-column justify-content-between col-12 col-lg-3`}
          >
            <figure>
              <Image src={complete} alt="hessi's how it works icons" />
            </figure>
            <p>
              Complete each module at your own pace, with personalized feedback
              and support from our expert instructors.
            </p>
          </article>
          <article
            data-aos="zoom-in"
            className={`${styles.Cards} d-flex flex-column justify-content-between col-12 col-lg-3`}
          >
            <figure>
              <Image src={networking} alt="hessi's how it works icons" />
            </figure>
            <p>
              Network with other professionals in your field and showcase your
              new skills with a certificate of completion.
            </p>
          </article>
          <article
            data-aos="zoom-in"
            className={`${styles.Cards} d-flex flex-column justify-content-between col-12 col-lg-3`}
          >
            <figure>
              <Image src={success} alt="hessi's how it works icons" />
            </figure>
            <p>
              Take your career to the next level with the knowledge and skills
              you need to succeed in your industry.
            </p>
          </article>
        </article>
        <div className="mt-5">
          <Buttons className="main-btn" text="Resgister Now" />
        </div>
      </section>

      {/* Reviews Section */}
      <section
        className={`${styles.reviewContainer} d-flex flex-column flex-lg-row justify-content-between`}
      >
        <figure className={` col-12 col-lg-5 order-1 order-lg-0`}>
          <Image src={review} alt=" Hessi's Hompage image" />{" "}
        </figure>
        <article className={` d-flex flex-column col-lg-6`}>
          <div>
            <h3 className="mb-3">
              {" "}
              What our students are saying about our courses{" "}
            </h3>
          </div>

          <Reviews styles={styles} />
        </article>
      </section>

      {/* Get started Section */}
      <section
        className={`${styles.getStarted} d-flex flex-column flex-lg-row justify-content-between align-items-center`}
      >
        <h3 className="col-12 col-lg-6">
          {" "}
          Are you ready to start your course now?
        </h3>
        <article className="col-12 col-lg-6 d-flex flex-column flex-lg-row justify-content-between">
          <Link className={`col-12 col-lg-6 ${styles.start}`} href="#">
            {" "}
            Get Started Now!
          </Link>
          <Link className={` col-12 col-lg-5 ${styles.contact}`} href="#">
            {" "}
            Contact us
          </Link>
        </article>
      </section>
    </main>
  );
}
