import React from 'react';

import CityList from '../containers/city_list';
import ActiveCity from './active_city';

import cities from '../../data/cities';

const App = () => {
  return (
    <div className="app">
      <CityList cities={cities} />
      <ActiveCity city={cities[0]} />
    </div>
  );
};

export default App;
