import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { CardType, type TabItem, type TabItemProps } from './NoCard.types'
import NoCardElectronicCardView from './NoCardElectronicCardView'
import NoCardPhysicalCardView from './NoCardPhysicalCardView'
import styles from './NoCard.styles'

export default React.memo(function NoCard() {
  const [selectedCardType, setSelectCardType] = React.useState(CardType.ElectronicCard)
  const tabItems = React.useMemo<TabItem[]>(
    () => ([
      { cardType: CardType.ElectronicCard, text: '电子卡', view: <NoCardElectronicCardView />  },
      { cardType: CardType.PhysicalCard, text: '实体卡', view: <NoCardPhysicalCardView />  },
    ]),
    []
  )

  const TabItem = React.useMemo(
    () => React.memo<TabItemProps>((props) => {
      const { item, isSelected } = props
      const { cardType, text } = item
      const backgroundColor = isSelected ? '#fff' : 'transparent'
      const color = isSelected ? '#292929' : '#a4a4a4'
      const fontWeight = isSelected ? 400 : 600

      return (
        <Pressable style={ { ...styles.tabItem, backgroundColor } } onPress={ () => setSelectCardType(cardType) }>
          <Text style={ { ...styles.tabItemText, color, fontWeight } }>{ text }</Text>
        </Pressable>
      )
    }),
    []
  )

  const TabItems = React.useMemo(
    () => tabItems.map(item => <TabItem key={ item.cardType } item={ item } isSelected={ item.cardType === selectedCardType } />),
    [selectedCardType]
  )

  const TabView = React.useMemo(
    () => tabItems.find(item => item.cardType === selectedCardType)!.view,
    [selectedCardType]
  )

  return (
    <View style={ styles.container }>
      <View style={ styles.tabItems }>{ TabItems }</View>
      { TabView }
    </View>
  )
})