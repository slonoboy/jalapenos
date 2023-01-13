import { View, Text } from 'react-native'
import React from 'react'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    username: yup
        .string()
        .nullable()
        .required(),
    password:  yup
        .string()
        .nullable()
        .required(),
})  

export default loginValidationSchema