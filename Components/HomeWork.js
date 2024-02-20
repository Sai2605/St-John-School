import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { COLORS } from '../src/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeWork = () => {
    // Sample data for FlatList
    const homeworkData = [
        { id: '1', title: 'Daywise Learning - 01 Feb 2024',"document_url": "https://www.sjrert.com/homework/download/7746" },
        { id: '2', title: 'Daywise Learning - 02 Feb 2024' ,"document_url": "https://www.sjrert.com/homework/download/7704" },
        { id: '3', title: 'Daywise Learning - 03 Feb 2024' ,"document_url": "https://www.sjrert.com/homework/download/7653" },
        { id: '4', title: 'Daywise Learning - 04 Feb 2024',"document_url": "https://www.sjrert.com/homework/download/7608"  },
        { id: '5', title: 'Daywise Learning - 05 Feb 2024' ,"document_url": "https://www.sjrert.com/homework/download/7563" },

    ];

    // Render item function for FlatList
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <FontAwesome name='file-pdf-o' color={COLORS.gray} size={20} />
            <Text style={styles.itemText}>{item.title}</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name='download-box' color={COLORS.black} size={30} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Homework List</Text>
                <TouchableOpacity style={styles.viewAllButton}>
                    <MaterialCommunityIcons name='share-all' color={COLORS.white} size={20} />
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={homeworkData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
        paddingHorizontal:10,
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
        marginHorizontal:10,
        
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    itemText: {
        alignSelf: 'center',
        marginLeft: -70,
        color: '#000000',
    },
});

export default HomeWork;
