import { View, Text, Image } from 'react-native'
import React from 'react'


export default function header() {
  return (
    <View>
      <Image
        source={require('../../assets/dost_logo.png')}
        style={{width: 150, height: 150}}
        />
    </View>
  )
}