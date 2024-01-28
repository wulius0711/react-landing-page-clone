import React from 'react';
import stylesFooter from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={stylesFooter.footerTop}>
        <div className={stylesFooter.container}>
          <div className={stylesFooter.row}>
            <div className={stylesFooter.footerLeft}>
              <div className={stylesFooter.footerLogo} />
              <div className={stylesFooter.footerLogoText}>
                Connecting founders and marketers with battle-hardened mentors
                that genuinely enjoy helping people.
              </div>
            </div>
            <div className={stylesFooter.footerRight}>
              <div className={stylesFooter.row}>
                <div className={stylesFooter.footerRightSection}>
                  <span className={stylesFooter.footerHeadline}>Plattform</span>
                  <ul className={stylesFooter.footerRightList}>
                    <li>Pricing for individuals</li>
                    <li>Pricing for teams</li>
                    <li>Partner Discounts</li>
                    <li>Become a Mentor</li>
                  </ul>
                </div>
                <div className={stylesFooter.footerRightSection}>
                  <span className={stylesFooter.footerHeadline}>Resources</span>
                  <ul className={stylesFooter.footerRightList}>
                    <li>Use Cases</li>
                    <li>Podcasts</li>
                    <li>Video Library</li>
                    <li>Mentor Column</li>
                    <li>Blog</li>
                    <li>Glossary</li>
                  </ul>
                </div>
                <div className={stylesFooter.footerRightSection}>
                  <span className={stylesFooter.footerHeadline}>Company</span>
                  <ul className={stylesFooter.footerRightList}>
                    <li>About Us</li>
                    <li>Customer Stories</li>
                    <li>FAQs</li>
                    <li>Terms of Service</li>
                    <li>Write for Us</li>
                  </ul>
                </div>
                <div className={stylesFooter.footerRightSection}>
                  <span className={stylesFooter.footerHeadline}>Hire</span>
                  <ul className={stylesFooter.footerRightList}>
                    <li>Hire a Marketer</li>
                    <li>Consultants</li>
                    <li>Community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={stylesFooter.footerBottom}>
        <div className={stylesFooter.container}>
          <div className={stylesFooter.footerSocketLeft}>
            © 2023 Growth Tonic LLC. All rights reserved.
          </div>
          <div className={stylesFooter.footerSocketRight}>
            Made with <img alt="heart icon" src="/images/vote-heart.svg" />
            for the sake of Karma{' '}
            <img alt="facebook icon" src="/images/fb-icon-white.png" />
            <img alt="x icon" src="/images/x-icon-white.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
