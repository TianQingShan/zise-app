import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1
  },
  top: {
    paddingStart: 24,
    paddingEnd: 21
  },
  centerChildren: {
    fontSize: 18,
    color: '#000000'
  },
  rightChildren: {
    flexDirection: 'row',
    columnGap: 17
  },
  centerChildrenButtonIcon: {
    width: 22,
    aspectRatio: 1
  },
  search: {
    marginTop: 21,
    marginHorizontal: 20
  },
  searchIcon: {
    width: 20,
    aspectRatio: 1,
    position: 'absolute',
    top: '50%',
    left: 16,
    transform: [{ translateY: '-50%' }],
    zIndex: 1
  },
  searchInput: {
    height: 38,
    borderRadius: 999,
    backgroundColor: '#f3f3f3',
    paddingStart: 41,
    paddingEnd: 16
  },
  hot: {
    marginTop: 20,
    marginHorizontal: 24
  },
  hotTitle: {
    fontSize: 14,
    color: '#000'
  },
  hotItems: {
    marginTop: 28,
    rowGap: 30,
    marginHorizontal: 1
  },
  hotItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 13
  },
  hotItemIcon: {
    width: 27,
    aspectRatio: 1
  },
  hotItemText: {
    rowGap: 2
  },
  hotItemText1: {
    fontSize: 16,
    color: '#000'
  },
  hotItemText2: {
    fontSize: 12,
    color: '#727272'
  },
  allCurrency: {
    marginTop: 45,
    marginHorizontal: 24
  },
  allCurrencyTitle: {
    fontSize: 14,
    color: '#000'
  },
  allCurrencyItems: {
    marginTop: 30,
    marginHorizontal: 1,
    rowGap: 30
  },
  allCurrencyItem: {},
  allCurrencyItemLabel: {
    marginStart: 6,
    fontSize: 14,
    color: '#bfbfbf'
  },
  items: {
    marginTop: 20,
    rowGap: 20
  },
  item: {
    flexDirection: 'row',
    columnGap: 13,
    alignItems: 'center'
  },
  itemIcon: {
    width: 28,
    aspectRatio: 1
  },
  itemText: {
    rowGap: 2
  },
  itemText1: {
    fontSize: 16,
    color: '#000'
  },
  itemText2: {
    fontSize: 12,
    color: '#727272'
  }
})