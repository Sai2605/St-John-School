import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const Profile = () => {
    return (
        <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
            <Text>Notice Board
            </Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})