import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'expo-image'
import styles from './AuditPass.styles'

export default React.memo(function AuditPass() {
  return (
    <View style={ styles.container }>
      <Image style={ styles.icon } source={ require('@/assets/images/image44.png') } />
      <Text style={ styles.text }>审核通过</Text>
    </View>
  )
})