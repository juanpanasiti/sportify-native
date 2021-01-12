import * as React from 'react';
import { useTimer } from 'react-timer-hook';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './buttons/Button';
import { containerStyles, textStyles } from '../../../styles';

// import { Button } from '../ui/atoms/buttons/Button';

export const Timer = ({ expiryTimestamp }) => {
    const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn('onExpire called'),
    });

    return (
        <View style={containerStyles.container}>
            <Text style={textStyles.subtitle1}>Timer Demo</Text>
            <Text>{`${days}:${hours}:${minutes}:${seconds}`}</Text>
            <Text>{isRunning ? 'Running' : 'Not running'}</Text>

            <Button buttonText='Start' handlePress={start} />
            <Button buttonText='Pause' handlePress={pause} />
            <Button buttonText='Resume' handlePress={resume} />
            <Button
                buttonText='Restart'
                handlePress={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

})
