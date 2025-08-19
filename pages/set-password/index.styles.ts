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
  title: {
    marginTop: 59,
    marginHorizontal: 'auto',
    fontSize: 24,
    color: '#1a1a1a'
  },
  items: {
    marginTop: 48,
    marginHorizontal: 20,
    rowGap: 18
  },
  item: {
    rowGap: 6
  },
  itemLabel: {
    fontSize: 12,
    color: '#1a1a1a'
  },
  itemInput: {
    height: 46,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  button: {
    marginTop: 48,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 999,
    backgroundColor: '#556aff'
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  }
})