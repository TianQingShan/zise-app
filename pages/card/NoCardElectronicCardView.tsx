import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import styles from './NoCardElectronicCardView.styles'
import { type PaymentMethodItem, CardApplicationStatus } from './NoCardElectronicCardView.types'

export default React.memo(function NoCardElectronicCardView() {
  const [cardApplicationStatus, setCardApplicationStatus] = React.useState(CardApplicationStatus.NotApplied)
  const paymentMethodItems = React.useMemo<PaymentMethodItem[]>(
    () => ([
      { image: require('@/assets/images/image47.png'), imageSize: [31, 20] },
      { image: require('@/assets/images/image48.png'), imageSize: [44, 21] },
      { image: require('@/assets/images/image49.png'), imageSize: [77, 19] },
      { image: require('@/assets/images/image50.png'), imageSize: [69, 21] }
    ]),
    []
  )

  const descriptionItems = React.useMemo(
    () => ([
      '现金或加密货币均可消费。全球各地商户均可使用 Visa® 借记卡。',
      '多种主流加密资产存入支持',
      '最优实时汇率｜汇款最高48小时汇率保证'
    ]),
    []
  )

  const DescriptionItems = React.useMemo(
    () => descriptionItems.map((text, index) => (
      <View key={ index } style={ styles.descriptionItem }>
        <View style={ styles.descriptionItemSymbol } />
        <Text style={ styles.descriptionItemText }>{ text }</Text>
      </View>
    )),
    []
  )

  const PaymentMethodItems = React.useMemo(
    () => paymentMethodItems.map((item, index) => (
      <Image
        key={ index }
        source={ item.image }
        style={ { width: item.imageSize[0], height: item.imageSize[1] } }
      />
    )),
    []
  )

  const CardApplicationStatusView = React.useMemo(
    () => {
      switch (cardApplicationStatus) {
        case CardApplicationStatus.NotApplied:
          return (
            <View style={ styles.notApplied }>
              <Pressable style={ styles.notAppliedButton }>
                <Text style={ styles.notAppliedButtonText }>申请卡 10 USD</Text>
              </Pressable>
              <Text style={ styles.notAppliedText }>激活卡片首次最低需充值：20 USD</Text>
            </View>
          )
        case CardApplicationStatus.InProcess:
          return (
            <Text style={ styles.inProcessText }>申请中，您的卡片将在几分钟内准备好！</Text>
          )
        default:
        {
          const _never: never = cardApplicationStatus
          return _never
        }
      }
    },
    [cardApplicationStatus]
  )

  return (
    <View style={ styles.container }>
      <Image style={ styles.image } source={ require('@/assets/images/image46.png') } />
      <Text style={ styles.title }>环球精英电子卡</Text>
      <View style={ styles.paymentMethodItems }>{ PaymentMethodItems }</View>
      <View style={ styles.descriptionitems }>{ DescriptionItems }</View>
      { CardApplicationStatusView }
    </View>
  )
})