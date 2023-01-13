import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomSwitch = ({
    navigation,
    selectionMode,
    onSelectSwitch,
}) => {
   const [getSelectionMode, setSelectionMode] = useState(selectionMode);

   const updatedSwitchData = val => {
        setSelectionMode(val);
        onSelectSwitch(val);
   };

   return (
    <View>
        <View 
            style={{
                height: 39,
                width: 250, 
                backgroundColor: 'white',
                borderRadius: 25,
                borderWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 2,
            }}>
            
            <TouchableOpacity
                activeOpacity={1} 
                onPress={() => updatedSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 1 ? '#FF0036' : 'white',
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{
                    color: getSelectionMode == 1 ? 'white' : '#FF0036',
                    fontWeight: 'bold'
                }}>
                    Log in
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                TouchableOpacity
                activeOpacity={1}
                onPress={() => updatedSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 2 ? '#FF0036' : 'white',
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text 
                    style={{
                        color: getSelectionMode == 2 ? 'white' : '#FF0036',
                        fontWeight: 'bold',
                    }}>
                    Sign up
                </Text>
                </TouchableOpacity>
        </View>
    </View>
   );
};

export default CustomSwitch;