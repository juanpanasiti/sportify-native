import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { AppNavigator } from './src/navigations/AppNavigator';



export default function App() {
    library.add(fab)
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
