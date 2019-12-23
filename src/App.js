import './App.css';
import React, {Component} from 'react';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import {Grid, Col, Row} from 'react-flexbox-grid';
import {AppBar, Typography, Toolbar} from '@material-ui/core';

const cities = [
  "Buenos Aires,ar",
  "Washington,us",
  "Sydney,au",
  "Tokyo,jp"
];

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography viariant='title' color='inherit'>
                WeatherApp
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
            <div className='details'>
              <ForecastExtendedContainer/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;