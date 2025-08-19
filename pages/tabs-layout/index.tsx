import React from 'react'
import { Tabs, TabList, TabTrigger, TabSlot, type TabTriggerSlotProps } from 'expo-router/ui'
import { View, Text, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './index.styles'
import { type Item, type ItemProps } from './index.types'
import { Image } from 'expo-image'

export default function TabsLayout() {
  const { bottom } = useSafeAreaInsets()

  const items = React.useMemo<Item[]>(
    () => ([
      {
        unActivedIcon: require('@/assets/images/image16.png'),
        activedIcon: require('@/assets/images/image16_actived.png'),
        text: '首页',
        href: '/(tabs)/home'
      },
      {
        unActivedIcon: require('@/assets/images/image17.png'),
        activedIcon: require('@/assets/images/image17_actived.png'),
        text: '账户',
        href: '/(tabs)/account'
      },
      {
        unActivedIcon: require('@/assets/images/image18.png'),
        activedIcon: require('@/assets/images/image18_actived.png'),
        text: '卡片',
        href: '/(tabs)/card'
      },
      {
        unActivedIcon: require('@/assets/images/image19.png'),
        activedIcon: require('@/assets/images/image19_actived.png'),
        text: '我的',
        href: '/(tabs)/my'
      }
    ]),
    []
  )

  const Item = React.useMemo(
    () => React.memo<ItemProps>((props) => {
      const { isFocused, item } = props
      const {
        unActivedIcon,
        activedIcon,
        text,
      } = item

      const color = isFocused ? '#556aff' : '#333333'

      return (
        <Pressable { ...props } style={ styles.item }>
          <Image style={ styles.itemIcon } source={  isFocused ? activedIcon : unActivedIcon } />
          <Text style={ { ...styles.itemText, color } }>{ text }</Text>
        </Pressable>
      )
    }),
    []
  )

  const Items = React.useMemo(
    () => items.map((item, index) => {
      return (
        <TabTrigger
          key={ String(index) }
          name={ String(index) }
          href={ item.href }
          asChild>
          <Item item={ item } />
        </TabTrigger>
      )
    }),
    []
  )

  return (
    <Tabs>
      <TabSlot />
      <TabList style={ { ...styles.container, paddingBottom: bottom } }>
        { Items }
      </TabList>
    </Tabs>
  )
}
