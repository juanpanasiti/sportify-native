import React, { useEffect, useState } from 'react';

import { Text, View } from 'react-native';
import { training } from '../../../types/types';
import ConfigTraining from '../../ui/organisms/training/ConfigTraining';

const initialState = {
    estado: training.status.configuration,
    tpoCalentamiento: { min: 5, seg: 0 },
    tpoAblandamiento: { min: 5, seg: 0 },
    tpoIntervaloInt: { min: 0, seg: 30 },
    tpoIntervaloRel: { min: 1, seg: 30 },
    cantIntervalos: 1,
    tpoTotal: { min: 0, seg: 0 },
};

const BikeTraining = () => {
    const [entrenamiento, setEntrenamiento] = useState(initialState);
    const { tpoTotal, estado } = entrenamiento;
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            {/* CONFIGURACION */}
            {estado === training.status.configuration && (
                <>
                    <ConfigTraining {...{ entrenamiento, setEntrenamiento }} />
                    <Text style={{ fontSize: 30, color: 'green', textAlign: 'center', fontWeight: 'bold' }}>
                        {' '}
                        {`Tiempo Total: ${tpoTotal.min}:${tpoTotal.seg}`}{' '}
                    </Text>
                    
                </>
            )}
            {/* EJECUCION */}
        </View>
    );
};

export default BikeTraining;
