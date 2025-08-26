import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginStart: 15,
    marginEnd: 16,
    backgroundColor: '#f5f5f5',
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    borderRadius: 20,
    marginTop: 50,
    paddingTop: 28,
    paddingBottom: 31
  },
  close: {
    position: 'absolute',
    top: 13,
    right: 30
  },
  closeText: {
    fontSize: 24,
    color: '#000',
    fontWeight: 500
  },
  image: {
    marginHorizontal: 'auto',
    width: 121,
    aspectRatio: 1 / 0.76
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#1a1a1a',
    fontWeight: 500,
    marginTop: 29,
    marginHorizontal: 70
  },
  description: {
    marginTop: 20,
    fontSize: 12,
    color: 'rgba(0, 0, 0, .9)',
    fontWeight: 500,
    textAlign: 'center',
    marginHorizontal: 17
  },
  input: {
    marginTop: 35,
    marginHorizontal: 17,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    height: 46,
    paddingHorizontal: 15
  },
  verificationCodeCountDownText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 500,
    color: '#1a1a1a'
  },
  button: {
    marginStart: 14,
    marginEnd: 22,
    marginTop: 28,
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 500,
    color: '#fff'
  }
})