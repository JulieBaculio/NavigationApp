import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider as PaperProvider, Text, Button } from 'react-native-paper';

export default function HomePage(props) {
  return (
    <PaperProvider>
       
        <View style={{flex:1, alignItems:'center', justifyContent:'center', alignContent:'center'}}>
            <Text variant="displayLarge">Welcome to the App!</Text>
            <Button 
            mode="outlined" 
            icon="logout" 
            style={{ width: 250}}  
            onPress={()=>props.navigation.navigate("Login")}>Log Out</Button>
        </View>
        
    </PaperProvider>
    
   
  )
}