import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import theme from '../src/theme'

const Star = props => {
  const { onClick, caption, style } = props
  return (
    <TouchableOpacity onPress={onClick} style={style}>
      <View style={styles.button} elevation={3}>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.roundedInputBorderRadius,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.unit
  },
  caption: {
    textAlign: 'center',
    color: theme.palette.primary1.contrastText,
    fontWeight: 'bold',
    ...theme.typography.caption
  }
})

export default Star
