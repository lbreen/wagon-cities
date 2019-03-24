import React from 'react';

import CityList from '../containers/city_list';

import cities from '../../data/cities';

const App = () => {
  return (
    <div className="app">
      <CityList cities={cities} />
      <div className="active-city" />
    </div>
  );
};

export default App;
