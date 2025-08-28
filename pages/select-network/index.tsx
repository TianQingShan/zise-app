import React from 'react'
import styles from './index.styles'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back2 from '@/components/back2'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'

export default React.memo(function SelectNetwork() {
  const router = useRouter()
  const items = React.useMemo(
    () => ([
      { icon: require('@/assets/test/test7.png'), name: 'TRON (TRC20)', description: '最小充币额:10 USDT', time: '预计 约 7 分钟 内到账' },
      { icon: require('@/assets/test/test8.png'), name: 'BNB Smart Chain (BEP20)', description: '最小充币额:10 USDT', time: '预计 约 7 分钟 内到账' },
      { icon: require('@/assets/test/test9.png'), name: 'Ethereum (ERC20)', description: '最小充币额:10 USDT', time: '预计 约 15分钟 内到账' },
    ]),
    []
  )
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
    () => items.map((item, index) => (
      <Pressable key={ index } style={ styles.item } onPress={ () => router.push('/currency-details') }>
        <Image style={ styles.itemIcon } source={ item.icon } />
        <View>
          <Text style={ styles.itemText1 }>{ item.name }</Text>
          <Text style={ styles.itemText2 }>{ item.description }</Text>
          <Text style={ styles.itemText3 }>{ item.time }</Text>
        </View>
      </Pressable>
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