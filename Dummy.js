import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
// import SplashScreen from 'react-native-splash-screen';

const Dummy = () => {
    const [selectedItemIndexes, setSelectedItemIndexes] = useState([0, 0, 0, 0, 0, 0]);
    const initialSelectedIndex = 1;
    const windowWidth = Dimensions.get('window').width;
    const height = 300;

    //   useEffect(() => {
    //     SplashScreen.hide();
    //   }, []);

    const handlePickerChange = (index, value) => {
        const newIndexes = [...selectedItemIndexes];
        newIndexes[index] = value;
        setSelectedItemIndexes(newIndexes);
    };

    return (
        <View style={styles.container}>
            <View style={styles.pickersRow}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map(index => (
                    <DynamicallySelectedPicker
                        key={index}
                        items={index < 2 ? getAlphabetItems() : getNumberItems()}
                        onScroll={({ index }) => handlePickerChange(index, index)}
                        onMomentumScrollBegin={({ index }) => handlePickerChange(index, index)}
                        onMomentumScrollEnd={({ index }) => handlePickerChange(index, index)}
                        onScrollBeginDrag={({ index }) => handlePickerChange(index, index)}
                        onScrollEndDrag={({ index }) => handlePickerChange(index, index)}
                        initialSelectedIndex={initialSelectedIndex}
                        height={height}
                        width={windowWidth / 8} // Divide by the number of pickers to fit all in a row
                    />
                ))}
            </View>
            <View style={styles.selectedItemWrapper}>
                {selectedItemIndexes.map((selectedIndex, index) => (
                    <Text key={index}>Picker {index + 1}: Selected item index {selectedIndex}</Text>
                ))}
            </View>
        </View>
    );
}

const getAlphabetItems = () => {
    const alphabet = '-MTWTFSS';
    return Array.from(alphabet).map((char, index) => ({ value: index, label: char }));
};

const getNumberItems = () => {
    return Array.from(Array(10).keys()).map((num, index) => ({ value: num, label: num.toString() }));
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickersRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    selectedItemWrapper: {
        marginTop: 20,
    },
});

export default Dummy;
