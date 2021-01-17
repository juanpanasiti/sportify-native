import * as React from 'react';
import { useTimer } from 'react-timer-hook';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'


import { containerStyles, textStyles } from '../../../styles';
import { Button } from 'react-native-paper';


export const Timer = (props) => {
    const { time, onFinishTimer } = props;
    const totalSegs = time.min * 60 + time.seg;
    const now = new Date();
    const expiryTimestamp = now.setSeconds(now.getSeconds() + totalSegs);

    const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
        expiryTimestamp,
        onExpire: onFinishTimer,
    });

    return (
        <View style={containerStyles.container}>
            <Text style={textStyles.subtitle1}>Timer Demo</Text>
            <Text>{`${days}:${hours}:${minutes}:${seconds}`}</Text>
            <Text>{isRunning ? 'Running' : 'Not running'}</Text>

            <Button onPress={start} >Start</Button>
            <Button onPress={pause} >Pause</Button>
            <Button onPress={resume} >Resume</Button>
            <Button
                
                onPress={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time);
                }}
            >Restart</Button>
        </View>
    );
};
Timer.propTypes = {
    timer: PropTypes.shape({
        min: PropTypes.number.isRequired,
        seg: PropTypes.number.isRequired,
    }),
    onFinishTimer: PropTypes.func.isRequired
}
const styles = StyleSheet.create({});
