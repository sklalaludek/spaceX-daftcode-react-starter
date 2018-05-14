import React from 'react';
import Moon from '../components/LaunchesList/Moon';
import FilterButtons from '../components/LaunchesList/FilterBottons';
import Listing from '../components/LaunchesList/Listing';

class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {};

  get availableRocketNames() {
    const { launches } = this.props;
    const rocketNames = launches
      .map(el => el.rocket.rocket_name)
      .filter((v, i, a) => a.indexOf(v) === i);
    // get all names from launches
    return rocketNames;
  }

  get filteredLaunches() {
    const { rocketNameFilter } = this.state;
    const { launches } = this.props;

    if (!rocketNameFilter) return launches;
    return launches.filter(launch => launch.rocket.rocket_name === rocketNameFilter);
  }

  handleFilterChange = (event) => {
    const value = event.target.value;
    this.setState({ rocketNameFilter: value });
  }

  render() {
    return (
      <div className="list">
        <Moon />
        <FilterButtons
          options={this.availableRocketNames}
          onClick={this.handleFilterChange}
        />
        <div className="listing">
          {this.filteredLaunches.map(el => el.rocket.rocket_name)}
          <Listing />
        </div>
      </div>
    );
  }
}

export default LaunchesList;
