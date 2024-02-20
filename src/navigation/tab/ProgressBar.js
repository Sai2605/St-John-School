import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ color, percent, width = 315,filledcolor,unfilledcolor }) => {
    const [state, setstate] = useState(percent)

    const progressremainstate = () => {
        return 100 - state * 100;
    };

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-end', marginRight: 0 }}>
                <Text style={[styles.textContainer, { color: color }]}>{progressremainstate()}% </Text>
            </View>
            <Progress.Bar progress={state} width={width} height={6} color={filledcolor} borderRadius={0} unfilledColor={unfilledcolor} borderWidth={0} style={styles.progressContainer} />
        </View>
    );
};

export default ProgressBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
        // backgroundColor: 'lightgreen'
    },
    textContainer: {
        textAlign: "right",
        color: 'gray',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    progressContainer: {
        width: '100%',
        alignSelf: 'center'
    }
});
