import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import theme from '../src/theme'
import InputField from '../components/inputfield'
import Button from '../components/button'
import { restoreSession, signup } from "../src/profile/actions"
import { connect } from "react-redux"

class FirstTimeScreen extends Component {

  state = {
  name: null,
  user: null
}

  async componentDidMount() {
    const { restoreSession, navigation } = this.props
    await restoreSession()
    navigation.navigate('Main')
  }

  render() {
    const { navigation } = this.props
    const { name } = this.state
    return(
      <View>
        <View style={styles.enterName}>
          <InputField
          value={name}
          onChange={text => this.setState({ name: text })}
          label="Name"
          placeholder="Enter your name bruh!"
          style={styles.inputField}
          autoCapitalize="none"
          />
          <Button
          caption='Continue'
          style={styles.button}
          onClick={() => {
            if (name) {
              login({
                user:name,
                currentText: 0
              })
              navigation.navigate("Main")
            } else {
              Alert.alert("Error", "Please enter your name")
            }
          }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: theme.spacing.unit,
    margin: theme.spacing.unit,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  inputField: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  welcome: {
    color: '#E85886',
    ...theme.typography.extraLarge,
    textAlign: 'center',
    fontSize: 90
  },
  first: {
    ...theme.typography.h1,
        color: '#E85886',
        textAlign: 'center',
  },
  second: {
    ...theme.typography.h1,
        color: '#E85886',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50
  },
  textMargin: {
    margin: theme.spacing.unit
  }
  ,
  enterName: {
    margin: theme.spacing.unit,

  }
})


const mapStateToProps = state => ({
  user: state.profileReducer.user,
  authorized: state.profileReducer.authorized,
})

const mapDispatchToProps = dispatch => ({
  restoreSession: () => dispatch(restoreSession()),
  signup: (name, origin, gender) => dispatch(signup(name, origin, gender)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstTimeScreen)
