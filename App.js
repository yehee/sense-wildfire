import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/home/HomeScreen';
import MapScreen from './components/map/MapScreen';
import SearchScreen from './components/search/SearchScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import LocationScreen from './components/location/LocationScreen';
import NewsfeedScreen from './components/newsfeed/NewsfeedScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  Search: { screen: SearchScreen },
  Dashboard: { screen: DashboardScreen },
  Location: { screen: LocationScreen },
  Newsfeed: { screen: NewsfeedScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
