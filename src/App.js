import { hot } from 'react-hot-loader';
import * as React from 'react';
import { RingLoader } from 'react-spinners';
/* launche details */
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import LaunchDetails from './view/LaunchDetails';
/* launche list */
import LaunchesList from './view/LaunchesList';

/* footer */
import Footer from './view/Footer';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
      launches: [],
      launch: '',
      launchSite: '',
      rocket: '',
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent() {
    const { viewName, launches } = this.state;

    switch (viewName) {
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
            launchSite={this.state.launch.launchSite}
            rocket={this.state.launch.rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches/all')
      .then(resp => resp.json())
      .then(data => this.setState({ launches: data }))
      .catch(err => console.log(err));
  }

  handleLaunchClick(el) {
    this.setState({ viewName: 'details', launch: el });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    return (this.state.viewName ?
      <main className="page-container">
        <div className="page-content">
          {this.activeViewComponent}
          <Footer />
        </div>
      </main> : (<div>
        {console.log('loder')}
        <RingLoader
          color="#fff"
        />
      </div>)
    );
  }
}

export default hot(module)(App);
