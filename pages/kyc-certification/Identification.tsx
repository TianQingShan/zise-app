import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Tip from './Tip'
import styles from './Identification.styles'
import Select from '@/components/select'
import { Image } from 'expo-image'

export default React.memo(function Identification() {
  return (
    <View>
      <Tip />
      <View style={ styles.formItems }>
        <View style={ styles.formItem }>
          <Text style={ styles.formItemLabel }>请选择您的证件类型</Text>
          <Select placeholder='护照' />
        </View>
        <View style={ styles.formItem }>
          <Text style={ styles.formItemLabel }>请选择上传您的证件</Text>
          <View style={ styles.upload }>
            <Image style={ styles.uploadIcon } source={ require('@/assets/images/image43.png') } />
          </View>
        </View>
      </View>
      <Pressable style={ styles.button }>
        <Text style={ styles.buttonText }>确认并提交</Text>
      </Pressable>
    </View>
  )
})