import { View } from 'react-native'
import React from 'react'
import Header from '../ui/Header'
import Login from '../forms/Login'
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';


export default function LoginPage(props) {
  return (
    <PaperProvider>
      
          <View style={{ flex:1, alignContent:'center', justifyContent:'center', alignItems:'center' }}>
            <Header/>
            <Login {...props}/>
            <Button 
              mode="text" 
              icon="keyboard-backspace" 
              style={{marginBottom: 5, marginTop: 5, width: 250}} 
              onPress={()=>props.navigation.navigate("Landing")} >Go Back</Button>
          </View>
     
    </PaperProvider>
      

  )
}


