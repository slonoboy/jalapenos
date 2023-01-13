import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Spacer } from '@react-native-material/core';
import { HomeContext } from '../context/HomeContext';

// const HomeDishItem = ({dish, incrementCartitem}) => {
//   return (
//     <View style={{
//             flexDirection: 'row',
//             marginHorizontal: 30,
//             padding: 30,
//             borderRadius: 35,
//             backgroundColor: 'white',
//             marginBottom: 20,
//             shadowColor: "#000",
//             shadowOffset: {
//                 width: 0,
//                 height: 2,
//             },
//             shadowOpacity: 0.25,
//             shadowRadius: 3.84,

//             elevation: 5,
//           }}>
//             <View style={{
//                 maxWidth: '80%',
//             }}>
//               <Text style={{
//                 fontWeight: 'bold',
//                 textTransform: 'uppercase',
//                 fontSize: 12
//               }}>{dish.name}</Text>

//               <Text style={{
//                 marginVertical: 3,
//                 fontSize: 12,
//                 color: '#A8A8A8'
//               }}>{dish.description ? dish.description : "no description"}</Text>

//               <Text style={{
//                 fontWeight: 'bold',
//                 color: '#FF0036',
//                 fontSize: 20
//               }}>${dish.price}</Text>
//             </View>

//             <Spacer/>

//             <View>
//               <TouchableOpacity style={{
//                 backgroundColor: "#FF0036",
//                 width: 30,
//                 height: 30,
//                 borderRadius: 100,
//                 alignItems: 'center',
//                 alignContent: 'center',
//                 justifyContent: 'center'
//               }}
//               onPress={() => incrementCartitem(dish)}>
//               <FontAwesomeIcon style={{
//                 color: "white"
//               }} 
//               size={12}
//               icon={ faPlus } />
//               </TouchableOpacity>
//             </View>
//     </View> 
//   )
// }


class HomeDishItem extends React.PureComponent{
  state = {
    inCart: false,
    cartItem: {}
  };

  static contextType = HomeContext

  constructor(props){
    super(props);
  }

  checkInCart = () => {
    return this.context.cartItems.find(cartItem => cartItem.dish === this.props.dish)
  }

  componentDidMount(){
    this.setState({inCart: this.checkInCart(), cartItem: this.checkInCart()})
  }

  componentDidUpdate(){
    this.setState({inCart: this.checkInCart(), cartItem: this.checkInCart()})
  }

  render() {
    const dish = this.props.dish;
    const incrementCartitem = this.props.incrementCartItem;
    const decrementCartitem = this.props.decrementCartItem;

    return (
    <View style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginHorizontal: 30,
            padding: 30,
            borderRadius: 35,
            backgroundColor: 'white',
            marginBottom: 20,
            shadowColor: this.state.inCart ? "#FF0036" : "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
            <View style={{
                maxWidth: '80%',
                justifyContent: 'center',
            }}>
              <Text style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: 12
              }}>{dish.name}</Text>

              <Text style={{
                marginVertical: 3,
                fontSize: 12,
                color: '#A8A8A8'
              }}>{dish.description ? dish.description : "no description"}</Text>

              <Text style={{
                fontWeight: 'bold',
                color: '#FF0036',
                fontSize: 20
              }}>${dish.price}</Text>
            </View>

            <Spacer/>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TouchableOpacity style={{
                backgroundColor: "#FF0036",
                width: 30,
                height: 30,
                borderRadius: 100,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center'
              }}
              onPress={() => incrementCartitem(dish)}>
              <FontAwesomeIcon style={{
                color: "white"
              }} 
              size={12}
              icon={ faPlus } />
              </TouchableOpacity>
              { this.state.inCart &&
              <>
                <Text style={{
                  fontWeight: 'bold',
                  marginVertical: 8
                }}>{this.state.cartItem.count}</Text> 
                <TouchableOpacity style={{
                  backgroundColor: "#FF0036",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center'
                  }}
                  onPress={() => decrementCartitem(dish)}>
                    <FontAwesomeIcon style={{
                      color: "white"
                    }} 
                    size={12}
                    icon={ faMinus } />
                </TouchableOpacity>
              </>
              }
            </View>
    </View> 
  )
  }
} 

export default HomeDishItem