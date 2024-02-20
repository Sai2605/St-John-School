import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState, useEffect, lazy } from 'react';

import DrawerProfile from './DrawerProfile'
import DrawerSettings from './DrawerSettings'
import Privacy from './Privacy'
import SignOut from './SignOut'
import TopWinner from './TopWinner'
import DrawerDP from './DrawerDP';
import LoadingScreen from '../../screens/LoadingScreen';
import MyBalance from '../stack/balance/MyBalance';
import { COLORS, SIZES } from '../../constants'


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'



import { useTranslation } from 'react-i18next';
import i18n from '../../services/i18next'
import Notification from './Notification';
import School from './School';
import Attendancee from './Attendancee';
import Settings from './Settings';
import Alerts from './Alerts';
import WriteSchool from './WriteSchool';
import { LocalImage } from '../../assets/images';

const yourText = "Academic Session: 2023 - 2024";
const paddingValue = yourText.length > 8 ? 20 : 5;

const Drawer = createDrawerNavigator();

const AllDrawer = ({ route }) => {


    const { t } = useTranslation();
    const TAB = lazy(() => import('../tab/AllTab'))
    const { name, class_section, roll_number, dob, profile_pic_url } = route.params;


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <LoadingScreen />
        );
    }


    return (
        <Drawer.Navigator
            drawerContent={
                (props) => {
                    return (
                        <ScrollView>
                            <View
                                style={{
                                    height: SIZES.height / 5,
                                    width: '100%',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: '#FFFFFF',
                                    borderBottomColor: COLORS.white,
                                    borderBottomWidth: 1,
                                    marginBottom: 15
                                    //  backgroundColor: "red"
                                }}
                            >
                                <View style={{ padding: 10, height: '80%', width: '100%', alignItems: 'center' }}>
                                    <Image source={require('./../../assets/images/pic.png')} style={{ width: SIZES.width / 1.5, height: SIZES.height / 8, resizeMode: 'contain' }} />
                                    <Text
                                        style={{
                                            width: '100%',
                                            fontSize: 14,
                                            fontWeight: "500",
                                            color: "#111",
                                            // backgroundColor:'green',
                                            textAlign: 'center'
                                            // alignSelf:'center'
                                        }}
                                    >Academic Session: 2023 - 2024</Text>
                                </View>



                            </View>
                            {/* <ScrollView> */}
                            <DrawerItemList {...props} />

                            <View style={{ height: SIZES.height / 5, justifyContent: 'flex-end', marginBottom: 30 }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#FFFFFF', margin: 20, borderRadius: 5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'
                                }}>
                                    <FontAwesome name='sign-out' color={COLORS.primary} size={24} />
                                    <Text style={{ padding: 10, alignSelf: 'center', color: COLORS.primary, fontWeight: '500' }}>LOGOUT</Text>
                                </TouchableOpacity>
                            </View>

                            {/* </ScrollView> */}
                        </ScrollView>
                    )
                }
            }
            screenOptions={{
                // sceneContainerStyle:{height:'50%'},
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#B80900',
                    width: SIZES.width / 1.3,
                    height: SIZES.height / 1
                },
                headerStyle: {
                    // backgroundColor: "#f4511e",
                },
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                    fontWeight: "500"
                },
                drawerLabelStyle: {
                    color: COLORS.white
                }
            }}
        >
            <Drawer.Screen name="AllTab" component={TAB}
                initialParams={{ name, class_section, roll_number, dob, profile_pic_url }}
                options={{
                    title: t('Dashboard'),
                    drawerIcon: ({ size, focused, color }) => {
                        const iconSize = 20;

                        return (
                            <MaterialCommunityIcons name='view-dashboard' color={COLORS.white} size={20} />

                        );
                    },
                }}
            />
            <Drawer.Screen name="DrawerProfile" component={DrawerProfile} options={{
                title: t('Profile'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <Fontisto name='person' color={COLORS.white} size={20} />

                    );
                },
            }} />

            <Drawer.Screen name="TopWinner" component={TopWinner} options={{
                title: t('Teachers'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <MaterialCommunityIcons name='account-tie-hat-outline' color={COLORS.white} size={20} />

                    );
                },
            }} />

            <Drawer.Screen name="Privacy" component={Privacy} options={{
                title: t('Academic Subjects'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <Foundation name='clipboard-notes' color={COLORS.white} size={20} />

                    );
                },
            }} />

            <Drawer.Screen name="DrawerSettings" component={DrawerSettings} options={{
                title: t('Homeworks'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <AntDesign name='table' color={COLORS.white} size={20} />

                    );
                },
            }} />

            <Drawer.Screen name="SignOut" component={SignOut} options={{
                title: t('Events'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <FontAwesome5 name='calendar-alt' color={COLORS.white} size={20} />

                    );
                },
            }} />
            <Drawer.Screen name="School" component={School} options={{
                title: t('Fees History'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <MaterialIcons name='wallet' color={COLORS.white} size={20} />

                    );
                },
            }} />

            <Drawer.Screen name="Notification" component={Notification} options={{
                title: t('Bus Information'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <FontAwesome5 name='bus' color={COLORS.white} size={20} />

                    );
                },
            }} />
            <Drawer.Screen name="Attendancee" component={Attendancee} options={{
                title: t('Attendance'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <FontAwesome6 name='list-check' color={COLORS.white} size={20} />

                    );
                },
            }} />
            <Drawer.Screen name="WriteSchool" component={WriteSchool} options={{
                title: t('Write To School'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <MaterialCommunityIcons name='message-processing' color={COLORS.white} size={20} />

                    );
                },
            }} />
            <Drawer.Screen name="Alerts" component={Alerts} options={{
                title: t('Notifications / Alerts'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <Ionicons name='notifications-sharp' color={COLORS.white} size={20} />

                    );
                },
            }} />
            <Drawer.Screen name="Settings" component={Settings} options={{
                title: t('Settings'),
                drawerIcon: ({ size, focused, color }) => {
                    return (
                        <Ionicons name='settings' color={COLORS.white} size={20} />

                    );
                },
            }} />

        </Drawer.Navigator>
    );
}

export default AllDrawer;


const styles = StyleSheet.create({

    BalanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        padding: 15,
        margin: 10,
        backgroundColor: COLORS.yellow,
        elevation: 4,
        borderRadius: 3,
        borderWidth: 0.2
    },
    BalanceTextContainer: {
        color: COLORS.black,
        fontWeight: 'bold',
        marginHorizontal: 10
    }
})