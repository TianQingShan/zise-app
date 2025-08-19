import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={ { headerShown: false, animation: 'ios_from_right' } } />
      <StatusBar style='auto' />
    </>
  )
}
