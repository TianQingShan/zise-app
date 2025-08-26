import OtherLoginItems from '@/components/other-login-items'
import Tabs, { type TabsProps } from '@/components/tabs'
import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { AuthType } from '@/types/index.types'
import { useRouter } from 'expo-router'
import CustomTextInput from '@/components/custom-text-input'

export default React.memo(function Register() {
  const router = useRouter()
  const [selectedType, setSelectedType] = React.useState<AuthType>()

  const onChange = React.useCallback<TabsProps['onChange']>(
    (type) => {
      setSelectedType(type)
    },
    []
  )

  const EmailRegisterView = React.useMemo(
    () => (
      <View style={ styles.emailRegisterView }>
        <Text style={ styles.emailRegisterViewLable }>您的电子邮箱</Text>
        <CustomTextInput />
      </View>
    ),
    []
  )

  const PhoneRegisterView = React.useMemo(
    () => (
      <Text style={ { fontSize: 50, color: '#f2f2f2', textAlign: 'center', marginTop: 20 } }>敬请期待!</Text>
    ),
    []
  )

  const RegisterViewRender = React.useMemo(
    () => (
      selectedType === AuthType.Email ?
        EmailRegisterView :
        PhoneRegisterView
    ),
    [selectedType]
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <Text style={ styles.title }>创建 Zise 账户</Text>
        <View style={ styles.tabsContainer }>
          <Tabs onChange={ onChange } />
        </View>
        { RegisterViewRender }
        <Pressable style={ styles.nextButton } onPress={ () => router.navigate('/verification-code') }>
          <Text style={ styles.nextButtonText }>继续</Text>
        </Pressable>
        <Text style={ styles.tipText }>注册，即表示您接受我们的使用条款和隐私政策</Text>
      </View>
      <View style={ styles.otherLoginItemsContainer }>
        <OtherLoginItems />
      </View>
    </SafeAreaView>
  )
})