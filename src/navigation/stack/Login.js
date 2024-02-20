import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native';

import { COLORS, FONTWEIGHTS, SIZES } from '../../constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { URI } from '../../assets/images';

import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = (props) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handlepress = async () => {
    const url = 'https://sjpsapi.theshivgames.com/auth';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,

        }),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`Failed to data Status: ${response.status}, Message: ${errorResponse}`);
      }
      else {
        const json = await response.json();
        // console.log(json.data.studentInfo);

        const name = json.data.studentInfo.name;
        const class_section = json.data.studentInfo.class_section;
        const roll_number = json.data.studentInfo.roll_number;
        const dob = json.data.studentInfo.dob;
        const profile_pic_url = json.data.studentInfo.profile_pic_url;



        await AsyncStorage.setItem('username', username);


        // console.log(name);

        props.navigation.navigate('AllDrawer', {
          name: name,
          class_section: class_section,
          roll_number: roll_number,
          dob: dob,
          profile_pic_url: profile_pic_url
        })
        console.log('success')
      }


      return json;
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../../assets/images/logoo.png')} style={styles.imagestyle} />
      </View>
      <View style={styles.middle}>
        {/* <Text style={styles.headerTitle}>Sign In Account</Text> */}


        <View style={styles.input}>
          <MaterialCommunityIcons name='account' color={COLORS.gray} size={24} />
          <TextInput
            value={username}
            onChangeText={(val) => setusername(val)}
            placeholder="Email / Username"
            placeholderTextColor={COLORS.gray}
            textAlign='left'
            style={{ width: '100%' }}
            // onKeyPress={press}
            selectionColor={COLORS.gray}
          // keyboardType="number-pad"
          // maxLength={10}
          />
        </View>

        {/* <Text style={styles.headerTitle}>Sign In Account</Text> */}
        <View style={styles.input}>
          <FontAwesome name='lock' color={COLORS.gray} size={24} style={{ paddingHorizontal: 5 }} />
          <TextInput
            value={password}
            onChangeText={(val) => setpassword(val)}
            placeholder="Password"
            placeholderTextColor={COLORS.gray}
            textAlign='left'
            style={{ width: '100%' }}
            selectionColor={COLORS.gray}
          // keyboardType="number-pad"
          // maxLength={10}
          />
        </View>



        <Text style={{ textAlign: 'right', fontFamily: 'Inter-Medium', width: '80%' }}>Forgot your password?</Text>

        <TouchableOpacity
          onPress={handlepress}
          style={[styles.buttonText, { backgroundColor: '#B80900' }]}>
          <Text style={styles.buttonText1}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <TouchableOpacity style={{ marginVertical: 10 }}>
            <Text style={styles.signupText}>© 2021 St. John's Public School Management</Text>
          </TouchableOpacity>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: COLORS.white,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  header: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  imagestyle: {
    width: '60%',
    height: '70%',
    resizeMode: 'contain'
  },
  headerTitle: {
    color: COLORS.black,
    fontSize: SIZES.padding,
    fontWeight: FONTWEIGHTS.medium,
    alignSelf: "center",
    marginBottom: 20
  },
  input: {
    flexDirection: 'row',
    // marginTop: 5,
    color: COLORS.black,
    width: '80%',
    // height: 50,
    fontSize: SIZES.h3,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    textAlign: "center",
    marginBottom: '5%',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 10,
    gap: 10
  },

  buttonText: {
    backgroundColor: COLORS.blue,
    padding: 15,
    paddingHorizontal: '10%',
    borderRadius: 5,
    marginVertical: '10%',
    alignItems: "center",
    width: '80%',
    color: COLORS.gray
  },
  buttonText1: {
    fontSize: SIZES.title,
    textAlign: "center",
    fontFamily: 'Inter-Medium',
    color: COLORS.white,
  },
  signupText: {
    textAlign: "center",
    color: COLORS.black,
    fontSize: SIZES.font,
    // marginTop: '5%',
    fontWeight: FONTWEIGHTS.regular
  },
  signupLink: {
    color: COLORS.black,
    fontWeight: FONTWEIGHTS.bold,
  },
  textContainer: {
    width: "90%",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
  }
})