import React from "react";
import styles from "./Footer.module.scss";

import Logo from "./../../../public/assets/sospay-main-logo.svg";

// icons
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

import { BiCopyright } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className={`${styles.footer}  d-flex flex-column`}>
      <main className="d-flex flex-column flex-lg-row  justify-content-between align-items-center ">
        {/* Logo */}
        <section
          className={`col-12 col-md-4 ${styles.logo} d-flex flex-column text-center text-lg-start mx-auto`}
        >
          <div className="col-12  mb-4 ">
            <Link href="/">
              {" "}
              <Image src={Logo} alt=" SoSPay Logo" />{" "}
            </Link>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Faucibus congue pellentesque
            leo sem posuere nulla.
          </p>
        </section>

        <section className="d-flex flex-column flex-lg-row justify-content-between col-12 col-lg-7 ">
          {/* company */}
          <aside className="d-flex align-items-center align-items-lg-start col-12 col-md-7 col-lg-6 flex-column ">
            <h4> Get Connected </h4>

            <input
              type="email"
              placeholder="Your email address..."
              className="form-control mb-2 col-12"
            />
            <Link href="/about">Support</Link>
          </aside>

          <aside className="d-flex flex-column   align-items-center align-items-lg-start col-12 col-md-7 col-lg-5">
            {/* Support */}
            <div className="mb-3">
              <FaFacebook color="var(--lightGrey)" size={25} />{" "}
              <FaInstagram color="var(--lightGrey)" size={25} />{" "}
              <FaTwitter color="var(--lightGrey)" size={25} />
            </div>
            <div>
              <h6>
                {" "}
                <AiFillMail color="var(--lightGrey)" size={25} />{" "}
                info@sospay.com
              </h6>
            </div>
          </aside>
        </section>
      </main>

      <article className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start">
        <div className="d-flex col-8 col-md-3 mt-3 mt-lg-0 flex-row justify-content-between">
          <small> Terms </small>
          <small> Policy</small>
          <small> License</small>
        </div>
      </article>
    </div>
  );
}

export default Footer;
