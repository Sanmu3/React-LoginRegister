import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles} from '../../style';
import {styles2} from './style2';

export default class Register extends Component {
  render() {
    return (
      <View style={styles2.background}>
        <Text style={styles2.signup}> Sign Up </Text>
        <Text style={styles2.email}>Email</Text>
        <View style={styles2.input}>
            <TextInput placeholder='Masukan Email anda....'/>
        </View>
        <Text style={styles2.tpass}>Password</Text>
        <View style={styles2.pass}>
            <TextInput placeholder='Masukan Password anda....'/>
        </View>
        <Text style={styles2.tcpass}>Confirm Password</Text>
        <View style={styles2.cpass}>
            <TextInput placeholder='Konfirmasi Password anda....'/>
        </View>
        <Text style={styles2.tnope}>No. Hp</Text>
        <View style={styles2.nope}>
            <TextInput placeholder='Masukan Nomor Hp anda....'/>
        </View>
        <View style={styles2.daftar}>
          <Text style={styles2.tdaftar}>Daftar</Text>
        </View>
          <Text style={styles2.tsignin}>Have account?</Text>
        <Text style={styles2.bsignin}>Sign In</Text>
      </View>
    );
  }
}
