import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { buttonStyles } from '../../../../styles';
import { DefaultOnPressAlert } from '../../atoms/alerts/DefaultOnPressAlert';

const IconButton = ({ icon, text, iconSize, fontSize, handlePress, disabled }) => {
    return (
        <TouchableOpacity style={buttonStyles.iconButton} onPress={handlePress} disabled={disabled}>
            <FontAwesomeIcon icon={icon} size={iconSize} style={[buttonStyles.iconButtonIcon]} />
            <Text style={[buttonStyles.iconButtonText, { fontSize: fontSize }]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default IconButton;

IconButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    iconSize: PropTypes.number,
    fontSize: PropTypes.number,
    handlePress: PropTypes.func
};

IconButton.defaultProps = {
    handlePress: DefaultOnPressAlert,
    icon: faQuestion,
    iconSize: 32,
    fontSize: 14,
};
