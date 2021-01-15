import React, { useEffect, useState } from 'react';

import { View, Text, ScrollView } from 'react-native';
import SetCounter from '../../molecules/SetCounter';
import SetTimer from '../../molecules/timer/SetTimer';
const initialState = {
    estado: 'sin configurar',
    tpoCalentamiento: { min: 5, seg: 0 },
    tpoAblandamiento: { min: 5, seg: 0 },
    tpoIntervaloInt: { min: 0, seg: 30 },
    tpoIntervaloRel: { min: 1, seg: 30 },
    cantIntervalos: 1,
    tpoTotal: { min: 0, seg: 0 },
};
const BikeTraining = () => {
    const [entrenamiento, setEntrenamiento] = useState(initialState);
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
            cantIntervalos: newState
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
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            {/* CONFIGURACION */}
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
            <Text style={{fontSize: 30, color: 'green', textAlign:'center', fontWeight:'bold'}}> {`Tiempo Total: ${tpoTotal.min}:${tpoTotal.seg}`} </Text>
            {/* EJECUCION */}
        </View>
    );
};

export default BikeTraining;
