import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    borderWidth: 0.5,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 13,
    paddingStart: 16,
    paddingEnd: 12,
    paddingVertical: 12
  },
  left: {
    width: 12,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: '#556aff'
  },
  icon: {
    width: 1,
    height: 7
  },
  text: {
    fontSize: 10,
    color: '#000',
    fontWeight: 400,
    flexShrink: 1
  }
})