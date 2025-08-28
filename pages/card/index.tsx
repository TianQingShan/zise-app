import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { Image } from 'expo-image'
import NoCard from './NoCard'
import HaveCard from './HaveCard'

export default React.memo(function Card() {
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <Image style={ styles.icon } source={ require('@/assets/images/image1.png') } />
        <View style={ styles.add }>
          <Text style={ styles.addText }>+</Text>
        </View>
      </View>
      <NoCard />
      {/* <HaveCard /> */}
    </SafeAreaView>
  )
})