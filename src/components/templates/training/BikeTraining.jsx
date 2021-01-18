import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { Button, IconButton, Colors } from 'react-native-paper';
import { training } from '../../../types/types';
import ConfigTraining from '../../ui/organisms/training/ConfigTraining';
import RunningTraining from '../../ui/organisms/training/RunningTraining';

const initialState = {
    estado: training.status.configuration,
    tpoCalentamiento: { min: 0, seg: 5 },
    tpoAblandamiento: { min: 0, seg: 5 },
    tpoIntervaloInt: { min: 0, seg: 3 },
    tpoIntervaloRel: { min: 0, seg: 3 },
    cantIntervalos: 15,
    tpoTotal: { min: 0, seg: 0 },
};

// const initialState = {
//     estado: training.status.configuration,
//     tpoCalentamiento: { min: 5, seg: 0 },
//     tpoAblandamiento: { min: 5, seg: 0 },
//     tpoIntervaloInt: { min: 0, seg: 30 },
//     tpoIntervaloRel: { min: 1, seg: 30 },
//     cantIntervalos: 15,
//     tpoTotal: { min: 0, seg: 0 },
// };

const BikeTraining = () => {
    const [entrenamiento, setEntrenamiento] = useState(initialState);
    const { tpoTotal, estado } = entrenamiento;

    const handleStartButtonPress = () => {
        setEntrenamiento({
            ...entrenamiento,
            estado: training.status.running,
        });
    };

    const onFinishTraining = () => {
        setEntrenamiento({
            ...entrenamiento,
            estado: training.status.finished,
        });
    }

    const handleRestartPress = () => {
        setEntrenamiento({
            ...entrenamiento,
            estado: training.status.configuration,
        });
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column'}}>
            {/* CONFIGURACION */}
            {estado === training.status.configuration && (
                <View>
                    <ConfigTraining {...{ entrenamiento, setEntrenamiento }} />
                    <Text style={{ fontSize: 30, color: 'green', textAlign: 'center', fontWeight: 'bold' }}>
                        {' '}
                        {`Tiempo Total: ${tpoTotal.min}:${tpoTotal.seg}`}{' '}
                    </Text>
                    <Button style={{ marginTop: 15 }} icon='flag-checkered' mode='outlined' onPress={handleStartButtonPress}>
                        Comenzar
                    </Button>
                </View>
            )}
            {/* EJECUCION */}
            {(estado === training.status.running || estado === training.status.paused) && (
                    <RunningTraining {...{ entrenamiento, onFinishTraining }} />
            )}

            {/* TERMINADO */}
            {(estado === training.status.finished) && (
                <View style={{display: 'flex',flexDirection:'column', alignItems:'center'}}>
                    <Text style={{fontSize:50, textAlign:'center', fontWeight:'bold'}}>Entrenamiento terminado!</Text>
                    <IconButton color={Colors.blue900} icon='restart' size={70} onPress={() => console.log('restart')} />
                </View>
            )}
        </View>
    );
};

export default BikeTraining;
