import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/LaunchDetails/Header';
import LaunchDetailsInfo from '../components/LaunchDetails/LaunchDetailsInfo';
import Mission from '../components/LaunchDetails/Mission';


const LaunchDetails = props => (
  <div className="details">
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
  rocket: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  launch: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  launchSite: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onBackClick: PropTypes.func,
};

LaunchDetails.defaultProps = {
  rocket: {},
  launch: {},
  launchSite: {},
  onBackClick: null,
};

export default LaunchDetails;
