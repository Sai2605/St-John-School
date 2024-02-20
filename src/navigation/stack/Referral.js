import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { lazy } from 'react'
import { COLORS, FONTWEIGHTS, SIZES } from '../../constants'


const Referral = ({ navigation }) => {

    const goToNextScreen = () => {
        navigation.navigate('AllDrawer');
    };
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                {/* <Image source={{ uri: images.login }} style={{ width: '60%', height: '70%', resizeMode: 'contain' }} /> */}
            </View>


            <View style={styles.middle}>
                <Text style={styles.headerTitle}>Do you have a  referral code ?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    placeholderTextColor={COLORS.gray}
                    textAlign="center"
                    selectionColor={COLORS.gray}
                    keyboardType="number-pad"
                    maxLength={10}
                />
                <TouchableOpacity
                    style={[styles.buttonText, { backgroundColor: COLORS.gray }]}>
                    <Text style={styles.buttonText1}>Submit Referral code</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNextScreen}
                    style={[styles.buttonText2, { backgroundColor: COLORS.black }]}>
                    <Text style={styles.buttonText1}>Skip</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.Footer}>
                <Text style={styles.signupText}>Get Rs.20 as referral code when you refer a user</Text>
            </View>

        </SafeAreaView>
    )
}

export default Referral

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.yellow,
        // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "lightgreen"
    },
    middle: {
        flex: 0.52,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"lightblue"
    },
    headerTitle: {
        color: COLORS.black,
        fontSize: SIZES.padding,
        fontWeight: FONTWEIGHTS.medium,
        alignSelf: "center",
        // marginBottom: 20,
        width: SIZES.TextWidth,
        height: SIZES.TextHeight,
        textAlign: "center"
    },
    input: {
        marginTop: 30,
        color: COLORS.black,
        width: "80%",
        // height: 50,
        fontSize: SIZES.body3,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 8,
        textAlign: "center",
        backgroundColor: COLORS.white
    },
    buttonText: {
        // padding: 15,
        // paddingHorizontal: '20%',
        borderRadius: 8,
        marginTop: '10%',
        // marginTop: 20,
        alignItems: "center",
        width: '80%',
        padding: 15,
        marginBottom: 5,
        color: COLORS.gray,
        justifyContent: "center"
    },
    buttonText2: {
        // padding: 15,
        // paddingHorizontal: '20%',
        borderRadius: 8,
        marginTop: '5%',
        marginTop: 20,
        alignItems: "center",
        width: '80%',
        padding: 15,
        color: COLORS.gray,
        justifyContent: "center"
    },
    buttonText1: {
        fontSize: SIZES.body3,
        textAlign: "center",
        fontWeight: FONTWEIGHTS.regular,
        color: COLORS.white,
        alignSelf: "center"
    },
    Footer: {
        flex: 0.08,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        // backgroundColor:"lightyellow"
    },
    signupLink: {
        color: COLORS.black,
        fontWeight: FONTWEIGHTS.bold,
    },
    signupText: {
        textAlign: "center",
        color: COLORS.black,
        fontSize: SIZES.body5,
        // fontWeight: fontWeights.regular,
        width: "100%"
    },
})