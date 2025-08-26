import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { Image } from 'expo-image'

export default React.memo(function My() {
  const items = React.useMemo(
    () => ([
      { text: '安全中心' },
      { text: '语言设置' },
      { text: '帮助中心' },
      { text: '关于我们' },
    ]),
    []
  )

  const items2 = React.useMemo(
    () => ([
      { text: '手机号' },
      { text: '邮箱' },
      { text: '谷歌验证器' }
    ]),
    []
  )

  const Item = React.useMemo(
    () => React.memo<{ item: { text: string; } }>((props) => {
      const { item } = props
      const { text } = item

      return (
        <View style={ styles.item }>
          <View style={ styles.itemLeft }>
            <Image style={ styles.itemLeftIcon } source={ require('@/assets/images/image45.png') } />
            <Text style={ styles.itemLeftText }>{ text }</Text>
          </View>
          <Image style={ styles.itemRight } source={ require('@/assets/images/image6.png') } />
        </View>
      )
    }),
    []
  )

  const Items = React.useMemo(
    () => items.map((item, index) => <Item item={ item } key={ index } />),
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <Image style={ styles.topImage } source={ require('@/assets/images/image1.png') } />
      <View style={ styles.userInfo }>
        <Image style={ styles.avatar } />
        <View>
          <Text style={ styles.username }>leequanquan@gmail.com</Text>
          <View style={ styles.userInfoRightBottom }>
            <Text style={ styles.userInfoRightBottomText1 }>审核通过</Text>
            <Text style={ styles.userInfoRightBottomText2 }>ID:78273882387</Text>
          </View>
        </View>
      </View>
      <View style={ styles.items }>{ Items }</View>
    </SafeAreaView>
  )
})