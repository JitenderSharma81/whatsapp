import React from 'react';
import { Text, View, Button } from 'react-native';
//const util = require('util');

export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Details screen',
    };

    render() {
        //console.log("this.props.navigation.state = " + util.inspect(this.props.navigation.state, false, null));
        return (
            <View>
                <Text>This is details screen </Text>
            </View>
        )
    }
}