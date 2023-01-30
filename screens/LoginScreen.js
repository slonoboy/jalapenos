import React, {useContext, useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LoginComponent from '../components/LoginComponent'
import SignUpComponent from '../components/SignUpComponent'
import { AuthContext } from '../context/AuthContext'
import LoginSwitch from '../components/LoginSwitch'

const LoginScreen = ({navigation}) => {
    const [index, setIndex] = useState(1);

    const onSelectSwitch = index => {
        setIndex(index);
    }

    return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        width='100%'
                        height='100%'
                        source={require('../assets/back.png')}
                    />
                </View>

                <View style={styles.form}>

                    <LoginSwitch
                        selectionMode={1}
                        onSelectSwitch={onSelectSwitch}
                        style={{
                            flex: 1,
                        }}
                    />

                    {index == 1 ?
                        <LoginComponent navigation={navigation}/>
                        :
                        <SignUpComponent/>
                    }

                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15191F',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    header:{
        width: '100%',
        position: 'absolute',
        alignContent: 'center',
        top: 0,
    },
    form:{
        marginHorizontal: 40,
        backgroundColor: "#2E3235",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 30,
        borderWidth: 0,
    }
})

export default LoginScreen;