import React from 'react'
import { View, Text } from 'react-native'
import { type SelectProps } from './Select.types'
import styles from './Select.styles'

export default React.memo<SelectProps>(function Select(props) {
  const { placeholder } = props

  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{ placeholder }</Text>
      <View style={ styles.icon }>
        <Text style={ styles.iconText }>&lt;</Text>
      </View>
    </View>
  )
})