import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default CustomTextInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={props.type}
        placeholder={props.placeholder}
        style={styles.TextInput}
        onChangeText={props.onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 6,
  },
  TextInput: {
    width: '85%',
    borderRadius: 3,
    borderWidth: .6,
    borderColor: '#808080',
    textAlign: 'center',
    fontSize: 16,
  }
})
