import '@fontsource-variable/inter';
import styles from './App.module.scss';
import styles01 from './index.module.scss';

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.headerRow}>
              <div className={styles.headerLeft}>
                <div className={styles.headerLogo}>
                  <a href="/">
                    <img
                      alt="Logo"
                      src="https://www.growthmentor.com/wp-content/uploads/2022/12/logo-secondary.svg"
                    />
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
        <main>
          <section className={styles.homeBannerSlider}>
            <div className={styles.container}>
              <div className={styles.rowWrap}>
                <div className={styles.colContent}>
                  <h1 className={styles.slogan}>
                    Grow your startup faster with 1:1 mentorship
                  </h1>
                  <p className={styles.sloganText}>
                    The world's only growth mentorship platform offering
                    unlimited 1:1 video calls with 600+ mentors for a single
                    flat-rate subscription.
                  </p>
                </div>
                <div className={styles.colSlider}>
                  <div className={styles.colSliderBox}>
                    <img
                      alt="Testimonial01"
                      src="./images/testimonial-design_01.jpg"
                    />
                    <div>
                      <p>
                        Dani provides a lot of actionable insight into work/life
                        balance and ensuring that health is prioritized in order
                        to work more efficiently.
                      </p>

                      <p className={styles.signature}>Joshua Blount</p>
                    </div>
                  </div>
                  <div className={styles.colSliderBox}>
                    <img
                      alt="Testimonial01"
                      src="./images/testimonial-design_01.jpg"
                    />
                    <div>
                      <p>
                        Eden was super helpful and had tons of great and
                        actionable tips, not only on how I can improve my{' '}
                      </p>

                      <p className={styles.signature}>Yiz Segall</p>
                    </div>
                  </div>
                  <div className={styles.colSliderBox}>
                    <img
                      alt="Testimonial01"
                      src="./images/testimonial-design_01.jpg"
                    />
                    <div>
                      <p>
                        Can't recommend Daniel enough! In just a short space of
                        time, Daniel provided insane value - covering exactly
                        how to structure and develop a
                      </p>

                      <p className={styles.signature}>Indie Ludbrook</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className={styles.footerTop}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.footerLeft}>
                  <div className={styles.footerLogo}></div>
                  <div className={styles.footerLogoText}>
                    Connecting founders and marketers with battle-hardened
                    mentors that genuinely enjoy helping people.
                  </div>
                </div>
                <div className={styles.footerRight}>
                  <div className={styles.row}></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
