import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    const { city } = this.props;
    return (
      <div role="listitem" className="list-group-item" onClick={this.handleClick}><p>{city.name}</p></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
