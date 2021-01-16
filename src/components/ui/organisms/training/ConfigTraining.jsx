import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import SetCounter from '../../molecules/SetCounter';
import SetTimer from '../../molecules/timer/SetTimer';

const ConfigTraining = (props) => {
    const { entrenamiento, setEntrenamiento } = props;

    const { tpoCalentamiento, tpoAblandamiento, tpoIntervaloInt, tpoIntervaloRel, cantIntervalos, tpoTotal } = entrenamiento;

    const setTpoCal = (newState) => {
        setEntrenamiento({
            ...entrenamiento,
            tpoCalentamiento: {
                ...newState,
            },
        });
    };

    const setTpoAbl = (newState) => {
        setEntrenamiento({
            ...entrenamiento,
            tpoAblandamiento: {
                ...newState,
            },
        });
    };

    const setInterInt = (newState) => {
        setEntrenamiento({
            ...entrenamiento,
            tpoIntervaloInt: {
                ...newState,
            },
        });
    };

    const setInterRel = (newState) => {
        setEntrenamiento({
            ...entrenamiento,
            tpoIntervaloRel: {
                ...newState,
            },
        });
    };

    const setCantIntervalos = (newState) => {
        setEntrenamiento({
            ...entrenamiento,
            cantIntervalos: newState,
        });
    };

    useEffect(() => {
        const totalEnSegs =
            tpoCalentamiento.min * 60 +
            tpoCalentamiento.seg +
            (tpoAblandamiento.min * 60 + tpoAblandamiento.seg) +
            (tpoIntervaloInt.min * 60 + tpoIntervaloInt.seg) * cantIntervalos +
            (tpoIntervaloRel.min * 60 + tpoIntervaloRel.seg) * (cantIntervalos - 1);

        const totalMin = Math.floor(totalEnSegs / 60);
        const totalSeg = totalEnSegs - totalMin * 60;

        setEntrenamiento({
            ...entrenamiento,
            tpoTotal: {
                min: totalMin,
                seg: totalSeg,
            },
        });
    }, [tpoCalentamiento, tpoAblandamiento, tpoIntervaloInt, tpoIntervaloRel, cantIntervalos]);
    return (
        <ScrollView style={{ marginBottom: 25 }}>
            <Text style={{ fontSize: 18 }}>Tiempo de Calentamiento</Text>
            <SetTimer time={tpoCalentamiento} setTime={setTpoCal} />

            <Text style={{ fontSize: 18 }}>Tiempo de Ablandamiento</Text>
            <SetTimer time={tpoAblandamiento} setTime={setTpoAbl} />

            <Text style={{ fontSize: 18 }}>Intervalo Intensivo</Text>
            <SetTimer time={tpoIntervaloInt} setTime={setInterInt} />

            <Text style={{ fontSize: 18 }}>Intervalo Relajado</Text>
            <SetTimer time={tpoIntervaloRel} setTime={setInterRel} />

            <Text style={{ fontSize: 18 }}>Sesiones</Text>
            <SetCounter counter={cantIntervalos} setCounter={setCantIntervalos} min={1} />
        </ScrollView>
    );
};

ConfigTraining.propTypes = {
    entrenamiento: PropTypes.object.isRequired,
    setEntrenamiento: PropTypes.func.isRequired,
};

export default ConfigTraining;

const styles = StyleSheet.create({});
