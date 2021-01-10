import { StyleSheet } from 'react-native';
import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Mixins from './mixins';

export const globalStyles = StyleSheet.create({
    
    containerCenterElements: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSecondary : {
        backgroundColor: Colors.SECONDARY
    },
    text: {
        color: 'red',
        fontSize: Typography.FONT_SIZE_14,
    },
});

export const buttonStyles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})

export const screenStyles = StyleSheet.create({
    headerPrimary: {
        backgroundColor: Colors.PRIMARY,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: Colors.LIGHT
    }
})
