import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CityWhether from './CityWhether';
import useAPI from './useAPI';

export interface IWhethers{
  city:string;
  date:string;
  temperatureC:number;
  temperatureF:number;
  summary:string;
}

function App() {

  const data = useAPI('https://localhost:7138/WeatherForecast');

  return (
    <div className="App">
      {
        data.map((whether:IWhethers)=>{
          return <CityWhether {...whether} />
        })
      }
        
    </div>
  );
}

export default App;
