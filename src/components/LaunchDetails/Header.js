import React from 'react';

import '../../styles/components/header.sass';
import logo from '../../assets/img/space_x_logo_bw_centered.png';

const Header = () => (
  <header className="header">
    <div className="header__navigation container">
      <div className="header__go-back">
        <div className="header__arrow" />
        <a href="/">
          <h3 className="header__go-back-text">
              go back
          </h3>
        </a>
      </div>
      <div className="header__logo">
        <img src={logo} alt="logo spacex" />
      </div>
    </div>
  </header>
);

export default Header;
