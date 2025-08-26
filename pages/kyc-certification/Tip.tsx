import React from 'react'
import { View, Text } from 'react-native'
import styles from './Tip.styles'
import { Image } from 'expo-image'

export default React.memo(function Tip() {
  return (
    <View style={ styles.container }>
      <View style={ styles.left }>
        <Image style={ styles.icon } source={ require('@/assets/images/image32.png') } />
      </View>
      <Text style={ styles.text }>您提交的个人信息将通过加密通道传输和存储，我们会严格保护您的数据安全。</Text>
    </View>
  )
})