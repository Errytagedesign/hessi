"use client";

import React, { useState } from "react";

// styles
import styles from "./NavBar.module.scss";

// images
import Logo from "../../public/assets/images/hessi-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useGlobalHooks } from "@/Hooks/globalHooks";
import { FaCaretDown } from "react-icons/fa";

function NavBar() {
  const { handleToggle, toggle } = useGlobalHooks();

  return (
    <div>
      <section className={`${styles.navContainer}`}>
        <nav className="d-flex container flex-row align-items-center justify-content-between">
          {/* Logo */}
          <Link
            href="/"
            className={`col-8 col-md-3 d-flex flex-row align-items-center ${styles.logo}`}
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            <Image width="" src={Logo} alt=" SOSPay Logo" />
          </Link>
          <div
            className={` col-12 col-lg-9 d-flex flex-column flex-lg-row ${
              toggle["navbar"] ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className="col-12 d-flex flex-column flex-lg-row  align-items-center justify-content-between ">
              {/* nav Links */}
              <section className="col-12 col-lg-9 d-flex justify-content-lg-end ">
                <ul
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className={` ${styles.navItems} d-flex flex-column flex-lg-row justify-content-end `}
                >
                  <li>
                    <Link onClick={() => handleToggle("navbar")} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => handleToggle("navbar")}
                      href="/services"
                    >
                      Sevices <FaCaretDown className={styles.carets} />
                    </Link>
                    <ul className={`${styles.dropDown}`}>
                      <li>
                        <Link
                          onClick={() => handleToggle("navbar")}
                          href="/services1"
                        >
                          Sevices1
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleToggle("navbar")}
                          href="/services2"
                        >
                          Sevices2
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleToggle("navbar")}
                          href="/services3"
                        >
                          Sevices3
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link onClick={() => handleToggle("navbar")} href="/about">
                      About <FaCaretDown className={styles.carets} />
                    </Link>
                    <ul className={`${styles.dropDown}`}>
                      <li>
                        <Link
                          onClick={() => handleToggle("navbar")}
                          href="/about/vision"
                        >
                          Vision
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleToggle("navbar")}
                          href="/about/mission"
                        >
                          Mission
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      onClick={() => handleToggle("navbar")}
                      href="/contact"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </section>

              {/* profile and btn */}
              <section className="col-12 col-lg-3 d-flex flex-column flex-lg-row justify-content-between">
                {" "}
                <Link href="/signin">
                  <button
                    // data-aos="fade-right"
                    // data-aos-duration="1500"
                    className="btnOutline"
                  >
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button
                    // data-aos="fade-right"
                    // data-aos-duration="1500"
                    className="main-btn"
                  >
                    Get Started
                  </button>
                </Link>
              </section>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={() => handleToggle("navbar")}
            className={toggle["navbar"] ? styles.open : styles.ham}
            id="navbar"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
