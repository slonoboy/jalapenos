import React, { useContext, useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Button} from 'react-native';
import Modal from 'react-native-modal'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot, faP, faCirclePlus, faPlus, faMinus, faCheck , faXmark, faTrashCan, faCheckCircle, faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { Spacer, Divider } from '@react-native-material/core';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


import CartItem from '../components/CartItem';
import { HomeContext } from '../context/HomeContext';
import CustomHeader from '../components/CustomHeader';
import { BASE_URL } from '../config';


const CartScreen = ({navigation}) => {

    const {itemsNum, setItemsNum, cartItems, setCartItems, IncrementCartItem, DecrementCartItem} = useContext(HomeContext);

    const [subTotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const [removeModalShow, setRemoveModalShow] = useState(false);
    const [removingItem, setRemovingItem] = useState([]);

    const [orderModalShow, setOrderModalShow] = useState(false);

    const removeItem = () => {
        DecrementCartItem(removingItem.dish);
        setRemovingItem({});
        setRemoveModalShow(false);
    }

    const calculateTotal = () => {
        var sum = 0
        cartItems.map(item => {
            sum += item.sum_price;
        })
        setSubtotal(sum);
        setTax(sum*0.15);
        setCartTotal(sum+sum*0.15);
    }


    const createOrder = async() => {
        let userToken = await AsyncStorage.getItem('userToken');
        const config = {
            headers: { Authorization: `Bearer ${userToken}` },
        };

        await axios.post(`${BASE_URL}/api/order/order/`, {
            cartItems
        }, config)
        .then(res => {
            setCartItems([]);
            setItemsNum(0);
            navigation.navigate("Order Details", { 
                order: res.data,
            })
        })
        .catch(e => {
            console.log(`create order error ${e}`);
        })
    }

    useEffect(() => {
        calculateTotal();
    }, [cartItems])

    if (cartItems.length === 0){
        return(
            <View style={styles.container}>
                <CustomHeader navigation={navigation} name={"Shopping cart"}/>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#FFFFFF'
                    }}>Your cart seems empty go to </Text>
                    <TouchableOpacity style={{
                        borderWidth: 2,
                        borderRadius: 50,
                        padding: 10,
                        borderColor: '#F83103',
                        marginTop: 20
                    }}
                    onPress={() => {navigation.navigate("Home Stack")}}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#F83103'
                        }}>Menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    

    return(
        <View style={styles.container}>
            <Modal isVisible={removeModalShow} style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onBackdropPress={() => {setRemoveModalShow(false)}} 
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            >
                <View style={{
                    backgroundColor: '#2E3235',
                    height: 280,
                    width: 330,
                    alignItems: 'center',
                    borderRadius: 30,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingTop: 20,
                        paddingRight: 20
                    }}>
                        <Spacer/>
                        <TouchableOpacity
                        onPress={() => {setRemoveModalShow(false)}}>
                            <FontAwesomeIcon 
                                color='#FFFFFF'
                                icon={faXmark} 
                                size={18}
                                
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        width: '100%',
                        borderBottomColor: 'grey',
                        paddingBottom: 15,
                        marginBottom: 15
                    }}>
                        <FontAwesomeIcon
                            color='#F83103'
                            icon={faTrashCan} 
                            size={20}
                        />
                        <Text style={{
                            color: "#F83103",
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>Delete Order</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#FFFFFF',
                            paddingHorizontal: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>Deleting an order will remove it from the shopping cart</Text>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: '#F83103',
                        borderRadius: 50,
                        width: 200,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10
                    }}
                    onPress={() => {removeItem()}}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 12
                        }}>Yes, Delete Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        borderRadius: 50,
                        width: 200,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#FFFFFF'
                    }}
                    onPress={() => {setRemoveModalShow(false)}}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            fontSize: 12,
                        }}>No, Keep Order</Text>
                    </TouchableOpacity>
                </View>               
            </Modal>

            <Modal isVisible={orderModalShow} style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onBackdropPress={() => {setOrderModalShow(false)}} 
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            >
                <View style={{
                    backgroundColor: '#2E3235',
                    height: 280,
                    width: 330,
                    alignItems: 'center',
                    borderRadius: 30,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingTop: 20,
                        paddingRight: 20
                    }}>
                        <Spacer/>
                        <TouchableOpacity
                        onPress={() => {setOrderModalShow(false)}}>
                            <FontAwesomeIcon 
                                color='#FFFFFF'
                                icon={faXmark} 
                                size={18}
                                
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        width: '100%',
                        borderBottomColor: 'grey',
                        paddingBottom: 15,
                        marginBottom: 15
                    }}>
                        <FontAwesomeIcon
                            color='#F83103'
                            icon={faCheckCircle} 
                            size={20}
                        />
                        <Text style={{
                            color: "#F83103",
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>Confirm Order</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#FFFFFF',
                            paddingHorizontal: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>Confirming the order will create an order</Text>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: '#F83103',
                        borderRadius: 50,
                        width: 200,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10
                    }}
                    onPress={() => {createOrder()}}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 12
                        }}>Yes, Confirm The Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        borderRadius: 50,
                        width: 200,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#FFFFFF'
                    }}
                    onPress={() => {setOrderModalShow(false)}}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            fontSize: 12,
                        }}>No, Keep Looking</Text>
                    </TouchableOpacity>
                </View>               
            </Modal>

           <CustomHeader navigation={navigation} name={"Shopping cart"}/>

            <View style={{
                flex:1,
            }}>
                <ScrollView contentContainerStyle={{
                }}>
                    <View style={{
                        padding:30
                    }}>
                    {
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.dish.id} 
                            cartItem={cartItem}
                            incrementCartItem={IncrementCartItem}
                            decrementCartItem={DecrementCartItem}
                            setRemovingItem={setRemovingItem}
                            setRemoveModalShow={setRemoveModalShow}/>
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
                            }}>${subTotal.toFixed(2)}</Text>
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
                            }}>${tax.toFixed(2)}</Text>
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
                            }}>Shopping Cart Total</Text>
                            <Spacer/>
                            <Text style={{
                                fontSize: 15,
                                color: '#F83103',
                                fontWeight: 'bold'
                            }}>${cartTotal.toFixed(2)}</Text>
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
                    borderColor: '#CDCDCD',
                    borderWidth: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#4C322D',
                    flexDirection: 'row'
                }}
                onPress={() => {setOrderModalShow(true)}}>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'grey',
                        paddingRight: 12
                    }}>
                        <FontAwesomeIcon 
                        icon="fa-solid fa-bag-shopping"
                        size={30}
                        color="#F83103" />
                    </View>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}>
                        Place on Order
                    </Text>
                    <Text style={{
                        color: '#F83103',
                        fontWeight: 'bold',
                        fontSize: 12

                    }}>{itemsNum} items</Text>
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


export default CartScreen;