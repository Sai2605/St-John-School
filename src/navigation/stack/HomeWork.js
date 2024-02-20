import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { COLORS } from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeWorks = () => {
  const [homeworkData, setHomeworkData] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    const fetchHomeworkData = async () => {
      try {
        // Fetch the username from AsyncStorage
        const username = await AsyncStorage.getItem('username');

        if (username) {
          // Make a request to the API using the stored username
          const response = await fetch('https://sjpsapi.theshivgames.com/homework', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
            }),
          });

          const data = await response.json();

          if (data.status === 'success') {
            // Update the state with the fetched homework data
            setHomeworkData(data.data.homeworks);

          } else {
            // Handle error if needed
            console.error('Error fetching homework data');
          }
        }
      } catch (error) {
        console.error('Error fetching username from AsyncStorage', error);
      }
    };

    fetchHomeworkData();
  }, []);


  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <FontAwesome name='file-pdf-o' color={COLORS.gray} size={20} />
      <Text style={styles.itemText}>{item.subject}</Text>
      <TouchableOpacity>
        <MaterialCommunityIcons name='download-box' color={COLORS.black} size={30} />
      </TouchableOpacity>
    </View>
  );

  const nextPage = () => {
    navigation.navigate('HomeWorks')
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Homework List</Text>
        <TouchableOpacity style={styles.viewAllButton} onPress={nextPage}>
          <MaterialCommunityIcons name='share-all' color={COLORS.white} size={20} />
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View> */}
      <FlatList
        data={homeworkData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 8,
    elevation: 3,
    // paddingHorizontal:10,

  },
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  headerText: {
    color: COLORS.white,
    padding: 8,
  },
  viewAllButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllText: {
    color: COLORS.white,
    fontSize: 10,
    padding: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  itemText: {
    alignSelf: 'center',
    marginLeft: -40,
    color: '#000000',
  },
});

export default HomeWorks;