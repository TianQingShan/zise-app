import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './HaveCard.styles'
import { Image } from 'expo-image'
import { type ActionItem } from './HaveCard.types'
import FreezeCardModal from './FreezeCardModal'
import { useRouter } from 'expo-router'

export default React.memo(function HaveCard() {
  const router = useRouter()
  const actionItems = React.useMemo<ActionItem[]>(
    () => ([
      { title: '卡片信息', description: '在这里可以获取到所有的卡片信息', handlePress: () => router.push('/card-info') },
      { title: '冻结/解冻', description: '如发生异常交易，请立即冻结您的卡片', handlePress: () => {} },
      { title: '限额调整', description: '灵活调整您的支出限额', handlePress: () => {} },
    ]),
    []
  )

  const cardItems = React.useMemo(
    () => new Array(2).fill(undefined).map((item, index) => (
      <Image
        key={ index }
        source={ require('@/assets/images/image46.png') }
        style={ styles.cardItem }
      />
    )),
    []
  )

  const ActionItems = React.useMemo(
    () => actionItems.map((item, index) => (
      <Pressable onPress={ item.handlePress } key={ index } style={ styles.actionItem }>
        <View style={ styles.actionitemLeft }>
          <Image style={ styles.actionitemLeftIcon } source={ require('@/assets/images/image45.png') } />
          <View>
            <Text style={ styles.actionitemLeftTitle }>{ item.title }</Text>
            <Text style={ styles.actionitemLeftDescription }>{ item.description }</Text>
          </View>
        </View>
        <Image style={ styles.actionitemRight } source={ require('@/assets/images/image6.png') } />
      </Pressable>
    )),
    []
  )

  // return <FreezeCardModal />

  return (
    <View style={ styles.container }>
      <View style={ styles.cardItems }>{ cardItems }</View>
      <View style={ styles.actionItems }>{ ActionItems }</View>
      <View style={ styles.record }>
        <Text style={ styles.recordLabel }>记录</Text>
        <View style={ styles.recordItems }>
          {
            new Array(4).fill(undefined).map((item, index) => (
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
            ))
          }
        </View>
      </View>
    </View>
  )
})