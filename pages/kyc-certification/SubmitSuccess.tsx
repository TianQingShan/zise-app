import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import styles from './SubmitSuccess.styles'

export default React.memo(function SubmitSuccess() {
  return (
    <View style={ styles.container }>
      <Image style={ styles.icon } source={ require('@/assets/images/image44.png') } />
      <Text style={ styles.text1 }>提交成功</Text>
      <Text style={ styles.text2 }>我们将在24小时内完成审核</Text>
      <Pressable style={ styles.button }>
        <Text style={ styles.buttonText }>返回主页</Text>
      </Pressable>
    </View>
  )
})