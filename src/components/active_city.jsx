import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = ({ selectedCity: { name, address } }) => {
  return (
    <div className="active-city">
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
};


function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
