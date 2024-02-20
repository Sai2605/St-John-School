import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS, FONTWEIGHTS, SIZES } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { useTranslation } from 'react-i18next';


const data = [
    { label: 'English', value: 'en' },
    { label: 'Tamil', value: 'tn' },
    // { label: 'Malayalam', value: 'mal' },
    { label: 'Hindi', value: 'hi' },

];

const DropDown = () => {
    const { i18n } = useTranslation();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const changes = (value) => {
        i18n.changeLanguage(value)
            .then(() => setValue(value))
            .catch(err => console.log(err));
    };

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: "transparent" }]}>
                    l
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={styles.itemTextStyle}
                data={data}
                maxHeight={100}
                labelField="label"
                labelFieldStyle={styles.labelFieldStyle}
                valueField="value"
                placeholder={!isFocus ? 'English' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    changes(item.value);
                    setIsFocus(false);
                }}
                renderRightIcon={() => (
                    <AntDesign name='caretdown' color={COLORS.white} size={14} style={{paddingHorizontal:2}}/>
                )}
            />
        </View>
    );
};

export default DropDown;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        // padding: 10,
        height: '95%',
        width: 170,
    },
    dropdown: {
        height: 50,
        justifyContent:'center',
        // borderColor: 'black',
        // borderWidth: 0.5,
        borderRadius: 8,
    },
    icon: {
        marginRight: 5,
    },
    itemTextStyle: {
        color: COLORS.black
    },
    label: {
        position: 'absolute',
        backgroundColor: "transparent",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 0,

    },
    placeholderStyle: {
        fontSize: SIZES.h4,
        color: COLORS.white,
        fontWeight: FONTWEIGHTS.medium,
        alignSelf:'center',
        justifyContent:'flex-end'

    },
    selectedTextStyle: {
        fontSize: SIZES.h3,
        color: COLORS.white,
        paddingLeft:50
        // backgroundColor:"#FFEB3C"

    },
    labelFieldStyle: {
        // backgroundColor: "pink",
        color: COLORS.black
    }
});