import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = async (username, password) => {
        setIsLoading(true);
        await axios.post(`${BASE_URL}/api/login_by_email/`, {
            username,
            password
        })
        .then(res => {
            setUserToken(res.data.access);
            
            AsyncStorage.setItem('userToken', res.data.access);
        })
        .catch(e => {
            console.log(`Login error ${e}`);
        })
        setIsLoading(false);
    }

    const sign_up = async (email, username, password, password2) => {
        setIsLoading(true);
        await axios.post(`${BASE_URL}/api/register_by_email/`, {
            username,
            email,
            password,
            password2
        })
        .then(res => {
            setUserToken(res.data.access);
            login(username, password)
        })
        .catch(e => {
            console.log(`Sign up error ${e}`);
        })
        setIsLoading(false);
    }

    const logout = async() => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        }
        catch(e){
            console.log(`isLoggedIn error ${e}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return(
        <AuthContext.Provider value={{sign_up, login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}