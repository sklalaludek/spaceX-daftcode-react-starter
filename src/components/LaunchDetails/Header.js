import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/space_x_logo_bw_centered.png';

const Header = props => (
  <header className="header">
    <div className="header__navigation container">
      <button
        onClick={props.onBackClick}
        className="header__go-back"
      >
        <div className="header__arrow" />
        <h3 className="header__go-back-text">
          go back
        </h3>
      </button>
      <div className="header__logo">
        <img src={logo} alt="logo spacex" />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  onBackClick: PropTypes.func,
};

Header.defaultProps = {
  onBackClick: null,
};

export default Header;
