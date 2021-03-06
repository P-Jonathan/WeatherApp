import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/*
const Location = (props) => {
  // Destructuring
  const { city } = props;

  return (
    <div><h1>{city}</h1></div>
  );
};
*/

const Location = ({ city }) => (
  <div className="locationCount">
    <h1>{city}</h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;