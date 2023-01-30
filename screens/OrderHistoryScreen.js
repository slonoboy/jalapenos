import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import { FlatList } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import LottieView from 'lottie-react-native';


import { BASE_URL } from '../config'
import OrderHistoryItem from '../components/OrderHistoryItem'
import { useRoute } from '@react-navigation/native'

const OrderHistoryScreen = ({navigation}) => {
  const route = useRoute()

  const [orderHistory, setOrderHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const GetOrderHistory = async () => {
    setIsLoading(true);
    let userToken = await AsyncStorage.getItem('userToken');
    const config = {
      headers: { Authorization: `Bearer ${userToken}`},
    };

    await axios.get(`${BASE_URL}/api/order/order/`, config) 
      .then(res => {
          setOrderHistory(res.data);
      })
      .catch(e => {
          console.log(`get order history error ${e}`);
      })
    setIsLoading(false);
  }

  useEffect(() => {
      GetOrderHistory();
  }, [route.params])

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#15191F',
    }}>
      <CustomHeader navigation={navigation} name={"Order history"}/>

      { isLoading? 
         <LottieView
         source={require("../assets/loading_animation.json")}  autoPlay loop 
         />
      :
        <FlatList style={{
        }}
          key={'flatlist'}
          data={orderHistory}
          renderItem={({item}) => <OrderHistoryItem order={item} navigation={navigation}/>}
        />
      }
     
    </View>
  )
}

export default OrderHistoryScreen