import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import { COLORS, FONTWEIGHTS, SIZES } from '../constants'

const slides = [
    {
        id: '1',
        image: "https://img.freepik.com/free-photo/three-dimensional-casino-item_23-2151067260.jpg?size=626&ext=jpg&ga=GA1.2.1128732634.1704533669&semt=sph",
        title: 'Best Digital Solution',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '2',
        image: "https://img.freepik.com/free-photo/three-dimensional-casino-item_23-2151067260.jpg?size=626&ext=jpg&ga=GA1.2.1128732634.1704533669&semt=sph",
        title: 'Achieve Your Goals',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '3',
        image: "https://img.freepik.com/free-photo/three-dimensional-casino-item_23-2151067260.jpg?size=626&ext=jpg&ga=GA1.2.1128732634.1704533669&semt=sph",
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];



const Slide = ({ item, navigation }) => {
    return (
        <View style={styles.slideView}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.skip}
                onPress={() => navigation.replace('Login')}>
                <Text
                    style={styles.skipText}>
                    SKIP
                </Text>
            </TouchableOpacity>


            <Image
                source={{ uri: item?.image }}
                style={styles.slideimage}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnboardingScreen = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / SIZES.width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex !== slides.length) {
            const offset = nextSlideIndex * SIZES.width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };


    const Footer = () => {
        return (
            <View
                style={styles.footerstyle}>
                {/* Indicator container */}
                <View
                    style={styles.innerfooter1}>
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex === index && {
                                    backgroundColor: COLORS.white,
                                    width: 25, //slide pagination indicator
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={styles.wholebtn}>
                    {currentSlideIndex === slides.length - 1 ? (
                        <View style={{ height: SIZES.height / 17 }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace('Login')}>
                                <Text style={styles.getstartedtext}>
                                    GET STARTED
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={styles.btn}>
                                <Text
                                    style={styles.nextStyle}>
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeareastyle}>
            <StatusBar backgroundColor={COLORS.black} />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                // contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} navigation={navigation} />}
            />
            <Footer />
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: COLORS.black,
        fontSize: 13,
        marginTop: "5%",
        // marginLeft: 60,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: COLORS.black,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        // alignSelf:"center"
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: COLORS.gray,
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        // height: 50,
        height: SIZES.height / 17,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: SIZES.width
    },
    skip: {
        alignSelf: "flex-end",
        marginBottom: "15%",
        paddingRight: "10%",
        backgroundColor: 'transparent',
    },
    skipText: {
        fontWeight: 'bold',
        fontSize: SIZES.font,
        color: COLORS.black,
    },
    slideimage: {
        height: '55%',
        width: "100%",
        resizeMode: 'contain',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    footerstyle: {
        height: SIZES.height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    nextStyle: {
        color: COLORS.black,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 15,
    },
    safeareastyle: {
        flex: 1,
        backgroundColor: COLORS.yellow
    },
    innerfooter1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    getstartedtext: {
        fontWeight: 'bold',
        fontSize: 15,
        color: COLORS.black,
    },
    wholebtn: {
        marginBottom: "10%",
        paddingHorizontal: "3%",
    }
});

export default OnboardingScreen;
