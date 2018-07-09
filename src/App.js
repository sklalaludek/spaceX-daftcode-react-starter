import { hot } from 'react-hot-loader';
import * as React from 'react';

import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

/* launche details */
// import launch from './assets/launch.json';
// import launchSite from './assets/launch_site.json';
// import rocket from './assets/rocket.json';
import LaunchDetails from './view/LaunchDetails';
/* launche list */
import LaunchesList from './view/LaunchesList';

import DevTools from 'mobx-react-devtools';

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
      launchSite: '',
      rocket: '',
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches/all')
      .then(resp => resp.json())
      .then(data => this.setState({ launches: data }))
      .catch(err => console.log(err));
  }

  get activeViewComponent() {
    const { launches } = this.state;
    const { store } = this.props;

    switch (store.currentViewName) {
      case 'list':
        return (
          <LaunchesList
            launches={this.state.launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={this.state.launch}
            launchSite={this.state.launch.launch_site}
            rocket={this.state.launch.rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  @action
  handleLaunchClick(el) {
    // this.setState({ viewName: 'details', launch: el });
    console.log('App: ', el, '!!!!!!!!!!!!');
    this.setState({ launch: el });
    const { store } = this.props;
    store.switchView('details');
    console.log('store', store);
  }

  @action
  handleBackClick() {
    // this.setState({ viewName: 'list' });
    const { store } = this.props;
    store.switchView('list');
  }

  render() {
    return (this.state.launches.length ? (
      <main className="page-container">
        <div className="page-content">
          <div>
            {this.activeViewComponent}
          </div>
          <Footer />
        </div>
        <DevTools />
      </main>
    ) : (<div id="loader">
      <div id="box" />
      <div id="hill" />
    </div>)
    );
  }
}

export default hot(module)(App);
