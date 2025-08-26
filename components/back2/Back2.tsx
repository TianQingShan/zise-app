import React from 'react'
import { View, Pressable } from 'react-native'
import styles from './Back2.styles'
import { Image } from 'expo-image'
import { type Back2Props } from './Back2.types'
import { useRouter } from 'expo-router'

export default React.memo<Back2Props>(function Back2(props) {
  const router = useRouter()
  const { centerChildren, rightChildren } = props

  return (
    <View style={ styles.container }>
      <Pressable onPress={ () => router.back() }>
        <Image
          source={ require('@/assets/images/image5.png') }
          style={ styles.backIcon }
        />
      </Pressable>
      <View style={ styles.center }>
        { centerChildren }
      </View>
      { rightChildren ?? <View /> }
    </View>
  )
})