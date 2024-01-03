import { View } from 'react-native'
import React from 'react'
import { Provider as PaperProvider, Text } from 'react-native-paper';
import AccountRecovery from '../forms/AccountRecovery'

export default function AccountRecoveryPage(props) {
  return (
    <PaperProvider>
       
          <View style={{ flex:1, alignContent:'center', justifyContent:'center', alignItems:'center' }}>
                <Text variant="headlineLarge">Recover your Account</Text>
                <AccountRecovery {...props}/>
            </View>
       
    </PaperProvider>
  
  )
}