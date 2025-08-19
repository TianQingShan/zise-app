import OtherLoginItems from '@/components/other-login-items'
import Tabs, { type TabsProps } from '@/components/tabs'
import { Image } from 'expo-image'
import React from 'react'
import { Pressable, Text, TextInput, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { AuthType } from '@/types/index.types'
import { Link } from 'expo-router'

export default React.memo(function Login() {
  const [selectedType, setSelectedType] = React.useState<AuthType>()
  const EmailLoginView = React.useMemo(
    () => (
      <View style={ styles.emailLoginView }>
        <View style={ styles.emailLoginInputItem }>
          <Text style={ styles.emailLoginInputItemLabel }>您的电子邮箱</Text>
          <TextInput style={ styles.emailLoginInputItemInput } />
        </View>
        <View style={ styles.emailLoginInputItem }>
          <Text style={ styles.emailLoginInputItemLabel }>密码</Text>
          <View>
            <TextInput style={ styles.emailLoginInputItemInput } secureTextEntry />
            <Pressable style={ styles.emailLoginInputItemInputIconBox }>
              <Image
                style={ styles.emailLoginInputItemInputIcon }
                source={ require('@/assets/images/image2.png') }
              />
            </Pressable>
          </View>
        </View>
      </View>
    ),
    []
  )

  const onChange = React.useCallback<TabsProps['onChange']>(
    (type) => {
      setSelectedType(type)
    },
    []
  )

  const PhoneLoginView = React.useMemo(
    () => (
      <Text style={ { fontSize: 50, color: '#f2f2f2', textAlign: 'center', marginTop: 20 } }>敬请期待!</Text>
    ),
    []
  )

  const LoginViewRender = React.useMemo(
    () => (
      selectedType === AuthType.Email ?
        EmailLoginView :
        PhoneLoginView
    ),
    [selectedType]
  )

  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView>
        <View>
          <Image
            style={ styles.image }
            source={ require('@/assets/images/image1.png') }
          />
          <View style={ styles.tabsContainer  }>
            <Tabs onChange={ onChange } />
          </View>
          { LoginViewRender }
          <View style={ styles.helpTextView }>
            <View style={ styles.helpTextLeftView }>
              <View style={ styles.helpTextLeftViewSelectBox } />
              <Text style={ styles.helpTextLeftViewText }>我同意</Text>
              <Text style={ { ...styles.helpTextLeftViewText, textDecorationLine: 'underline' } } >《隐私政策》</Text>
            </View>
            <Link href='/unable-login'>
              <Text style={ styles.helpTextRightViewText }>无法登录?</Text>
            </Link>
          </View>
          <Pressable style={ styles.loginButton }>
            <Text style={ styles.loginButtonText }>开始使用</Text>
          </Pressable>
          <View style={ styles.newUserTextView }>
            <Text style={ styles.newUserTextViewText1 }>Zise 新用户？</Text>
            <Link href='/register'>
              <Text style={ styles.newUserTextViewText2 }>注册</Text>
            </Link>
          </View>
        </View>
        <View style={ styles.otherLoginItemsContainer }>
          <OtherLoginItems />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})