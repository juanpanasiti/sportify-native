import * as React from 'react';
import { View, Text } from 'react-native';
import { textStyles } from '../../../styles';
import IconButton from '../molecules/buttons/IconButton';
import { faBiking, faRunning, } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from '@react-navigation/native';

const TrainingsGrid = () => {
    const navigation = useNavigation()
    const handlePressExercise = (name) => {
        navigation.navigate('Exercise', {type: name})
    }
    return (
        <View style={{flex:1}}>
            <Text style={textStyles.subtitle1}>Tipos de Entrenamiento</Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <IconButton icon={faBiking} text='Bicicleta' iconSize={70} fontSize={20} handlePress={() => handlePressExercise('bici')} />
                <IconButton icon={faRunning} text='Correr/Trotar' iconSize={70} fontSize={20} handlePress={() => handlePressExercise('correr')} />
                <IconButton text='Libre' iconSize={70} fontSize={20} handlePress={() => handlePressExercise('libre')} />
            </View>
        </View>
    );
};

export default TrainingsGrid;
