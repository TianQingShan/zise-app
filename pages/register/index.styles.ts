import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 48.5
  },
  title: {
    marginTop: 49,
    textAlign: 'center',
    fontSize: 24,
    color: '#1a1a1a',
  },
  tabsContainer: {
    marginTop: 51.5,
    marginStart: 24,
    marginEnd: 30
  },
  emailRegisterView: {
    marginTop: 14.5,
    marginHorizontal: 20,
    rowGap: 6
  },
  emailRegisterViewLable: {
    fontSize: 12,
    color: 'rgba(26, 26, 26, .61)'
  },
  nextButton: {
    marginTop: 18,
    marginHorizontal: 20,
    borderRadius: 999,
    backgroundColor: '#556aff',
    paddingVertical: 15
  },
  nextButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14
  },
  tipText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 12,
    color: '#1a1a1a'
  },
  otherLoginItemsContainer: {
    marginHorizontal: 27.5
  }
})