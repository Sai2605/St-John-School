import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../../../constants'

const Balance = () => {


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 10 }}>

            <View style={styles.Header}>
                <Text style={styles.BalanceTextContainer}>Current Balance </Text>
                <Text style={styles.PriceContainer}>₹ 1000</Text>
                <TouchableOpacity style={styles.CashContainer}>
                    <Text style={styles.CashTextContainer}>ADD CASH</Text>

                </TouchableOpacity>
            </View>

            <View style={styles.pay}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textContainer}> Amount Unutilised</Text>
                    <MaterialCommunityIcons name='information-outline' color={COLORS.black} size={20} style={{ paddingLeft: 10 }} />
                </View>
                <Text style={styles.AmountContainer}>₹ 500</Text>
            </View>

            <View style={styles.pay}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textContainer}>Winnings</Text>
                    <MaterialCommunityIcons name='information-outline' color={COLORS.black} size={20} style={{ marginLeft: -150 }} />
                    <TouchableOpacity style={styles.buttonContainer}><Text style={{ fontSize: 10, padding: 5, color: COLORS.black, fontWeight: 'bold' }}>VERIFY TO WITHDRAW</Text></TouchableOpacity>
                </View>
                <Text style={styles.AmountContainer}>₹ 10000</Text>
            </View>

            <View style={styles.pay}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textContainer}>Discount Bonus</Text>
                    <MaterialCommunityIcons name='information-outline' color={COLORS.black} size={20} style={{ paddingLeft: 10 }} />
                </View>
                <Text style={styles.AmountContainer}>₹ 50</Text>
            </View>

            <View style={styles.card}>
                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome6 name='ticket' color={COLORS.yellow} size={25} />
                </View>
                <View style={{ width: '70%', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={styles.ticket} numberOfLines={2}>Maximum usable Discount bonus per match = 10% of entry</Text>
                </View>
                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome name='remove' color={COLORS.black} size={15} />
                </View>

            </View>
        </View>
    )
}

export default Balance

const styles = StyleSheet.create({
    Header: {
        flex: 0.3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingTop: 5
    },
    BalanceTextContainer: {
        fontSize: 15,
        color: COLORS.gray,
        marginVertical: 5
    },
    PriceContainer: {
        fontSize: 20,
        color: COLORS.black,
        fontWeight: 'bold',
        marginVertical: 5

    },
    CashContainer: {
        backgroundColor: COLORS.black,
        borderRadius: 5,
        marginVertical: 5
    },
    CashTextContainer: {
        color: COLORS.white,
        padding: 10,
        fontWeight: 'bold'
    },
    pay: {
        flex: 0.19,
        // backgroundColor: colors.bg.yellow,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderTopColor: COLORS.gray,
        borderTopWidth: 0.2,
    },
    textContainer: {
        color: COLORS.gray
    },
    AmountContainer: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.gray,
        justifyContent: 'center'
    },
    card: {
        flex: 0.13,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 10,
        borderColor: COLORS.yellow,
        borderWidth: 0.7,
        elevation: 1,
        backgroundColor: COLORS.white
    },
    ticket: {
        color: COLORS.gray,
        fontSize: 12,
    }
})