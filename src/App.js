import './App.css';
import React, {Component} from 'react';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import {Grid, Col, Row} from 'react-flexbox-grid';
import {AppBar, Typography, Toolbar} from '@material-ui/core';

const cities = [
  "Buenos Aires,ar",
  "San Fernando del Valle de Catamarca,ar",
  "Resistencia,ar",
  "Rawson,ar",
  "Cordoba,ar",
  "Corrientes,ar",
  "Parana,ar",
  "Formosa,ar",
  "San Salvador de Jujuy,ar",
  "Santa Rosa,ar",
  "La Rioja,ar",
  "Mendoza,ar",
  "Posadas,ar",
  "Neuquen,ar",
  "Viedma,ar",
  "Salta,ar",
  "San Juan,ar",
  "San Luis,ar",
  "Rio Gallegos,ar",
  "Santa Fe de la Vera Cruz,ar",
  "Santiago del Estero,ar",
  "Ushuaia,ar",
  "San Miguel de Tucuman,ar",
];

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography viariant='title' color='inherit'>
                Clima de las principales ciudades de Argentina
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
