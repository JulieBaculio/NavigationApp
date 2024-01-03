import { View} from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';

export default function Signup(props) {
  return (
    <View>
        <TextInput  label="Email" style={{marginBottom: 5, marginTop: 10, height: 50, width: 250}}/>
        <TextInput label="Old Password" secureTextEntry right={<TextInput.Icon icon="eye" />} style={{marginBottom: 5, marginTop: 5, height: 50, width: 250}}/>
        <TextInput label="New Password" secureTextEntry right={<TextInput.Icon icon="eye" />} style={{marginBottom: 5, marginTop: 5, height: 50, width: 250}}/>
        <TextInput label="Confirm New Password" secureTextEntry right={<TextInput.Icon icon="eye" />} style={{marginBottom: 5, marginTop: 5, height: 50, width: 250}}/>
       
        <Button 
          mode="contained" 
          icon="account-plus" 
          style={{ width: 250}}  
          onPress={()=>props.navigation.navigate("Login")}>Update Account</Button>
    </View> 
  )
}