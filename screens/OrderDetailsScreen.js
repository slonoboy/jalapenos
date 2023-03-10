import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import { useRoute } from '@react-navigation/native'
import OrderItem from '../components/OrderItem'
import { Spacer, Divider } from '@react-native-material/core';
import { HomeContext } from '../context/HomeContext'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';



const OrderDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const { order } = route.params;

  const {cartItems, setCartItems, setItemsNum} = useContext(HomeContext);
  

  const reorder = () => {
    setCartItems(order.items);
    setItemsNum(order.total_count)
    navigation.navigate("Cart");
  }

  return (
     <View style={styles.container}>
        <CustomHeader navigation={navigation} name={"Order details"}/>  
            <View style={{
                flex:1,
            }}>
                <ScrollView contentContainerStyle={{
                }}>
                    {
                        !order.is_completed ?
                        <>
                            <Text style={{
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                marginTop: 30,
                                color: '#FFFFFF'
                            }}>We are preparing the order</Text>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 50,
                                width: '100%',
                            }}>
                                <LottieView style={{
                                }} 
                                source={require("../assets/in_progress_animation.json")}  autoPlay loop/>
                            </View>
                        </> :
                        <>
                            <Text style={{
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                marginTop: 30,
                                color: '#FFFFFF' 
                            }}>Order is prepared</Text>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 50,
                                width: '100%',
                            }}>
                                <LottieView style={{
                                }} 
                                source={require("../assets/completed.json")} autoPlay loop={false}  />
                            </View>
                        </>
                    }

                    <View style={{
                        padding:30
                    }}>
                    {
                        order?.items?.map(item => (

                            <OrderItem key={item.dish.id} item={item}/>
                        ))
                    }
                    </View>

                    <Spacer/>

                    <View style={{
                        backgroundColor: '#2E3235',
                        padding: 30,
                        minHeight: 250,
                        borderTopWidth: 0.7
                    }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: '#A8A8A8'
                            }}>Sub Total</Text>
                            <Spacer/>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: '#F83103'
                            }}>${order.total_price_without_tax.toFixed(2)}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#A8A8A8',
                                fontSize: 12,
                            }}>Tax</Text>
                            <Spacer/>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: '#F83103'
                            }}>${order.tax.toFixed(2)}</Text>
                        </View>

                        <Divider style={{
                            marginVertical: 10
                        }}/>

                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: '#FFFFFF',
                                fontWeight: 'bold'
                            }}>Order Total</Text>
                            <Spacer/>
                            <Text style={{
                                fontSize: 15,
                                color: '#F83103',
                                fontWeight: 'bold'
                            }}>${order.total_price.toFixed(2)}</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>

            <View style={{
                padding: 30,
                position: 'absolute',
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}>
                <TouchableOpacity style={{
                    height: 60,
                    width: '100%',
                    borderRadius: 20,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#4C322D',
                    borderColor: '#CDCDCD',
                    borderWidth: 1,
                    flexDirection: 'row'
                }}
                onPress={() => {order.is_completed ? reorder() : navigation.navigate("Home Stack")}}>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'grey',
                        paddingRight: 12
                    }}>
                        <FontAwesomeIcon 
                        icon={order.is_completed ? "fa-solid fa-bag-shopping" : "fa-solid fa-house"}
                        size={30}
                        color="#F83103" />
                    </View>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}>
                        {order.is_completed ? "Re-Order" : "Go Home"}
                    </Text>
                    <Text style={{
                        color: '#F83103',
                        fontWeight: 'bold',
                        fontSize: 12

                    }}>{order.total_count} items</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15191F'
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderColor: 'grey',
        borderBottomWidth: 0.6
    }
})

export default OrderDetailsScreen