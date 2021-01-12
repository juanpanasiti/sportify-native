import { Alert } from "react-native";

export const DefaultOnPressAlert = () =>
    Alert.alert(
        'Default onPress alert',
        "If you're seeing this, you probably forgot to pass a function for the handlePress property",
        [{ text: 'OK' }],
        {
            cancelable: true,
            
        }
    );
