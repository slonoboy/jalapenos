import React, { useContext, useState } from 'react';
import {Formik} from 'formik'

import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import loginValidationSchema from '../validations/loginValidationSchema';


const LoginComponent = ({navigation}) => {

    const {login} = useContext(AuthContext)

    return(
        <View>
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
                            borderBottomColor: errors.username && touched.username ? '#FF0036' : '#ddd', 
                            borderBottomWidth: 1,
                            width: 250,
                            fontSize: 15,
                        }} 
                        name="username"
                        placeholder="Username"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />

                    {
                        errors.username && touched.username &&
                        <Text style={{
                            color: '#FF0036'
                        }}>{errors.username}</Text>
                    }

                    <TextInput
                        style={{ 
                            marginTop: 20,
                            borderBottomColor: errors.password && touched.password ? '#FF0036' : '#ddd', 
                            borderBottomWidth: 1,
                            width: 250,
                            fontSize: 15,
                        }} 
                        name="password"
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                    />


                    {
                        errors.password && touched.password &&
                        <Text style={{
                            color: '#FF0036'
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
                                backgroundColor: '#FF0036', 
                                padding: 10,
                                alignItems:'center', 
                                justifyContent: 'center', 
                                borderRadius: 40,
                                marginTop:30
                                }} 
                        >
                            <Text 
                            style={{ 
                                textAlign: 'center',
                                color: '#FFF', 
                                fontSize:16,
                                fontWeight: 'bold',
                            }}>
                            Log in</Text>
                        </TouchableOpacity>
                    </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default LoginComponent