import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { globalStyles } from '../../styles';
import { Button } from '../ui/atoms/buttons/Button';

export const HomeScreen = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('About')
    }
    
    return (
        <View style={[globalStyles.containerCenterElements, globalStyles.containerSecondary]}>
            <Text style={[globalStyles.text]}>Home Screen</Text>
            <Button buttonText='Acerca de la app' handlePress={handlePress} />

        </View>
    );
};




