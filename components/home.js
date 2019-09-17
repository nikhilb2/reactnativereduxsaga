import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import theme from '../src/theme'

const Home = (props) => {

  return(
    <View style={styles.home}>
      <FontAwesome name='home' size={35} />
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.spacing.unit * 5,
    padding: theme.spacing.unit * .8
  }
});


export default Home
