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
  rightChildren: {
    flexDirection: 'row',
    columnGap: 9
  },
  rightChildrenIcon: {
    width: 20,
    aspectRatio: 1
  },
  qrCode: {
    marginTop: 25,
    alignItems: 'center'
  },
  qrCodeNetworkLabel: {
    fontSize: 12,
    color: '#8b8b8b'
  },
  qrCodeNetworkButton: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8
  },
  qrCodeNetworkButtonText: {
    fontSize: 18,
    color: '#020202'
  },
  qrCodeNetworkButtonIcon: {
    width: 12,
    aspectRatio: 1
  },
  qrCodeImageContainer: {
    marginTop: 16,
    width: 202,
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: '#b3b3b3',
    borderRadius: 12
  },
  qrCodeImage: {
    width: '100%',
    aspectRatio: 1
  },
  selectNetwork: {
    marginHorizontal: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    marginTop: 27,
    paddingTop: 12,
    paddingBottom: 15,
    paddingStart: 19,
    paddingEnd: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 20
  },
  selectNetworkLeft: {
    rowGap: 4,
    width: 0,
    flexGrow: 1
  },
  selectNetworkLeftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6
  },
  selectNetworkLeftButtonText: {
    fontSize: 10,
    color: '#666666'
  },
  selectNetworkLeftButtonIcon: {
    width: 9,
    aspectRatio: 1
  },
  selectNetworkLeftAddress: {
    fontSize: 14,
    color: '#000000'
  },
  selectNetworkCopyButton: {
    backgroundColor: '#0d0d0d',
    borderRadius: 999,
    paddingVertical: 3.5,
    paddingHorizontal: 8
  },
  selectNetworkCopyButtonText: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 17
  },
  detailsItems: {
    marginTop: 32,
    marginHorizontal: 20,
    rowGap: 14
  },
  detailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  detailsLabel: {
    fontSize: 14,
    color: '#000000',
    opacity: .36
  },
  detailsValue: {
    fontSize: 12,
    color: '#1a1a1a'
  },
  detailsItemButton: {
    flexDirection: 'row',
    columnGap: 3,
    alignItems: 'center'
  },
  detailsItemButtonIcon: {
    width: 10,
    aspectRatio: 1
  }
})