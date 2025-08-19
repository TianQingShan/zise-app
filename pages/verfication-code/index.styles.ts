import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1
  },
  backContainer: {
    marginTop: 14,
    marginHorizontal: 15
  },
  image: {
    width: 121,
    aspectRatio: 1 / 0.76859,
    marginTop: 60,
    marginHorizontal: 'auto'
  },
  text: {
    marginHorizontal: 'auto',
    textAlign: 'center',
    fontSize: 24,
    color: '#1a1a1a',
    marginTop: 49,
    maxWidth: 229
  },
  tipText: {
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, .9)'
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#808080',
    marginTop: 35,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  resendText: {
    marginTop: 8,
    marginHorizontal: 'auto',
    fontSize: 12,
    color: '#1a1a1a'
  },
  finishButton: {
    marginTop: 97,
    marginHorizontal: 20,
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 15
  },
  finishButtonText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff'
  }
})