import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  otherLoginTypeText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#8e8e8e'
  },
  otherLoginItems: {
    marginTop: 20,
    rowGap: 10
  },
  otherLoginItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 8,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: '#8c8c8c'
  },
  otherLoginItemIcon: {
    width: 24,
    aspectRatio: 1
  },
  otherLoginItemText: {
    fontSize: 12,
    color: '#000'
  }
})