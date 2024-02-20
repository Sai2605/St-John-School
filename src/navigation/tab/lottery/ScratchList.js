import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native'
import { COLORS, FONTS, FONTWEIGHTS, SIZES } from '../../../constants';


const ScratchList = () => {

    const data = [
        { id: '1', text: 'Curry fishballs', meals: 'Lunch', likes: 50, price: '1000', PerCard: '40', image: "https://img.freepik.com/free-vector/watercolor-amber-background_23-2150241005.jpg?w=1380&t=st=1705559567~exp=1705560167~hmac=ab1f1af014292f075cb486f60b42449e796dc4193e42c99b49e724c55c5b1501", playsLeft: '129', deadLine: '67 days 22.29.13', used: true },
        { id: '2', text: 'Claypot rice', meals: 'Lunch', likes: 40, price: '5000', PerCard: '70', image: "https://img.freepik.com/free-vector/yellow-watercolor-background_1108-97.jpg?size=626&ext=jpg&uid=R79471273&ga=GA1.1.622906945.1698323334&semt=ais", playsLeft: '129', deadLine: '67 days 22.29.13' },
        { id: '3', text: 'Dim sum', meals: 'Lunch', likes: 851, price: '10000', PerCard: '100', image: "https://img.freepik.com/free-photo/background-soft-pink-orange-watercolour-painting_125540-2268.jpg?size=626&ext=jpg&uid=R79471273&ga=GA1.1.622906945.1698323334&semt=ais", playsLeft: '129', deadLine: '67 days 22.29.13' },
        { id: '4', text: 'Egg tarts', meals: 'Lunch', likes: 505, price: '25000', PerCard: '140', image: "https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149018547.jpg?size=626&ext=jpg&uid=R79471273&ga=GA1.1.622906945.1698323334&semt=ais", playsLeft: '129', deadLine: '67 days 22.29.13', used: true },
    ];

    const renderItem = ({ item }) => (
        <View style={{ marginBottom: 15 }}>
            <ImageBackground imageStyle={{ borderRadius: 5 }} source={{ uri: item.image }} style={styles.Cover}>
                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.priceContainer}>WIN ₹{item.price}</Text>
                </View>
                <View style={{ flex: 0.2, backgroundColor: "rgba(0,0,0,0.3)", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", alignItems: "center", opacity: 0.8 }}>
                    <Text style={styles.PercardContainer}>Price Per Card ₹ {item.PerCard}</Text>
                </View>
            </ImageBackground>

        </View>
    )

    return (
        <View >
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ScratchList

const styles = StyleSheet.create({
    Cover: {
        height: 90,
        width: 140,
        marginHorizontal: 5,
        resizeMode: "contain",
    },


    priceContainer: {
        color: COLORS.black,
        fontSize: SIZES.body3,
        fontFamily: FONTS.SemiBold,
        // fontWeight: "500",
        textShadowOffset: {
            width: 5,
            height: 5,
        },

    },
    PercardContainer: {
        color: COLORS.white,
        fontSize: SIZES.radius,
        fontFamily: FONTS.SemiBold
        // fontWeight: "600"

    }
})