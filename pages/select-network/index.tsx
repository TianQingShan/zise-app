import React from 'react'
import styles from './index.styles'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back2 from '@/components/back2'
import { Image } from 'expo-image'

export default React.memo(function SelectNetwork() {
  const CenterChildren = React.useMemo(
    () => (
      <View style={ styles.centerChildren }>
        <Image
          style={ styles.centerChildrenIcon }
          source={ require('@/assets/images/image24.png') }
        />
        <Text style={ styles.centerChildrenText }>选择网络</Text>
      </View>
    ),
    []
  )

  const Items = React.useMemo(
    () => new Array(5).fill(undefined).map((item, index) => (
      <View key={ index } style={ styles.item }>
        <Image style={ styles.itemIcon } source={ require('@/assets/images/image34.png') } />
        <View>
          <Text style={ styles.itemText1 }>Ethereum(ERC20)</Text>
          <Text style={ styles.itemText2 }>最小充币额:0.01 USDT</Text>
          <Text style={ styles.itemText3 }>预计 约 7 分钟 内到账</Text>
        </View>
      </View>
    )),
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <Back2 centerChildren={ CenterChildren } />
      </View>
      <View style={ styles.tip }>
        <View style={ styles.tipLeft }>
          <Image style={ styles.tipLeftIcon } source={ require('@/assets/images/image32.png') } />
        </View>
        <View style={ styles.tipRight }>
          <Text style={ styles.tipRightText1 }>不清楚如何选择正确的充币网络?</Text>
          <Text style={ styles.tipRightText2 }>请选择与您发送资产平台上一致的网络进行充币。</Text>
          <Pressable style={ styles.tipRightButton }>
            <Text style={ styles.tipRightButtonText }>了解更多</Text>
            <Image style={ styles.tipRightButtonIcon } source={ require('@/assets/images/image33.png') } />
          </Pressable>
        </View>
      </View>
      <View style={ styles.items }>{ Items }</View>
    </SafeAreaView>
  )
})