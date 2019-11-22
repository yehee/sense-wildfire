import React, { Component } from 'react';
import { Button, View, Image, ScrollView, Text, StyleSheet } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  footer: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    marginVertical: 12.5
  }
});
export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      list: [
        {
          name: 'Lillooet Lake Lodge',
          subtitle: 'Squamish-Lillooet C, BC V0K 1Z0',
        },
        {
          name: 'Narin falls provincial park',
          subtitle: 'Whistler, BC V0N 1B4',
        },
      ],
    };
  }

  updateSearch = value => {
    this.setState({ search: value });
  };

  handleSubmit = value => {
    console.log(value);
  };

  render() {
    const { search, list } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#3f5528' }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: '75%', height: 100, marginTop: 150, marginBottom: 50, alignSelf: 'center' }}
        />
        <SearchBar
          placeholder="Search by Location/Region"
          onChangeText={this.updateSearch}
          value={search || ''}
          containerStyle={{ backgroundColor: 'white', marginHorizontal: 20 }}
          inputStyle={{ fontSize: 14 }}
          inputContainerStyle={{ backgroundColor: 'white' }}
        />
        <Text style={{ ...styles.footer, marginTop: 25 }}>News & updates</Text>
        <Text style={styles.footer}>List of fire bans in BC</Text>
        <Text style={styles.footer}>List of parks in BC</Text>
        <Text style={styles.footer}>Quick guides</Text>
        {/* <View style={{ flex: 1, backgroundColor: '#3f5528' }}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </View> */}
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: '20%', height: 25, marginTop: 50, alignSelf: 'center' }}
        />
      </ScrollView>
    );
  }
}
