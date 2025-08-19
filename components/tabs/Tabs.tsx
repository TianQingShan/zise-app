import { AuthType } from '@/types/index.types'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './Tabs.styles'
import {
  type Item,
  type ItemProps,
  type TabsProps
} from './Tabs.types'

export default React.memo<TabsProps>(function Tabs(props) {
  const { onChange } = props
  const [selectedType, setSelectedType] = React.useState(AuthType.Email)
  const loginTypeItems = React.useMemo<Item[]>(
    () => ([
      { type: AuthType.Email, text: '邮箱' },
      { type: AuthType.Phone, text: '手机号' }
    ]),
    []
  )

  const handleItemPress = React.useCallback(
    (type: AuthType) => {
      setSelectedType(type)
    },
    []
  )

  React.useEffect(
    () => {
      onChange(selectedType)
    },
    [selectedType]
  )

  const Item = React.useMemo(
    () => React.memo<ItemProps>(({ item, isSelected }) => {
      const { type, text } = item
      const backgroundColor = isSelected ? '#fff' : 'transparent'
      const color = isSelected ? '#292929' : '#a4a4a4'

      return (
        <Pressable
          key={ type }
          style={ { ...styles.item, backgroundColor } }
          onPress={ () => handleItemPress(type) }>
          <Text style={ { ...styles.itemText, color } }>
            { text }
          </Text>
        </Pressable>
      )
    }),
    []
  )

  const Items = React.useMemo(
    () => loginTypeItems.map(item => (
      <Item
        key={ item.type }
        item={ item }
        isSelected={ item.type === selectedType }
      />
    )),
    [loginTypeItems, selectedType]
  )

  return (
    <View style={ styles.items }>
      { Items }
    </View>
  )
})