import React from 'react';

const ActiveCity = ({ city: { name, address } }) => {
  return (
    <div className="active-city">
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
};

export default ActiveCity;
