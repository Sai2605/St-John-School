import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import { COLORS, SIZES } from '../../../../constants';

const CustomModal = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItemIndex0, setSelectedItemIndex0] = useState(0);
    const [selectedItemIndex1, setSelectedItemIndex1] = useState(0);
    const [selectedItemIndex2, setSelectedItemIndex2] = useState(0);
    const [selectedItemIndex3, setSelectedItemIndex3] = useState(0);
    const [selectedItemIndex4, setSelectedItemIndex4] = useState(0);
    const [selectedItemIndex5, setSelectedItemIndex5] = useState(0);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const data = [
        {
            value: 0,
            label: ' 0',
        },
        {
            value: 1,
            label: ' 1',
        },
        {
            value: 2,
            label: ' 2',
        },
        {
            value: 3,
            label: ' 3',
        },
        {
            value: 4,
            label: ' 4',
        },
        {
            value: 5,
            label: ' 5',
        },
        {
            value: 6,
            label: ' 6',
        }, {
            value: 7,
            label: ' 7',
        }, {
            value: 8,
            label: ' 8',
        },
    ]
    const combinedNumbers = `${selectedItemIndex0}${selectedItemIndex1}${selectedItemIndex2}${selectedItemIndex3}${selectedItemIndex4}${selectedItemIndex5}`;

    const combineSelectedNumbers = () => {
        console.log("Combined Numbers:", combinedNumbers);
    };

    return (
        <View>
            <TouchableOpacity onPress={toggleModal} style={{ flex: 1, }}>
                <Text style={{ fontSize: 20 }}>Customize Pick</Text>
            </TouchableOpacity>

            <Modal
                isVisible={isModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                backdropTransitionOutTiming={0}
                onBackdropPress={toggleModal}
                style={styles.modal}
            >
                <View style={{ backgroundColor: "white", height: '40%', justifyContent: "center" }}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.textContainer}>Selected Numbers:{combinedNumbers} </Text>
                            <TouchableOpacity
                                style={styles.Button}
                                onPress={() => {
                                    combineSelectedNumbers();
                                    toggleModal();
                                }}
                            >
                                <Text style={styles.text}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pickersRow}>

                            <View style={styles.container}>
                                <View style={{ flexDirection: "row" }}>
                                    <DynamicallySelectedPicker
                                        items={data}
                                        onScroll={({ index }) => setSelectedItemIndex0(index)}
                                        initialSelectedIndex={0}
                                        height={300}
                                        width={SIZES.width / 6}
                                        fontSize={20}
                                    />
                                    <DynamicallySelectedPicker
                                        items={data}
                                        initialSelectedIndex={0}
                                        onScroll={({ index }) => setSelectedItemIndex1(index)}
                                        height={300}
                                        width={SIZES.width / 6}
                                    />
                                    <DynamicallySelectedPicker
                                        items={data}
                                        initialSelectedIndex={0}
                                        onScroll={({ index }) => setSelectedItemIndex2(index)}
                                        height={300}
                                        width={SIZES.width / 6}
                                    /><DynamicallySelectedPicker
                                        items={data}
                                        initialSelectedIndex={0}
                                        onScroll={({ index }) => setSelectedItemIndex3(index)}
                                        height={300}
                                        width={SIZES.width / 6}
                                    /><DynamicallySelectedPicker
                                        items={data}
                                        initialSelectedIndex={0}
                                        onScroll={({ index }) => setSelectedItemIndex4(index)}
                                        height={300}
                                        width={SIZES.width / 6}
                                    /><DynamicallySelectedPicker
                                        items={data}
                                        initialSelectedIndex={0}
                                        onScroll={({ index }) => setSelectedItemIndex5(index)}
                                        height={300}
                                        width={SIZES.width / 6}
                                    />
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}



const getNumberItems = () => {
    return Array.from(Array(10).keys()).map((num, index) => ({ value: num, label: num.toString() }));
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: "row"
    },
    pickersRow: {
        flex: 0.85,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    header: {
        flex: 0.15,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: COLORS.yellow,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    textContainer: {
        color: COLORS.black,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    Button: {
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        borderRadius: 8,
        margin: 7

    },
    text: {
        color: COLORS.white,
        margin: 5,
        fontSize: 12

    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});

export default CustomModal;
