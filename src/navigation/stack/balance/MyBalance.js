import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Balance from './Balance';
import { COLORS } from '../../../constants';

const myIcon = <Ionicons name='chevron-forward' color={COLORS.black} size={14} />


const MyBalance = () => {
    const { Container, transactionContainer, titleContainer, titleContainer1, chatContainer,
        chatTextContainer, chatTextContainer1, viewcontainer, wholecontainer } = styles;

    return (
        <View style={wholecontainer}>
            <View style={Container}>
                <Balance />
            </View>

            <TouchableOpacity style={transactionContainer}>
                <Text style={titleContainer}>My Transactions</Text>
                {myIcon}
            </TouchableOpacity>

            <TouchableOpacity style={transactionContainer}>
                <View style={viewcontainer}>
                    <Text style={titleContainer}>Manage Payments</Text>
                    <Text style={titleContainer1}>Add/Remove cards,Wallets,etc.</Text>
                </View>
                {myIcon}
            </TouchableOpacity>

            <TouchableOpacity style={transactionContainer}>
                <View style={viewcontainer}>
                    <Text style={titleContainer}>Invite & Collect</Text>
                    <Text style={titleContainer1}>Bring your friends on Dream11 and earn rewards</Text>
                </View>
                {myIcon}
            </TouchableOpacity>

            <View style={{ flex: 0.1 }} />

            <View style={chatContainer}>
                <Ionicons name='chevron-forward' color={COLORS.black} size={14} />
                <Text style={chatTextContainer}>Have questions on how it works?</Text>
                <Text style={chatTextContainer1}>Chat with us</Text>
            </View>
        </View>
    );
}

export default MyBalance;

const styles = StyleSheet.create({
    Container: {
        flex: 0.6,
        margin: 10,
        borderWidth: 0.6,
        borderRadius: 10,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
        elevation: 1
    },
    transactionContainer: {
        flex: 0.075,
        margin: 10,
        borderWidth: 0.6,
        borderRadius: 10,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        elevation: 1
    },
    titleContainer: {
        fontSize: 14,
        color: COLORS.black,
        backgroundColor: COLORS.white
    },
    titleContainer1: {
        fontSize: 12,
        color: COLORS.gray,
        backgroundColor: COLORS.white
    },
    chatContainer: {
        flex: 0.05,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
    },
    chatTextContainer: {
        color: COLORS.black,
        fontSize: 12
    },
    chatTextContainer1: {
        color: COLORS.black,
        fontSize: 12,
        textDecorationLine: 'underline'
    }, viewcontainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },

    wholecontainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        opacity: 0.9
    }

});
