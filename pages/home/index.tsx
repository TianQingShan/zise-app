import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { Image } from 'expo-image'
import { type ButtonItem } from './index.types'
import { useRouter } from 'expo-router'

export default React.memo(function Home() {
  const router = useRouter()
  const buttonItems = React.useMemo<ButtonItem[]>(
    () => ([
      {
        icon: require('@/assets/images/image39.png'),
        iconSize: [20, 20],
        text: '存款'
      },
      {
        icon: require('@/assets/images/image40.png'),
        iconSize: [21, 21],
        text: '汇款'
      },
      {
        icon: require('@/assets/images/image41.png'),
        iconSize: [19, 14],
        text: '兑换'
      },
      {
        icon: require('@/assets/images/image42.png'),
        iconSize: [28, 7],
        text: '更多'
      }
    ]),
    []
  )

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

  const KycCertification  = React.useMemo(
    () => (
      <View style={ styles.kycCertification }>
        <View style={ styles.kycCertificationLeft }>
          <Image style={ styles.kycCertificationLeftIcon } source={ require('@/assets/images/image32.png') } />
        </View>
        <View>
          <Text style={ styles.kycCertificationRightText1 }>
            需要完成 KYC 验证
          </Text>
          {/* <View style={ styles.kycCertificationRightFailText }>
            <Text style={ styles.kycCertificationRightText1 }>
              您的KYC认证
            </Text>
            <Text style={ { ...styles.kycCertificationRightText1, color: '#f00' } }>失败</Text>
          </View> */}
          <Text style={ styles.kycCertificationRightText2 }>请完成 KYC 验证以继续使用全部功能。</Text>
          <Pressable onPress={ () => router.push('/kyc-certification') } style={ styles.kycCertificationRightJump }>
            <Text style={ styles.kycCertificationRightText3 }>
              去认证
              {/* 重新去认证 */}
            </Text>
            <Image style={ styles.kycCertificationRightIcon } source={ require('@/assets/images/image38.png') } />
          </Pressable>
        </View>
      </View>
    ),
    []
  )

  const ButtonItems = React.useMemo(
    () => buttonItems.map((item, index) => (
      <View key={ index } style={ styles.buttonItem }>
        <View style={ styles.buttonItemIcon }>
          <Image source={ item.icon } style={ { width: item.iconSize[0], height: item.iconSize[1] } } />
        </View>
        <Text style={ styles.buttonItemText }>{ item.text }</Text>
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
      { KycCertification }
      <View style={ styles.assets }>
        <Text style={ styles.assetsText1 }>我的资产</Text>
        <Text style={ styles.assetsText2 }>1,000.72834</Text>
        <Text style={ styles.assetsText3 }>≈2188.723 USD</Text>
      </View>
      <View style={ styles.cardItems }>{ CardItems }</View>
      <View style={ styles.buttonItems }>{ ButtonItems }</View>
      <View style={ styles.record }>
        <Text style={ styles.recordTitle }>记录</Text>
        <View style={ styles.recordItems }>{ RecordItems }</View>
      </View>
    </SafeAreaView>
  )
})