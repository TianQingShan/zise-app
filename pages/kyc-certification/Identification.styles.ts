import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  formItems: {
    marginTop: 18,
    rowGap: 20
  },
  formItem: {
    rowGap: 14
  },
  formItemLabel: {
    fontSize: 12,
    fontWeight: 400,
    color: 'rgba(26, 26, 26, .61)'
  },
  upload: {
    aspectRatio: 1 / 0.49,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadIcon: {
    width: 34,
    height: 26
  },
  button: {
    marginTop: 45,
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 15,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 600
  }
})