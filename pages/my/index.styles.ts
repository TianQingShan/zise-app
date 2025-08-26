import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingStart: 29,
    paddingEnd: 31,
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  topImage: {
    width: 53,
    height: 20,
    marginHorizontal: 'auto'
  },
  userInfo: {
    marginTop: 33,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 13
  },
  avatar: {
    width: 75,
    aspectRatio: 1,
    backgroundColor: '#d9d9d9',
    borderRadius: 999
  },
  username: {
    fontSize: 18,
    color: '#000',
    fontWeight: 500
  },
  userInfoRightBottom: {
    marginTop: 9,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12
  },
  userInfoRightBottomText1: {
    fontSize: 10,
    fontWeight: 500,
    color: '#556aff',
    backgroundColor: '#f7f7f7',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 3
  },
  userInfoRightBottomText2: {
    fontSize: 13,
    color: '#626262',
    fontWeight: 500
  },
  items: {
    rowGap: 18,
    marginTop: 44
  },
  item: {
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    backgroundColor: '#f5f5f5',
    paddingVertical: 12.5,
    paddingStart: 14,
    paddingEnd: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 19
  },
  itemLeftIcon: {
    width: 42,
    aspectRatio: 1
  },
  itemLeftText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 500
  },
  itemRight: {
    width: 10,
    height: 15
  }
})