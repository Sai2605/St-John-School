import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo'

const DrawerDP = () => {
    const [camera, setCamera] = useState('https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?size=626&ext=jpg&uid=R133453680&ga=GA1.1.1128732634.1704533669&semt=ais');
    const [gallery, setGallery] = useState('https://img.freepik.com/free-photo/portrait-photo_144627-46580.jpg?size=626&ext=jpg&uid=R133453680&ga=GA1.1.1128732634.1704533669&semt=sph');
    const [showCamera, setShowCamera] = useState(true);

    const openCamera = async () => {
        try {
            const result = await launchCamera();
            if (!result.didCancel) {
                setCamera(result?.assets[0]?.uri);
                setShowCamera(false);
            }
        } catch (error) {
            console.error('Error opening camera:', error);
        }
    }

    const openGallery = async () => {
        try {
            const result = await launchImageLibrary();
            if (!result.didCancel) {
                setGallery(result?.assets[0]?.uri);
                setShowCamera(true);
            }
        } catch (error) {
            console.error('Error opening gallery:', error);
        }
    }

    const toggleComponent = () => {
        Alert.alert('Choose Option', 'Select your profile', [
            {
                text: 'Open Camera',
                onPress: () => openCamera(),
            },
            {
                text: 'Open Gallery',
                onPress: () => openGallery(),
            },
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
        ]);
    }

    return (
        <View style={styles.container}>
            {showCamera ? (
                <TouchableOpacity onPress={openGallery}>
                    <Image resizeMode='cover' style={styles.imagestyle} source={{ uri: gallery }} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={openCamera}>
                    <Image resizeMode='cover' style={styles.imagestyle} source={{ uri: camera }} />
                </TouchableOpacity>
            )}

            <TouchableOpacity onPress={toggleComponent} style={styles.camerastyle}>
                <Entypo name="camera" size={25} color={"black"} />
            </TouchableOpacity>
        </View>
    );
}

export default DrawerDP;

const styles = StyleSheet.create({
    container: {
        width: 100, height: 100, borderRadius: 50,
        backgroundColor: 'green',
    },
    imagestyle: { width: 100, height: 100, borderRadius: 50, },
    camerastyle: { position: "relative", marginTop: -25, marginLeft: 75 }

});
