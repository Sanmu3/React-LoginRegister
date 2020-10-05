import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {styles} from '../../style';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.signin}> Sign In </Text>
        <Text style={styles.email}>Email</Text>
        <View style={styles.input}>
          <TextInput placeholder="Masukan Email....."></TextInput>
        </View>
        <Text style={styles.pass}>Password</Text>
        <View style={styles.inputpass}>
          <TextInput placeholder="Masukan Password....."></TextInput>
        </View>
        <Text style={styles.forgotpass}>Forgot Password ?</Text>
        <View style={styles.login}>
          <Text style={styles.tlogin}>Login</Text>
        </View>
        <Text style={styles.or}>- OR -</Text>
        <View style={styles.fb}>
          <Image style={styles.lfb} source={require('../logo/facebook.png')} />
        </View>
        <View style={styles.gg}>
          <Image style={styles.lgg} source={require('../logo/google.png')} />
        </View>
        <Text style={styles.tsignup}>Don't have any account?</Text>
        <Text style={styles.bsignup}>Sign Up</Text>
      </View>
    );
  }
}
