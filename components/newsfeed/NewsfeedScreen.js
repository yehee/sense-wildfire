import React, { Component } from 'react';
import { View, ImageBackground, ScrollView, StyleSheet, Image } from 'react-native';
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
        width: 390,
        height: 200,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10
    },
    newsHeading: {
        marginHorizontal: 10,
        width: 275,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    news: {
        marginHorizontal: 10,
        width: 275
    },
    newsFooter: {
        paddingVertical: 5,
        color: '#888'
    },
    square: {
        width: 100,
        height: 100
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
                <Text style={{ fontWeight: 'bold', padding: 20, paddingBottom: 0 }} h4>News & Update</Text>
                <ScrollView horizontal>
                    <ImageBackground source={require('../../assets/wildfire.jpg')} style={styles.card}>
                        <Text style={styles.title} h5>B.C. Declares State of Emergency as Hundreds of Wildfires Burn across Province</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/wolves.jpg')} style={styles.card}>
                        <Text style={styles.title} h5>Wildlife of British Columbia: 13 Species To Look Out For This Summer</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/rabbits.jpg')} style={styles.card}>
                        <Text style={styles.title} h5>Carbon Emissions from B.C. Forests ‘Alarming’: Environmental Group</Text>
                    </ImageBackground>
                </ScrollView>
                <View style={{ padding: 10, paddingTop: 0 }}>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <Image source={require('../../assets/bear.jpg')} style={styles.square} />
                        <View>
                            <Text style={styles.newsHeading}>BC Wildfire Service invests in research looking at wildland firefighter health</Text>
                            <Text style={styles.news}>Richmond News 12 hours ago</Text>
                            <Text style={{ ...styles.news, ...styles.newsFooter }}>5 mins read · 30 people read</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <Image source={require('../../assets/fireside.jpg')} style={styles.square} />
                        <View>
                            <Text style={styles.newsHeading}>B.C. prepares to send firefighters to help tackle massive bush fires in Australia</Text>
                            <Text style={styles.news}>BC Today Nov. 19, 2019</Text>
                            <Text style={{ ...styles.news, ...styles.newsFooter }}>7 mins read · 21 people read</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <Image source={require('../../assets/lillooet.jpg')} style={styles.square} />
                        <View>
                            <Text style={styles.newsHeading}>California-like wildfire likelihood low for BC: BC Hydro</Text>
                            <Text style={styles.news}>CityNews Vancouver Nov. 15, 2019</Text>
                            <Text style={{ ...styles.news, ...styles.newsFooter }}>13 mins read · 7 people read</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <Image source={require('../../assets/wolves.jpg')} style={styles.square} />
                        <View>
                            <Text style={styles.newsHeading}>B.C. prepares to send firefighters to help tackle massive bush fires in Australia</Text>
                            <Text style={styles.news}>CBC.ca Nov. 15, 2019</Text>
                            <Text style={{ ...styles.news, ...styles.newsFooter }}>10 mins read · 13 people read</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <Image source={require('../../assets/sierra.jpg')} style={styles.square} />
                        <View>
                            <Text style={styles.newsHeading}>B.C. prepares to send firefighters to help tackle massive bush fires in Australia</Text>
                            <Text style={styles.news}>GlobalNews.ca Nov. 11, 2019</Text>
                            <Text style={{ ...styles.news, ...styles.newsFooter }}>3 mins read · 30 people read</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
