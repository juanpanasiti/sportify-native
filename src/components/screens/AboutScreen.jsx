import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { globalStyles } from '../../styles'

export const AboutScreen = ({navigation}) => {
    const handlePressNavigation = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={[globalStyles.containerCenterElements]}>
            <Text>About Screen</Text>
            <Button title='A Home' onPress={handlePressNavigation} />
        </View>
    )
}
