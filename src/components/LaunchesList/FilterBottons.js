import React from 'react';
import PropTypes from 'prop-types';

const FilterBottons = (props) => {
  const { options } = props;
  return (
    <div className="filter-buttons-container">
      <button onClick={props.onClick} className="filter-buttons-container__btn">All rockets</button>
      {options.map(el => (
        <button
          key={el}
          onClick={props.onClick}
          value={el}
          className="filter-buttons-container__btn"
        >
          {el}
        </button>
      ))}
    </div>
  );
};

FilterBottons.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

FilterBottons.defaultProps = {
  onClick: null,
  options: [],
};

export default FilterBottons;
