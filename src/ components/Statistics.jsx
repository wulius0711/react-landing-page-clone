import React from 'react';
import stylesStatistics from './Statistics.module.scss';

function Statistics() {
  return (
    <section className={stylesStatistics.statistics}>
      <div className={stylesStatistics.container}>
        <div className={stylesStatistics.row}>
          <div className={stylesStatistics.statisticsBox}>
            <div className={stylesStatistics.statisticsBoxDetails}>
              <span className={stylesStatistics.statisticsBoxDetailsValue}>
                600+
              </span>
              <span>Vetted mentors in our network</span>
            </div>
          </div>
          <div className={stylesStatistics.statisticsBox}>
            <div className={stylesStatistics.statisticsBoxDetails}>
              <span className={stylesStatistics.statisticsBoxDetailsValue}>
                38,000+
              </span>
              <span>Sessions booked since 2018</span>
            </div>
          </div>
          <div className={stylesStatistics.statisticsBox}>
            <div className={stylesStatistics.statisticsBoxDetails}>
              <span className={stylesStatistics.statisticsBoxDetailsValue}>
                3.5x
              </span>
              <span>
                Growth rate of mentored startups compared to non-mentored
                startups
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
