import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../components/screens/HomeScreen';
import { AboutScreen } from '../components/screens/AboutScreen';
import { screenStyles } from '../styles';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Sportify - Home', headerStyle: screenStyles.headerPrimary, headerTitleStyle: screenStyles.headerTitleStyle }}
            />
            <Stack.Screen name='About' component={AboutScreen} />
        </Stack.Navigator>
    );
};
