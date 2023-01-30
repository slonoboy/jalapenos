import React, { useContext, useState } from 'react';
import {Formik} from 'formik'

import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import loginValidationSchema from '../validations/loginValidationSchema';


const LoginComponent = ({navigation}) => {

    const {login} = useContext(AuthContext)

    return(
        <View style={{
            height: 400
        }}>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ username: "", password: "" }}
                onSubmit={values => {login(values.username, values.password)}}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit, 
                    values,
                    errors,
                    touched,
                    isValid
                }) => (
                    <>

                    <TextInput
                        style={{
                            marginTop: 40, 
                            color: '#ddd',
                            borderBottomColor: errors.username && touched.username ? '#F83103' : '#ddd', 
                            borderBottomWidth: 1,
                            width: 250,
                            fontSize: 15,
                        }} 
                        name="username"
                        placeholder="Username"
                        placeholderTextColor='#ddd'
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />

                    {
                        errors.username && touched.username &&
                        <Text style={{
                            color: '#F83103'
                        }}>{errors.username}</Text>
                    }

                    <TextInput
                        style={{ 
                            marginTop: 20,
                            color: '#ddd',
                            borderBottomColor: errors.password && touched.password ? '#F83103' : '#ddd', 
                            borderBottomWidth: 1,
                            width: 250,
                            fontSize: 15,
                        }} 
                        name="password"
                        placeholder="Password"
                        placeholderTextColor='#ddd'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                    />


                    {
                        errors.password && touched.password &&
                        <Text style={{
                            color: '#F83103'
                        }}>{errors.password}</Text>
                    }

                    <View style={{ 
                        alignItems: 'center',
                        justifyContent: 'center', 
                        marginTop: 40 }}>
                            
                        <TouchableOpacity
                            onPress={handleSubmit}
                            disabled={!isValid}
                            style={{ 
                                width: 250, 
                                backgroundColor: '#F83103', 
                                padding: 10,
                                alignItems:'center', 
                                justifyContent: 'center', 
                                borderRadius: 12,
                                }} 
                        >
                            <Text 
                            style={{ 
                                textAlign: 'center',
                                color: '#FFF', 
                                fontSize:16,
                                fontWeight: 'bold',
                            }}>
                            Login</Text>
                        </TouchableOpacity>
                    </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default LoginComponent