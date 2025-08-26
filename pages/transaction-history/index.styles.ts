import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  top: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  centerChildren: {
    fontSize: 18,
    fontWeight: 500,
    color: '#000'
  },
  dateItems: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  dateItem: {
    width: 74,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  dateItemText: {
    fontWeight: 600,
  },
  list: {
    marginTop: 20,
  },
  header: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 11
  },
  headerText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(15, 15, 15, .6)',
    width: 0,
    flexGrow: 1,
    textAlign: 'center'
  },
  body: {
    paddingHorizontal: 32
  },
  bodyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  bodyItem1: {
    width: 0,
    flexGrow: 1,
  },
  bodyItem1Text: {
    fontSize: 12,
    color: 'rgba(21, 21, 21, .6)',
    fontWeight: 400
  },
  bodyItem2: {
    width: 0,
    flexGrow: 1,
  },
  bodyItem2Text: {
    fontSize: 12,
    color: 'rgba(21, 21, 21, .6)',
    fontWeight: 400
  },
  bodyItem3: {
    width: 0,
    flexGrow: 1,
    fontSize: 12,
    fontWeight: 600,
    color: '#121212'
  }
})