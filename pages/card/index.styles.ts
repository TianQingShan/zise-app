import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  top: {
    marginTop: 24
  },
  icon: {
    width: 53,
    height: 20,
    marginHorizontal: 'auto'
  },
  add: {
    position: 'absolute',
    top: '50%',
    right: 25,
    transform: [{ translateY: '-50%' }],
    width: 32,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#556aff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#fff'
  }
})