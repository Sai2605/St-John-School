import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import Result from '../lottery/Results';
// import Table from '../../screens/Table';
import ProgressBar from '../../../screens/ProgressBar';
// import { colors } from '../../components/infrastructrue/theme/colors';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../constants';


const Separator = () => <View style={styles.separator} />;


const SingleDay = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const data = [
    { id: 'MO-40', name: t('Monday Mania ₹40'), ticket_price: 40, price: t('70 Lakhs'), lottoLeft: '2568', drawTime: '12-01-2024 04:00 PM', percent: 0.5 },
    { id: 'MO-50', name: t('Monday Mania ₹100'), ticket_price: 100, price: t('1 Crore'), isSoldOut: true, drawTime: '12-01-2024 04:00 PM', percent: 0.8 },
    { id: 'MO-60', name: t('Monday Mania ₹250'), ticket_price: 250, price: t('5 Crores'), lottoLeft: '45874', drawTime: '12-01-2024 04:00 PM', percent: 0.7 },
    { id: 'MO-70', name: t('Monday Mania ₹400'), ticket_price: 400, price: t('20 Crores'), lottoLeft: '56874', drawTime: '12-01-2024 04:00 PM', },
  ];

  const Item = ({ item, onPress, percent }) => (

    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title1}>{item.id}</Text>
      </View>
      <Separator />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      <View style={styles.ProgressBarContainer}>
        <ProgressBar color={"black"} percent={percent} filledcolor={COLORS.success} unfilledcolor={COLORS.primary} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.lottoLeft}>{t('Lotto Left')}: {item.lottoLeft}</Text>
        <Text style={styles.lottoLeft}>{t('Draw time')} : {item.drawTime}</Text>
      </View>
    </TouchableOpacity>
  );




  const onPress = (item) => {
    // Define your navigation logic here
    // For example, you can navigate to the "SinglePrice" screen
    navigation.navigate("SinglePrice", { price: item.price, id: item.id, name: item.name, ticket_price: item.ticket_price });
  }

  const renderItem = ({ item }) => <Item item={item} onPress={() => onPress(item)} percent={item.percent} />;

  return (
    <View style={styles.container}>
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
    paddingTop: 20,

  },
  list: {
    paddingHorizontal: 16,
    // backgroundColor:'lightgreen',


  },
  item: {
    flex: 1,
    // height: 103,
    margin: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: "#444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 7,

  },
  title: {
    color: COLORS.black,
    alignSelf: "center",
    fontSize: 15,
    // fontWeight: '500',
    fontFamily: 'Inter-Regular'
  },
  title1: {
    color: COLORS.black,
    alignSelf: "center",
    fontSize: 12,
    // fontWeight: '500',
    fontFamily: 'Inter-Regular'
  },
  price: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: 'Inter-SemiBold',
    paddingLeft: 10,
  },
  lottoLeft: {
    fontSize: 9,
    alignSelf: "center",
    color: COLORS.black,
    fontFamily: 'Inter-Regular'
  },
  separator: {
    marginVertical: 3,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 5,
  },
  headContainer: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  ProgressBarContainer: {
    flex: 0.2,
    padding: 3,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 0.2,
    backgroundColor: COLORS.lightGray,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  }
});

export default SingleDay;