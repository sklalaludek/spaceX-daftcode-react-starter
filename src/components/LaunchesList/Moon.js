import React from 'react';
import logo from '../../assets/img/space_x_logo_bw_centered.png';

const Moon = () => (
  <div className="moon">
    Moon
    <div className="moon__content">
      <div className="moon__logo">
        <img src={logo} alt="spacex logo" />
      </div>
      <h1>launches 2018</h1>
    </div>
  </div>
);

export default Moon;
