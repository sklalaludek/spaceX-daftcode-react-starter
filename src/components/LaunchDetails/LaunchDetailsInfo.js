import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const LaunchDetailsInfo = props => (
  <section className="info-section">
    <div className="info-section__launch-info">
      <h4 className="info-section__date">07 may 2018</h4>
      <h2 className="info-section__info-title">iridun next 5 launch</h2>
      <Counter />
    </div>
    <div className="info-section__extensive-info">
      <div className="info-section__details">
        <h4 className="info-section__header--gold">details</h4>
        <p>{props.launch.details}</p>
      </div>
      <div className="info-section__rocket">
        <h4 className="info-section__header--gold">rocket</h4>
        <div className="info-section__rocket-details">
          <div>
            <ul>
              <li><span className="info-section__title-list">name: </span>{props.rocket.rocket_name}</li>
              <li><span className="info-section__title-list">type: </span> {props.rocket.rocket_type}</li>
              {/* <li><span className="info-section__title-list">
                height: </span> {props.rocket.height.meters}m / {props.rocket.height.feet}ft
              </li>
              <li>
                <span className="info-section__title-list">diameter: </span> {props.rocket.diameter.meters}m / {props.rocket.diameter.feet}ft
              </li>
              <li>
                <span className="info-section__title-list">mass: </span>{props.rocket.mass.kg}kg / {props.rocket.mass.lb}lb
              </li>
              */}
            </ul>
          </div>
          <div>
            <ul>{/*
              <li><span className="info-section__title-list">fist-flight: </span>{props.rocket.first_flight}</li>
              <li><span className="info-section__title-list">country: </span>{props.rocket.country}</li>
              <li><span className="info-section__title-list">success rate: </span>{props.rocket.success_rate_pct}%</li>
              <li><span className="info-section__title-list">cost per launch: </span>${props.rocket.cost_per_launch}</li> */}
            </ul>
          </div>
        </div>
        <p>{/* {props.rocket.description} */}</p>
      </div>
      <div className="info-section__launch-pad">
        <h4 className="info-section__header--gold">launch pad</h4>
        <div className="info-section__details-details">
          <div>
            <ul>
              <li><span className="info-section__title-list">name: </span>{props.launchSite.site_name}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><span className="info-section__title-list">year: </span>{props.launch.launch_year}</li>
            </ul>
          </div>
        </div>
        <p>{/* {props.launchSite.details} */}</p>
      </div>
    </div>
  </section>
);

LaunchDetailsInfo.propTypes = {
  launch: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  rocket: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  launchSite: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default LaunchDetailsInfo;
