import Back from '@/components/back'
import { AccountType } from '@/types/index.types'
import { Image } from 'expo-image'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { type Item } from './index.types'
import { Link } from 'expo-router'

export default React.memo(function SelectAccountType() {
  const items = React.useMemo<Item[]>(
    () => ([
      { type: AccountType.Personal, icon: require('@/assets/images/image8.png'), text: '个人账户' },
      { type: AccountType.Enterprise, icon: require('@/assets/images/image9.png'), text: '企业账户 (即将上线）' }
    ]),
    []
  )

  const Items = React.useMemo(
    () => items.map(({ type, icon, text }) => (
      <Link href='/(tabs)/home' key={ type } style={ styles.item }>
        <View style={ styles.itemLeft }>
          <View style={ styles.itemLeftIconContainer }>
            <Image style={ styles.itemLeftIcon } source={ icon } />
          </View>
          <Text style={ styles.itemLeftText }>{ text }</Text>
        </View>
        <Image style={ styles.itemRight } source={ require('@/assets/images/image6.png') } />
      </Link>
    )),
    [items]
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.backContainer }>
        <Back />
      </View>
      <Text style={ styles.title }>选择您的账户类型</Text>
      <View style={ styles.items }>{ Items }</View>
    </SafeAreaView>
  )
})