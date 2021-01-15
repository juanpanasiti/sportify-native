import React from 'react';

import { View, Text } from 'react-native';
import BikeTraining from '../ui/organisms/trainings/BikeTraining';

const ExerciseScreen = ({ route, navigation }) => {
    const { type } = route.params;
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            {type === 'bici' && <BikeTraining />}
        </View>
    );
};

export default ExerciseScreen;
