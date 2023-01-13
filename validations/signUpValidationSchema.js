import { View, Text } from 'react-native'
import React from 'react'
import * as yup from 'yup'

const signUpValidationSchema = yup.object().shape({
    username: yup
        .string()
        .nullable()
        .required(),
    email: yup
        .string()
        .email()
        .nullable()
        .required(),
    password:  yup
        .string()
        .nullable()
        .required(),
    password2: yup
        .string()
        .nullable()
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})  

export default signUpValidationSchema