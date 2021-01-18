import * as React from 'react';
import { useTimer } from 'react-timer-hook';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Button, IconButton } from 'react-native-paper';

export const Timer = (props) => {
    const { time, onFinishTimer, timerTitle } = props;
    const totalSegs = time.min * 60 + time.seg;
    const now = new Date();
    const expiryTimestamp = now.setSeconds(now.getSeconds() + totalSegs);

    const { seconds, minutes, hours, isRunning, pause, resume } = useTimer({
        expiryTimestamp,
        onExpire: onFinishTimer,
    });
    const timer =
        hours > 0
            ? `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{timerTitle}</Text>
            <Text style={styles.timer}>{timer}</Text>

            {isRunning ? <IconButton icon='pause' size={50} onPress={pause} /> : <IconButton icon='play' size={50} onPress={resume} />}
        </View>
    );
};

Timer.defaultProps = {
    timerTitle: 'Timer',
};

Timer.propTypes = {
    onFinishTimer: PropTypes.func.isRequired,
    timer: PropTypes.shape({
        min: PropTypes.number.isRequired,
        seg: PropTypes.number.isRequired,
    }),
    timerTitle: PropTypes.string.isRequired,
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 40,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    timer: {
        textAlign: 'center',
        fontSize: 70,
        color: 'green',
        fontWeight: 'bold',
    },
});
