import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    width: 0,
    flexGrow: 1,
    rowGap: 3,
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 3.5
  },
  itemIcon: {
    width: 24,
    aspectRatio: 1
  },
  itemText: {
    fontSize: 11
  }
})