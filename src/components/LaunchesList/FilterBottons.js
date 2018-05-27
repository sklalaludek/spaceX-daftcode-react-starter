import React from 'react';

const FilterBottons = (props) => {
  const { options } = props;
  return (
    <div className="filter-buttons-container">
      <button onClick={props.onClick}>All rockets</button>
      {options.map((el, i) => (
        <button
          key={i}
          onClick={props.onClick}
          value={el}
        >
          {el}
        </button>
        ))}
    </div>
  );
};

export default FilterBottons;