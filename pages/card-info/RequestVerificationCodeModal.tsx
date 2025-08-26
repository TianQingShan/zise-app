import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import styles from './RequestVerificationCodeModal.styles'
import { Image } from 'expo-image'

export default React.memo(function RequestVerificationCodeModal() {
  return (
    <View style={ styles.container }>
      <Pressable style={ styles.close }>
        <Text style={ styles.closeText }>x</Text>
      </Pressable>
      <Image style={ styles.image } source={ require('@/assets/images/image12.png') } />
      <Text style={ styles.title }>我们刚刚向您发送了一条短信</Text>
      <Text style={ styles.description }>要登录，请输入我们发送至*********6651的安全代码。该代码将在 5 分钟后失效。</Text>
      <TextInput style={ styles.input } placeholder='你的6位数验证码' />
      <Text style={ styles.verificationCodeCountDownText }>重新发送验证码 00:30</Text>
      <Pressable style={ styles.button }>
        <Text style={ styles.buttonText }>提交</Text>
      </Pressable>
    </View>
  )
})