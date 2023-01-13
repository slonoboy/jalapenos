import BurgersOff from '../assets/categories/BurgersOff.svg'

import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faLocationDot, faP, faCirclePlus, faPlus, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { ActivityIndicator, Spacer } from '@react-native-material/core';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';
import LottieView from 'lottie-react-native'


import CustomSidebarMenu from '../components/CustomSidebarMenu'
import HomeDishItem from '../components/HomeDishItem'
import { BASE_URL } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HomeContext } from '../context/HomeContext'
import { FlatList } from 'react-native-gesture-handler';
import { categories } from '../mock/categories';
import { SearchBar } from 'react-native-screens';


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

    const [category, setCategory] = useState("menu")
    const [searchText, setSearchText] = useState("")

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

    useEffect(() => {
      GetDishes();
    }, []);

    return (
      <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity 
          style={{
            backgroundColor: "#EDD8DD",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 100,
            width: 40,
            height: 40,
          }}
          onPress={() => {navigation.openDrawer()}}>
            <FontAwesomeIcon style={{
              color: "#FF0036",
            }} 
            size={20}
            icon={ faBars } />
          </TouchableOpacity>

          <Spacer/>

          {/* <Text style={{
            fontWeight: 'bold',
            color: "#3D3838",
            }}>
            <FontAwesomeIcon style={{
              color: "#FF0036",
            }}
            icon={ faLocationDot} />
            Address
          </Text>

          <Spacer/>

          <Text>
            Avatar
          </Text> */}
        </View>
      </SafeAreaView>

         {/* <ScrollView> */}
        
        <Text style = {{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#FF0036',
          paddingHorizontal: 30,
          marginVertical: 15
        }}>Menu</Text>

        <TextInput style={{
          marginHorizontal: 30,
          backgroundColor: 'white',
          borderRadius: 50,
          borderWidth: 0.4,
          borderColor: 'grey',
          height: 50, 
          paddingHorizontal: 30,
        }} 
        placeholder="Search for a food item"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        />

        <Text style={{
          marginVertical: 20,
          marginHorizontal: 30,
          fontWeight: 'bold',
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
              <TouchableOpacity key={item.category_name} onPress={() => {changeCategory(item.category_name)}}>
                {category == item.category_name ? 
                  <Image
                    source={item.imageOn}
                    style={{
                      width: 124,
                      height: 87,
                  }}/> :
                  <Image
                    source={item.imageOff}
                    style={{
                      width: 124,
                      height: 87,
                  }}/>
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
          textTransform: 'uppercase' 
        }}>{category}</Text>

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
            renderItem={({item}) => <HomeDishItem dish={item} incrementCartItem={IncrementCartItem} decrementCartItem={DecrementCartItem}/>}
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
            backgroundColor: '#FF0036',
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
              backgroundColor: '#FF0036',
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
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  }
});


export default HomeScreen;
