import { hot } from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';

import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import DevTools from 'mobx-react-devtools';

/* launche details */
// import launch from './assets/launch.json';
// import launchSite from './assets/launch_site.json';
// import rocket from './assets/rocket.json';
import LaunchDetails from './view/LaunchDetails';
/* launche list */
import LaunchesList from './view/LaunchesList';

/* footer */
import Footer from './view/Footer';

import './styles/theme.sass';

@inject('store')
@observer
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      launches: [],
      launch: '',
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches/all')
      .then(resp => resp.json())
      .then(data => this.setState({ launches: data }))
      .catch(err => err);
  }

  get activeViewComponent() {
    const { launches, launch } = this.state;
    const { currentViewName } = this.props.store;

    switch (currentViewName) {
      case 'list':
        return (
          <LaunchesList
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launch.launch_site}
            rocket={launch.rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  @action
  handleLaunchClick(el) {
    this.setState({ launch: el });
    const { store } = this.props;
    store.switchView('details');
  }

  @action
  handleBackClick() {
    const { store } = this.props;
    store.switchView('list');
  }

  render() {
    return this.state.launches.length ? (
      <main className="page-container">
        <div className="page-content">
          <div>
            {this.activeViewComponent}
          </div>
          <Footer />
        </div>
        <DevTools />
      </main>
    ) : (
      <div id="loader">
        <div id="box" />
        <div id="hill" />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default hot(module)(App);
