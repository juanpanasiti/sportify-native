import React from 'react';
import { View } from 'react-native';
import { containerStyles } from '../../styles';
import TrainingsGrid from '../ui/organisms/TrainingsGrid';

export const HomeScreen = ({ navigation }) => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

    return (
        <View style={containerStyles.mainContainer}>
            <TrainingsGrid />
        </View>
    );
};
