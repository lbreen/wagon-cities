import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render () {
    return (
      <div className="active-city">
        <h2>{this.props.selectedCity.name}</h2>
        <p>{this.props.selectedCity.address}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
