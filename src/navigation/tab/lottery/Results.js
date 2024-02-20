// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const data = [
  { id: 'MO-40', name: '1st Price', ticket_price: 40, price: '70 Lakhs', lottoLeft: '2568', drawTime: '12-01-2024 04:00 PM', winners: 1 },
  { id: 'MO-50', name: '2nd Price', ticket_price: 100, price: '1 Crore', isSoldOut: true, drawTime: '12-01-2024 04:00 PM', winnners: 2 },
  { id: 'MO-60', name: '3rd Price', ticket_price: 250, price: '5 Crores', lottoLeft: '45874', drawTime: '12-01-2024 04:00 PM', winners: 2 },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} >
    <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "center", paddingHorizontal: 10 }}>
      <Text style={styles.title}>{item.name}</Text>
      {/* <Text style={styles.title1}>{item.id}</Text> */}
    </View>
    <Separator />
    <View style={{ flex: 0.4, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
      <Text style={styles.price}>₹{item.price}</Text>
      <Text style={styles.winners}>No.of.winners {item.winners}</Text>
    </View>
    <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }}>
      {/* <Text style={styles.lottoLeft}>Lotto's Left: {item.lottoLeft}</Text>
      <Text style={styles.lottoLeft}>Draw time : {item.drawTime}</Text> */}
    </View>
  </TouchableOpacity>
);

const Results = ({ navigation }) => {
  // const navigation = useNavigation();

  // const onPress = (item) => {
  //   // Define your navigation logic here
  //   // For example, you can navigate to the "SinglePrice" screen
  //   navigation.navigate("SinglePrice", { price: item.price, id: item.id, name: item.name, ticket_price: item.ticket_price });
  // }

  const renderItem = ({ item }) => <Item item={item} onPress={() => onPress(item)} />;

  return (
    <View style={styles.container}>
      <Text style={styles.TextContainer}>Lotto ID :MO-235</Text>
      <FlatList
        data={data}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flex: 1,
    height: 103,
    margin: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
  },
  title: {
    color: "black",
    alignSelf: "center",
    fontSize: 15,
    // fontWeight: '500',
    fontFamily: 'Inter-ExtraBold'
  },
  title1: {
    color: "black",
    alignSelf: "center",
    fontSize: 12,
    // fontWeight: '500',
    fontFamily: 'Inter-Regular'
  },
  price: {
    fontSize: 20,
    color: "#000000",
    fontFamily: 'Inter-SemiBold',
    paddingLeft: 10,
  },
  lottoLeft: {
    fontSize: 9,
    alignSelf: "center",
    color: "#000000",
    fontFamily: 'Inter-Regular'
  },
  separator: {
    marginVertical: 3,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 5,
  },
  TextContainer: {
    color: "black",
    fontFamily: "Inter-ExtraBold",
    paddingLeft: 20,
  },
  winners: {
    color: "gray",
    alignSelf: "center"
  }
});

export default Results;