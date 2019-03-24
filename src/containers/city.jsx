import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    console.log('clicked');
  }

  render() {
    const { city } = this.props;
    return (
      <div role="listitem" className="list-group-item" onClick={this.handleClick}><p>{city.name}</p></div>
    );
  }
}

export default City;
