import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import { PropTypes } from 'prop-types';

const initialState = {
    min: 0,
    seg: 0,
};

const SetTimer = ({ time = { min: 0, seg: 0 }, setTime }) => {
    const { min, seg } = time;
    const handleAddBtn = (target) => {
        const newVal = time[target] + 1;

        if (newVal < 60) {
            const newTime = { ...time };
            newTime[target] = newVal;
            setTime({
                ...newTime,
            });
        }
    };
    const handleSubsBtn = (target) => {
        const newVal = time[target] - 1;

        if (newVal >= 0) {
            const newTime = { ...time };
            newTime[target] = newVal;
            setTime({
                ...newTime,
            });
        }
    };
    return (
        <View style={[styles.container]}>
            <View style={[styles.btnContainer]}>
                <IconButton
                    nativeId
                    style={[styles.icons]}
                    icon='arrow-up-circle'
                    color={Colors.green500}
                    size={50}
                    onPress={() => handleAddBtn('min')}
                />
                <IconButton style={[styles.icons]} icon='arrow-down-circle' color={Colors.red500} size={50} onPress={() => handleSubsBtn('min')} />
            </View>

            <Text style={[styles.text]}>
                {min}:{seg}
            </Text>

            <View style={[styles.btnContainer]}>
                <IconButton style={[styles.icons]} icon='arrow-up-circle' color={Colors.green500} size={50} onPress={() => handleAddBtn('seg')} />
                <IconButton style={[styles.icons]} icon='arrow-down-circle' color={Colors.red500} size={50} onPress={() => handleSubsBtn('seg')} />
            </View>
        </View>
    );
};

SetTimer.propTypes = {
    time: PropTypes.object.isRequired,
    setTime: PropTypes.func.isRequired,
};

export default SetTimer;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icons: {
        marginBottom: -5,
        marginTop: -5,
        marginLeft: -5,
        marginRight: -5
    },
    text: {
        fontSize: 50,
    },
});
