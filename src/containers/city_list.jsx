import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map(city => <City role="list" city={city} key={city.slug} />)}
      </div>
    );
  }
}

export default CityList;
