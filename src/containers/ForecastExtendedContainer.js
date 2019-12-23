import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getForecastDataFromCities, getCity} from "../reducers";
import ForecastExtended from "../components/ForecastExtended";

class ForecastExtendedContainer extends Component {
  render() {
    const {city, forecastData} = this.props;
    return (
      city ? <ForecastExtended city={city} forecastData={forecastData}/> : <h2>No se ha seleccionado una ciudad</h2>
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.array
};

const mapStateToProps = state => ({city: getCity(state), forecastData: getForecastDataFromCities(state)});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);