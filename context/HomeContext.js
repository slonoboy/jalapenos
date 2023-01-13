import { View, Text } from 'react-native'
import React, { createContext, useState} from 'react'
import axios from 'axios';
import { BASE_URL } from '../config';

export const HomeContext = createContext();

export const HomeProvider = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [dishes, setDishes] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsNum, setItemsNum] = useState(0);

    const GetDishes = async () => {
      setIsLoading(true);
      await axios.get(`${BASE_URL}/api/menu/dish/`) 
      .then(res => {
          setDishes(res.data);
      })
      .catch(e => {
          console.log(`get dishes error ${e}`);
      })
      setIsLoading(false)
    };

    const IncrementCartItem = async (dish) => {
      await setCartItems(prevState => {
        const cartItemIndex = prevState.findIndex(item => item.dish === dish);
        if (cartItemIndex != -1){
            let newArray = [...prevState];
            newArray[cartItemIndex].count++;
            newArray[cartItemIndex].sum_price += newArray[cartItemIndex].dish.price
            return newArray;
        }
        else {
            const new_cart_item = {
            dish: dish,
            count: 1,
            sum_price: dish.price,
            price_per_one: dish.price, 
            };
            return [...prevState, new_cart_item];
        }
      })
      setItemsNum(prevState => {
        return prevState + 1;
      })
    } 

    const DecrementCartItem = async (dish) => {
      await setCartItems(prevState => {
        const cartItemIndex = prevState.findIndex(item => item.dish === dish);
        if (prevState[cartItemIndex].count == 1) {
            return prevState.filter(item => item.dish !== dish);
        }
        else {
            let newArray = [...prevState];
            newArray[cartItemIndex].count--;
            newArray[cartItemIndex].sum_price -= newArray[cartItemIndex].dish.price
            return newArray;
        }
      })
      setItemsNum(prevState => {
        return prevState - 1;
      })
    }

  
    return (
        <HomeContext.Provider value={{dishes, cartItems, itemsNum, isLoading, setItemsNum, setCartItems, GetDishes, IncrementCartItem, DecrementCartItem}}>
            {children}
        </HomeContext.Provider>
    )
}