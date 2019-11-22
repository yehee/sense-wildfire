import React, { Component } from 'react';
import { View, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 200
    },
    title: {
        bottom: 0,
        position: 'absolute',
        color: 'white',
        margin: 10
    },
    card: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginVertical: 10
    }
});

export default class NewsfeedScreen extends Component {
    static navigationOptions = {
        title: 'News & Update',
        header: null
    };

    render() {
        return (
            <ScrollView>
                <ImageBackground source={require('../../assets/forest.jpg')} style={styles.background} />
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: 'bold' }} h4>News & Update</Text>
                    <ImageBackground source={require('../../assets/wildfire.jpg')} style={styles.card}>
                        <Text style={styles.title} h5>B.C. Declares State of Emergency as Hundreds of Wildfires Burn across Province</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/wolves.jpg')} style={styles.card}>
                        <Text style={styles.title} h5>Wildlife of British Columbia: 13 Species To Look Out For This Summer</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/forest.jpg')} style={styles.card}>
                        <Text style={styles.title} h5>Carbon Emissions from B.C. Forests ‘Alarming’: Environmental Group</Text>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}
