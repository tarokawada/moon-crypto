import React from 'react'
import { View, Text } from 'react-native'
import SecondaryNav from './SecondaryNav'

class InputTransactions extends React.Component{
  static navigationOptions = {
    header: null,
  }
  render() {
    const { goBack } = this.props.navigation
    const { symbol } = this.props.navigation.state.params
    return(
      <View>
        <SecondaryNav title={symbol} goBack={() => goBack()}/>
      </View>
    )
  }
}

export default InputTransactions