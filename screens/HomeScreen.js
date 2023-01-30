import BreakfastsOn from '../assets/categories/breakfastsOn.svg'


import Modal from 'react-native-modal'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, Animated} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faLocationDot, faP, faCirclePlus, faPlus, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { ActivityIndicator, Spacer } from '@react-native-material/core';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { Svg } from 'react-native-svg';
import LottieView from 'lottie-react-native'

import CustomSidebarMenu from '../components/CustomSidebarMenu'
import HomeDishItem from '../components/HomeDishItem'
import { BASE_URL } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HomeContext } from '../context/HomeContext'
import { categories } from '../mock/categories';
import { SearchBar } from 'react-native-screens';
import PortionSwith from '../components/PortionSwitch';
import { set_first_char_to_capital } from '../utils/utils';


const HomeScreen = ({navigation}) => {
    const {
      dishes, 
      cartItems, 
      itemsNum,
      GetDishes,
      IncrementCartItem,
      DecrementCartItem,
      isLoading
    } = useContext(HomeContext);

    const [category, setCategory] = useState("menu");
    const [searchText, setSearchText] = useState("");
    const [addToCartModalShow, setAddToCartModalShow] = useState(false);
    const [addToCartDish, setAddToCartDish] = useState([]);
    const [index, setIndex] = useState(1);

    

    const onSelectSwitch = index => {
      setIndex(index);
    }

    const changeCategory = (buttonCategory) => {
      setCategory(prevState => {
        if (prevState === buttonCategory) return "menu";
        else return buttonCategory;
      })
    }

    const getDishes = () => {
      return dishes.filter(dish => dish.name.toLowerCase().includes(searchText.toLowerCase()) || dish.description?.includes(searchText.toLowerCase()))
    }

    const getCategorizedDishes = () => {
      return getDishes().filter(dish => dish.category?.name === category);
    }

    const openAddToCartModal = (dish) => {
      setAddToCartDish(dish);
      if (dish.has_large_portion) setAddToCartModalShow(true);
    }

    const closeAddToCartModal = () => {
      setAddToCartModalShow(false);
      setIndex(1);
    }

    const addToCart = (dish) => {
      setAddToCartModalShow(false);
      setIndex(1);
      IncrementCartItem(dish);
    }

useEffect(() => {
  GetDishes();
  
}, []);


    return (
      <View style={styles.container}>
      <SafeAreaView style={{
      }}>
        <View style={styles.header}>
          <TouchableOpacity 
          style={{
            backgroundColor: "#F8310310",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 100,
            width: 40,
            height: 40,
          }}
          onPress={() => {navigation.openDrawer()}}>
            <FontAwesomeIcon style={{
              color: "#F83103",
            }} 
            size={20}
            icon={ faBars } />
          </TouchableOpacity>

          <Spacer/>


        </View>
      </SafeAreaView>

         {/* <ScrollView> */}

        
        <Text style = {{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#F83103',
          paddingHorizontal: 30,
          marginVertical: 15
        }}>Menu</Text>

        <TextInput style={{
          marginHorizontal: 30,
          backgroundColor: '#2E323550',
          borderRadius: 50,
          height: 50, 
          paddingHorizontal: 30,
          color: '#FFFFFF'
        }} 
        placeholderTextColor={"#FFFFFF"}
        placeholder="Search for a food item"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        />

        <Text style={{
          marginVertical: 20,
          marginHorizontal: 30,
          fontWeight: 'bold',
          fontSize: 15,
          color: '#FFFFFF'
          }}>
          Categories
        </Text>
        <View>
          <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
            <View style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {/* <TouchableOpacity >
              <BurgersOff/>
            </TouchableOpacity> */}

            {
              categories.map((item) => {
              return (
              <TouchableOpacity style={{
                marginHorizontal: 10
              }} 
              key={item.category_name} onPress={() => {changeCategory(item.category_name)}}>
                {category == item.category_name ? 
                  item.imageOn
                  :
                  item.imageOff
                }
              </TouchableOpacity>
              )})
            }
        
            </View>
          </ScrollView>
        </View>


        <Text style={{
          paddingHorizontal: 30,
          marginTop: 30,
          marginBottom: 15,
          fontWeight: 'bold',
          fontSize: 15,
          color: '#FFFFFF'
        }}>{set_first_char_to_capital(category)}</Text>

         {/* {
            dishes.map(dish => {
              return(  
                <HomeDishItem key={dish.id} dish={dish} incrementCartitem={IncrementCartItem}/>
              )
          })
         } */}

         {
          isLoading ? (
            <LottieView
              style={{
                marginTop: 100
              }}
              source={require("../assets/loading_animation.json")}  autoPlay loop 
            />
          ) : (

              <FlatList
              key={'flatlist'}
              data={category == "menu" ? getDishes() : getCategorizedDishes()}
              renderItem={({item}) => <HomeDishItem dish={item} incrementCartItem={IncrementCartItem} decrementCartItem={DecrementCartItem} openAddToCartModal={openAddToCartModal}/>}
              nestedScrollEnabled={true}
              />

          )
         }

         


        {/* </ScrollView> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("Cart", {
              cartItemsRoute: cartItems
          })}  
        >
          <View style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            backgroundColor: '#F83103',
            borderRadius: 100,
            borderColor: 'white',
            borderWidth: 4,
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            
            <FontAwesomeIcon style={{
              color: 'white'
            }}
            size={25}
            icon={faBagShopping}/>

            { 
            cartItems.length != 0 &&
            <View style={{
              position: 'absolute',
              right: -10,
              top: -10,
              backgroundColor: '#F83103',
              borderRadius: 100,
              borderColor: 'white',
              borderWidth: 4,
              width:30,
              height:30,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: 'white',
                fontWeight: 'bold'
              }}>{itemsNum}</Text>
            </View>
            }
          </View>
        </TouchableOpacity>

         <Modal isVisible={addToCartModalShow} 
            onBackdropPress={() => {closeAddToCartModal()}} 
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            style={{
              flex: 1,
              alignItems: 'center',
              bottom: 0,
              marginBottom: 0
            }}
            >
              <View style={{
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: '#2E3235',
                  width: Dimensions.get('window').width,
                  padding: 30,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30
              }}>
                <Text style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: 15
                }}>{set_first_char_to_capital(addToCartDish.name)}</Text>

                <Text style={{
                  color: '#FFFFFF50',
                  fontSize: 15
                }}>{addToCartDish.description}</Text> 
                <View style={{
                  alignItems: 'center',
                  paddingTop: 20
                }}>
                  <PortionSwith
                    selectionMode={1}
                    onSelectSwitch={onSelectSwitch}
                  />
                </View>
                <Text style={{
                  marginTop: 20,
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}>{index == 1 ? `$${addToCartDish.price?.toFixed(2)}` : `$${addToCartDish.price?.toFixed(2)} + $${(addToCartDish.large_portion.price - addToCartDish.price)?.toFixed(2)}`}</Text>
                <TouchableOpacity style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F83103',
                  height: 50,
                  borderRadius: 10,
                  marginTop: 20
                }}
                onPress={() => {addToCart(index == 1 ? addToCartDish : addToCartDish.large_portion)}}
                >
                  <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'white'
                  }}>Add to cart</Text>
                </TouchableOpacity>
              </View>               
          </Modal>
        
      </View>
    )
  }

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15191F',
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  }
});


export default HomeScreen;
