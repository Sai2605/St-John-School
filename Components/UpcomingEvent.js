import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../src/constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const UpcomingEvent = () => {
    return (
        <View style={styles.full}>
            <View style={styles.header}>
                <Text style={styles.Text}>Upcoming Events</Text>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name='share-all' color={COLORS.white} size={20} />
                    <Text style={styles.Text2}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 8, justifyContent: 'center', alignItems: 'center' }}>

                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <View style={styles.body}>
                        <View style={{ width: '87%' }}>
                            <Text style={{ alignSelf: 'flex-start', color: COLORS.black, fontWeight: '500' }}>Kiddies Sport Meet (KG to Class III) 2023 - 2024</Text>
                            <Text style={{ alignSelf: 'flex-start', }}>Saturday the 3rd 2024, between 9 a.m. and 1.00 p.m.
                                @YMCA Nandanam</Text>
                        </View>
                        <TouchableOpacity style={{width:'13%'}}>
                        <MaterialCommunityIcons name='download-box' color={COLORS.black} size={30} style={{ alignSelf: 'center'}} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

        </View>
    )
}

export default UpcomingEvent

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 5,
        backgroundColor: '#F8F8F8',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    full: {
        backgroundColor: '#FFFFFF',
        // marginHorizontal: 5,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 8,
        elevation: 3

    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'space-between',
        // alignItems: 'center',
        paddingLeft: 8

    },
    Text: {
        color: COLORS.white,
        padding: 8
    },
    Text2: {
        color: COLORS.white,
        fontSize: 10,
        padding: 8

    }
})