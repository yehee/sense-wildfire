import React, { Component } from 'react';
import { Image, ScrollView, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

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
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      location: '',
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

  updateSearch = location => {
    this.setState({ location });
  };

  handleSubmit = () => {
    const { location } = this.state;
    const { navigate } = this.props.navigation;
    navigate('Dashboard', { location });
  };

  render() {
    const { location } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#3f5528' }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: '75%', height: 100, marginTop: 150, marginBottom: 50, alignSelf: 'center' }}
        />
        <SearchBar
          clearIcon={{ name: 'keyboard-arrow-right' }}
          placeholder="Search by Location/Region"
          onChangeText={this.updateSearch}
          onClear={this.handleSubmit}
          value={location || ''}
          containerStyle={{ backgroundColor: 'white', marginHorizontal: 20, padding: 0, borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
          inputStyle={{ fontSize: 14 }}
          inputContainerStyle={{ backgroundColor: 'white' }}
        />
        <Text style={{ ...styles.footer, marginTop: 25 }} onPress={() => navigate('Newsfeed')}>News & updates</Text>
        <Text style={styles.footer}>List of fire bans in BC</Text>
        <Text style={styles.footer}>List of parks in BC</Text>
        <Text style={styles.footer}>Quick guides</Text>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: '20%', height: 25, marginTop: 50, alignSelf: 'center' }}
        />
      </ScrollView>
    );
  }
}
