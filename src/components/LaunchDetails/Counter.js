import React, { Component } from 'react';

class Counter extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches')
      .then(resp => resp.json())
      .then(data => this.setState({ data: data.slice(-1)[0].launch_date_unix }));
  }

  formatDate() {
    const difference = Math.floor(Date.now() / 1000) - this.state.data;
    const days = Math.floor(difference / (3600 * 24));
    const hours = Math.floor((difference / 3600) - (days * 24));
    const minutes = Math.floor((difference / 60) - ((days * 24 * 60) + (hours * 60)));
    return `${days} days ${hours} hrs ${minutes} mins after the start`;
  }

  render() {
    return this.state.data ? (
      <div className="info-section__counter">
        {this.formatDate()}
      </div>
    ) : null;
  }
}

export default Counter;
