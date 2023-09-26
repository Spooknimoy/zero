import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Usuarios() {
  return (
    <View style={styles.container}>
      <Text>Usuarios</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  }
})