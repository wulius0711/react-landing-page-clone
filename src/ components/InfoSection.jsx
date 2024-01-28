import React from 'react';
import stylesSection from '../ components/InfoSection.module.scss';

function InfoSection() {
  return (
    <section className={stylesSection.infoSection}>
      <div className={stylesSection.infoSectionTop}>
        <p className={stylesSection.infoSectionTopQuote}>
          "There is no struggle, no phone call messages, no frustration of
          trying to get in contact, you just book, and you talk."
        </p>
        <p>
          <span className={stylesSection.infoSectionTopName}>
            Brandon Horvatić
          </span>
          <span className={stylesSection.infoSectionTopDate}>
            Co-Founder of Yes Chef Studio
          </span>
        </p>
      </div>
      <div className={stylesSection.infoSectionVideo}>
        <div className={stylesSection.infoSectionVideoContainer}>
          <div className={stylesSection.infoSectionVideoTitle}>
            Struggling with{' '}
            <span className={stylesSection.infoSectionVideoTitleColor}>
              hiring
            </span>
            ? A growth mentor can help with that.
          </div>
          <div className={stylesSection.infoSectionVideoContent}>
            <video
              src="https://www.growthmentor.com/wp-content/uploads/2022/06/video-call-draft-6.mp4"
              autoPlay
              muted
              controls="false"
              loop
            />
          </div>
        </div>
        <div className={stylesSection.infoSectionPartners}>
          <div className={stylesSection.containerPartners}>
            <h2 className={stylesSection.infoSectionPartnersHeadline}>
              Get the inside scoop on how world-class companies grow:
            </h2>
            <div className={stylesSection.infoSectionPartnersLogosContainer}>
              <div className={stylesSection.infoSectionPartnersLogos}>
                <img alt="Logo01" src="/images/Logos/blinkist.webp" />
              </div>
              <div className={stylesSection.infoSectionPartnersLogos}>
                <img alt="Logo01" src="/images/Logos/brainly-80.webp" />
              </div>
              <div className={stylesSection.infoSectionPartnersLogos}>
                <img
                  alt="Logo01"
                  src="/images/Logos/hotjar-logo-freelogovectors.net_-e1701714038743.webp"
                />
              </div>
              <div className={stylesSection.infoSectionPartnersLogos}>
                <img
                  alt="Logo01"
                  src="/images/Logos/mailchimp-logo-black-png-transparent-860x239-1-e1701713906178.webp"
                />
              </div>
              <div className={stylesSection.infoSectionPartnersLogos}>
                <img
                  alt="Logo01"
                  src="/images/Logos/miro-e1701713916618.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
