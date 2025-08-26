import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  formItems: {
    rowGap: 20,
    marginTop: 27
  },
  formItem: {
    rowGap: 6
  },
  formItemLabel: {
    fontSize: 12,
    fontWeight: 400,
    color: 'rgba(26, 26, 26, .61)'
  },
  birthSelectItems: {
    flexDirection: 'row',
    columnGap: 14
  },
  birthSelectItem: {
    width: 0,
    flexGrow: 1
  },
  button: {
    marginTop: 43,
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 15,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#fff'
  }
})