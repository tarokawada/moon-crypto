import React from 'react'
import { View, List, FlatList, ListItem } from 'react-native'
import { connect } from 'react-redux'
import SecondaryNav from './SecondaryNav'
import ListWithSub from './ListWithSub'
import { addToWatchList, removeFromWatchList } from '../actions/crypto'

class CryptoList extends React.Component {
  static navigationOptions = {
    header: null
  }
  onSwitch = (symbol, id) => {
    const watchList = this.props.watchList
    const listItem = {
      symbol,
      id
    }
    watchList.includes(listItem)
      ? this.props.removeFromWatchList(id) 
      : this.props.addToWatchList(symbol, id)
  }
  render(){
    const { goBack } = this.props.navigation
    return (
      <View style={{flex: 1}}>
        <SecondaryNav title='Add New' goBack={() => goBack()}/>
        <ListWithSub list={this.props.cryptoList} onSwitch={this.onSwitch} watchList={this.props.watchList}/>
      </View>
    )
  }
}

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
