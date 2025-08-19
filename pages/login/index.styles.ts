import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  tabsContainer: {
    marginTop: 36,
    marginStart: 24,
    marginEnd: 30
  },
  image: {
    width: 123,
    aspectRatio: 1 / 0.424,
    marginHorizontal: 'auto',
    marginTop: 53.5
  },
  emailLoginView: {
    marginTop: 14.5,
    marginHorizontal: 27.5,
    rowGap: 19
  },
  emailLoginInputItem: {
    rowGap: 6
  },
  emailLoginInputItemLabel: {
    fontSize: 12,
    color: 'rgba(26, 26, 26, .61)',
    fontWeight: 400
  },
  emailLoginInputItemInput: {
    height: 50,
    borderWidth: 0.5,
    borderColor: '#808080',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 12,
    color: '#1a1a1a'
  },
  emailLoginInputItemInputIconBox: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: '-50%' }],
    end: 16.5
  },
  emailLoginInputItemInputIcon: {
    width: 20,
    aspectRatio: 1,
  },
  helpTextView: {
    marginStart: 28,
    marginEnd: 37,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  helpTextLeftView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  helpTextLeftViewSelectBox: {
    width: 17,
    height: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    marginEnd: 7
  },
  helpTextLeftViewText: {
    color: '#1b1b1b',
    fontSize: 12
  },
  helpTextRightViewText: {
    fontSize: 14,
    color: '#1f296e',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  loginButton: {
    marginTop: 21,
    marginStart: 24,
    marginEnd: 30,
    paddingVertical: 15,
    borderRadius: 999,
    backgroundColor: '#556aff'
  },
  loginButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  newUserTextView: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4
  },
  newUserTextViewText1: {
    fontSize: 16,
    color: '#1a1a1a'
  },
  newUserTextViewText2: {
    fontSize: 13,
    color: '#556aff',
    textDecorationLine: 'underline'
  },
  otherLoginItemsContainer: {
    marginTop: 36,
    paddingHorizontal: 27.5
  }
})