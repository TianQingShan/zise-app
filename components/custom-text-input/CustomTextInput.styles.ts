import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  borderView: {
    position: 'absolute',
    inset: 0
  },
  textInput: {
    borderWidth: 0,
    fontSize: 12,
    color: '#1a1a1a',
    fontWeight: 400,
    height: '100%',
    width: 0,
    flexGrow: 1
  },
  eyesIcon: {
    width: 20,
    aspectRatio: 1,
    marginEnd: 16
  }
})