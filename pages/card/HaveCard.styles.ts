import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 30
  },
  cardItems: {
    flexDirection: 'row',
    columnGap: 14,
    paddingStart: 33,
    paddingEnd: 27
  },
  cardItem: {
    width: '100%',
    aspectRatio: 1 / 0.61
  },
  actionItems: {
    marginHorizontal: 30,
    marginTop: 25,
    rowGap: 17
  },
  actionItem: {
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingVertical: 21,
    paddingStart: 23,
    paddingEnd: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  actionitemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 14
  },
  actionitemLeftIcon: {
    width: 42,
    aspectRatio: 1
  },
  actionitemLeftTitle: {
    fontSize: 15,
    color: '#000',
    fontWeight: 500
  },
  actionitemLeftDescription: {
    fontSize: 10,
    fontWeight: 400,
    color: '#727272',
    marginTop: 3
  },
  actionitemRight: {
    width: 10,
    height: 15
  },
  record: {
    marginTop: 32,
    marginStart: 19,
    marginEnd: 40,
    rowGap: 18
  },
  recordLabel: {
    marginStart: 4,
    fontSize: 20,
    fontWeight: 600,
    color: '#1a1a1a'
  },
  recordItems: {
    rowGap: 25
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recordItemLeft: {
    flexDirection: 'row',
    columnGap: 8
  },
  recordItemLeftIcon: {
    width: 42,
    aspectRatio: 1,
    marginVertical: 1
  },
  recordItemLeftText: {
    justifyContent: 'space-between'
  },
  recordItemLeftText1: {
    fontSize: 14,
    fontWeight: 400,
    color: '#1a1a1a'
  },
  recordItemLeftText2: {
    fontSize: 12,
    fontWeight: 300,
    color: '#808080'
  },
  recordItemRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  recordItemRightText1: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: 400
  },
  recordItemRightText2: {
    fontSize: 12,
    fontWeight: 400,
    color: '#808080'
  }
})