import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginStart: 11,
    marginEnd: 20,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    paddingTop: 17,
    paddingBottom: 21,
    paddingStart: 13,
    paddingEnd: 21
  },
  close: {
    position: 'absolute',
    top: 14,
    right: 27
  },
  closeText: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, .5)'
  },
  title: {
    fontSize: 15,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, .5)',
    textAlign: 'center'
  },
  description: {
    marginTop: 21,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 400,
    color: '#151414',
    marginStart: 75,
    marginEnd: 83
  },
  button: {
    marginTop: 19,
    borderRadius: 999,
    paddingVertical: 7.5,
    backgroundColor: '#e32d3c'
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 500,
    textAlign: 'center'
  }
})