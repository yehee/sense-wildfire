import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, ScrollView } from 'react-native';
import {
  Tile,
  ButtonGroup,
  Button,
  Icon,
  ListItem,
} from 'react-native-elements';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 32,
    color: '#3f5528',
    fontWeight: 'bold',
    marginBottom: 10,
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
  container: {
    flex: 1,
    height: 50,
  },
  warning: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

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
    const { status, selectedIndex, list, rules, contact } = this.state;
    const location = navigation.getParam('name', 'n/a');
    return (
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.title}>{location}</Text>
        <Text style={styles.subtitle}>Today's fire danger</Text>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={styles.container}>
            <View
              style={{
                backgroundColor: 'green',
                flex: 1,
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}
            />
            <Text style={styles.label}>LOW</Text>
          </View>
          <View style={styles.container}>
            <View style={{ backgroundColor: 'yellow', flex: 1 }} />
            <Text style={styles.label}>MODERATE</Text>
          </View>
          <View style={styles.container}>
            <View style={{ backgroundColor: 'orange', flex: 1 }} />
            <Text style={styles.label}>HIGH</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                backgroundColor: 'red',
                flex: 1,
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}
            />
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
              containerStyle={{ backgroundColor: '#bcc5c3', paddingTop: i === 0 ? 10 : 5, paddingBottom: i === rules.length - 1 ? 10 : 5, marginVertical: 0 }}
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
              containerStyle={{ backgroundColor: '#bcc5c3', paddingTop: i === 0 ? 10 : 5, paddingBottom: i === contact.length - 1 ? 10 : 5, marginVertical: 0 }}
              titleStyle={{ fontSize: 13 }}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
