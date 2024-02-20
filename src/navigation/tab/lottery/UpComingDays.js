import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants';

const UpComingDays = () => {

    const data = [
        { id: '1', text: 'Curry fishballs', meals: 'Lunch', likes: 50, price: '20', rating: '4', image: "https://img.freepik.com/free-vector/monday-background_23-2148745308.jpg?w=1380&t=st=1705035276~exp=1705035876~hmac=9c052e305a995b9f5b8ddba2ae89986dec1f6bbe9cfffb20739c6bd8c9a36c00", price: '100', playsLeft: '129', deadLine: '67 days 22.29.13', used: true },
        { id: '2', text: 'Claypot rice', meals: 'Lunch', likes: 40, price: '30', image: "https://img.freepik.com/premium-photo/word-tuesday-text-day-week-wooden-letters-black-letters-wood-pink-background_251270-504.jpg?w=1380", price: '100', playsLeft: '129', deadLine: '67 days 22.29.13' },
        { id: '3', text: 'Dim sum', meals: 'Lunch', likes: 851, price: '10', image: "https://img.freepik.com/free-vector/hand-drawn-lettering-wednesday_1217-2461.jpg?w=1380&t=st=1705035513~exp=1705036113~hmac=99523b517d5ccf2fec09880bb28f1f0371c970abe806fadc0a6ec950405c0ad5", price: '100', playsLeft: '129', deadLine: '67 days 22.29.13' },
        { id: '4', text: 'Egg tarts', meals: 'Lunch', likes: 505, price: '55', image: "https://img.freepik.com/free-photo/office-desk-table-with-happy-thursday-word_1357-121.jpg?w=1380&t=st=1705035607~exp=1705036207~hmac=82b3e8a7eab214a05dacef0583da4dc65a7ca04bfc01727a9ceae31a66f6856d", price: '100', playsLeft: '129', deadLine: '67 days 22.29.13', used: true },
        { id: '5', text: 'Egg waffles', meals: 'Lunch', likes: 122, price: '40', image: "https://img.freepik.com/free-vector/friday-background-with-heart_23-2148722385.jpg?w=1380&t=st=1705035645~exp=1705036245~hmac=860deea952b33798402847942391d6957b129bdcf90c7849bef681f8020a8ad3", price: '100', playsLeft: '129', deadLine: '67 days 22.29.13' },
        { id: '6', text: 'Egg sandwich', meals: 'Lunch', likes: 20, price: '25', image: "https://img.freepik.com/premium-photo/saturday-road-sign-sky-background_140916-18508.jpg?w=1380", price: '100', playsLeft: '129', deadLine: '67 days 22.29.13' },
        { id: '7', text: 'Curry fishballs', meals: 'Lunch', likes: 50, price: '10', image: "https://img.freepik.com/free-psd/sunday-3d-editable-text-effect_511564-1498.jpg?w=1380&t=st=1705035709~exp=1705036309~hmac=0a0e2fdb1eda293b6183f4b052c9b78e2e2974761ed95b0c00de677c0f930ac8", price: '100', playsLeft: '129', deadLine: '67 days 22.29.13', used: true },
    ];

    const navigation = useNavigation();

    const renderItem = ({ item }) => (

        <TouchableOpacity style={{ height: "100%" }} onPress={() => navigation.navigate("SingleDay")}>
            <ImageBackground imageStyle={{ borderRadius: 4 }} source={{ uri: item.image }} style={styles.Cover} />
        </TouchableOpacity>
    )

    return (
        <View style={styles.container} >
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

export default UpComingDays;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginBottom: 10
    },
    Cover: {
        height: 100,
        width: 140,
        marginHorizontal: 5,
        resizeMode: "contain",
    },
})