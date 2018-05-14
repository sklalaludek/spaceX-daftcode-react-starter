import React, { Component } from 'react';

class FilterBottons extends Component {
  render() {
    const { options } = this.props;
    return (
      <div>
        <button onClick={this.props.onClick}>All rockets</button>
        {options.map((el, i) => (
          <button
            key={i}
            onClick={this.props.onClick}
            value={el}
          >
            {el}
          </button>
        ))}
      </div>
    );
  }
}

export default FilterBottons;
