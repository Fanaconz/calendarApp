import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 20,
        color: '#333'
        // fontFamily: 'mt-bold'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    line: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#eeeeee',
    },
    numberRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 22,
    },
    number: {
        fontSize: 20,
        padding: 17
    },
    calendarGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 14.25%)',
        gridTemplateRows: 'repeat(1, 70px)',
    }
});

