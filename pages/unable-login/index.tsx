import Back from '@/components/back'
import { Image } from 'expo-image'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { type QuestionItem } from './index.types'

export default React.memo(function UnableLoginRoute() {
  const questionItems = React.useMemo<QuestionItem[]>(
    () => ([
      { text: '我忘记密码了' },
      { text: '双重验证无法正常使用' },
      { text: '我需要更改电话号码' },
      { text: '我需要更改电子邮箱' },
    ]),
    []
  )

  const QuestionItems = React.useMemo(
    () => questionItems.map(({ text }, index) => (
      <View style={ styles.questionItem } key={ index }>
        <Text style={ styles.questionItemText }>{ text }</Text>
        <Image source={ require('@/assets/images/image6.png') } style={ styles.questionItemIcon } />
      </View>
    )),
    [questionItems]
  )

  return (
    <SafeAreaView style={ styles.container }>
      <Back />
      <Text style={ styles.title }>无法登录</Text>
      <View style={ styles.label }>
        <Text style={ styles.labelText }>选择问题</Text>
      </View>
      <View style={ styles.questionItems }>{ QuestionItems }</View>
    </SafeAreaView>
  )
})