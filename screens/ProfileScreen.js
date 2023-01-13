import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { BASE_URL } from '../config'
import LottieView from 'lottie-react-native'


import ProfileComponent from '../components/ProfileComponent'


const ProfileScreen = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);

  const getProfile = async () => {
      setIsLoading(true);

      let userToken = await AsyncStorage.getItem('userToken');
      const config = {
          headers: { Authorization: `Bearer ${userToken}` },
      };

      await axios.get(`${BASE_URL}/api/profile/get_profile/`, config)
      .then(res => {
          const data = res.data
          setFullName(data.first_name + " " + data.last_name);
          setPhoneNumber(data.phone_number);
          setEmail(data.email);
      })
      .catch(e => {
          console.log(`get profile error ${e}`);
      })

      setIsLoading(false);
  }

  const editProfile = async () => {
    setIsLoading(true);

    let userToken = await AsyncStorage.getItem('userToken');
      const config = {
          headers: { Authorization: `Bearer ${userToken}` },
      };

      const full_name_split = fullName.split(" ");
      const first_name = full_name_split[0];
      const last_name = full_name_split[1]

      await axios.post(`${BASE_URL}/api/profile/edit_profile/`, { 
          first_name: first_name,
          last_name: last_name,
          phone_number: phoneNumber,
          email: email
      }, config)
      .then(res => {
          const data = res.data
          setFullName(data.first_name + " " + data.last_name);
          setPhoneNumber(data.phone_number);
          setEmail(data.email);
      })
      .catch(e => {
          console.log(`get profile error ${e}`);
      })

      setIsLoading(false);
  }
  
  useEffect(() => {
    getProfile();
  }, [])
  

  return (
    <View style={{
      flex: 1
    }}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isLoading ? 0.3 : 1
      }}>
        <ProfileComponent setData={setFullName} inputData={fullName} icon={faUser}/>
        <ProfileComponent setData={setPhoneNumber} inputData={phoneNumber} icon={faPhone}/>
        <ProfileComponent setData={setEmail} inputData={email} icon={faEnvelope}/>
        <TouchableOpacity style={{
            flexDirection: 'row',
            width: 300,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 60,
            height: 40,
            marginTop: 20,
            padding: 10,
            backgroundColor: "#FF0036"
          }}
          onPress={() => {editProfile()}}>
            <Text style={{
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>Edit Details</Text>
          </TouchableOpacity>
      </View>
      { isLoading &&
      <View style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
        <LottieView
         source={require("../assets/loading_animation.json")}  autoPlay loop 
         />
      </View>
      }
    </View>
  )
}

export default ProfileScreen