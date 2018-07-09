import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/LaunchDetails/Header';
import LaunchDetailsInfo from '../components/LaunchDetails/LaunchDetailsInfo';
import Mission from '../components/LaunchDetails/Mission';


const LaunchDetails = props => (
  <div className="details">
    {console.log('props launchDetails', props)}
    <Header
      onBackClick={props.onBackClick}
    />
    <h1 className="title" id="page-title">Launch Details</h1>
    <LaunchDetailsInfo
      rocket={props.rocket}
      launch={props.launch}
      launchSite={props.launchSite}
    />
    <Mission />
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
