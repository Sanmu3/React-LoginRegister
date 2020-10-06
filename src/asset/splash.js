import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles3} from './style3';
import {styles} from '../../style';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles3.background}>
        <Image style={styles3.wp} source={require('../logo/wp.png')} />
        <Text style={styles3.text}>Welcome,{'\n'}Click To Start App</Text>
        <ActivityIndicator size="large" color="white" style={styles3.muter} />
      </View>
    );
  }
}
