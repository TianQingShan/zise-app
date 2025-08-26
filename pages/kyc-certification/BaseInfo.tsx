import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import Tip from './Tip'
import Select from '@/components/select'
import styles from './BaseInfo.styles'
import CustomTextInput from '@/components/custom-text-input'

export default React.memo(function BaseInfo() {
  return (
    <View>
      <Tip />
      <View style={ styles.formItems }>
        <View style={ styles.formItem }>
          <Text style={ styles.formItemLabel }>请选择您的国家/地区</Text>
          <Select placeholder='选择您支持验证的证件国家/地区' />
        </View>
        <View style={ styles.formItem }>
          <Text style={ styles.formItemLabel }>请输入您的姓氏</Text>
          <CustomTextInput borderWidth={ 0.5 } paddingHorizontal={ 12 } placeholder='请输入您的姓 例如 “ Lee”' placeholderTextColor='rgba(26, 26, 26, .61)' />
        </View>
        <View style={ styles.formItem }>
          <Text style={ styles.formItemLabel }>请输入您的名字</Text>
          <CustomTextInput borderWidth={ 0.5 } paddingHorizontal={ 12 } placeholder='请输入您的姓 例如 “ Lee”' placeholderTextColor='rgba(26, 26, 26, .61)' />
        </View>
        <View style={ styles.formItem }>
          <Text style={ styles.formItemLabel }>请选择您的出生日期</Text>
          <View style={ styles.birthSelectItems }>
            <View style={ styles.birthSelectItem }>
              <Select placeholder='年份' />
            </View>
            <View style={ styles.birthSelectItem }>
              <Select placeholder='月份' />
            </View>
            <View style={ styles.birthSelectItem }>
              <Select placeholder='日' />
            </View>
          </View>
        </View>
      </View>
      <Pressable style={ styles.button }>
        <Text style={ styles.buttonText }>下一步</Text>
      </Pressable>
    </View>
  )
})