import Back from '@/components/back'
import { Image } from 'expo-image'
import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { useRouter } from 'expo-router'
import CustomTextInput from '@/components/custom-text-input'

export default React.memo(function VerficationCode() {
  const router = useRouter()

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.backContainer }>
        <Back />
      </View>
      <Image
        source={ require('@/assets/images/image10.png') }
        style={ styles.image }
      />
      <Text style={ styles.text }>我们刚刚向您发送了一条短信</Text>
      <Text style={ styles.tipText }>要登录，请输入我们发送至*********6651的安全代码。该代码将在 5 分钟后失效。</Text>
      <View style={ styles.input }>
        <CustomTextInput placeholder='你的6位数验证码' />
      </View>
      <Text style={ styles.resendText }>重新发送验证码 00:30</Text>
      <Pressable style={ styles.finishButton } onPress={ () => router.navigate('/set-password') }>
        <Text style={ styles.finishButtonText }>完成</Text>
      </Pressable>
    </SafeAreaView>
  )
})