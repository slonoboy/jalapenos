import { View, Text } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center', 
      marginTop: 20
    }}>
      <Text style={{
        fontWeight: 'bold',
        color: '#3D3838',
        textAlign: 'center',
        paddingHorizontal: 120
      }}>This app was developed by the best company</Text>
    </View>
  )
}

export default AboutScreen