import { View, Text } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center', 
      paddingTop: 20,
      backgroundColor: '#15191F'
    }}>
      <Text style={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 120
      }}>This app was developed by the best company</Text>
    </View>
  )
}

export default AboutScreen