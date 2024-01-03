import { View } from 'react-native'
import React from 'react'
import Signup from '../forms/Signup'
import { Provider as PaperProvider, Text } from 'react-native-paper';

export default function SigninPage(props) {
  return (
    <PaperProvider>
       
          <View style={{ flex:1, alignContent:'center', justifyContent:'center', alignItems:'center' }}>
                <Text variant="headlineLarge">Create an Account</Text>
                <Signup {...props}/>
            </View>
       
    </PaperProvider>
  
  )
}