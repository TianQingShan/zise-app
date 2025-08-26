import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './FreezeCardModal.styles'

export default React.memo(function FreezeCardModal() {
  return (
    <View style={ styles.container }>
      <Pressable style={ styles.close }>
        <Text style={ styles.closeText }>x</Text>
      </Pressable>
      <Text style={ styles.title }>冻结卡片</Text>
      <Text style={ styles.description }>这将暂停所有线上，线下及ATM交易 冻结后使用卡片将产生拒绝交易费。 您可以随时解冻以恢复使用。</Text>
      <Pressable style={ styles.button }>
        <Text style={ styles.buttonText }>确定</Text>
      </Pressable>
    </View>
  )
})