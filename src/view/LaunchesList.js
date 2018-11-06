import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import Moon from '../components/LaunchesList/Moon';
import FilterButtons from '../components/LaunchesList/FilterBottons';

@inject('store')
@observer
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
    const rocketNameFilter = this.props.store.rocketFilter;
    const { launches } = this.props;

    if (!rocketNameFilter) return launches;
    return launches.filter(launch => launch.rocket.rocket_name === rocketNameFilter);
  }

  getDate = (date) => {
    let str = '';
    const results = date.match(/(\d{4})-(\d{2})-(\d{2})/);
    str += `${results[3]} ${this.getMonth(results[2])} ${results[1]}`;
    return str;
  }

  getMonth = (month) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[parseInt(month, 10) - 1];
  }

  @action
  handleFilterChange = ({ target: { value } }) => {
    const { store } = this.props;
    store.setFilter(value);
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
          <ul className="timeline">
            {this.filteredLaunches.length ? this.filteredLaunches.map((el, i) => (
              <li
                onClick={() => this.props.onLaunchClick(el)}
                key={el.flight_number}
              >
                <div className={`direction-${i & 1 ? 'l' : 'r'}`}>
                  <div className="time">{this.getDate(el.launch_date_utc)}</div>
                  <div className="flag" />
                  <div className="desc">
                    <span>rocket:</span> {el.rocket.rocket_name} | launch site: {el.launch_site.site_name_long}
                  </div>
                </div>

              </li>
            )) : 'Sorry, no launches found'}
          </ul>
        </div>
      </div>
    );
  }
}

LaunchesList.propTypes = {
  launches: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onLaunchClick: PropTypes.func,
};

LaunchesList.defaultProps = {
  onLaunchClick: null,
};

export default LaunchesList;
