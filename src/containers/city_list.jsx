import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';

import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map(city => <City role="list" city={city} key={city.slug} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
