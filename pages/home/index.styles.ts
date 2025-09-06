import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 12,
    backgroundColor: '#fff',
    flexGrow: 1
  },
  top: {
    marginStart: 29,
    marginEnd: 27,
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
  kycCertification: {
    marginTop: 22,
    marginStart: 29,
    marginEnd: 27,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#e6e6e6',
    paddingHorizontal: 16,
    paddingBottom: 11,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16
  },
  kycCertificationLeft: {
    width: 12,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#556aff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  kycCertificationLeftIcon: {
    width: 1,
    height: 7
  },
  kycCertificationRightText1: {
    fontSize: 13,
    color: '#000',
    fontWeight: 600
  },
  kycCertificationRightFailText: {
    flexDirection: 'row'
  },
  kycCertificationRightText2: {
    fontSize: 13,
    color: '#000',
    fontWeight: 300,
    marginTop: 4
  },
  kycCertificationRightJump: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16
  },
  kycCertificationRightText3: {
    fontSize: 12,
    color: '#556aff',
    fontWeight: 500
  },
  kycCertificationRightIcon: {
    width: 8,
    height: 6
  },
  scrollViewContentContainerStyle: {
    paddingBottom: 100,
    // paddingBottom: 49.5
  },
  assets: {
    marginHorizontal: 31,
    marginTop: 22
  },
  assetsText1: {
    fontSize: 15,
    color: 'rgba(26, 26, 26, .5)',
    fontWeight: 600
  },
  assetsText2: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: 600,
    color: '#000'
  },
  assetsText3: {
    marginTop: 6,
    fontSize: 14,
    color: '#808080'
  },
  cardItems: {
    marginHorizontal: 23,
    marginTop: 18,
    flexDirection: 'row',
    columnGap: 13
  },
  cardItem: {
    width: 158,
    flexShrink: 0,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 14
  },
  cardItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3
  },
  cardItemIcon: {
    width: 15,
    aspectRatio: 1
  },
  cardItemCurrency: {
    fontSize: 10,
    color: 'rgba(26, 26, 26, .65)',
    fontWeight: 500
  },
  cardItemText1: {
    marginTop: 5,
    fontSize: 14,
    color: '#000'
  },
  cardItemText2: {
    fontSize: 10,
    color: '#828282'
  },
  buttonItems: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 29,
    marginEnd: 26
  },
  buttonItem: {
    rowGap: 5,
  },
  buttonItemIcon: {
    width: 45,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#556aff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonItemText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 400,
    color: '#2c2c2c',
  },
  record: {
    marginTop: 22,
    marginStart: 29,
    marginEnd: 31
  },
  recordTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordTitle: {
    fontSize: 15,
    color: '#1a1a1a',
    fontWeight: 400
  },
  recordTitle2: {
    fontWeight: 400,
    color: 'rgba(26, 26, 26, .65)',
    fontSize: 15,
    marginEnd: 15
  },
  recordItems: {
    marginTop: 10,
    rowGap: 17,
    borderWidth: 0.5,
    borderColor: 'rgba(199, 199, 199, .31)',
    borderRadius: 23,
    paddingTop: 17,
    paddingEnd: 25,
    paddingBottom: 33,
    paddingStart: 13
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4
  },
  recordItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 9
  },
  recordItemLeftIcon: {
    width: 26,
    aspectRatio: 1,
    backgroundColor: '#EAEEF6',
    borderRadius: 999
  },
  recordItemLeftText: {
    // justifyContent: 'space-between'
  },
  recordItemLeftText1: {
    fontSize: 10,
    fontWeight: 600,
    color: '#000'
  },
  recordItemLeftText2: {
    fontWeight: 400,
    fontSize: 10,
    color: '#979797'
  },
  recordItemRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  recordItemRightText1: {
    fontWeight: 600,
    fontSize: 12,
    color: '#000'
  },
  recordItemRightText2: {
    fontSize: 12,
    color: '#808080'
  }
})