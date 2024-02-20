import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';

const Splash = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      props.navigation.replace('Referral'); // Use replace instead of navigate
    }, 500);

    return () => clearTimeout(delay); // Clear the timeout if the component unmounts
  }, [props]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffeb3c", justifyContent: "flex-end", alignItems: "center" }}>
        <LottieView style={{ width: "40%", height: "40%", backgroundColor: "#ffeb3c", flex: 0.6, justifyContent: "flex-end" }} source={require('../../assets/JSON/verified.json')} autoPlay loop />
        <View style={{ justifyContent: "flex-start", flex: 0.4, marginTop: -150 }}>
          <Text style={styles.bold}>Thank You</Text>
          <Text style={styles.light}>Your mobile number has been verified</Text>
        </View>
      </View>
    );
  }

  return null;
};

export default Splash;

const styles = StyleSheet.create({
  bold: {
    fontSize: 36,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",

  },
  light: {
    color: "black",
    width: 200,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400"
  }
});
