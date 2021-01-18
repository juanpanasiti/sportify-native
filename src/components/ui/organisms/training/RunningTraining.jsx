import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { training } from '../../../../types/types';
import { Timer } from '../../molecules/Timer';

const RunningTraining = (props) => {
    const { entrenamiento, onFinishTraining } = props;
    const { estado, tpoCalentamiento, tpoAblandamiento, tpoIntervaloInt, tpoIntervaloRel, cantIntervalos, tpoTotal } = entrenamiento;
    const initialState = {
        step: training.step.warmUp,
        session: 1
    };

    const [state, setState] = useState(initialState);

    const onFinishTimer = () => {
        
        switch (state.step) {
            case training.step.warmUp:
                console.log('Finished timer', training.step.warmUp)
                setState({
                    ...state,
                    step: training.step.intensive,
                });
                break;
                case training.step.intensive:
                console.log('Finished timer', training.step.intensive)
                if (state.session === entrenamiento.cantIntervalos) {
                    setState({
                        ...state,
                        step: training.step.coolDown,
                    });
                } else {
                    setState({
                        ...state,
                        step: training.step.moderate,
                    });
                }
                break;
                case training.step.moderate:
                console.log('Finished timer', training.step.moderate)
                setState({
                    ...state,
                    step: training.step.intensive,
                    session: (state.session + 1)
                });
                break;
                
                case training.step.coolDown:
                console.log('Finished timer', training.step.coolDown)
                onFinishTraining();
                break;

            default:
                break;
        }
    };
    return (
        <View style={styles.container}>
            <Text>
                {tpoTotal.min}:{tpoTotal.seg}
            </Text>
            {state.step === training.step.warmUp && <Timer time={tpoCalentamiento} onFinishTimer={onFinishTimer} timerTitle='Calentamiento' />}
            {state.step === training.step.intensive && <Timer time={tpoIntervaloInt} onFinishTimer={onFinishTimer} timerTitle='Intensivo' />}
            {state.step === training.step.moderate && <Timer time={tpoIntervaloRel} onFinishTimer={onFinishTimer} timerTitle='Moderado' />}
            {state.step === training.step.coolDown && <Timer time={tpoAblandamiento} onFinishTimer={onFinishTimer} timerTitle='Ablandamiento' />}
            <Text>Sesiones:{`${state.session}/${entrenamiento.cantIntervalos}` }</Text>
        </View>
    );
};

export default RunningTraining;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'column',
    }
});
