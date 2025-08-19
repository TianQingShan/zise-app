import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  top: {
    paddingStart: 24,
    paddingEnd: 15
  },
  centerChildren: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5
  },
  centerChildrenIcon: {
    width: 18,
    aspectRatio: 1
  },
  centerChildrenText: {
    fontSize: 18,
    color: '#000000'
  },
  tip: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#e6e6e6',
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 10,
    columnGap: 8,
    flexDirection: 'row'
  },
  tipLeft: {
    width: 12,
    aspectRatio: 1,
    backgroundColor: '#000',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tipLeftIcon: {
    width: 1,
    height: 7
  },
  tipRight: {
    width: 0,
    flexGrow: 1
  },
  tipRightText1: {
    fontSize: 14,
    color: '#000'
  },
  tipRightText2: {
    fontSize: 12,
    color: '#000',
    marginTop: 2
  },
  tipRightButton: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2
  },
  tipRightButtonText: {
    fontSize: 12,
    color: '#000'
  },
  tipRightButtonIcon: {
    width: 7,
    height: 5
  },
  items: {
    marginTop: 30,
    marginHorizontal: 20,
    rowGap: 40
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 13
  },
  itemIcon: {
    width: 28,
    aspectRatio: 1
  },
  itemText1: {
    fontSize: 14,
    color: '#000'
  },
  itemText2: {
    marginTop: 2,
    fontSize: 12,
    color: '#989697'
  },
  itemText3: {
    marginTop: 2,
    fontSize: 12,
    color: '#989697'
  }
})