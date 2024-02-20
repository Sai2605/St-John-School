import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants';
// import uris from '../../assets/images/URI';

const Notification = () => {

  const data = [
    { id: '1', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus,  ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '2', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '3', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '4', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '5', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '6', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '7', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '8', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '9', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '10', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '11', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '12', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '13', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '14', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '15', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
    { id: '16', name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ', image: "https://img.freepik.com/free-psd/bell-notice-alert-new-event-information-sign-symbol-website-icon-3d-illustration_56104-2177.jpg?w=996&t=st=1707288035~exp=1707288635~hmac=5449565390360dc9a4b6468a4d3ae76f93b49b4e24a23c0ebb830876d87a5693" },
  ];

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.BoxContainer}>
      <Image source={{ uri: item.image }} style={styles.ImageContainer} />
      <Text style={styles.TextContainer}>{item.name}</Text>
    </TouchableOpacity>

  );



  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.blue,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  BoxContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    // padding: 6,
    marginVertical: 5,
    padding: 10,
    // borderBottomWidth: 0.2,
    // borderBottomColor: COLORS.black,
    // opacity: 1,
    borderRadius: 10,
  },
  list: {
    // backgroundColor: "pink",
    // borderRadius: 10
  },
  ImageContainer: {
    flex: 0.2,
    resizeMode: 'contain',
    // height: 40,
    // width: 30,
    // backgroundColor: "red",
    // borderRadius: 10,
  },
  TextContainer: {
    flex: 0.8,
    color: COLORS.black,
    paddingHorizontal: 10
  }
})