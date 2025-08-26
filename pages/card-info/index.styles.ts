import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  top: {
    marginTop: 16,
    marginStart: 34,
    marginEnd: 25
  },
  centerChildren: {
    width: 53,
    height: 20
  },
  rightChildren: {
    width: 32,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: '#556aff'
  },
  rightChildrenText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 600
  },
  items: {
    rowGap: 14,
    marginTop: 27,
    marginStart: 22,
    marginEnd: 38
  },
  item: {
    backgroundColor: '#f5f5f5',
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    paddingStart: 20,
    paddingEnd: 23,
    paddingTop: 19,
    paddingBottom: 23,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemLeft: {},
  itemLeftLabel: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, .5)',
    fontWeight: 500
  },
  itemButton: {
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 7,
    paddingHorizontal: 10
  },
  itemButtonText: {
    fontSize: 10,
    fontWeight: 600,
    color: '#fff'
  },
  itemNormalViewText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 500,
    marginTop: 1
  },
  billingAddressView: {
    marginTop: 3
  },
  billingAddressViewText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 500
  }
})