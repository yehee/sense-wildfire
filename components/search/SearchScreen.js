import React, { Component } from 'react';
import { Button, View, Image, ScrollView } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';

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
        <View>
          <Image
            source={require('../../assets/logo.png')}
            style={{ width: '75%', height: 100, marginVertical: 100, alignSelf: 'center' }}
          />
        </View>
        <SearchBar
          placeholder="Search by Location/Region"
          onChangeText={this.updateSearch}
          value={search || ''}
          containerStyle={{ backgroundColor: 'white', marginHorizontal: 10 }}
          inputContainerStyle={{ backgroundColor: 'white' }}
        />
        <View style={{ flex: 1, backgroundColor: '#3f5528' }}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
