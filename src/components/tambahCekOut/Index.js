import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './styles'

const AddCekOut = ({label, placeholder}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.TextInput}/>
    </>
  )
}

export default AddCekOut

