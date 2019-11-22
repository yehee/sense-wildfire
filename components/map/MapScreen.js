import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { region } = this.state;
    return (
      <MapView
        style={styles.map}
        region={region}
        onRegionChange={() => this.onRegionChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
