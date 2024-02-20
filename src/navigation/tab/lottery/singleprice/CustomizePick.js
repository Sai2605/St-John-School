import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
// import { colors } from './infrastructrue/theme/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../../../constants'


const Numbers = ({ value, onIncrease, onDecrease }) => {
    return (
        <View>
            <TouchableOpacity onPress={onIncrease}>
                <AntDesign name='caretup' color={COLORS.success} size={30} alignSelf={'center'} />
            </TouchableOpacity>
            <Text style={{ borderWidth: 1, borderColor: COLORS.black, padding: 10, color: COLORS.black, fontSize: 20 }}>{value}</Text>
            <TouchableOpacity onPress={onDecrease}>
                <AntDesign name='caretdown' color={COLORS.error} size={30} alignSelf={'center'} />
            </TouchableOpacity>
        </View>
    )
}

const CustomizePick = () => {
    const [values, setValues] = useState(Array(6).fill(0)); // State to store values of each box

    const increaseValue = (index) => {
        const newValues = [...values];
        newValues[index] = Math.min(newValues[index] + 1, 9);
        setValues(newValues);
    }

    const decreaseValue = (index) => {
        const newValues = [...values];
        newValues[index] = Math.max(newValues[index] - 1, 0);
        setValues(newValues);
    }

    // Function to handle the search button press
    const handleSearch = () => {
        console.log("Values entered:", values);
    }

    return (
        <View style={{ paddingTop: -30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.titleContainer}>Customize Pick</Text>
            <View style={{ flexDirection: 'row', height: '50%', alignItems: "center", marginTop: 10 }}>
                <Text style={{ borderWidth: 1, borderColor: COLORS.black, padding: 10, color: COLORS.black, fontSize: 20 }}>M</Text>
                <Text style={{ borderWidth: 1, borderColor: COLORS.black, padding: 10, color: COLORS.black, fontSize: 20 }}>0</Text>

                {/* Render the Numbers components */}
                {values.map((value, index) => (
                    <Numbers
                        key={index}
                        value={value}
                        onIncrease={() => increaseValue(index)}
                        onDecrease={() => decreaseValue(index)}
                    />
                ))}
            </View>

            {/* Search button */}
            <TouchableOpacity onPress={handleSearch} style={{ backgroundColor: COLORS.black, paddingVertical: 10, paddingHorizontal: 30, borderRadius: 6 }}>
                <Text style={{ color: COLORS.white }}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomizePick

const styles = StyleSheet.create({
    titleContainer: {
        color: COLORS.black,
        fontSize: 18,
        alignSelf: 'center'
    }
})