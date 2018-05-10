import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/LaunchDetails/Header';
import LaunchDetailsInfo from '../components/LaunchDetails/LaunchDetailsInfo';
import Mission from '../components/LaunchDetails/Mission';
import Footer from '../components/LaunchDetails/Footer';


const LaunchDetails = props => (
  <div id="page">
    <Header />
    <main>
      <h1 className="title" id="page-title">Launch Details</h1>
      <LaunchDetailsInfo
        rocket={props.rocket}
        launch={props.launch}
        launchSite={props.launchSite}
      />
      <Mission />
    </main>
    <Footer />
  </div>
);

LaunchDetails.propTypes = {
  rocket: PropTypes.object,
  launch: PropTypes.object,
  launchSite: PropTypes.object,
};

LaunchDetails.defaultProps = {
  rocket: {},
  launch: {},
  launchSite: {},
};

export default LaunchDetails;
