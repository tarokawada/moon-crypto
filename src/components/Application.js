import React from 'react'
import { connect } from 'react-redux'
import { AppLoading, Font } from 'expo'
import { View, StyleSheet, Text, Platform, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { getCryptoList } from '../actions/crypto'

import Home from './Home'
import CryptoList from './CryptoList'
import InputTransactions from './InputTransactions'
import Login from './Login'
import SignUp from './SignUp'
import NavigationDrawer from './NavigationDrawer'
import Loading from './Loading'

const MainApp = StackNavigator({
  Home: { screen: Home },
  AddNew: { screen: CryptoList },
  InputTransactions: {screen: InputTransactions}
})
const MainAppWithDrawer = DrawerNavigator({
    Home: { screen: MainApp },
  }, 
  {
    contentComponent: NavigationDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
)
const LoginNavigator = StackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp }
})

class Application extends React.Component {
  state = {
    fontLoaded: false,
    happy: true
  }
  componentWillMount() {
    this._loadAssetsAsync()
    this.props.getList()
  }
  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      aganelight: require('../assets/fonts/Aganelight.ttf'),
      agane55: require('../assets/fonts/Agane55.ttf'),
      agane65: require('../assets/fonts/Agane65.ttf'),
      agane75: require('../assets/fonts/Agane75.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded || !this.props.cryptoList) {
      return <Loading />
    }
    if (!this.props.userObject) {
      return <LoginNavigator/>
    }
    return(
      <View style={styles.MainContainer}>
        <MainAppWithDrawer/>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
  MainContainer: 
  {
    flex: 1
    //paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
  }   
})

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto.list,
    userObject: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getCryptoList())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)