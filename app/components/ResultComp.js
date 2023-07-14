import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import dateFormat from 'dateformat';
import {LocName} from './LocName';
import {Weather} from './Weather';
import {ListItem} from './ListItem';
import {BackgroundWrapper} from './BackgroundWrapper';
import {Logo} from './Logo';
import PropTypes from 'prop-types';

export const RestultComp = ({data}) => {
  return (
    <BackgroundWrapper style={styles.container}>
      <Logo />
      <Animated.View entering={FadeIn.delay(500)}>
        <LocName name={data.name} />
        <Weather weathers={data.weather} temp={data.main.temp} />
      </Animated.View>
      <View>
        <ListItem
          icon={require('asset/wind_speed.png')}
          title="Winds Speed"
          value={`${data.wind.speed}km/h`}
          n={1200}
        />
        <ListItem
          icon={require('asset/calendar.png')}
          title={dateFormat(new Date(data.dt * 1000), 'dddd, dd mmm yyyy')}
          value={dateFormat(new Date(data.dt * 1000), 'HH:MM')}
          n={1400}
        />
        <ListItem
          icon={require('asset/humidity.png')}
          title="Humidity"
          value={`${data.main.humidity}%`}
          n={1600}
        />
      </View>
    </BackgroundWrapper>
  );
};

RestultComp.prototype = {
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224496',
    justifyContent: 'space-between',
  },
});
