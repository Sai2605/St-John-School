import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { COLORS } from '../src/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const UpcomingEvent = () => {
    const navigation = useNavigation();


    const [homeworkData, setHomeworkData] = useState([]);

    useEffect(() => {
        const fetchHomeworkData = async () => {
            try {
                // Fetch the username from AsyncStorage
                const username = await AsyncStorage.getItem('username');

                if (username) {
                    // Make a request to the API using the stored username
                    const response = await fetch('https://sjpsapi.theshivgames.com/dashboard/events', {
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
                        setHomeworkData(data.data.events);
                        console.log('++----------------000000000000000000000000000000000000000000000000000000000000000000000000000000000000', data.data.events)
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

    const nextPage = () => {
        navigation.navigate('UpcomingEvents')
        // navigation.navigate('UpcomingEvents')
    }


    // Render item function for the FlatList
    const renderItem = ({ item }) => (
        <View style={styles.body}>
            <View style={{ width: '87%' }}>
                <Text style={{ alignSelf: 'flex-start', color: COLORS.black, fontWeight: '500', fontSize: 12 }}>{item.Title}</Text>
                <Text style={{ alignSelf: 'flex-start', color: COLORS.black, fontWeight: '400', fontSize: 10 }}>{item.Date}</Text>
            </View>
            <TouchableOpacity style={{ width: '13%' }}>
                <MaterialCommunityIcons name='download-box' color={COLORS.black} size={30} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.full}>
            <View style={styles.header}>
                <Text style={styles.Text}>Upcoming Events</Text>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={nextPage}>
                    <MaterialCommunityIcons name='share-all' color={COLORS.white} size={20} />
                    <Text style={styles.Text2}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={homeworkData}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                contentContainerStyle={{ padding: 8, justifyContent: 'center', alignItems: 'center' }}
            />
        </View>
    );
};

export default UpcomingEvent;

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: '#F8F8F8',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    full: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 8,
        elevation: 1
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'space-between',
        paddingLeft: 8
    },
    Text: {
        color: COLORS.white,
        padding: 8
    },
    Text2: {
        color: COLORS.white,
        fontSize: 10,
        padding: 8
    }
});