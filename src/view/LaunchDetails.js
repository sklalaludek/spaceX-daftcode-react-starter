import React from 'react';
import Header from '../components/Header';
import LaunchDetailsInfo from '../components/LaunchDetailsInfo';
import Footer from '../components/Footer';
import Mission from '../components/Mission';


const LaunchDetails = props => (
  <div id="page">
    <Header />
    <main>
      <h1 className="title" id="page-title">Launch Details</h1>
      <LaunchDetailsInfo
        rocket={props.rocket}
        launch={props.launch}
        launchSite={props.launchSite}
      />
      <Mission />
    </main>
    <Footer />
  </div>
);

export default LaunchDetails;
