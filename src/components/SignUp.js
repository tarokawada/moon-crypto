import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import TitledInput from './TitledInput'

import { signUp } from '../actions/auth'

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  }
  state={
    email: '',
    password: '',
    passwordAgain: ''
  }
  signUp (email, password, passwordAgain){
    if(password === passwordAgain) {
      this.props.sign(email, password)
    } else {
      console.log('Password does not match')
    }
  }
  render() {
    return(
      <View style={{flex:1, padding:16, justifyContent: 'center', backgroundColor:'#2d2d2d'}}>
        <TitledInput 
          placeholder='Username'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TitledInput 
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TitledInput 
          autoCorrect={false}
          placeholder='Reenter Password'
          secureTextEntry
          value={this.state.passwordAgain}
          onChangeText={passwordAgain => this.setState({ passwordAgain })}
        />
        <Button title="To The Moon!" 
          onPress={() => this.signUp(this.state.email, this.state.password, this.state.passwordAgain)}
          backgroundColor='#ed7e64'
          textStyle={{color:'white', fontFamily:'agane65'}}
          borderRadius={3}
          containerViewStyle={{width:'100%', marginLeft:0, marginBottom: 6}}
        />
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sign: (usr, pwd) => {
      dispatch(signUp(usr, pwd))
    }
  }
}
export default connect(null,mapDispatchToProps)(SignUp)