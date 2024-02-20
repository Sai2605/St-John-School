import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { SIZES } from '../../../constants'



const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20220529/pngtree-stylish-lady-flaunting-her-shopping-spree-in-the-urban-landscape-photo-image_13709872.jpg' }} style={styles.tinyLogo} />
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 20,
        height: 90,
        alignSelf: "center"
    },
    tinyLogo: {
        resizeMode: 'cover',
        width: "100%",
        height: "100%",
        borderRadius: 4
    },
})