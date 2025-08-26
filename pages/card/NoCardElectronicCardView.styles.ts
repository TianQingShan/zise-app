import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 22
  },
  image: {
    marginHorizontal: 44.5,
    aspectRatio: 1 / 0.61
  },
  title: {
    marginTop: 22,
    marginHorizontal: 'auto',
    fontSize: 30,
    color: '#000',
    fontWeight: 600
  },
  paymentMethodItems: {
    flexDirection: 'row',
    columnGap: 18,
    marginTop: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionitems: {
    marginTop: 19,
    rowGap: 18,
    paddingHorizontal: 40,
  },
  descriptionItem: {
    flexDirection: 'row',
    columnGap: 10
  },
  descriptionItemSymbol: {
    width: 5,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#000',
    marginTop: 8
  },
  descriptionItemText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 200
  },
  notApplied: {
    marginHorizontal: 44.5,
    marginTop: 36,
    rowGap: 18
  },
  notAppliedButton: {
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 14.5
  },
  notAppliedButtonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 400,
    color: '#fff'
  },
  notAppliedText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 200,
    color: 'rgba(0, 0, 0, .44)'
  },
  inProcessText: {
    marginTop: 61,
    fontSize: 16,
    color: '#556aff',
    fontWeight: 400,
    textAlign: 'center'
  }
})