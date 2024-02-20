import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants';
import ProgressBar from '../../../screens/ProgressBar';


const DailyMiniLotto = () => {

    const data = [
        { id: '1', text: 'Curry fishballs', bg: "#33106C", meals: 'Lunch', left: '10/50', price: 10000, rating: '4', image: "https://img.freepik.com/free-vector/monday-background_23-2148745308.jpg?w=1380&t=st=1705035276~exp=1705035876~hmac=9c052e305a995b9f5b8ddba2ae89986dec1f6bbe9cfffb20739c6bd8c9a36c00", Opening: '10:00 AM', closing: '12:00 PM', used: true, percent: 0.7 },
        { id: '2', text: 'Claypot rice', bg: "#FFBB00", meals: 'Lunch', left: '112/200', price: '25,000', image: "https://img.freepik.com/premium-photo/word-tuesday-text-day-week-wooden-letters-black-letters-wood-pink-background_251270-504.jpg?w=1380", Opening: '10:00 AM', closing: '12:00 PM', percent: 0.6 },
        { id: '3', text: 'Dim sum', bg: "black", meals: 'Lunch', left: '10/500', price: '7500', image: "https://img.freepik.com/free-vector/hand-drawn-lettering-wednesday_1217-2461.jpg?w=1380&t=st=1705035513~exp=1705036113~hmac=99523b517d5ccf2fec09880bb28f1f0371c970abe806fadc0a6ec950405c0ad5", Opening: '10:00 AM', closing: '12:00 PM', percent: 0.5 },
        { id: '4', text: 'Egg tarts', bg: "lightgreen", meals: 'Lunch', left: '10/50', price: '10,000', image: "https://img.freepik.com/free-photo/office-desk-table-with-happy-thursday-word_1357-121.jpg?w=1380&t=st=1705035607~exp=1705036207~hmac=82b3e8a7eab214a05dacef0583da4dc65a7ca04bfc01727a9ceae31a66f6856d", Opening: '10:00 AM', closing: '12:00 PM', used: true, percent: 0.4 },
        { id: '5', text: 'Egg waffles', bg: "gray", meals: 'Lunch', left: '10/50', price: '5,000', image: "https://img.freepik.com/free-vector/friday-background-with-heart_23-2148722385.jpg?w=1380&t=st=1705035645~exp=1705036245~hmac=860deea952b33798402847942391d6957b129bdcf90c7849bef681f8020a8ad3", Opening: '10:00 AM', closing: '12:00 PM', percent: 0.3 },
        { id: '6', text: 'Egg sandwich', bg: "pink", meals: 'Lunch', left: '10/50', price: '25,000', image: "https://img.freepik.com/premium-photo/saturday-road-sign-sky-background_140916-18508.jpg?w=1380", Opening: '10:00 AM', playsLeft: '129', closing: '12:00 PM', percent: 0.2 },
        { id: '7', text: 'Curry fishballs', bg: "orange", meals: 'Lunch', left: '10/50', price: '10', image: "https://img.freepik.com/free-psd/sunday-3d-editable-text-effect_511564-1498.jpg?w=1380&t=st=1705035709~exp=1705036309~hmac=0a0e2fdb1eda293b6183f4b052c9b78e2e2974761ed95b0c00de677c0f930ac8", Opening: '10:00 AM', closing: '12:00 PM', used: true, percent: 0.1 },
    ];

    const renderItem = ({ item }) => {
        const percent = item.percent; // Fetch the percent value from the item
        return (
            <View style={{ height: "100%", flex: 1 }}>
                <View imageStyle={{ borderRadius: 2 }} style={styles.Cover} backgroundColor={item.bg}>
                    <View style={styles.winContainer}>
                        <Text style={styles.priceContainer}>WIN ₹ {item.price}</Text>
                    </View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.leftContainer}>Total {item.left}</Text>
                    </View>
                    <View style={styles.progressContainer}>
                        <ProgressBar color={COLORS.white} percent={percent} width={180} filledcolor={COLORS.white} unfilledcolor={COLORS.gray} />
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.timing}>Open {item.Opening}</Text>
                        <Text style={styles.timing}>Close {item.closing}</Text>
                    </View>
                </View>
            </View>
        );
    };


    return (
        <View style={{ height: "100%", paddingBottom: 10 }} >
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

export default DailyMiniLotto

const styles = StyleSheet.create({
    Cover: {
        height: 100,
        width: 196,
        marginHorizontal: 5,
        resizeMode: "contain",
        borderRadius: 5
    },
    winContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 10
    },
    priceContainer: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'Inter-SemiBold'
    },
    totalContainer: {
        flex: 0.2,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 10
    },
    leftContainer: {
        color: COLORS.white,
        fontSize: 10,
        fontFamily: 'Inter-SemiBold'
    },
    FoodTitle: {
        color: COLORS.black,
        fontWeight: "600",
        fontSize: 14,
        textAlign: "center"
    },
    progressContainer: {
        flex: 0.3,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomContainer: {
        flex: 0.2,
        flexDirection: "row",
        backgroundColor: "rgba(120,120,120,0.35)",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: "space-between",
        paddingHorizontal: 5
    },
    timing: {
        fontSize: 10,
        alignSelf: "center",
        color: COLORS.white,
        fontFamily: 'Inter-SemiBold'
    },

})


