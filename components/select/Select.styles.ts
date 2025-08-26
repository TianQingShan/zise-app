import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#808080',
    borderRadius: 10,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 11,
    paddingEnd: 27
  },
  text: {
    fontSize: 12,
    color: 'rgba(26, 26, 26, .61)',
    fontWeight: 400
  },
  icon: {
    transform: [{ rotate: '-90deg' }]
  },
  iconText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 600,
  }
})