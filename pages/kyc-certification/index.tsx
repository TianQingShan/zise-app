import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import Back2 from '@/components/back2'
import { Image } from 'expo-image'
import BaseInfo from './BaseInfo'
import Identification from './Identification'
import SubmitSuccess from './SubmitSuccess'
import AuditPass from './AuditPass'

export default React.memo(function KycCertification() {
  const CenterChildren = React.useMemo(
    () => <Image style={ styles.centerChildren } source={ require('@/assets/images/image1.png') } />,
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <Back2 centerChildren={ CenterChildren } />
      </View>
      <View style={ styles.content }>
        <BaseInfo />
        {/* <Identification /> */}
        {/* <SubmitSuccess /> */}
        {/* <AuditPass /> */}
      </View>
    </SafeAreaView>
  )
})