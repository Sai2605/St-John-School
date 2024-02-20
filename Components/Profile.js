import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS } from '../src/constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import IMAGES from '../src/assets/images/LocalImage'


const Profile = ({name,class_section,roll_number,dob}) => {
    const [productData, setProductData] = useState('');


    return (
        <View style={styles.Profile}>
            <View style={styles.row}>
                <Text style={styles.text}>Student Profile</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                    <Feather name='edit' color={COLORS.primary} size={15} />
                    <Text style={styles.text1}>Edit</Text></View>
            </View>


            <View style={{ flexDirection: 'row' }}>
                <Image source={require('./../src/assets/images/Rectangle.png')} style={{ height: 100, width: 100, resizeMode: 'contain' }} />
                <View style={{ marginLeft: 20 }}>

                    <View style={{ flexDirection: 'row', padding: 1 }}>
                        <MaterialCommunityIcons name='account' color={COLORS.black} size={20} style={{ padding: 2 }} />
                        <Text style={{ color: COLORS.black, marginLeft: 15 }}>{name}</Text>
                    </View>


                    <View style={{ flexDirection: 'row', padding: 1, alignItems: 'center' }}>
                        <MaterialCommunityIcons name='subdirectory-arrow-right' color={COLORS.black} size={20} style={{ padding: 2 }} />
                        <Text style={{ color: COLORS.black, marginLeft: 15 }}>{class_section}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 1 }}>
                        <FontAwesome5 name='medal' color={COLORS.black} size={18} style={{ padding: 2 }} />
                        <Text style={{ color: COLORS.black, marginLeft: 18 }}>{roll_number}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 1 }}>
                        <Entypo name='calendar' color={COLORS.black} size={18} style={{ padding: 2 }} />
                        <Text style={{ color: COLORS.black, marginLeft: 18 }}>{dob}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Profile: {
        backgroundColor: COLORS.white,
        elevation: 2,
        padding: 10
    },
    container: {
        flex: 1,
        paddingLeft: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    text: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: 'bold',
        marginHorizontal: 5
    },

    text1: {
        fontSize: 11,
        color: COLORS.primary,
        fontWeight: 'bold',
        marginHorizontal: 5,
        alignSelf: 'flex-start'
    }
})