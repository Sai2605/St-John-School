import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

import { COLORS, FONTWEIGHTS, SIZES } from '../../constants'
import OtpBox from './OtpBox';
import { URI } from '../../assets/images';


const Register = ({ navigation }) => {
    const [otpInputsFilled, setOtpInputsFilled] = useState(false);

    const goToNextScreen = () => {
        navigation.navigate('Splash');

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: URI.register }} style={styles.image} />
            </View>
            <View style={styles.middle}>
                <Text style={styles.headerTitle}>Account Verification</Text>
                <OtpBox setOtpInputsFilled={setOtpInputsFilled} />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                </View>

                <TouchableOpacity
                    disabled={!otpInputsFilled}
                    onPress={goToNextScreen}
                    style={[styles.button, { backgroundColor: otpInputsFilled ? COLORS.black : COLORS.gray }]}>
                    <Text style={[styles.buttonText]}>OTP Verify</Text>
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={goToNextScreen}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.signupText}>Don’t receive the OTP ?<Text style={styles.signupLink}> RESEND</Text></Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.yellow
    },
    header: {
        flex: 1.1,
        justifyContent: "center",
        alignItems: "center"
    },
    middle: {
        flex: 1.2,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 70,
    },
    image: {
        width: "60%",
        height: "80%",
        resizeMode: "contain"
    },
    headerTitle: {
        color: COLORS.black,
        fontSize: SIZES.normal,
        fontWeight: FONTWEIGHTS.medium,
        alignSelf: "center",
        marginBottom: '5%'
    },
    input: {
        marginTop: 20,
        color: COLORS.black,
        marginVertical: '2%',
        width: '80%',
        maxWidth: 350,
        height: 60,
        fontSize: SIZES.body3,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 5,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: COLORS.blue,
        padding: 15,
        paddingHorizontal: '10%',
        borderRadius: 5,
        marginTop: '5%',
        marginTop: 50,
        alignItems: "center",
        width: '80%',
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "300",
        color: COLORS.white,
    },
    signupText: {
        textAlign: "center",
        color: COLORS.black,
        fontSize: SIZES.h4, // Adjust font size for smaller screens
        marginTop: '5%',
        fontWeight: "300"
    },
    signupLink: {
        color: COLORS.black,
        fontWeight: "600",
    },
    textContainer: {
        width: "90%",
        alignItems: "center"
    }
})