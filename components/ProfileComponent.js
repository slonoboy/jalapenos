import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'

const ProfileComponent = (props) => {
  return (
    <View style={{
        flexDirection: 'row',
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
        height: 40,
        width: 300,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 15
      }}>
          <FontAwesomeIcon style={{
            marginRight: 15
          }}
          icon={props.icon}
          color={"#FF0036"}/>
          <TextInput
            style={{
              fontWeight: 'bold',
              color: '#3D3838'
            }}
            value={props.inputData}
            onChangeText={text => props.setData(text)}
          />
      </View>
  )
}

export default ProfileComponent