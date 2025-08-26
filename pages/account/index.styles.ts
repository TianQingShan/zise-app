import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 14,
    backgroundColor: '#fff',
    flexGrow: 1
  },
  top: {
    marginStart: 23,
    marginEnd: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topIcon1Box: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: 'rgba(228, 228, 228, .5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topIcon1: {
    width: 14,
    height: 16
  },
  topIcon2: {
    width: 50,
    height: 20
  },
  topIcon3: {
    width: 40,
    aspectRatio: 1
  },
  assets: {
    marginHorizontal: 28,
    marginTop: 45
  },
  assetsText1: {
    fontSize: 16,
    color: '#1a1a1a'
  },
  assetsText2: {
    marginTop: 1,
    fontSize: 32,
    color: '#000000'
  },
  assetsText3: {
    marginTop: 6,
    fontSize: 14,
    color: '#808080'
  },
  allItems: {
    marginTop: 32,
    paddingStart: 22,
    paddingEnd: 32,
    rowGap: 27
  },
  itemsContainer: {
    rowGap: 9
  },
  itemsLabel: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: 400
  },
  items: {
    marginStart: 1,
    rowGap: 6
  },
  item: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingStart: 15,
    paddingEnd: 21,
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12
  },
  itemLeftIcon: {
    width: 24,
    aspectRatio: 1
  },
  itemLeftText: {
    fontSize: 13,
    fontWeight: 500,
    color: 'rgba(26, 26, 26, .65)'
  },
  itemRightText1: {
    fontSize: 15,
    fontWeight: 600,
    color: '#000'
  },
  itemRightText2: {
    fontSize: 10,
    fontWeight: 600,
    color: '#828282'
  }
})