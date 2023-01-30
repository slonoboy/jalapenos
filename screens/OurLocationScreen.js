import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'

const OurLocationScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#15191F'
    }}>
      <CustomHeader name={"Our Location"} navigation={navigation}/>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
      }}>
        <Image
        style={{
          width: '80%',
          height: 200
        }} 
        source={require("../assets/rest.png")}/>

        <Text style={{
          fontWeight: 'bold',
          marginTop: 30,
          color: '#FFFFFF'
        }}>5714 5th Ave, Brooklyn, NY 11220</Text>
      </View>
    </View>
  )
}

export default OurLocationScreen