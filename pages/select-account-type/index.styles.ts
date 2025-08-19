import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1
  },
  backContainer: {
    marginTop: 14,
    marginHorizontal: 15
  },
  title: {
    marginTop: 59,
    marginHorizontal: 'auto',
    fontSize: 24,
    color: '#1a1a1a'
  },
  items: {
    marginTop: 45,
    marginStart: 20,
    marginEnd: 16,
    rowGap: 24
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12
  },
  itemLeftIconContainer: {
    width: 48,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#edefec',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemLeftIcon: {
    width: 25,
    aspectRatio: 1
  },
  itemLeftText: {
    fontSize: 14,
    color: '#1a1a1a'
  },
  itemRight: {
    width: 18,
    aspectRatio: 1
  }
})