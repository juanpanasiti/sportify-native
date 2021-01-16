import React from 'react';

import { View } from 'react-native';
import BikeTraining from '../templates/training/BikeTraining';

const ExerciseScreen = ({ route }) => {
    const { type } = route.params;
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            {type === 'bici' && <BikeTraining />}
        </View>
    );
};

export default ExerciseScreen;
