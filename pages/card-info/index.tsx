import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './index.styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back2 from '@/components/back2'
import { Image } from 'expo-image'
import { ActionType, type Item } from './index.types'
import RequestVerificationCodeModal from './RequestVerificationCodeModal'

export default React.memo(function CardInfo() {
  const ItemNormalView = React.useMemo(
    () => <Text style={ styles.itemNormalViewText }>Test...</Text>,
    []
  )

  const BillingAddressView = React.useMemo(
    () => (
      <View style={ styles.billingAddressView }>
        <Text style={ styles.billingAddressViewText }>4959 Colorado Blvd Denver</Text>
        <Text style={ styles.billingAddressViewText }>城市：Denver </Text>
        <Text style={ styles.billingAddressViewText }>邮编：80216 </Text>
        <Text style={ styles.billingAddressViewText }>州：Colorado </Text>
      </View>
    ),
    []
  )

  const items = React.useMemo<Item[]>(
    () => ([
      { label: '姓名', view: ItemNormalView, actionType: ActionType.Copy },
      { label: '卡号', view: ItemNormalView, actionType: ActionType.Copy },
      { label: '有效期', view: ItemNormalView, actionType: ActionType.Copy },
      { label: '安全码', view: ItemNormalView, actionType: ActionType.RequestVerificationCode },
      { label: '账单地址', view: BillingAddressView, actionType: ActionType.Copy },
    ]),
    []
  )

  const CenterChildren = React.useMemo(
    () => (
      <Image style={ styles.centerChildren } source={ require('@/assets/images/image1.png') } />
    ),
    []
  )

  const RightChildren = React.useMemo(
    () => (
      <View style={ styles.rightChildren }>
        <Text style={ styles.rightChildrenText }>+</Text>
      </View>
    ),
    []
  )

  const Items = React.useMemo(
    () => items.map((item, index) => (
      <View key={ index } style={ styles.item }>
        <View style={ styles.itemLeft }>
          <Text style={ styles.itemLeftLabel }>{ item.label }</Text>
          { item.view }
        </View>
        <Pressable style={ styles.itemButton }>
          <Text style={ styles.itemButtonText }>{ item.actionType === ActionType.Copy ? '复制' : '请求验证码' }</Text>
        </Pressable>
      </View>
    )),
    []
  )

  // return <RequestVerificationCodeModal />

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <Back2 centerChildren={ CenterChildren } rightChildren={ RightChildren } />
      </View>
      <View style={ styles.items }>{ Items }</View>
    </SafeAreaView>
  )
})