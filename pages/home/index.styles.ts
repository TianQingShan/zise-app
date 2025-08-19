import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 14,
    backgroundColor: '#fff',
    flexGrow: 1
  },
  top: {
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
    marginTop: 28
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
  buttons: {
    marginTop: 26,
    flexDirection: 'row',
    columnGap: 8
  },
  button1: {
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 6,
    paddingHorizontal: 24
  },
  button1Text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
  button2: {
    borderRadius: 999,
    backgroundColor: '#f5f5f5',
    paddingVertical: 6,
    paddingHorizontal: 24
  },
  button2Text: {
    fontSize: 14,
    color: '#1a1a1a',
    textAlign: 'center'
  },
  cardItems: {
    marginTop: 20,
    flexDirection: 'row',
    columnGap: 12
  },
  cardItem: {
    width: 249,
    flexShrink: 0,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingVertical: 21,
    paddingHorizontal: 26
  },
  cardItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  cardItemIcon: {
    width: 48,
    aspectRatio: 1
  },
  cardItemCurrency: {
    fontSize: 18,
    color: 'rgba(26, 26, 26, .65)'
  },
  cardItemText1: {
    marginTop: 16,
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)'
  },
  cardItemText2: {
    marginTop: 6,
    fontSize: 14,
    color: '#828282'
  },
  record: {
    marginTop: 36
  },
  recordTitle: {
    fontSize: 20,
    color: '#1a1a1a'
  },
  recordItems: {
    marginTop: 18,
    rowGap: 24
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recordItemLeft: {
    marginVertical: 1,
    flexDirection: 'row',
    columnGap: 8
  },
  recordItemLeftIcon: {
    width: 42,
    aspectRatio: 1,
  },
  recordItemLeftText: {
    justifyContent: 'space-between'
  },
  recordItemLeftText1: {
    fontSize: 14,
    color: '#1a1a1a'
  },
  recordItemLeftText2: {
    fontSize: 12,
    color: '#808080'
  },
  recordItemRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  recordItemRightText1: {
    fontSize: 16,
    color: '#1a1a1a'
  },
  recordItemRightText2: {
    fontSize: 12,
    color: '#808080'
  }
})