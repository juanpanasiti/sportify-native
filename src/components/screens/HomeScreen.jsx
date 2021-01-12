import React from 'react';
import { Text, View } from 'react-native';
import { containerStyles, globalStyles, textStyles } from '../../styles';
import { Button } from '../ui/molecules/buttons/Button';
import { Timer } from '../ui/molecules/Timer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import TrainingsGrid from '../ui/organisms/TrainingsGrid';



export const HomeScreen = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('About');
    };
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

    

    return (
        <View style={containerStyles.mainContainer}>
            <TrainingsGrid />
            
        </View>
    );
};
