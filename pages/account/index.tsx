import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import styles from './index.styles'
import { useRouter } from 'expo-router'

export default React.memo(function Account() {
  const router = useRouter()
  const items = React.useMemo(
    () => ([
      { label: '加密货币账户' },
      { label: '法币账户' },
    ]),
    []
  )

  const Items = React.useMemo(
    () => items.map((item, index) => (
      <View key={ index } style={ styles.itemsContainer }>
        <Text style={ styles.itemsLabel }>{ item.label }</Text>
        <View style={ styles.items }>
          {
            new Array(3).fill(undefined).map((_item, _index) => (
              <Pressable onPress={ () => router.push('/transaction-history') } key={ _index } style={ styles.item }>
                <View style={ styles.itemLeft }>
                  <Image style={ styles.itemLeftIcon } source={ require('@/assets/images/image24.png') } />
                  <Text style={ styles.itemLeftText }>USDT</Text>
                </View>
                <View>
                  <Text style={ styles.itemRightText1 }>1,000.72834</Text>
                  <Text style={ styles.itemRightText2 }>≈2188.723 USD</Text>
                </View>
              </Pressable>
            ))
          }
        </View>
      </View>
    )),
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <View style={ styles.topIcon1Box }>
          <Image style={ styles.topIcon1 } source={ require('@/assets/images/image20.png') } />
        </View>
        <Image style={ styles.topIcon2 } source={ require('@/assets/images/image1.png') } />
        <Image style={ styles.topIcon3 } source={ require('@/assets/images/image21.png') } />
      </View>
      <View style={ styles.assets }>
        <Text style={ styles.assetsText1 }>我的资产</Text>
        <Text style={ styles.assetsText2 }>1,000.72834</Text>
        <Text style={ styles.assetsText3 }>≈2188.723 USD</Text>
      </View>
      <View style={ styles.allItems }>{ Items }</View>
    </SafeAreaView>
  )
})