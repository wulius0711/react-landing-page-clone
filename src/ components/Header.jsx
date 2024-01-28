import React from 'react';
import styles from '../ components/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.headerLogo}>
              <a href="/">
                <img alt="Logo" src="/images/logo-secondary.svg" />
              </a>
            </div>
            <div className={styles.headerMainNav}>
              <div className={styles.navItem}>Explore Mentors</div>
              <div className={styles.navItem}>Learn</div>
              <div className={styles.navItem}>Wall of Love</div>
              <div className={styles.navItem}>City Squads</div>
              <div className={styles.navItem}>Company</div>
            </div>
          </div>
          <div className={styles.secondaryLinks}>
            <a className={styles.navItem}>Explore Membership</a>
            <a className={styles.login}>Login</a>
            <a className={styles.createAcc}>Browse Mentors</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
