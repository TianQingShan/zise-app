import { Image } from 'expo-image'
import React from 'react'
import { Pressable } from 'react-native'
import styles from './Back.styles'
import { useRouter } from 'expo-router'

export default React.memo(function Back() {
  const router = useRouter()

  const handlePress = React.useCallback(
    () => {
      router.back()
    },
    []
  )

  return (
    <Pressable style={ styles.container } onPress={ handlePress }>
      <Image
        style={ styles.icon }
        source={ require('@/assets/images/image5.png') }
      />
    </Pressable>
  )
})