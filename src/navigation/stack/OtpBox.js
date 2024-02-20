import { StyleSheet, View, TextInput } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';

export const Otp_Box = ({ setOtpInputsFilled }) => {
    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
    const [cancelPressCount, setCancelPressCount] = useState(0);

    useEffect(() => {
        const isFilled = otpValues.every((value) => value.length === 1);
        setOtpInputsFilled(isFilled);
    }, [otpValues, setOtpInputsFilled]);

    const handleInput = (index, value) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);

        if (value.length === 1 && index < 5) {
            refs[index + 1].current.focus();
            setCancelPressCount(0); // Reset the cancelPressCount when moving to the next TextInput
        } else if (value.length === 0 && index > 0) {
            refs[index - 1]
            setCancelPressCount(0); // Reset the cancelPressCount when moving to the previous TextInput
        }
    };

    const handleKeyPress = (index, e) => {
        if (e.nativeEvent.key === 'Backspace') {
            if (cancelPressCount === 0) {
                // If this is the first Backspace press, just delete the text
                const newOtpValues = [...otpValues];
                newOtpValues[index] = '';
                setOtpValues(newOtpValues);
                setCancelPressCount(1);
            } else if (index > 0) {
                // If this is the second Backspace press, move to the previous TextInput
                refs[index - 1].current.focus();
                setCancelPressCount(0); // Reset the cancelPressCount when moving to the previous TextInput
            }
        }
    };

    const filterSpecialCharacters = (value) => {
        return value.replace(/[^a-zA-Z0-9]/g, '');
    };

    return (
        <View style={styles.OTPcontainer}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
                <TextInput
                    key={index}
                    style={[styles.textInputcontainer]}
                    selectionColor="black"
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(value) =>
                        handleInput(index, filterSpecialCharacters(value))
                    }
                    onKeyPress={(e) => handleKeyPress(index, e)}
                    ref={refs[index]}
                />
            ))}
        </View>
    );
};

export default Otp_Box;

const styles = StyleSheet.create({
    OTPcontainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    textInputcontainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        textAlign: 'center',
        borderRadius: 25,
        width: 50,
        height: 50,
        margin: 5,
        color: 'black',
    },
});
