import React, { useContext, useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import {Formik} from 'formik'

import { AuthContext } from '../context/AuthContext';
import signUpValidationSchema from '../validations/signUpValidationSchema';


const SignUpComponent = () => {
    const {sign_up} = useContext(AuthContext)

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);

    return(
        <View>
            <Formik
                validationSchema={signUpValidationSchema}
                initialValues={{ email:"", username: "", password: "", password2: "" }}
                onSubmit={values => {sign_up(values.email, values.username, values.password, values.password2)}}
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
                                borderBottomColor:  errors.email && touched.email ? '#FF0036' : '#ddd', 
                                borderBottomWidth: 1,
                                width: 250,
                                fontSize: 15,
                            }} 
                            name="email"
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('username')}
                            value={values.email}
                        />
                        {
                            errors.email && touched.email && 
                                <Text style={{
                                    color: '#FF0036'
                                }}>{errors.email}</Text>
                        }

                        <TextInput
                            style={{
                                marginTop: 20, 
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
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        {
                            errors.password && touched.password && 
                                <Text style={{
                                    color: '#FF0036'
                                }}>{errors.password}</Text>
                        }

                        <TextInput
                            style={{ 
                                marginTop: 20,
                                borderBottomColor: errors.password2 && touched.password2 ? '#FF0036' : '#ddd', 
                                borderBottomWidth: 1,
                                width: 250,
                                fontSize: 15,
                            }} 
                            secureTextEntry
                            placeholder="Confirm password"
                            onChangeText={handleChange('password2')}
                            onBlur={handleBlur('password2')}
                            value={values.password2}
                        />

                        {
                            errors.password2 && touched.password2 &&
                                <Text style={{
                                    color: '#FF0036'
                                }}>{errors.password2}</Text>
                        }

                        <View style={{ 
                            alignItems: 'center',
                            justifyContent: 'center', 
                            marginTop: 40 }}>
                                
                            <TouchableOpacity
                                style={{ 
                                    width: 250, 
                                    backgroundColor: '#FF0036', 
                                    padding: 10,
                                    alignItems:'center', 
                                    justifyContent: 'center', 
                                    borderRadius: 40,
                                    marginTop:30
                                    }} 
                                onPress={handleSubmit}
                                disabled={!isValid}
                            >
                                <Text 
                                style={{ 
                                    textAlign: 'center',
                                    color: '#FFF', 
                                    fontSize:16,
                                    fontWeight: 'bold',
                                }}>
                                Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignUpComponent