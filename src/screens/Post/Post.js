import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Post() {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
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