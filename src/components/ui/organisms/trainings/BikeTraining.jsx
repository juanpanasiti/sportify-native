import React, { useState } from 'react';

import { View, Text, ScrollView } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
const initialState = {
    estado: 'sin configurar',
    tpoCalentamiento: { min: 5, seg: 0 },
    tpoAblandamiento: { min: 5, seg: 0 },
    tpoIntervaloInt: { min: 0, seg: 30 },
    tpoIntervaloRel: { min: 1, seg: 30 },
};
const BikeTraining = () => {
    const [entrenamiento, setEntrenamiento] = useState(initialState);
    return (
        <View style={{display:'flex',flexDirection:'column'}}>
            {/* CONFIGURACION */}
            <ScrollView style={{marginBottom:25}}>
                <Text style={{ fontSize: 18 }}>Tiempo de Calentamiento</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>

                    <Text style={{ fontSize: 70 }}>00:00</Text>

                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>
                </View>

                <Text style={{ fontSize: 18 }}>Tiempo de Ablandamiento</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>

                    <Text style={{ fontSize: 70 }}>00:00</Text>

                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>
                </View>

                <Text style={{ fontSize: 18 }}>Intervalo Intensivo</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>

                    <Text style={{ fontSize: 70 }}>00:00</Text>

                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>
                </View>

                <Text style={{ fontSize: 18 }}>Intervalo Relajado</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>

                    <Text style={{ fontSize: 70 }}>00:00</Text>

                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>
                </View>

                <Text style={{ fontSize: 18 }}>Sesiones</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <IconButton icon='arrow-up-circle' color={Colors.green500} size={40} />
                        <IconButton icon='arrow-down-circle' color={Colors.red500} size={40} />
                    </View>

                    <Text style={{ fontSize: 70 }}>00:00</Text>
                </View>
            </ScrollView>
            <Text>Tiempo Total</Text>
            {/* EJECUCION */}
        </View>
    );
};

export default BikeTraining;
