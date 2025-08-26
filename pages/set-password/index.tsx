import Back from '@/components/back'
import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { useRouter } from 'expo-router'
import CustomTextInput from '@/components/custom-text-input'

export default React.memo(function SetPassword() {
  const router = useRouter()

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.backContainer }>
        <Back />
      </View>
      <Text style={ styles.title }>请设置您的密码</Text>
      <View style={ styles.items }>
        <View style={ styles.item }>
          <Text style={ styles.itemLabel }>请输入您要设置的密码</Text>
          <CustomTextInput placeholder='长度不小于8字符并包含大小写' />
        </View>
        <View style={ styles.item }>
          <Text style={ styles.itemLabel }>请再次输入您要设置的密码</Text>
          <CustomTextInput placeholder='确保和您第一次输入的密码一致' />
        </View>
      </View>
      <Pressable style={ styles.button } onPress={ () => router.navigate('/select-account-type') }>
        <Text style={ styles.buttonText }>
          完成并开始
        </Text>
      </Pressable>
    </SafeAreaView>
  )
})