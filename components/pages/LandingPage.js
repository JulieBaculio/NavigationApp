import { View } from 'react-native'
import React from 'react'
import Header from '../ui/Header'
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LandingPage(props) {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex:1, alignContent:'center', justifyContent:'center', alignItems:'center' }}>
        
            <Header/>

            <Text 
            variant="displayMedium"
            style={{ marginTop: 5}} 
            >ProposAl TrAcking Management Information System (PATAMIS)</Text>
          
            <Button 
                mode="contained" 
                icon="login" 
                style={{marginBottom: 5, marginTop: 15, width: 250}} 
                onPress={()=>props.navigation.navigate("Login")} >Log In</Button>
              <Button 
                mode="contained" 
                icon="account-plus" 
                style={{marginBottom: 5, marginTop: 5, width: 250}} 
                onPress={()=>props.navigation.navigate("Signin")} >Register</Button>
        
      </SafeAreaView>
    </PaperProvider>
  )
}