import React, {  } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './Weather.css';
import '../../styles/loader.css';
import DailyForecast from './DailyForecast';

const WEATHER_QUERY = gql`
  query WeatherQuery {
    weather {
      id
      weather_state_name
      weather_state_abbr
      applicable_date
      min_temp
      max_temp
      wind_speed
      predictability
    }
  }
`;

const Weather = () => {
  return (
    <Query query={WEATHER_QUERY}>
      {
        ({ loading, error, data }) => {
          // suspense loader
          if (loading) return (
          <section className="weather__loader">
            <div className="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
          )
          error ? console.log(error) : console.log(data);
          
          return (
            <ul className="weather__day__wrapper card text-black">
              { data.weather.map(weather => (
                  <li className="weather__day--item card">
                    <DailyForecast key={weather.id} weather={weather}/>
                  </li>
                ))
              }
            </ul>
          ) 
        }
      }
    </Query>
  )
}

export default Weather;