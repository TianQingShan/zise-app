import React from 'react'
import { View, Text } from 'react-native'
import styles from './index.styles'
import Back2 from '@/components/back2'
import { SafeAreaView } from 'react-native-safe-area-context'
import { type DateItem, type DateItemProps } from './index.types'

export default React.memo(function TransactionHistory() {
  const dateItems = React.useMemo<DateItem[]>(
    () => ([
      { text: '近30天' },
      { text: '3个月' },
      { text: '6个月' },
      { text: '1年' },
    ]),
    []
  )

  const CenterChildren = React.useMemo(
    () => (<Text style={ styles.centerChildren }>USDC交易记录</Text>),
    []
  )

  const DateItem = React.useMemo(
    () => React.memo<DateItemProps>((props) => {
      const { item, isSelected } = props
      const { text } = item
      const backgroundColor = isSelected ? '#556aff' : 'transparent'
      const fontSize = isSelected ? 12 : 10
      const color = isSelected ? '#fff' : '#8c8c8c'

      return (
        <View style={ { ...styles.dateItem, backgroundColor } }>
          <Text style={ { ...styles.dateItemText, fontSize, color } }>{ text }</Text>
        </View>
      )
    }),
    []
  )

  const DateItems = React.useMemo(
    () => dateItems.map((item, index) => <DateItem item={ item } isSelected={ index === 0 } key={ index } />),
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <Back2 centerChildren={ CenterChildren } />
      </View>
      <View style={ styles.dateItems }>{ DateItems }</View>
      <View style={ styles.list }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>类型</Text>
          <Text style={ styles.headerText }>日期</Text>
          <Text style={ styles.headerText }>数量</Text>
        </View>
        <View style={ styles.body }>
          {
            new Array(2).fill(undefined).map((item, index) => (
              <View key={ index } style={ styles.bodyItem }>
                <View style={ styles.bodyItem1 }>
                  <Text style={ styles.bodyItem1Text }>兑换</Text>
                  <Text style={ styles.bodyItem1Text }>TO USDT</Text>
                </View>
                <View style={ styles.bodyItem2 }>
                  <Text style={ styles.bodyItem2Text }>2025-07-27</Text>
                  <Text style={ styles.bodyItem2Text }>16:25:51</Text>
                </View>
                <Text style={ styles.bodyItem3 }>+ $ 1000</Text>
              </View>
            ))
          }
        </View>
      </View>
    </SafeAreaView>
  )
})