import * as React from 'react';
import { Alert, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { buttonStyles } from '../../../../styles';
import { DefaultOnPressAlert } from '../alerts/DefaultOnPressAlert';



export const Button = ({ buttonText, handlePress, styleButton, styleText }) => {
    return (
        <TouchableOpacity style={styleButton} onPress={handlePress}>
            <Text style={styleText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
};

Button.defaultProps = {
    handlePress: DefaultOnPressAlert,
    styleButton: buttonStyles.btn,
    styleText: {},
};
