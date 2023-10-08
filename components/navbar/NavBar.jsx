'use client';

import React from 'react';

// styles
import styles from './NavBar.module.scss';

// images
import Logo from '../../public/assets/images/hessi-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useGlobalHooks } from '@/Hooks/globalHooks';
// import { FaCaretDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

function NavBar() {
  const { handleToggle, toggle } = useGlobalHooks();
  const currentRoute = usePathname();

  const linkList = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'What We Do', url: '/whatwedo' },
    { id: 4, title: 'Insight & Sevices', url: '/services' },
    { id: 5, title: 'Contact us', url: '/contact' },
  ];

  return (
    <div>
      <section className={`${styles.navContainer}`}>
        <nav className='d-flex container flex-row align-items-center justify-content-between'>
          {/* Logo */}
          <Link
            href='/'
            className={`col-8 col-md-2 d-flex flex-row align-items-center ${styles.logo}`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <Image width='' src={Logo} alt=' SOSPay Logo' />
          </Link>
          <div
            className={` col-12 col-lg-10 d-flex flex-column flex-lg-row ${
              toggle['navbar'] ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className='col-12 d-flex flex-column flex-lg-row  align-items-center justify-content-between '>
              {/* nav Links */}
              <section className='col-12 d-flex justify-content-lg-end '>
                <ul
                  data-aos='fade-right'
                  data-aos-duration='1500'
                  className={` ${styles.navItems} d-flex flex-column flex-lg-row justify-content-end col-12`}
                >
                  {linkList.map(({ id, title, url }) => (
                    <li
                      key={id}
                      className={
                        currentRoute === url ? 'isActive' : 'notActive'
                      }
                    >
                      <Link onClick={() => handleToggle('navbar')} href={url}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={() => handleToggle('navbar')}
            className={toggle['navbar'] ? styles.open : styles.ham}
            id='navbar'
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
