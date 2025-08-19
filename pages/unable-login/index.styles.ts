import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingTop: 14,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    color: '#1a1a1a',
    marginTop: 13,
    textAlign: 'center'
  },
  label: {
    marginTop: 34,
    paddingBottom: 5,
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5
  },
  labelText: {
    fontSize: 14,
    color: '#333333'
  },
  questionItems: {
    marginTop: 32,
    rowGap: 46
  },
  questionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  questionItemText: {
    fontSize: 14,
    color: '#333333'
  },
  questionItemIcon: {
    width: 18,
    aspectRatio: 1
  }
})