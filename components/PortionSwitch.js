import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const PortionSwith = ({
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
                width: '100%', 
                backgroundColor: '#15191F',
                borderRadius: 25,
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 2,
            }}>
            
            <TouchableOpacity
                activeOpacity={1} 
                onPress={() => updatedSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 1 ? '#2E3235' : '#15191F',
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{
                    color: '#FFFFFF',
                    fontWeight: 'bold'
                }}>
                    Default
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                TouchableOpacity
                activeOpacity={1}
                onPress={() => updatedSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 2 ? '#2E3235' : '#15191F',
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text 
                    style={{
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                    }}>
                    Large
                </Text>
                </TouchableOpacity>
        </View>
    </View>
   );
};

export default PortionSwith;