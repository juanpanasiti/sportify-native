import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import { PropTypes } from 'prop-types';

const SetCounter = ({ counter, setCounter, min = 0 }) => {
    const handlePress = (add) => {
        const newCounter = add ? counter + 1 : counter - 1;
        if (newCounter >= min) {
            setCounter(newCounter);
        }
    };
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

            <IconButton style={[styles.icons]} icon='arrow-up-circle' color={Colors.green500} size={60} onPress={() => handlePress(true)} />
            <Text style={{ fontSize: 50 }}>{counter}</Text>
            <IconButton style={[styles.icons]} icon='arrow-down-circle' color={Colors.red500} size={60} onPress={() => handlePress(false)} />
        </View>
    );
};

SetCounter.propTypes = {
    counter: PropTypes.number.isRequired,
    setCounter: PropTypes.func.isRequired,
};

export default SetCounter;

const styles = StyleSheet.create({
    icons: {
        marginBottom: -5,
        marginTop: -5,
        marginLeft: -5,
        marginRight: -5
    },
});