import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  options = [];

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Map"
          onPress={() => navigate('Map')}
        />
        <Button
          title="Search"
          onPress={() => navigate('Search')}
        />
        <Button
          title="Dashboard"
          onPress={() => navigate('Dashboard', { location: 'Default Location' })}
        />
        <Button
          title="Newsfeed"
          onPress={() => navigate('Newsfeed')}
        />
      </View>
    );
  }
}
