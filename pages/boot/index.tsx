import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index.styles'
import { type Item, type PaginationItemProps } from './index.types'
import PagerView, { type PagerViewProps } from 'react-native-pager-view'
import { Image } from 'expo-image'
import { Link } from 'expo-router'

export default React.memo(function Boot() {
  const [initialPage, setInitialPage] = React.useState(0)
  const BottomView1 = React.useMemo(
    () => (
      <View style={ styles.bottomView1 }>
        <Link href='/register' suppressHighlighting asChild>
          <Text style={ styles.bottomView1Text }>隐私政策</Text>
        </Link>
        <Link href='/login' style={ styles.bottomView1Button } suppressHighlighting>
          <Text style={ styles.bottomView1ButtonText }>开始使用</Text>
        </Link>
      </View>
    ),
    []
  )

  const BottomView2 = React.useMemo(
    () => (
      <View style={ styles.bottomView2 }>
        <View style={ styles.bottomView2Top }>
          <Link href='/login' style={ styles.bottomView2TopButton } suppressHighlighting>
            <Text style={ styles.bottomView2TopButtonText }>登录</Text>
          </Link>
          <Link href='/register' style={ styles.bottomView2TopButton } suppressHighlighting>
            <Text style={ styles.bottomView2TopButtonText }>注册</Text>
          </Link>
        </View>
        <Pressable style={ styles.bottomView2bottomButton }>
          <Image style={ styles.bottomView2bottomButtonIcon } source={ require('@/assets/images/image3.png') } />
          <Text style={ styles.bottomView2bottomButtonText }>使用Google登录</Text>
        </Pressable>
      </View>
    ),
    []
  )

  const items = React.useMemo<Item[]>(
    () => ([
      {
        image: require('@/assets/images/image11.png'),
        imageSize: [225, 167],
        text: '160 个国家/地区， 40 种货币，一个账户',
        bottomView: BottomView1
      },
      {
        image: require('@/assets/images/image12.png'),
        imageSize: [202, 155],
        text: '向境外汇款和从境外收款',
        bottomView: BottomView1
      },
      {
        image: require('@/assets/images/image13.png'),
        imageSize: [192, 154],
        text: '使用通用卡片在世界各地自由支付',
        bottomView: BottomView1
      },
      {
        image: require('@/assets/images/image14.png'),
        imageSize: [159, 213],
        text: '让窃贼失望',
        bottomView: BottomView1
      },
      {
        image: require('@/assets/images/image15.png'),
        imageSize: [211, 187],
        text: '全球通用的国际账户',
        bottomView: BottomView2
      }
    ]),
    []
  )

  const PaginationItem = React.useMemo(
    () => React.memo<PaginationItemProps>(({ show }) => {
      return <View style={ { ...styles.paginationItem, opacity: Number(show) } } />
    }),
    []
  )

  const PaginationItems = React.useMemo(
    () => items.map((item, index) => <PaginationItem key={ index } show={ index <= initialPage } />),
    [initialPage]
  )

  const Items = React.useMemo(
    () => items.map(({ image, imageSize, text, bottomView }, index) => (
      <View key={ index } style={ styles.pagerViewItem }>
        <View style={ styles.pagerViewItemTop }>
          <View style={ styles.pagerViewItemTopImage }>
            <Image
              source={ image }
              style={ { width: imageSize[0], height: imageSize[1] } }
            />
          </View>
          <Text style={ styles.pagerViewItemTopText }>{ text }</Text>
        </View>
        { bottomView }
      </View>
    )),
    []
  )

  const onPageSelected = React.useCallback<NonNullable<PagerViewProps['onPageSelected']>>(
    (event) => {
      setInitialPage(event.nativeEvent.position)
    },
    []
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.paginationItems }>
        { PaginationItems }
      </View>
      <PagerView
        style={ styles.pagerView }
        initialPage={ initialPage }
        onPageSelected={ onPageSelected }>
        { Items }
      </PagerView>
    </SafeAreaView>
  )

})