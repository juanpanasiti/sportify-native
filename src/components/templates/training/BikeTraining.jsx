import React, { useEffect, useState } from 'react';

import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { training } from '../../../types/types';
import ConfigTraining from '../../ui/organisms/training/ConfigTraining';
import RunningTraining from '../../ui/organisms/training/RunningTraining';

const initialState = {
    estado: training.status.configuration,
    tpoCalentamiento: { min: 0, seg: 5 },
    tpoAblandamiento: { min: 0, seg: 5 },
    tpoIntervaloInt: { min: 0, seg: 3 },
    tpoIntervaloRel: { min: 0, seg: 3 },
    cantIntervalos: 1,
    tpoTotal: { min: 0, seg: 0 },
};

const BikeTraining = () => {
    const [entrenamiento, setEntrenamiento] = useState(initialState);
    const { tpoTotal, estado } = entrenamiento;

    const handleStartButtonPress = () => {
        setEntrenamiento({
            ...entrenamiento,
            estado: training.status.running,
        });
    };
    return (
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* CONFIGURACION */}
            {estado === training.status.configuration && (
                <>
                    <ConfigTraining {...{ entrenamiento, setEntrenamiento }} />
                    <Text style={{ fontSize: 30, color: 'green', textAlign: 'center', fontWeight: 'bold' }}>
                        {' '}
                        {`Tiempo Total: ${tpoTotal.min}:${tpoTotal.seg}`}{' '}
                    </Text>
                    <Button style={{ marginTop: 15 }} icon='camera' mode='outlined' onPress={handleStartButtonPress}>
                        Comenzar
                    </Button>
                </>
            )}
            {/* EJECUCION */}
            {(estado === training.status.running || estado === training.status.paused) && (
                <>
                    <Text>GO!</Text>
                    <RunningTraining {...{ entrenamiento, setEntrenamiento }} />
                </>
            )}

            {/* TERMINADO */}
            {(estado === training.status.finished) && (
                <>
                    <Text>Entrenamiento terminado!</Text>
                    
                </>
            )}
        </View>
    );
};

export default BikeTraining;
