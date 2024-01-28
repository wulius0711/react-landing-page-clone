import React from 'react';
import stylesSlider from '../ components/HomeBannerSlider.module.scss';

function HomeBannerSlider() {
  return (
    <section className={stylesSlider.homeBannerSlider}>
      <div className={stylesSlider.homeBannerSliderContainer}>
        <div className={stylesSlider.colContent}>
          <h1 className={stylesSlider.slogan}>
            Grow your startup faster with 1:1 mentorship
          </h1>
          <p className={stylesSlider.sloganText}>
            The world's only growth mentorship platform offering unlimited 1:1
            video calls with 600+ mentors for a single flat-rate subscription.
          </p>
          <div className={stylesSlider.btnHero}>
            <a href="/" className={stylesSlider.btnHeroFull}>
              Browse 600+ Mentors
            </a>
            <a href="/" className={stylesSlider.btnHeroVideo}>
              Video Demo Video
            </a>
          </div>
          <div className={stylesSlider.heroListHeadline}>
            with hundreds of mentors just a click away, you can:
          </div>
          <div className={stylesSlider.heroListContent}>
            <ul>
              <li>Validate ideas before executing</li>
              <li>Get personalized advice for your situation</li>
              <li>Get clarity on things you're struggling with</li>
              <li>Skip the trial-and-error of doing it yourself</li>
            </ul>
          </div>
        </div>
        <div className={stylesSlider.colSlider}>
          <div className={stylesSlider.colSliderBox}>
            <div className={stylesSlider.colSliderBoxImg}>
              <img
                alt="Testimonial01"
                src="/images/testimonial-design_01.jpeg"
              />
            </div>
            <div className={stylesSlider.colSliderBoxText}>
              <p>
                Dani provides a lot of actionable insight into work/life balance
                and ensuring that health is prioritized in order to work more
                efficiently.
                <br />
                <span className={stylesSlider.colSliderBoxSignature}>
                  Joshua Blount
                </span>
              </p>
            </div>
          </div>
          <div className={stylesSlider.colSliderBox}>
            <div className={stylesSlider.colSliderBoxImg}>
              <img
                alt="Testimonial01"
                src="/images/testimonial-design_02.jpeg"
              />
            </div>
            <div className={stylesSlider.colSliderBoxText}>
              <p>
                Eden was super helpful and had tons of great and actionable
                tips, not only on how I can improve my <br />
                <span className={stylesSlider.colSliderBoxSignature}>
                  Yiz Segall
                </span>
              </p>
            </div>
          </div>
          <div className={stylesSlider.colSliderBox}>
            <div className={stylesSlider.colSliderBoxImg}>
              <img
                alt="Testimonial01"
                src="/images/testimonial-design_03.jpeg"
              />
            </div>
            <div className={stylesSlider.colSliderBoxText}>
              <p>
                Can't recommend Daniel enough! In just a short space of time,
                Daniel provided insane value - covering exactly how to structure
                and develop a
                <br />
                <span className={stylesSlider.colSliderBoxSignature}>
                  Indie Ludbrook
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBannerSlider;
