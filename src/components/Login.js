import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

import TitledInput from './TitledInput'

import { login } from '../actions/auth'

class Login extends React.Component {
    state = { email: '', password: '' };
    static navigationOptions = {
			header: null,
    }
    render() {
			const { navigate } = this.props.navigation
			return (
				<View style={styles.mainContainer}>
					<View style={styles.logoContainer}>
						<Image style={{}} source={require('../assets/images/MoonLogo.png')}/>
					</View>
					<View style={styles.formContainer}>
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
						<Button title="Log in" 
							onPress={() => this.props.login(this.state.email, this.state.password)}
							backgroundColor='#ed7e64'
							textStyle={{color:'white', fontFamily:'agane65'}}
							borderRadius={3}
							containerViewStyle={{width:'100%', marginBottom: 6}}
						/>
						<Button title="Sign Up" 
							onPress={() => navigate('SignUp')}
							backgroundColor='#d8d8d8'
							textStyle={{color:'#4f4f4f', fontFamily:'agane65'}}
							borderRadius={3}
							containerViewStyle={{width:'100%'}}
						/>
        	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
    {
			mainContainer: { flex:1 },
			logoContainer: { flex:1, padding:16, justifyContent: 'flex-end', alignItems:'center', backgroundColor:'#2d2d2d' },
			formContainer: { flex:2, padding:16, justifyContent: 'center', alignItems:'center', backgroundColor:'#2d2d2d' }
    }
  )
const mapDispatchToProps = (dispatch) => {
    return {
        login: (usr, pwd) => {
            dispatch(login(usr,pwd))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)