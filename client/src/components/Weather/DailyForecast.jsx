import React from 'react';
import './Weather.css';

const DailyForecast = ({ weather: {
  weather_state_name,
  weather_state_abbr,
  applicable_date,
  min_temp,
  max_temp,
  wind_speed,
  predictability
}}) => {
  const imgUri = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;
  const date = new Date(applicable_date);
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  
  return(
    <main className="weather__day">
      <p className="weather__date">{day}/{month}</p>
      {<img className="weather__img"src={imgUri} alt="weather"/>}
      <p>{Math.round(min_temp * 10)/ 10}°C - {Math.round(max_temp * 10)/ 10}°C{Math.round(wind_speed * 10)/ 10} m/s</p>
    </main>
  )
}

export default DailyForecast;