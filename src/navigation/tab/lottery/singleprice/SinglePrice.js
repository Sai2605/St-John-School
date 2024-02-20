import { StyleSheet, Text, TouchableOpacity, View, Button, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Table from './Table';
import CustomizePick from './CustomizePick';
import CustomModal from './CustomModal';

import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../../constants';
import Test1 from './Test1';



const SinglePrice = ({ route, navigation }) => {
    const { t, i18n } = useTranslation();
    const { price, id, name, ticket_price } = route.params;

    const [views, setViews] = useState([]);
    const [count, setCount] = useState(0);
    const [showAddOneButton, setShowAddOneButton] = useState(true);
    const [showCustomizeScreen, setShowCustomizeScreen] = useState(false); // New state variable


    const addView = (content) => {
        setViews([...views, content]);
        setCount(prev => (prev + 1))
    };

    const removeView = (index) => {
        setViews(views.filter((view, i) => i !== index));
        setCount(prev => prev - 1)

    };

    const Quick10 = () => {
        const newItems = Array.from({ length: 10 }, (_, i) => "MO25689");
        setViews(newItems);
        setCount(newItems.length);
        setShowAddOneButton(true);
        setShowCustomizeScreen(false);


    }

    const Quick25 = () => {
        const newItems = Array.from({ length: 25 }, (_, i) => "MO25689");
        setViews(newItems);
        setCount(newItems.length);
        setShowAddOneButton(true);
        setShowCustomizeScreen(false);


    }

    const Customize = () => {
        const newItems = [];
        setViews(newItems);
        setCount(newItems.length);
        setShowAddOneButton(false);
        setShowCustomizeScreen(true);

    }
    const onpress = () => {
        navigation.navigate("Results");
    }


    const renderItem = ({ item, index }) => {
        if (index === views.length) {
            // Render the "Add one" button
            return (
                <View style={{ marginHorizontal: 7, marginVertical: 10 }}>
                    {showAddOneButton && (
                        <TouchableOpacity onPress={() => addView("MO256897")} style={styles.addViewContainer}>
                            <View style={styles.addViewContainer1}>
                                <Text style={styles.textContainer}>{t('Add one')}</Text>
                                <Text style={styles.plusContainer}>+</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>

            );
        } else {
            // Render the regular item
            return (
                <View style={{ marginHorizontal: 7, marginVertical: 10 }}>
                    <View style={styles.addViewContainer1}>
                        <Text style={styles.removeTextContainer}>{item}</Text>
                        <TouchableOpacity onPress={() => removeView(index)}>
                            <Text style={styles.minusContainer}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={20} color="#1C274C" />
                </TouchableOpacity>

                <Text style={styles.text1} >{name}</Text>
            </View>
            <View style={styles.Top}>
                <View style={{ flex: 1 }}>
                    <View style={styles.price}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.priceContainer}>{price}</Text>
                            <Text style={styles.idContainer}>{id}</Text>
                        </View>
                        <Text style={styles.timeContainer}>{t('Draw time')}:12-01-2024 04:00 PM</Text>
                    </View>
                    <View style={styles.rowContainer1}>
                        <TouchableOpacity onPress={Quick10} style={styles.quickContainer}>
                            <Text style={styles.quickTextContainer}>{t('Quick Pick 10')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Quick25} style={styles.quickContainer}>
                            <Text style={styles.quickTextContainer}>{t('Quick Pick 25')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Customize} style={styles.quickContainer}>
                            <Text style={styles.quickTextContainer}>{t('Custom')} </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={styles.cartBorder}>
                            <View>
                                <View style={styles.cartContainer}>
                                    <Text style={styles.cartTextContainer}>{t('Cart')}({count})</Text>
                                </View>
                                <FlatList
                                    data={[...views, 'addView']}
                                    numColumns={3}
                                    horizontal={false}
                                    contentContainerStyle={styles.list}
                                    // Set the number of columns to 3
                                    renderItem={renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                />

                                {/* {showCustomizeScreen && <CustomizePick />} */}
                                {showCustomizeScreen && <CustomModal />}
                            </View>

                        </View>
                        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Text style={styles.titleContainer}>{t('Price Breakup')}</Text>
                            <Table />
                        </View>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.Bottom}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", flex: 0.5 }}>
                        <View style={styles.rowContainer2}>
                            <Text style={styles.LottoContainer}>{t('Selected Lottos')} : {count}</Text>
                            <Text style={styles.LottoContainer}>₹{ticket_price}*{count}</Text>

                        </View>
                        <View style={styles.rowContainer3}>
                            <Text style={styles.amountContainer}>{t('Total Amount')}</Text>
                            <Text style={styles.amountContainer1}>{count * ticket_price}</Text>

                        </View>
                    </View>
                    <View style={styles.BottomContainer}>

                        <TouchableOpacity style={styles.BottomContainer1} onPress={onpress}>
                            <Text style={styles.ButtomTextContainer}>{t('Proceed Purchase')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SinglePrice

const styles = StyleSheet.create({
    addViewContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    addViewContainer1:
    {
        height: 30,
        width: 110,
        backgroundColor: "lightgray",
        borderRadius: 5,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textContainer:
    {
        color: COLORS.black,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginTop: 5
    },
    plusContainer:
    {
        color: COLORS.black,
        backgroundColor: "green",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        textAlign: 'center',
        width: 30,
        height: "100%",
        fontSize: 20
    },
    removeTextContainer:
    {
        color: COLORS.black,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        width: "70%"
    },
    minusContainer: {
        color: COLORS.white,
        backgroundColor: "red",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        textAlign: 'center',
        width: 30,
        height: "100%",
        fontSize: 20
    },
    rowContainer:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10
    },
    priceContainer: {
        color: COLORS.black,
        fontWeight: "600",
        fontSize: 25
    },
    idContainer: {
        color: COLORS.black,
        textAlign: "center",
        alignSelf: "center"
    },
    timeContainer: {
        color: COLORS.black,
        alignSelf: "flex-start",
        marginHorizontal: 10
    },
    rowContainer1: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "10%"
    },
    quickContainer: {
        height: "50%",
        width: "26%",
        backgroundColor: COLORS.black,
        borderRadius: 10,
        justifyContent: "center"
    },
    quickTextContainer: {
        color: "white",
        textAlign: "center",
        fontSize: 13
    },
    cartBorder: {
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        margin: 8,
        padding: 0
    },
    cartContainer: {
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        backgroundColor: "gray",
    },
    cartTextContainer: {
        color: "white",
        alignSelf: "flex-start",
        marginLeft: 15
    },
    titleContainer: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    rowContainer2: {
        flex: 0.6,
        alignItems: "flex-start",
        marginLeft: 10,
        justifyContent: "space-evenly"
    },
    LottoContainer: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: "400"
    },
    rowContainer3: {
        flex: 0.4,
        alignItems: "flex-end",
        marginRight: 10,
        justifyContent: "space-evenly"
    },
    amountContainer: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: "400"
    },
    amountContainer1: {
        color: COLORS.black,
        fontSize: 30,
        fontWeight: "500"
    },
    BottomContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    BottomContainer1: {
        height: "70%",
        width: "85%",
        backgroundColor: COLORS.black,
        borderRadius: 10,
        justifyContent: "center"
    },
    ButtomTextContainer: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    head: {
        height: "6%",
        flexDirection: "row",
        backgroundColor: "yellow",

    },
    text1: {
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 10,
        textAlign: "left",
        color: COLORS.black
    },
    Top: {
        flex: 0.8
    },
    Bottom: {
        flex: 0.2,
        backgroundColor: COLORS.gray
    },
    flatlist: {
        flexDirection: "row",
    },
    list: {
        paddingHorizontal: 2,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "space-evenly"

    },
    header: {
        alignSelf: "center",
        marginLeft: 10
    },
    price: {
        backgroundColor: "#F1F1F1",
        marginHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 5,
    }



})

