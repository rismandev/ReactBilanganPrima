import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.handle} style={styles.ButtonStyle}>
      <Text style={styles.ButtonText}>Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    width: '85%',
    paddingVertical: 6,
    borderWidth: .5,
    borderColor: '#eef4eb',
    borderRadius: 3,
    backgroundColor: 'rgb(17, 72, 167)'
  },
  ButtonText : {
    color: '#ffffff',
    fontSize: 16,
    paddingVertical: 6,
    textTransform: 'uppercase',
  }
})
