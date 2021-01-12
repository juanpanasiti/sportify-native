import React from 'react';
import { View, Text } from 'react-native';
import { textStyles } from '../../../styles';
import IconButton from '../molecules/buttons/IconButton';
import { faBiking, faRunning, } from "@fortawesome/free-solid-svg-icons";

const TrainingsGrid = () => {
    return (
        <View style={{flex:1}}>
            <Text style={textStyles.subtitle1}>Tipos de Entrenamiento</Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <IconButton icon={faBiking} text='Bicicleta' iconSize={70} fontSize={20} />
                <IconButton icon={faRunning} text='Correr/Trotar' iconSize={70} fontSize={20} />
                <IconButton text='Libre' iconSize={70} fontSize={20} />
            </View>
        </View>
    );
};

export default TrainingsGrid;
