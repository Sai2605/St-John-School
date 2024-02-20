import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ color, percent = 1, width = 315, filledcolor, unfilledcolor }) => {
    const [state, setstate] = useState(percent)

    const ProgressRemainState = () => {
        return 100 - state * 100;
    };

    const ProgressAddState = () => {
        return state * 100;
    };

    return (
        <View style={styles.container}>
            <View style={{ justifyContent:'space-between',flexDirection:'row' ,width: '100%'}}>
                <Text style={[styles.textContainer, { color: color }]}>{ProgressAddState()}</Text>
                <Text style={[styles.textContainer, { color: color }]}>{ProgressRemainState()}</Text>
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
        alignSelf: 'center',
        borderRadius: 10
    }
});
