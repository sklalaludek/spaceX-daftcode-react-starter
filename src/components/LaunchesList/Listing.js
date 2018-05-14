import React, { Component } from 'react';

class Listing extends Component {
  state = {
    data: '',
  }
  render() {
    return (
      <div>
        Listing {this.state.data}
      </div>
    );
  }
}

export default Listing;
