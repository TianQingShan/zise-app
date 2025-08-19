import { Image } from 'expo-image'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './OtherLoginItems.style'
import {
  OtherLoginType,
  type OtherItem
} from './OtherLoginItems.types'

export default React.memo(function OtherLoginItems() {
  const otherItems = React.useMemo<OtherItem[]>(
    () => ([
      { type: OtherLoginType.Google, icon: require('@/assets/images/image3.png'), text: 'Google 快捷登录' },
      { type: OtherLoginType.Apple, icon: require('@/assets/images/image4.png'), text: 'Apple 快捷登录' }
    ]),
    []
  )

  const OtherLoginItems = React.useMemo(
    () => otherItems.map(({ type, icon, text }) => {
      return (
        <View key={ type } style={ styles.otherLoginItem }>
          <Image source={ icon } style={ styles.otherLoginItemIcon } />
          <Text style={ styles.otherLoginItemText }>{ text }</Text>
        </View>
      )
    }),
    []
  )

  return (
    <View>
      <Text style={ styles.otherLoginTypeText }>或使用以下方式登录</Text>
      <View style={ styles.otherLoginItems }>{ OtherLoginItems }</View>
    </View>
  )
})