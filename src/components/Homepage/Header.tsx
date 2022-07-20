import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.css';

const Header = (): JSX.Element => {
  return (
    <div id={styles.header}>
      <div id={styles.headerFlex}>
        <h2>
          Solutions Sync
        </h2>
        <ul className={styles.headerMenu}>
          <li className={styles.headerMenuItem}><Link href="/">HOME</Link></li>
          <li className={styles.headerMenuItem}><Link href="/">FEATURES</Link></li>
          <li className={styles.headerMenuItem}><Link href="/">SERVICES</Link></li>
          <li className={styles.headerMenuItem}><Link href="/">EMPLOYEE</Link></li>
          <li className={styles.headerMenuItem}><Link href="/">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header