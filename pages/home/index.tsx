import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { Image } from 'expo-image'

export default React.memo(function Home() {
  const CardItems = React.useMemo(
    () => new Array(2).fill(undefined).map((item, index) => (
      <View key={ index } style={ styles.cardItem }>
        <View style={ styles.cardItemTop }>
          <Image style={ styles.cardItemIcon } source={ require('@/assets/images/image22.png') } />
          <Text style={ styles.cardItemCurrency }>USDT</Text>
        </View>
        <Text style={ styles.cardItemText1 }>1,000.72834</Text>
        <Text style={ styles.cardItemText2 }>≈2188.723 USD</Text>
      </View>
    )),
    []
  )

  const RecordItems = React.useMemo(
    () => new Array(2).fill(undefined).map((item, index) => (
      <View key={ index } style={ styles.recordItem }>
        <View style={ styles.recordItemLeft }>
          <Image style={ styles.recordItemLeftIcon } source={ require('@/assets/images/image23.png') } />
          <View style={ styles.recordItemLeftText }>
            <Text style={ styles.recordItemLeftText1 }>To your CAD balance</Text>
            <Text style={ styles.recordItemLeftText2 }>2025-07-08 20:49:04</Text>
          </View>
        </View>
        <View style={ styles.recordItemRight }>
          <Text style={ styles.recordItemRightText1 }>+ 36.84 CAD</Text>
          <Text style={ styles.recordItemRightText2 }>已结算</Text>
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
      <View style={ styles.buttons }>
        <View style={ styles.button1 }>
          <Text style={ styles.button1Text }>存款</Text>
        </View>
        <View style={ styles.button1 }>
          <Text style={ styles.button1Text }>汇款</Text>
        </View>
        <View style={ styles.button2 }>
          <Text style={ styles.button2Text }>更多</Text>
        </View>
      </View>
      <View style={ styles.cardItems }>{ CardItems }</View>
      <View style={ styles.record }>
        <Text style={ styles.recordTitle }>记录</Text>
        <View style={ styles.recordItems }>{ RecordItems }</View>
      </View>
    </SafeAreaView>
  )
})