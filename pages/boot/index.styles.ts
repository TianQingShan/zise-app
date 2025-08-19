import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 21,
    paddingBottom: 7,
  },
  paginationItems: {
    marginHorizontal: 23.5,
    height: 5,
    backgroundColor: '#d9d9d9',
    borderRadius: 999,
    flexDirection: 'row'
  },
  paginationItem: {
    width: 0,
    flexGrow: 1,
    backgroundColor: '#000f7d',
    borderRadius: 999
  },
  pagerView: {
    flexGrow: 1
  },
  pagerViewItem: {
    rowGap: 33
  },
  pagerViewItemTop: {
    flexGrow: 1
  },
  pagerViewItemTopImage: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pagerViewItemTopText: {
    fontSize: 36,
    color: '#1a1a1a',
    textAlign: 'center',
    marginHorizontal: 30
  },
  bottomView1: {
    rowGap: 18,
    marginHorizontal: 23.5
  },
  bottomView1Text: {
    fontSize: 14,
    color: '#000739',
    textDecorationLine: 'underline',
    marginHorizontal: 'auto'
  },
  bottomView1Button: {
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 14
  },
  bottomView1ButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
  bottomView2: {
    rowGap: 15,
    marginHorizontal: 23.5
  },
  bottomView2Top: {
    flexDirection: 'row',
    columnGap: 14
  },
  bottomView2TopButton: {
    width: 0,
    flexGrow: 1,
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 12
  },
  bottomView2TopButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
  bottomView2bottomButton: {
    flexDirection: 'row',
    columnGap: 12,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, .4)'
  },
  bottomView2bottomButtonIcon: {
    width: 24,
    aspectRatio: 1
  },
  bottomView2bottomButtonText: {
    fontSize: 14,
    color: '#000'
  }
})