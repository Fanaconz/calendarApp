import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import { gStyle } from "../styles/style";
import React, {useState} from "react";

const Line = ({ top }) => (
    <View style={[gStyle.line, { top }]} />
);

const CalendarGrid = ({ numbers }) => (
    <View style={gStyle.calendarGrid}>
        {numbers.map((number) => (
            <Text style={gStyle.number}>
                {number}
            </Text>
        ))}
    </View>
);

export default function Main() {
    const linePositions = [40, 110, 180, 250, 320];

    // Функция для группировки чисел
    const groupNumbers = (arr, size) => {
        return arr.reduce((result, item, index) => {
            const chunkIndex = Math.floor(index / size);
            if (!result[chunkIndex]) {
                result[chunkIndex] = [];
            }
            result[chunkIndex].push(item);
            return result;
        }, []);
    };

    const numbers = [...Array(31)].map((_, i) => i + 1);
    const groupedNumbers = groupNumbers(numbers, 7);

    return (
        <SafeAreaView style={gStyle.main}>
            <Text style={gStyle.title}>Ноябрь</Text>

            {linePositions.map((top, index) => (
                <Line key={index} top={top} />
            ))}

            {linePositions.map((top, index) => (
                <View key={index}>
                    {index < groupedNumbers.length && (
                        <CalendarGrid numbers={groupedNumbers[index]} />
                    )}
                </View>
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
