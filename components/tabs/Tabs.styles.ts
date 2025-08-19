import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  items: {
    backgroundColor: '#f2f2f2',
    borderRadius: 999,
    padding: 4,
    flexDirection: 'row'
  },
  item: {
    borderRadius: 999,
    width: 0,
    flexGrow: 1,
    paddingVertical: 7.5
  },
  itemText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold'
  },
})