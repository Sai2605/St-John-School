import React, { useEffect, lazy } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Result from './Result';
import Profile from './Profile';
import Setting from './Setting';
import Wallet from './Wallet';
import DropDown from '../../screens/DropDown';

import { LocalImage } from '../../assets/images'

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




import { useTranslation } from 'react-i18next';
import { COLORS } from '../../constants';


const Tab = createBottomTabNavigator();

const LOTTERY = lazy(() => import("./lottery/Lottery"))

const AllTab = ({ navigation, route }) => {

    const { name, class_section, roll_number, dob } = route.params;

    const { t } = useTranslation();
    console.log('Student names', name)

    return (
        <Tab.Navigator
            initialRouteName='Lottery'
            backBehavior="initialRoute"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
                title: " ",
                headerStyle: { backgroundColor: COLORS.primary },
                headerLeft: ({ color, size, focused }) => (<TouchableOpacity
                    onPress={() => navigation.toggleDrawer()
                    }
                >
                    <Entypo name="menu" size={30} color={focused ? color : '#FFFFFF'} style={{ marginLeft: 10 }} /></ TouchableOpacity>),
                headerRight: ({ color, size, focused }) => (<View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <TouchableOpacity>
                        <DropDown />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notification')}
                    >
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color={focused ? color : COLORS.white}
                            style={{ marginRight: 25 }}
                        />
                    </TouchableOpacity>
                </View>),

                tabBarHideOnKeyboard: true,
                tabBarStyle: { backgroundColor: COLORS.white, height: 60, paddingBottom: 5 ,elevation:10},
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.gray,

            }}
        >
            <Tab.Screen name="Setting" component={Setting} options={{
                headerTitle: ' ',
                title: t('Home Work'),
                tabBarLabelStyle: { color: '#B80900' },
                tabBarIcon: ({ size, focused, color }) => {
                    const iconSize = focused ? 35 : 28;

                    return (
                        <Image
                            style={{ width: iconSize, height: iconSize }}
                            source={focused ? LocalImage.HOMO : LocalImage.HOME}

                        />
                    );
                },
            }} />
            <Tab.Screen name=" Profile" component={Profile} options={{
                headerTitle: ' ',
                title: t('Notice Board'),
                tabBarLabelStyle: { color: '#B80900' },
                tabBarIcon: ({ size, focused, color }) => {
                    const iconSize = focused ? 32 : 28;

                    return (
                        <Image
                            style={{ width: iconSize, height: iconSize }}
                            source={focused ? LocalImage.BOARDS : LocalImage.BOARD}

                        />
                    );
                },
            }} />
            <Tab.Screen
                name="Lottery"
                component={LOTTERY}
                initialParams={{ name, class_section, roll_number, dob }}
                options={({ route }) => ({
                    headerTitle: () => (
                        <Text style={{ color: COLORS.white, fontSize: 14 }}>
                            {route.params.name}
                        </Text>
                    ),
                    headerTitleStyle: { color: COLORS.white, fontSize: 14 },
                    title: route.params.name, // Corrected
                    tabBarLabelStyle: { color: '#B80900' },
                    tabBarIcon: ({ size, focused, color }) => {
                        const iconSize = focused ? 26 : 23;

                        return (
                            <Image
                                style={{ width: iconSize, height: iconSize }}
                                source={focused ? LocalImage.VECTOR : LocalImage.VECTORS}
                            />
                        );
                    },
                })}
            />

            <Tab.Screen name="Result" component={Result} options={{
                headerTitle: ' ',
                title: t('Write to school'),
                tabBarLabelStyle: { color: '#B80900' },
                tabBarIcon: ({ size, focused, color }) => {
                    const iconSize = focused ? 32 : 28;

                    return (
                        <Image
                            style={{ width: iconSize, height: iconSize }}
                            source={focused ? LocalImage.MES : LocalImage.MESS}

                        />
                    );
                },
            }} />

            <Tab.Screen name=" Wallet" component={Wallet} options={{
                headerTitle: ' ',
                title: t('Fee History'),
                tabBarLabelStyle: { color: '#B80900' },
                tabBarIcon: ({ size, focused, color }) => {
                    const iconSize = focused ? 32 : 28;

                    return (
                        <Image
                            style={{ width: iconSize, height: iconSize }}
                            source={focused ? LocalImage.WALLE : LocalImage.WALL}

                        />
                    );
                },
            }} />

        </Tab.Navigator>
    )
}

export default AllTab

