import React, { Component } from 'react';
import { Button, View, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 200
    },
});

export default class ReportScreen extends Component {
    static navigationOptions = {
        title: 'Report',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ImageBackground source={require('../../assets/forest.jpg')} style={styles.background} />
            </View>
        );
    }
}
