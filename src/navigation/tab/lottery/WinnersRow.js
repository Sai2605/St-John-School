import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'

import { COLORS, FONTS, SIZES } from '../../../constants';

const DATA = [
    { id: '1', title: 'Williams', price: '5000', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1704778297~exp=1704778897~hmac=94d01ac5070f6596875dcd9e3c3d849064b0847c7e772fb5f4af6dbd084c63a0' },
    { id: '2', title: 'Kamal', price: '100', image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1380&t=st=1704778322~exp=1704778922~hmac=3accefd5a54fc78fb3f36c147025d11e8db2be60cdef2147c56462f932cb2ce9' },
    { id: '3', title: 'Sai', price: '10000', image: 'https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=1380&t=st=1704778353~exp=1704778953~hmac=8f200ad4fb437c26ae8846970d83f7acb3480361261cf1dff999c98856eb4f90' },
    { id: '4', title: 'Angel', price: '700', image: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1380&t=st=1704778380~exp=1704778980~hmac=3ab6ee791115ad1a57f57707a16f1f7aaf3340afda98bc893fea96546e92f21f' },
    { id: '5', title: 'Williams', price: '500', image: 'https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg?t=st=1704758626~exp=1704762226~hmac=e608e221747b294f93d69ef23827fdc3c2db267edc18a2a13f553887376a6030&w=740' },
    { id: '6', title: 'Kamal', price: '5000', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1704778297~exp=1704778897~hmac=94d01ac5070f6596875dcd9e3c3d849064b0847c7e772fb5f4af6dbd084c63a0' },
    { id: '7', title: 'Sai', price: '10000', image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1380&t=st=1704778322~exp=1704778922~hmac=3accefd5a54fc78fb3f36c147025d11e8db2be60cdef2147c56462f932cb2ce9' },
    { id: '8', title: 'Praveen', price: '5000', image: 'https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=1380&t=st=1704778353~exp=1704778953~hmac=8f200ad4fb437c26ae8846970d83f7acb3480361261cf1dff999c98856eb4f90' },
    { id: '9', title: 'Sai', price: '8500', image: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1380&t=st=1704778380~exp=1704778980~hmac=3ab6ee791115ad1a57f57707a16f1f7aaf3340afda98bc893fea96546e92f21f' },
    { id: '10', title: 'Williams', price: '5000', image: 'https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg?t=st=1704758626~exp=1704762226~hmac=e608e221747b294f93d69ef23827fdc3c2db267edc18a2a13f553887376a6030&w=740' },
];

const Item = ({ item }) => (
    <View style={{ height: "100%" }} >
        <TouchableOpacity style={{ flexDirection: "row", }}>
            <View style={styles.profileContainer} >
                <Image style={styles.ImageContainer} source={{ uri: item.image }}></Image>
                <Text style={styles.title} ellipsizeMode={'tail'}>{item.title}</Text>
                <Text style={styles.priceTitle}>Rs.{item.price}</Text>
            </View>
        </TouchableOpacity>
    </View>

);

const WinnersRow = () => {

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default WinnersRow

const styles = StyleSheet.create({
    profileContainer: {
        justifyContent: "space-between",
        paddingHorizontal: 6,
        padding: 5
    },
    ImageContainer: {
        height: 56,
        width: 56,
        borderRadius: 80,
        backgroundColor: COLORS.white,
        resizeMode: "cover"
    },
    title: {
        textAlign: "center",
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.Medium,
    },
    priceTitle: {
        textAlign: "center",
        color: COLORS.black,
        fontSize: SIZES.base,
        fontFamily: FONTS.Light

    },


})