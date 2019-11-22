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

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const App = createAppContainer(MainNavigator);

export default App;
