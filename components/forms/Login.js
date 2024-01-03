import { View } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';

export default function content(props) {
  return (
    <View>
       <TextInput  label="Email" style={{marginBottom: 5, marginTop: 10, height: 50, width: 250}}/>
        <TextInput label="Password" secureTextEntry right={<TextInput.Icon icon="eye" />} style={{marginBottom: 5, marginTop: 5, height: 50, width: 250}}/>

        <Button 
          mode="contained" 
          icon="login" 
          style={{marginBottom: 5, marginTop: 5, width: 250}} 
          onPress={()=>props.navigation.navigate("Homepage")} >Log In</Button>
        <Button 
          mode="text" 
          icon="account-plus" 
          style={{ width: 250}}  
          onPress={()=>props.navigation.navigate("Signin")}>Register here</Button>
          <Button 
          mode="text" 
          icon="account-question" 
          uppercase="False"
          style={{ width: 250}}  
          onPress={()=>props.navigation.navigate("Accountrecovery")}>Forgot Password</Button>
    </View> 
    
    )
}


