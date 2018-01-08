import React from 'react'
import { connect } from 'react-redux'
import { AppLoading, Font } from 'expo'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import { getCryptoList } from '../actions/crypto'

import Home from './Home'
import CryptoList from './CryptoList'
import InputTransactions from './InputTransactions'

const Navigation = StackNavigator({
  Home: { screen: Home },
  AddNew: { screen: CryptoList },
  InputTransactions: {screen: InputTransactions}
})

class Application extends React.Component {
  state = {
    fontLoaded: false
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
    if (!this.state.fontLoaded) {
      return <Text>Loading...</Text>
    }
    return(
      <View style={styles.MainContainer}>
        <Navigation/>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
  MainContainer: 
  {
    flex: 1,
    // Set content's horizontal alignment.
    // Set hex color code here.
    backgroundColor: '#FFEB3B', 
  }   
})

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto.list
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