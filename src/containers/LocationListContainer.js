import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getWeatherCities} from "../reducers";
import {setSelectedCity, setWeather} from "../actions";
import LocationList from "./../components/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const {setWeather, cities} = this.props;
    setWeather(cities);
  }

  handleSelection = city => {
    console.log("Se hizo click en: ", city);
    this.props.setCity(city);
  };

  render() {
    return (
      <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelection}/>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state)
});

const mapDispatchToPropsActions = dispatch => ({
  setCity: city => dispatch(setSelectedCity(city)),
  setWeather: cities => dispatch(setWeather(cities))
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);