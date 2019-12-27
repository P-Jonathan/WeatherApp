import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
// import {bindActionCreators} from "redux";
// import * as actions from "../actions";
import {getCity, getWeatherCities} from "../reducers";
import {setSelectedCity, setWeather} from "../actions";
import LocationList from "./../components/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const {setWeather, setCity, cities, city} = this.props;
    setWeather(cities);
    setCity(city);
  }

  handleSelection = city => {
    this.props.setCity(city);
  };

  render() {
    return (
      <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelection}/>
    );
  }
}

LocationListContainer.propTypes = {
  city: PropTypes.string,
  cities: PropTypes.array.isRequired,
  setCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  citiesWeather: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

/*
// noinspection JSCheckFunctionSignatures
const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
*/

const mapDispatchToPropsActions = dispatch => ({
  setCity: city => dispatch(setSelectedCity(city)),
  setWeather: cities => dispatch(setWeather(cities))
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);