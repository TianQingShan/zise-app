import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { type CustomTextInputProps } from './CustomTextInput.types'
import styles from './CustomTextInput.styles'
import { Image } from 'expo-image'

export default React.memo<CustomTextInputProps>(function CustomTextInput(props) {
  const {
    height = 46,
    borderRadius = 10,
    borderWidth = 1,
    borderColor = '#808080',
    focusBorderWidth = 2,
    focusBorderColor = '#1a1a1a',
    paddingHorizontal = 16,
    isShowSmallEyes = false,
    secureTextEntry,
    placeholderTextColor
  } = props

  const [isFoucs, setIsFocus] = React.useState(false)

  /**
   * 是否明文显示文本
   * - (true) 不明文显示
   * - (false) 明文显示
   */
  const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(Boolean(secureTextEntry))

  const handleEyesIconPress = React.useCallback(
    () => {
      setIsSecureTextEntry(_isSecureTextEntry => !_isSecureTextEntry)
    },
    []
  )

  return (
    <View style={ { ...styles.container, height, borderRadius } }>
      <View
        style={ {
          ...styles.borderView,
          borderRadius,
          borderWidth: isFoucs ? focusBorderWidth : borderWidth ,
          borderColor: isFoucs ? focusBorderColor : borderColor
        } }
      />
      <TextInput
        { ...props }
        style={ { ...styles.textInput, paddingHorizontal } }
        placeholderTextColor={ placeholderTextColor || '#808080' }
        secureTextEntry={ isSecureTextEntry }
        onFocus={ () => setIsFocus(true) }
        onBlur={ () => setIsFocus(false) }
      />
      {
        isShowSmallEyes &&
        <Pressable onPress={ handleEyesIconPress }>
          <Image
            style={ styles.eyesIcon }
            source={
              isSecureTextEntry ?
              require('@/assets/images/image2_close.png') :
              require('@/assets/images/image2.png')
            }
          />
        </Pressable>
      }
    </View>
  )
})