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
        backgroundColor: Colors.SECONDARY,
    },
    containerSecondary: {
        backgroundColor: Colors.SECONDARY,
    },
});

export const containerStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.SECONDARY,
        flex: 1,
    },
    container: {},
    iconButtonContainer: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 10,
    },
});

export const textStyles = StyleSheet.create({
    title1: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_24,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 5,
    },
    subtitle1: {
        fontSize: Typography.FONT_SIZE_20,
    },
    icon: {
        color: '#FFFF00',
    },
});

export const buttonStyles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 100,
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        margin: 5,
        padding: 10,
        flex: 1,
        backgroundColor: Colors.DARK,
        color: Colors.LIGHT,
        borderRadius: 10
        
    },
    iconButtonText: {
        textAlign: 'center',
        color: Colors.LIGHT,
        fontSize: Typography.FONT_SIZE_14,
        fontWeight: 'bold',
        marginTop:5,
    },
    iconButtonIcon:{
        color: Colors.LIGHT
    }
});

export const screenStyles = StyleSheet.create({
    headerPrimary: {
        backgroundColor: Colors.PRIMARY,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: Colors.LIGHT,
    },
});
