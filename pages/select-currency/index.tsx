import React from 'react'
import styles from './index.styles'
import { View, Text, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back2 from '@/components/back2'
import { Image } from 'expo-image'

export default React.memo(function SelectCurrency() {
  const CenterChildren = React.useMemo(
    () => (
      <Text style={ styles.centerChildren }>选择币种</Text>
    ),
    []
  )

  const RightChildren = React.useMemo(
    () => (
      <View style={ styles.rightChildren }>
        <Pressable>
          <Image style={ styles.centerChildrenButtonIcon } source={ require('@/assets/images/image35.png') } />
        </Pressable>
        <Pressable>
          <Image style={ styles.centerChildrenButtonIcon } source={ require('@/assets/images/image36.png') } />
        </Pressable>
      </View>
    ),
    []
  )

  const HotItems = React.useMemo(
    () => new Array(4).fill(undefined).map((item, index) => (
      <View key={ index } style={ styles.hotItem }>
        <Image style={ styles.hotItemIcon } source={ require('@/assets/images/image34.png') } />
        <View style={ styles.hotItemText }>
          <Text style={ styles.hotItemText1 }>USDT</Text>
          <Text style={ styles.hotItemText2 }>Tether</Text>
        </View>
      </View>
    )),
    []
  )

  const AllCurrencyItems = React.useMemo(
    () => new Array(2).fill(undefined).map((item, index) => (
      <View key={ index } style={ styles.allCurrencyItem }>
        <Text style={ styles.allCurrencyItemLabel }>E</Text>
        <View style={ styles.items }>
          {
            new Array(1).fill(undefined).map((item, index) => (
              <View key={ index } style={ styles.item }>
                <Image style={ styles.itemIcon } source={ require('@/assets/images/image34.png') } />
                <View style={ styles.itemText }>
                  <Text style={ styles.itemText1 }>ETH</Text>
                  <Text style={ styles.itemText2 }>Ethereum</Text>
                </View>
              </View>
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
        <Back2 centerChildren={ CenterChildren } rightChildren={ RightChildren } />
      </View>
      <View style={ styles.search }>
        <Image style={ styles.searchIcon } source={ require('@/assets/images/image37.png') } />
        <TextInput style={ styles.searchInput } placeholder='搜索' />
      </View>
      <View style={ styles.hot }>
        <Text style={ styles.hotTitle }>热门</Text>
        <View style={ styles.hotItems }>{ HotItems }</View>
      </View>
      <View style={ styles.allCurrency }>
        <Text style={ styles.allCurrencyTitle }>全部币种</Text>
        <View style={ styles.allCurrencyItems }>{ AllCurrencyItems }</View>
      </View>
    </SafeAreaView>
  )
})