import React from 'react';
const {gestureHandlerRootHOC} = require('react-native-gesture-handler');
import {SafeAreaProvider} from 'react-native-safe-area-context';
const {Navigation} = require('react-native-navigation');

import {HomeScreen} from './HomeScreen';
import {SearchScreen} from './SearchScreen';
import {ResultScreen} from './ResultScreen';
import {NavigationScreen} from './NavigationScreen';

function registerScreen(name, Comp) {
  const Component = gestureHandlerRootHOC(Comp);

  Navigation.registerComponent(
    name,
    () => props =>
      (
        <SafeAreaProvider>
          <Component {...props} />
        </SafeAreaProvider>
      ),
    () => Component,
  );
}

export function registerScreens() {
  registerScreen('Home', HomeScreen);
  registerScreen('Search', SearchScreen);
  registerScreen('Result', ResultScreen);
  registerScreen('Navigation', NavigationScreen);
}
