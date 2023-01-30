import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SettingsScreen = () => {

  const {logout} = useContext(AuthContext);

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#15191F'
    }}>
      <View style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 60,
        elevation: 5,
        marginTop: 20,
      }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          width: 300,
          alignItems: 'center',
          backgroundColor: '#F83103',
          borderRadius: 60,
          height: 40,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => {logout()}}>
          <Text style={{
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SettingsScreen