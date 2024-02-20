import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';
// import { colors } from '../components/infrastructrue/theme/colors';

const data = [
    { key: '1', winners: '100000', numberOfWinners: '100' },
    { key: '2', winners: '50000', numberOfWinners: '1' },
    { key: '3', winners: '25000', numberOfWinners: '1' },
    { key: '4', winners: '10000', numberOfWinners: '3' },
    { key: '5', winners: '5000', numberOfWinners: '6' },
    { key: '6', winners: '2500', numberOfWinners: '10' },
    { key: '7', winners: '1000', numberOfWinners: '50' },
    { key: '8', winners: '500', numberOfWinners: '100' },
    { key: '9', winners: '250', numberOfWinners: '500' },
    { key: '10', winners: '100', numberOfWinners: '250' },
    { key: '11', winners: '50', numberOfWinners: '1000' },
    { key: '12', winners: '25', numberOfWinners: '2000' },
    { key: '13', winners: '25', numberOfWinners: '7500' },
];

const Table = () => {
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={[styles.cell, styles.borderRight, styles.smallWidth]}>{item.key}</Text>
            <Text style={[styles.cell, styles.borderRight]}>{item.winners}</Text>
            <Text style={styles.cell}>{item.numberOfWinners}</Text>
        </View>
    );

    const itemSeparator = () => {
        return <View style={styles.separator} />;
    };

    return (
        <View>
            <FlatList
                ListHeaderComponent={
                    <View style={[styles.row, styles.header]}>
                        <Text style={[styles.cell, styles.headerCell, styles.smallWidth]}>Ranks</Text>
                        <Text style={[styles.cell, styles.borderRight, styles.headerCell]}>Prices</Text>
                        <Text style={[styles.cell, styles.headerCell]}>Nos of winner</Text>
                    </View>
                }
                // ItemSeparatorComponent={itemSeparator}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
            <View style={styles.line}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.white,
    },
    headerCell: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.black
    },
    row: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
    },
    cell: {
        flex: 2, // Adjusted to 2 for the other cells
        padding: 5,
        textAlign: 'center',
        borderWidth: 1, // Ensure this is the same for vertical and horizontal lines
        borderBottomWidth: 0.1,
        borderColor: COLORS.black, // Used for all borders
        color: COLORS.black
    },
    smallWidth: {
        flex: 1, // Adjusted to 1 for the first cell to make it smaller
    },
    borderRight: {
        borderRightWidth: 0, // Set to 0 since borderWidth is already set in cell
    },
    separator: {
        height: 1, // Match this with the borderWidth for consistency
        width: '1%',
        backgroundColor: COLORS.black, // Match the color with the borderColor
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black,
    }
});

export default Table;
