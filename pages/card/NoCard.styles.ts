import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 45
  },
  tabItems: {
    marginStart: 40,
    marginEnd: 41,
    paddingHorizontal: 4,
    paddingTop: 5,
    paddingBottom: 4,
    backgroundColor: '#f2f2f2',
    borderRadius: 999,
    flexDirection: 'row'
  },
  tabItem: {
    width: 0,
    flexGrow: 1,
    paddingVertical: 7.5,
    borderRadius: 999
  },
  tabItemText: {
    textAlign: 'center',
    fontSize: 14
  }
})