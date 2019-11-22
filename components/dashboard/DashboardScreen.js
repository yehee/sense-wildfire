import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import {
  ListItem,
  Icon
} from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { locations } from '../../data/locations';
import axios from 'axios';

const latitudeDelta = longitudeDelta = 0.9;

const COLOR_RED = '#DB4437';
const COLOR_YELLOW = '#F4B400';
const COLOR_GREEN = '#0F9D58';
const COLOR_ORANGE = '#FF7F00';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 200
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 32,
    color: '#3f5528',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBar: {
    flexDirection: 'row',
    height: 100,
    paddingBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 10
  },
  label: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
  listItem: {
    backgroundColor: '#bcc5c3',
    marginVertical: 0
  },
  container: {
    flex: 1,
    height: 50,
  },
  warning: {
    fontSize: 24,
    color: COLOR_RED,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: 300,
  },
});

const LOW = (status) => (
  <View
    style={{
      ...styles.statusItem,
      backgroundColor: COLOR_GREEN,
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
    }}
  >
    {status === 'LOW' && <Icon name='star' />}
  </View>
);

const HIGH = (status) => (
  <View
    style={{
      ...styles.statusItem,
      backgroundColor: COLOR_ORANGE
    }}
  >
    {status === 'HIGH' && <Icon name='star' />}
  </View>
);

const EXTREME = (status) => (
  <View
    style={{
      ...styles.statusItem,
      backgroundColor: COLOR_RED,
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    }}
  >
    {status === 'EXTREME' && <Icon name='star' />}
  </View>
);

const MODERATE = (status) => (
  <View style={{
    ...styles.statusItem,
    backgroundColor: COLOR_YELLOW
  }}>
    {status === 'MODERATE' && <Icon name='star' />}
  </View>
);

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  constructor(props) {
    super(props);

    this.state = {
      status: 0,
      selectedIndex: 3,
      rules: [
        { name: 'Do not leave fire unattended' },
        { name: 'Avoid smoking' },
        { name: 'Do not use fireworks or sparklers' },
        { name: 'Do not start fires in high winds' },
        { name: 'Ensure campfire is properly put out' },
      ],
      contact: [
        { name: 'In case of fire, immediately dial 911' },
        { name: 'Local Part Ranger: (233) 788 - 9990' }
      ],
      source: require('../../assets/lillooet.jpg'),
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta,
        longitudeDelta,
      },
      marker: {
        coordinates: {
          latitude: 50.2641,
          longitude: -122.5390,
        },
        title: 'Lillooet Lake',
        description: 'Extreme',
      }
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { region, marker } = this.state;
    const title = navigation.getParam('location', 'Lillooet Lake');
    console.log(title)
    const { coordinates, description, source } = locations.find(location => location.title === title);
    this.setState({
      marker: {
        ...marker,
        coordinates,
        title,
        description
      }
    });
    this.setState({
      region: {
        ...region,
        ...coordinates
      },
      source
    });
    try {
      const response = await axios.get('http://10.171.37.73:8000/fireRisk.html');
      const { marker } = this.state;
      this.setState({
        marker: {
          ...marker,
          description: response.data
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const { navigation } = this.props;
    const { rules, contact, region, marker, source } = this.state;
    const { coordinates, title, description } = marker;
    const location = navigation.getParam('location', 'n/a');
    console.log(description)
    return (
      <ScrollView>
        <ImageBackground source={source} style={styles.background} />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{location}</Text>
          <Text style={styles.subtitle}>Today's fire danger</Text>
          <View
            style={styles.statusBar}>
            <View style={styles.container}>
              {LOW(description)}
              <Text style={styles.label}>LOW</Text>
            </View>
            <View style={styles.container}>
              {MODERATE(description)}
              <Text style={styles.label}>MODERATE</Text>
            </View>
            <View style={styles.container}>
              {HIGH(description)}
              <Text style={styles.label}>HIGH</Text>
            </View>
            <View style={styles.container}>
              {EXTREME(description)}
              <Text style={styles.label}>EXTREME</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Is there a fire ban?</Text>
          <Text style={styles.warning}>{description === 'EXTREME' || description === 'HIGH' ? 'YES' : 'NO'}</Text>
          <Text style={{ ...styles.subtitle, marginTop: 10 }}>Preventing fires</Text>
          <View>
            {rules.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                containerStyle={{ ...styles.listItem, paddingTop: i === 0 ? 10 : 5, paddingBottom: i === contact.length - 1 ? 10 : 5, marginVertical: 0 }}
                titleStyle={{ fontSize: 13 }}
              />
            ))}
          </View>
          <Text style={{ ...styles.subtitle, marginTop: 10 }}>Contact information</Text>
          <View>
            {contact.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                containerStyle={{ ...styles.listItem, paddingTop: i === 0 ? 10 : 5, paddingBottom: i === contact.length - 1 ? 10 : 5 }}
                titleStyle={{ fontSize: 13 }}
              />
            ))}
          </View>
        </View>
        <Text style={{ ...styles.subtitle, marginTop: 10 }}>Location</Text>
        <MapView
          style={styles.map}
          region={region}
          showsUserLocation={true}
          onRegionChange={() => this.onRegionChange}
        >
          {<Marker
            coordinate={coordinates}
            title={title}
            description={description}
          // onPress={() => this._handleEvent(marker.id)}
          />}
        </MapView>
      </ScrollView>
    );
  }
}
