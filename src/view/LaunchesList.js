import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
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

  @action
  handleFilterChange = (event) => {
    const { value } = event.target;
    // this.setState({ rocketNameFilter: value });

    const { store } = this.props;
    store.setFilter(value);
    // store.dispatch(getFilter(value));
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

  /* handleClick = () => {
    rocket={props.rocket}
    launch={props.launch}
    launchSite={props.launchSite}
  } */

  render() {
    const rocketDetails = {
      cursor: 'pointer',
    };
    const listStyle = {
      color: 'white',
      textOverflow: 'ellipsis',
      /* display: 'inline-block', */
      width: '100px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    };
    return (
      <div className="list">
        <Moon />
        <FilterButtons
          options={this.availableRocketNames}
          onClick={this.handleFilterChange}
        />
        <div className="listing">
          <ul>
            {this.filteredLaunches.length ? this.filteredLaunches.map((el, i) => (
              <li onClick={() => this.props.onLaunchClick(el)} key={el.launch_date_unix} className="rocket-item">
                <div className="listing__date">{this.getDate(el.launch_date_utc)}</div>
                <span className="listing__arrow" />
                <div style={rocketDetails}><span>rocket:</span> {el.rocket.rocket_name} | <span style={listStyle}>launch site: {el.launch_site.site_name_long}</span></div>
              </li>
            )) : 'Sorry, no launches found'}
          </ul>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
