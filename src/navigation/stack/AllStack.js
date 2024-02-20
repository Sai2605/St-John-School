import React, { lazy } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'


import OnboardingScreen from '../../screens/OnBoardScreen';
import Login from './Login';
import Register from './Register';
import Splash from './Splash';
import Referral from './Referral';
import AllDrawer from '../drawer/AllDrawer';
import FullList from '../tab/lottery/FullList';
import SingleDay from '../tab/lottery/SingleDay';
import SinglePrice from '../tab/lottery/singleprice/SinglePrice';
import Results from '../tab/lottery/Results';
import Notification from './Notification';

import { COLORS, FONTWEIGHTS, SIZES } from '../../constants'
import MyBalance from './balance/MyBalance';
import Dummy from '../../../Dummy';
import HomeWork from './HomeWork';
import UpcomingEvents from '../../../Components/UpcomingEvents';


const Stack = createStackNavigator();

// const LOGIN = lazy(() => import('./Login'))
const REGISTER = lazy(() => import('./Register'))
const ALLDRAWER = lazy(() => import('./../drawer/AllDrawer'))



const AllStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >

            {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={REGISTER} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Referral" component={Referral} />

            <Stack.Screen name="AllDrawer" component={ALLDRAWER} />

            <Stack.Screen name="HomeWorks" component={HomeWork} options={{
                headerShown: true,
                title: "Home Work",
                headerTitleStyle: { color: COLORS.white },
                headerStyle: styles.container,
                headerTintColor: COLORS.white
            }} />

            <Stack.Screen name="UpcomingEvents" component={UpcomingEvents} options={{
                headerShown: true,
                title: "UpcomingEvents",
                headerTitleStyle: { color: COLORS.white },
                headerStyle: styles.container,
                headerTintColor: COLORS.white
            }} />
            <Stack.Screen name="SingleDay" component={SingleDay} options={{
                headerShown: true,
                title: "Monday Mania",
                headerStyle: styles.container
            }} />
            <Stack.Screen name="SinglePrice" component={SinglePrice} options={{
                headerShown: false,
                title: "Monday Mania ₹40",
                headerStyle: styles.container
            }} />
            <Stack.Screen name="Results" component={Results} options={{
                headerShown: true,
                title: "Result",
                headerStyle: styles.container
            }} />
            <Stack.Screen name="Notification" component={Notification} options={{
                headerShown: true,
                title: "Notification",
                headerStyle: styles.container
            }} />
            <Stack.Screen name="MyBalance" component={MyBalance} options={{
                headerShown: true,
                title: "My Balance",
                headerStyle: styles.container
            }} />

        </Stack.Navigator>
    )
}

export default AllStack

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
    }
})
