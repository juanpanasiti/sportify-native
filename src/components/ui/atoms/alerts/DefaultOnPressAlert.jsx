export const DefaultOnPressAlert = () =>
    Alert.alert(
        'Defualt onPress alert',
        "If you're seeing this, you probably forgot to pass a function for the handlePress property",
        [{ text: 'OK' }],
        {
            cancelable: true,
            
        }
    );
