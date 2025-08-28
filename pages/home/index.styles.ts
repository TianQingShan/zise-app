import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 14,
    backgroundColor: '#fff',
    flexGrow: 1
  },
  top: {
    marginHorizontal: 16,
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
    marginTop: 24,
    marginStart: 16,
    marginEnd: 24,
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
    marginHorizontal: 16,
    marginTop: 22
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
  cardItems: {
    marginHorizontal: 16,
    marginTop: 22,
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
    width: 23,
    aspectRatio: 1
  },
  cardItemCurrency: {
    fontSize: 18,
    color: 'rgba(26, 26, 26, .65)'
  },
  cardItemText1: {
    marginTop: 24,
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)'
  },
  cardItemText2: {
    marginTop: 4,
    fontSize: 14,
    color: '#828282'
  },
  buttonItems: {
    marginTop: 28,
    flexDirection: 'row',
    columnGap: 28,
    marginStart: 25,
    marginEnd: 30
  },
  buttonItem: {
    width: 0,
    flexGrow: 1,
    rowGap: 5,
  },
  buttonItemIcon: {
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
    color: '#2c2c2c'
  },
  record: {
    marginHorizontal: 16,
    marginTop: 35
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