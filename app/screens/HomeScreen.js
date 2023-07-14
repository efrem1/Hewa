import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';
import {RestultComp, BackgroundWrapper} from 'components';
import {Loading} from '../components/Loading';
import {EmptyState} from '../components';

export const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?q=Dar es salaam&appid=4bd8b78bda5e507b5b9919f63bf6f97f`,
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
    })
      .then(({data}) => {
        setWeatherData(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <BackgroundWrapper style={styles.container}>
        <Loading />
      </BackgroundWrapper>
    );
  }

  if (!weatherData) {
    return (
      <BackgroundWrapper style={styles.container}>
        <EmptyState />
      </BackgroundWrapper>
    );
  }

  return <RestultComp data={weatherData} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#224496',
  },
});

var d = {
  base: 'stations',
  clouds: {all: 20},
  cod: 200,
  coord: {lat: -6.8235, lon: 39.2695},
  dt: 1689325078,
  id: 160263,
  main: {
    feels_like: 301.94,
    humidity: 51,
    pressure: 1020,
    temp: 301.36,
    temp_max: 301.36,
    temp_min: 301.36,
  },
  name: 'Dar es Salaam',
  sys: {
    country: 'TZ',
    id: 2635,
    sunrise: 1689305751,
    sunset: 1689348070,
    type: 1,
  },
  timezone: 10800,
  visibility: 10000,
  weather: [{description: 'few clouds', icon: '02d', id: 801, main: 'Clouds'}],
  wind: {deg: 190, speed: 8.23},
};
