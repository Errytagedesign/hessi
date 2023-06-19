import styles from "./page.module.scss";
import Image from "next/image";
import construction from "../public/assets/images/construction.webp";
import logo from "../public/assets/images/hessi-logo.png";

export default function Home() {
  return (
    <main
      className={`${styles.main} d-flex flex-column justify-content-center container align-items-center `}
    >
      <div className="col-12 col-md-6">
        <Image src={construction} alt="" />
      </div>
      <h3 className="col-12 col-md-8 text-center mt-5 mb-5">
        {" "}
        We are currently under construction to bring you the best training and
        information possible, so stay tuned for updates.{" "}
      </h3>

      <div className="col-7 col-md-2 mt-5 mb-5">
        <Image src={logo} alt="" />
      </div>
    </main>
  );
}
