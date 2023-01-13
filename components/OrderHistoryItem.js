import { View, Text, TouchableOpacity } from 'react-native'
import { Divider } from '@react-native-material/core'
import React from 'react'

class OrderHistoryItem extends React.PureComponent{
    constructor(props) {
        super(props);
    }
 
    render(){
    const order = this.props.order;
    const navigation = this.props.navigation;

    return(
            <View style={{
                marginVertical: 20,
                marginHorizontal: 30,
                borderRadius: 30,
                backgroundColor: 'white',
                paddingHorizontal: 20,
                paddingVertical: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <Text style={{
                fontWeight: 'bold',
                fontSize: 12,
                color: '#3D3838'
                }}>Order number: {order.id}</Text> 
                <Text style={{
                fontSize: 12,
                color: '#A8A8A8'
                }}>16 Nov 2022</Text>

                <Divider style={{
                marginVertical: 10
                }}/>

                <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
                }}>
                    <View>
                        <View style={{
                        flexDirection: 'row'
                        }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#3D3838'
                        }}>Total price </Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: '#FF0036'
                        }}>${order.total_price}</Text>
                        </View>

                        <View style={{
                        flexDirection: 'row'
                        }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#3D3838'
                        }}>Status: </Text>
                        <Text style={{
                            color: order.is_completed ? '#00FF0A' : '#FF0036',
                            fontSize: 12
                        }}>* </Text>
                        <Text style={{
                            color: '#3D3838',
                            fontSize: 12
                        }}>{order.is_completed ? "Completed" : "In process"}</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: '#FF0036',
                            borderRadius: 30,
                            paddingVertical: 5,
                            paddingHorizontal: 10
                        }}
                        onPress={() => {navigation.navigate("Order Details", {
                            order: order
                        })}}>
                            <Text style={{
                            color: '#FFFFFF',
                            fontSize: 12
                            }}>View order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        )
    }
}

export default OrderHistoryItem