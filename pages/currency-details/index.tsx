import React from 'react'
import styles from './index.styles'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back2 from '@/components/back2'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'

export default React.memo(function CurrencyDetails() {
  const router = useRouter()
  const CenterChildren = React.useMemo(
    () => (
      <View style={ styles.centerChildren }>
        <Image
          style={ styles.centerChildrenIcon }
          source={ require('@/assets/images/image24.png') }
        />
        <Text style={ styles.centerChildrenText }>USDT</Text>
      </View>
    ),
    []
  )

  const RightChildren = React.useMemo(
    () => (
      <View style={ styles.rightChildren }>
        <Pressable>
          <Image
            style={ styles.rightChildrenIcon }
            source={ require('@/assets/images/image25.png') }
          />
        </Pressable>
        <Pressable>
          <Image
            style={ styles.rightChildrenIcon }
            source={ require('@/assets/images/image26.png') }
          />
        </Pressable>
        <Pressable onPress={ () => router.push('/deposit-records') }>
          <Image
            style={ styles.rightChildrenIcon }
            source={ require('@/assets/images/image27.png') }
          />
        </Pressable>
      </View>
    ),
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.top }>
        <Back2
          centerChildren={ CenterChildren }
          rightChildren={ RightChildren }
        />
      </View>
      <View style={ styles.qrCode }>
        <Text style={ styles.qrCodeNetworkLabel }>网络</Text>
        <Pressable style={ styles.qrCodeNetworkButton } onPress={ () => router.push('/select-network') }>
          <Text style={ styles.qrCodeNetworkButtonText }>Tron(TRC20)</Text>
          <Image style={ styles.qrCodeNetworkButtonIcon } source={ require('@/assets/images/image28.png') } />
        </Pressable>
        <View style={ styles.qrCodeImageContainer }>
          <Image
            style={ styles.qrCodeImage }
            source={ require('@/assets/images/image29.png') }
          />
        </View>
      </View>
      <View style={ styles.selectNetwork }>
        <View style={ styles.selectNetworkLeft }>
          <Pressable style={ styles.selectNetworkLeftButton } onPress={ () => router.push('/select-network') }>
            <Text style={ styles.selectNetworkLeftButtonText }>选择网络</Text>
            <Image
              style={ styles.selectNetworkLeftButtonIcon }
              source={ require('@/assets/images/image30.png') }
            />
          </Pressable>
          <Text style={ styles.selectNetworkLeftAddress }>XOcbdUpAtTjcBnC3JHtJkG9bivohvp2fRNJe1NzJ721</Text>
        </View>
        <Pressable style={ styles.selectNetworkCopyButton }>
          <Text style={ styles.selectNetworkCopyButtonText }>复制</Text>
        </Pressable>
      </View>
      <View style={ styles.detailsItems }>
        <View style={ styles.detailsItem }>
          <Text style={ styles.detailsLabel }>充币账户</Text>
          <Text style={ styles.detailsValue }>交易账户</Text>
        </View>
        <View style={ styles.detailsItem }>
          <Pressable style={ styles.detailsItemButton }>
            <Text style={ styles.detailsLabel }>最小充币额</Text>
            <Image style={ styles.detailsItemButtonIcon } source={ require('@/assets/images/image31.png') } />
          </Pressable>
          <Text style={ styles.detailsValue }>0.01 USDT</Text>
        </View>
        <View style={ styles.detailsItem }>
          <Text style={ styles.detailsLabel }>充币到账时间</Text>
          <Text style={ styles.detailsValue }>约 1 分钟</Text>
        </View>
        <View style={ styles.detailsItem }>
          <Text style={ styles.detailsLabel }>可提币时间</Text>
          <Text style={ styles.detailsValue }>约 2 分钟</Text>
        </View>
      </View>
    </SafeAreaView>
  )
})