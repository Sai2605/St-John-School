import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../src/constants'
import { symbolName } from 'typescript'
import ProgressBar from '../src/screens/ProgressBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Attendance = () => {
    return (
        <View style={styles.full}>
            <View style={styles.header}>
                <Text style={styles.Text}>Attendance Overview</Text>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name='share-all' color={COLORS.white} size={20} />
                    <Text style={styles.Text2}>View month wise</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.Text1}>Total attendance</Text>
                <ProgressBar filledcolor={COLORS.primary} percent={0.5} unfilledcolor={COLORS.gray} width={275} />
            </View>
        </View>
    )
}

export default Attendance

const styles = StyleSheet.create({
    full: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 8,
        elevation: 3

    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent:'space-between',
        // alignItems: 'flex-start',
        paddingLeft: 8

    },
    Text: {
        color: COLORS.white,
        padding: 8
    },
    Text1: {
        color: COLORS.black,
        alignSelf: 'flex-end',
        paddingLeft: 10,
        paddingTop: 10
    },
    bottom: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        gap: 8,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text2: {
        color: COLORS.white,
        fontSize:10,
        padding: 8

    }
})