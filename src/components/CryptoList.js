import React from 'react'
import { View, List, FlatList, ListItem, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SecondaryNav from './SecondaryNav'
import ListWithSub from './ListWithSub'
import { addToWatchList, removeFromWatchList } from '../actions/crypto'
import _ from 'lodash'
class CryptoList extends React.Component {
  static navigationOptions = {
    header: null
  }
  onSwitch = (symbol) => {
    const watchList = this.props.watchList
    _.has(watchList, symbol)
      ? this.props.removeFromWatchList(symbol) 
      : this.props.addToWatchList(symbol)
  }
  render(){
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <SecondaryNav title='Add New' goBack={() => goBack()}/>
        <ListWithSub list={this.props.cryptoList} onSwitch={this.onSwitch} watchList={this.props.watchList}/>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: 
      {
        flex: 1
      }   
  }
)

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto.list,
    watchList: state.crypto.watchList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToWatchList: (id) => {
      dispatch(addToWatchList(id))
    },
    removeFromWatchList: (id) => {
      dispatch(removeFromWatchList(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList)
