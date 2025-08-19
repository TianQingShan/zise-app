import React from 'react'
import styles from './index.styles'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back2 from '@/components/back2'

export default React.memo(function DepositRecords() {
  const CenterChildren = React.useMemo(
    () => <Text style={ styles.title }>充币记录</Text>,
    []
  )

  const itemLength = 3
  const Items = React.useMemo(
    () => new Array(itemLength).fill(undefined).map((item, index) => (
      <View
        key={ index }
        style={ { ...styles.item, borderBottomColor: index === itemLength - 1 ? 'transparent' : '#cccccc' } }>
        <View style={ styles.itemTop }>
          <Text style={ styles.itemTopText1 }>2000 USDT</Text>
          <Text style={ styles.itemTopText2 }>2025/07/12 18:41:59</Text>
        </View>
        <View style={ styles.itemBottom }>
          <Text style={ styles.itemBottomText1 }>19/19 个区块确认</Text>
          <Text style={ styles.itemBottomText2 }>已转入</Text>
        </View>
      </View>
    )),
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <Back2
          centerChildren={ CenterChildren }
        />
      </View>
      <View style={ styles.allDepositRecords }>
        <Text style={ styles.allDepositRecordsTitle }>全部充币记录</Text>
        <View style={ styles.items }>{ Items }</View>
      </View>
    </SafeAreaView>
  )
})