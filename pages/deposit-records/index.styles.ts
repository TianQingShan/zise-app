import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1
  },
  top: {
    paddingHorizontal: 24
  },
  title: {
    fontSize: 18,
    color: '#000000'
  },
  allDepositRecords: {
    paddingHorizontal: 20,
    paddingTop: 30
  },
  allDepositRecordsTitle: {
    fontSize: 12,
    color: '#000'
  },
  items: {
    marginHorizontal: 1,
    marginTop: 15,
    rowGap: 15
  },
  item: {
    rowGap: 10,
    paddingStart: 1,
    paddingEnd: 4,
    paddingBottom: 15,
    borderBottomWidth: 0.5
  },
  itemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemTopText1: {
    fontSize: 10,
    color: '#1a1a1a'
  },
  itemTopText2: {
    fontSize: 10,
    color: '#000'
  },
  itemBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemBottomText1: {
    fontSize: 10,
    color: '#1a1a1a'
  },
  itemBottomText2: {
    fontSize: 10,
    color: '#1a1a1a'
  }
})