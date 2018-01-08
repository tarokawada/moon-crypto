import React from 'react'
import { Text, 
        View,
        ScrollView } from 'react-native'
import { connect } from 'react-redux'
import NavBar from './NavBar.js'
import MainCard from './MainCard'
import PriceCard from './PriceCard'

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render(){
    const { navigate } = this.props.navigation
    const watchList = this.props.watchList
    return (
      <View style={{flex:1}}>
        <NavBar addNew={() => navigate('AddNew')}/>
        <ScrollView style={{ paddingLeft:16, paddingRight:16 }} contentContainerStyle={{paddingVertical: 20}}>
          <MainCard />
          {
            watchList.map(coin => {
              return <PriceCard 
                symbol={coin}
                key={coin}
                transactionPage={() => navigate('InputTransactions')}
              />
            })
          }
        </ScrollView>
      </View>     
    )
  }
}

function mapStateToProps(state) {
  return {
    watchList: state.crypto.watchList
  }
}

export default connect(mapStateToProps)(Home)