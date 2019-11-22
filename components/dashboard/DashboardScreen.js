import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import {
  ListItem,
} from 'react-native-elements';

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
});

const LOW = () => (
  <View
    style={{
      backgroundColor: COLOR_GREEN,
      flex: 1,
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
    }}
  />
);

const HIGH = () => (
  <View
    style={{
      backgroundColor: COLOR_ORANGE,
      flex: 1
    }}
  />
);

const EXTREME = () => (
  <View
    style={{
      backgroundColor: COLOR_RED,
      flex: 1,
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    }}
  />
);

const MODERATE = () => (<View style={{ backgroundColor: COLOR_YELLOW, flex: 1 }} />);

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  constructor(props) {
    super(props);

    this.state = {
      status: 0,
      selectedIndex: 3,
      list: [
        { name: 'Lillooet Lake Lodge', subtitle: 'City, Province' },
        { name: 'Narin falls', subtitle: 'City, Province' },
      ],
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
      ]
    };
  }

  render() {
    const { navigation } = this.props;
    const { rules, contact } = this.state;
    const location = navigation.getParam('location', 'n/a');
    return (
      <ScrollView>
        <ImageBackground source={require('../../assets/forest.jpg')} style={styles.background} />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{location}</Text>
          <Text style={styles.subtitle}>Today's fire danger</Text>
          <View
            style={styles.statusBar}>
            <View style={styles.container}>
              {LOW()}
              <Text style={styles.label}>LOW</Text>
            </View>
            <View style={styles.container}>
              {MODERATE()}
              <Text style={styles.label}>MODERATE</Text>
            </View>
            <View style={styles.container}>
              {HIGH()}
              <Text style={styles.label}>HIGH</Text>
            </View>
            <View style={styles.container}>
              {EXTREME()}
              <Text style={styles.label}>EXTREME</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Is there a fire ban?</Text>
          <Text style={styles.warning}>YES</Text>
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
      </ScrollView>
    );
  }
}
